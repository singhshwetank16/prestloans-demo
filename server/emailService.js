import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.office365.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER || 'info@prestloans.com';
const SMTP_PASS = process.env.SMTP_PASS || 'Prestloans2026@#';
const SMTP_TO = process.env.SMTP_TO || 'info@prestloans.com';

// 1. Create primary transporter (Office 365)
const primaryTransporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
});

// 2. Fallback transporter (cPanel/domain mail server mail.prestloans.com)
const fallbackTransporter = nodemailer.createTransport({
  host: 'mail.prestloans.com',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendInquiryEmail(inquiry) {
  const { referenceId, loanAmount, loanProduct, mobileNumber, inquiryDate, applicantIp } = inquiry;

  const mailSubject = `New Loan Inquiry [${referenceId}]: ${loanProduct} - ${loanAmount}`;
  
  const textBody = `
==================================================
 PREST LOANS - ONLINE INSTANT LOAN INQUIRY
 Lord Krishna Financial Services Ltd (RBI Regd NBFC)
==================================================

Reference ID      : ${referenceId}
Loan Product      : ${loanProduct}
Requested Amount  : ${loanAmount}
Applicant Mobile  : +91 ${mobileNumber}
Submission Time   : ${inquiryDate || new Date().toLocaleString('en-IN')}
Applicant IP      : ${applicantIp || 'N/A'}

Action Required:
Please assign an executive to contact the applicant within 4 business hours.
Official Website: https://www.prestloans.com
`;

  const htmlBody = `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #70146e 0%, #f05a28 100%); padding: 24px 28px; color: #ffffff;">
    <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">PREST LOANS®</h1>
    <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Lord Krishna Financial Services Ltd • RBI Registered NBFC</p>
  </div>
  <div style="padding: 28px;">
    <h2 style="margin: 0 0 16px; font-size: 18px; color: #0f172a;">New Loan Quote Inquiry Received</h2>
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Reference ID:</td>
          <td style="padding: 8px 0; font-weight: 800; color: #70146e;">${referenceId}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Loan Product:</td>
          <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${loanProduct}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Requested Amount:</td>
          <td style="padding: 8px 0; font-weight: 800; color: #059669; font-size: 16px;">${loanAmount}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Applicant Mobile:</td>
          <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">+91 ${mobileNumber}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Submission Date:</td>
          <td style="padding: 8px 0; color: #334155;">${inquiryDate || new Date().toLocaleString('en-IN')}</td>
        </tr>
      </table>
    </div>
    <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 4px; font-size: 13px; color: #1e40af;">
      <strong>Action Required:</strong> Please verify customer eligibility and assign a loan manager within 4 business hours.
    </div>
  </div>
  <div style="background: #f1f5f9; padding: 16px 28px; font-size: 12px; color: #64748b; text-align: center;">
    This is an automated notification from Prest Loans Official Portal (prestloans.com).
  </div>
</div>
`;

  const mailOptions = {
    from: `"Prest Loans Official Portal" <${SMTP_USER}>`,
    to: SMTP_TO,
    subject: mailSubject,
    text: textBody,
    html: htmlBody,
  };

  // Attempt 1 with primary transporter
  try {
    const info = await primaryTransporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId, provider: 'primary' };
  } catch (err1) {
    console.warn(`[NodeMailer] Primary SMTP failed (${err1.message}), attempting fallback...`);
    // Attempt 2 with fallback transporter
    try {
      const info2 = await fallbackTransporter.sendMail(mailOptions);
      return { success: true, messageId: info2.messageId, provider: 'fallback' };
    } catch (err2) {
      console.error(`[NodeMailer] All SMTP attempts failed: ${err2.message}`);
      throw new Error(`SMTP dispatch failed: ${err2.message}`);
    }
  }
}
