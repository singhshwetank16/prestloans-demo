/**
 * PREST LOANS (Lord Krishna Financial Services Ltd)
 * Grievance Redressal Mechanism Interactive Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initGrmForm();
  initGrmFaqs();
});

/* ==========================================================================
   1. ONLINE GRIEVANCE REGISTRATION FORM
   ========================================================================== */
function initGrmForm() {
  const form = document.getElementById('grmComplaintForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('grm-name')?.value.trim();
    const phone = document.getElementById('grm-phone')?.value.trim();
    const email = document.getElementById('grm-email')?.value.trim();
    const loanId = document.getElementById('grm-loan-id')?.value.trim();
    const category = document.getElementById('grm-category')?.value;
    const desc = document.getElementById('grm-desc')?.value.trim();

    if (!name || !phone || !email || !category || !desc) {
      alert('Please fill in all mandatory fields before submitting.');
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, '').slice(-10))) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Generate unique Grievance Reference Ticket
    const ticketId = 'GRM-' + Math.floor(100000 + Math.random() * 900000);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Ticket...';

    setTimeout(() => {
      // Show confirmation dialog / modal
      showGrmSuccessModal(ticketId, name, email);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 900);
  });
}

function showGrmSuccessModal(ticketId, name, email) {
  let modal = document.getElementById('grm-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'grm-success-modal';
    modal.className = 'modal-backdrop active';
    modal.innerHTML = `
      <div class="modal-box" style="max-width: 500px; text-align: center; padding: 36px 28px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #ecfdf5; color: #059669; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 16px;">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3 style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Grievance Registered Successfully</h3>
        <p style="color: #64748b; font-size: 0.9375rem; margin-bottom: 18px;">
          Your formal complaint has been logged with Prest Loans Primary Grievance Cell.
        </p>
        <div style="background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 12px; padding: 14px; margin-bottom: 20px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 0.5px; display: block;">Your Grievance Ticket Number</span>
          <strong id="grm-modal-ticket" style="font-size: 1.35rem; color: var(--primary-purple); letter-spacing: 1px;"></strong>
        </div>
        <p style="font-size: 0.8125rem; color: #475569; margin-bottom: 24px; text-align: left; line-height: 1.5;">
          <i class="fa-solid fa-clock" style="color: var(--primary-purple); margin-right: 6px;"></i>
          <strong>Resolution Time Limit:</strong> You will receive a written acknowledgment within <strong>2 business days</strong> and a full resolution within <strong>14 days</strong> as mandated by RBI.
        </p>
        <button type="button" class="btn-primary" style="width: 100%;" onclick="document.getElementById('grm-success-modal').classList.remove('active')">
          Close &amp; Track Status
        </button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const ticketElem = modal.querySelector('#grm-modal-ticket');
  if (ticketElem) ticketElem.textContent = ticketId;
  modal.classList.add('active');
}

/* ==========================================================================
   2. FAQ ACCORDION HANDLER
   ========================================================================== */
function initGrmFaqs() {
  const faqItems = document.querySelectorAll('.grm-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.grm-faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
