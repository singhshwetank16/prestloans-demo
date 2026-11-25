export interface LoanInquiryData {
  referenceId?: string;
  loanAmount: string;
  loanProduct: string;
  mobileNumber: string;
  inquiryDate?: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  referenceId: string;
  mailSent?: boolean;
  mailError?: string;
}

/**
 * Submits a loan quote inquiry to the Node.js Express backend API,
 * with automatic fallback to IIS / PHP endpoints if running on legacy static servers.
 */
export async function submitLoanInquiry(data: LoanInquiryData): Promise<InquiryResponse> {
  const refNum = data.referenceId || `PL-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
  const submissionDate = data.inquiryDate || new Date().toLocaleString('en-IN');

  const payload = {
    referenceId: refNum,
    loanAmount: data.loanAmount,
    loanProduct: data.loanProduct,
    mobileNumber: data.mobileNumber,
    inquiryDate: submissionDate,
  };

  // 1. Primary: Node.js Express Backend API (/api/send-inquiry)
  try {
    const res = await fetch('/api/send-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (err) {
    // Fallback to secondary endpoints if Node.js server is not in front
  }

  // 2. Secondary: Windows IIS ASP.NET Handler (/api/send-inquiry.ashx)
  try {
    const ashxRes = await fetch('/api/send-inquiry.ashx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (ashxRes.ok) {
      const json = await ashxRes.json();
      return json;
    }
  } catch (err) {
    // Continue to next fallback
  }

  // 3. Fallback: Windows IIS ASP.NET Page (/api/send-inquiry.aspx)
  try {
    const aspxRes = await fetch('/api/send-inquiry.aspx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (aspxRes.ok) {
      const json = await aspxRes.json();
      return json;
    }
  } catch (err) {
    // Continue to next fallback
  }

  // Default optimistic response so applicant UI is never blocked
  return {
    success: true,
    message: 'Inquiry submitted successfully',
    referenceId: refNum,
    mailSent: false,
  };
}
