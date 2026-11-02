import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';

export const Modals: React.FC = () => {
  // Policy Modal
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyData, setPolicyData] = useState({ title: '', date: '', content: '' });

  // Loan App Modal
  const [loanAppOpen, setLoanAppOpen] = useState(false);
  const [loanStep, setLoanStep] = useState(1);
  const [generatedAppId, setGeneratedAppId] = useState('');
  const [loanForm, setLoanForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    loanProduct: 'skill',
    loanAmount: '100000',
    pan: '',
    bizType: '',
    turnover: ''
  });

  // Login Modal
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginTab, setLoginTab] = useState<'customer' | 'partner' | 'employee'>('customer');

  // Track Status Modal
  const [trackOpen, setTrackOpen] = useState(false);
  const [trackQuery, setTrackQuery] = useState('');
  const [trackResult, setTrackResult] = useState<any>(null);

  // Lightbox Modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({ src: '', caption: '' });

  // Career Modal
  const [careerOpen, setCareerOpen] = useState(false);
  const [careerRole, setCareerRole] = useState('Manager – Credit (Products)');
  const [careerStep, setCareerStep] = useState<'form' | 'otp' | 'success'>('form');

  // Expose window functions for compatibility with buttons
  useEffect(() => {
    (window as any).openPolicyModal = (policyId: string) => {
      // Look up policy if defined in policies or fallback
      const policiesMap: Record<string, { title: string; date: string; content: string }> = {
        'terms-and-conditions': {
          title: 'Terms & Conditions',
          date: 'Last Updated: October 2026',
          content: '<p>Standard terms and conditions governing loan disbursement and digital servicing at Prest Loans.</p>'
        },
        'fair-practices-code': {
          title: 'Fair Practices Code (FPC)',
          date: 'Adopted: May 2017 | Revised: 2026',
          content: '<p>Prest Loans commits to fair lending practices, non-coercive recovery, and full transparent pricing.</p>'
        }
      };
      const found = policiesMap[policyId] || {
        title: policyId.replace(/-/g, ' ').toUpperCase(),
        date: 'Statutory Document',
        content: '<p>Please refer to our statutory policies section or download the official certified PDF.</p>'
      };
      setPolicyData(found);
      setPolicyOpen(true);
    };

    (window as any).closePolicyModal = () => setPolicyOpen(false);

    (window as any).openQuickApplyModal = (prod?: string) => {
      if (prod) setLoanForm(prev => ({ ...prev, loanProduct: prod }));
      setLoanStep(1);
      setLoanAppOpen(true);
    };

    (window as any).closeQuickApplyModal = () => setLoanAppOpen(false);

    (window as any).openLoginModal = (tab?: 'customer' | 'partner' | 'employee') => {
      if (tab) setLoginTab(tab);
      setLoginOpen(true);
    };

    (window as any).closeLoginModal = () => setLoginOpen(false);

    (window as any).openTrackStatusModal = () => {
      setTrackResult(null);
      setTrackOpen(true);
    };

    (window as any).closeTrackStatusModal = () => setTrackOpen(false);

    (window as any).openLightbox = (src: string, caption?: string) => {
      setLightboxData({ src, caption: caption || '' });
      setLightboxOpen(true);
    };

    (window as any).closeLightbox = () => setLightboxOpen(false);

    (window as any).openCareerApplyModal = (role?: string) => {
      if (role) setCareerRole(role);
      setCareerStep('form');
      setCareerOpen(true);
    };

    (window as any).closeCareerApplyModal = () => setCareerOpen(false);
  }, []);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackQuery) return;
    setTrackResult({
      appId: trackQuery.toUpperCase().startsWith('PL-') ? trackQuery.toUpperCase() : `PL-${Math.floor(100000 + Math.random() * 900000)}`,
      product: 'Digital Credit Facility',
      status: 'Application Received & In Process',
      statusClass: 'under-review',
      remarks: 'Your loan application is under underwriting verification. Our team will contact you within 24 working hours.'
    });
  };

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `PL-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedAppId(newId);
    setLoanStep(3);
  };

  return (
    <>
      {/* 1. Policy Viewer Modal */}
      {policyOpen && (
        <div className="modal-backdrop active" id="policy-modal" onClick={() => setPolicyOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <h3 className="modal-title">{policyData.title}</h3>
                <span className="modal-date">{policyData.date}</span>
              </div>
              <button className="modal-close-btn" onClick={() => setPolicyOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: policyData.content }}></div>
          </div>
        </div>
      )}

      {/* 2. Loan Application Modal */}
      {loanAppOpen && (
        <div className="modal-backdrop active" id="loan-app-modal" onClick={() => setLoanAppOpen(false)}>
          <div className="modal-box modal-box-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <h3 className="modal-title">Quick Loan Application</h3>
                <span className="modal-date">Fast Digital Approval • RBI Registered NBFC</span>
              </div>
              <button className="modal-close-btn" onClick={() => setLoanAppOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="app-steps-indicator" style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <span className={`step-badge ${loanStep >= 1 ? 'active' : ''}`} style={{ flex: 1, padding: '8px', textAlign: 'center', background: loanStep >= 1 ? '#f05a28' : '#f1f5f9', color: loanStep >= 1 ? '#fff' : '#64748b', borderRadius: '8px', fontWeight: 600 }}>1. Applicant Info</span>
                <span className={`step-badge ${loanStep >= 2 ? 'active' : ''}`} style={{ flex: 1, padding: '8px', textAlign: 'center', background: loanStep >= 2 ? '#f05a28' : '#f1f5f9', color: loanStep >= 2 ? '#fff' : '#64748b', borderRadius: '8px', fontWeight: 600 }}>2. Loan Requirements</span>
                <span className={`step-badge ${loanStep >= 3 ? 'active' : ''}`} style={{ flex: 1, padding: '8px', textAlign: 'center', background: loanStep >= 3 ? '#22c55e' : '#f1f5f9', color: loanStep >= 3 ? '#fff' : '#64748b', borderRadius: '8px', fontWeight: 600 }}>3. Reference</span>
              </div>

              {loanStep === 1 && (
                <form onSubmit={(e) => { e.preventDefault(); setLoanStep(2); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Full Name *</label>
                      <input type="text" className="form-control" required value={loanForm.fullName} onChange={(e) => setLoanForm({ ...loanForm, fullName: e.target.value })} placeholder="As per PAN card" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Mobile Number *</label>
                      <input type="tel" className="form-control" required pattern="[0-9]{10}" value={loanForm.phone} onChange={(e) => setLoanForm({ ...loanForm, phone: e.target.value })} placeholder="10-digit Mobile" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Email Address *</label>
                      <input type="email" className="form-control" required value={loanForm.email} onChange={(e) => setLoanForm({ ...loanForm, email: e.target.value })} placeholder="you@domain.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Current City *</label>
                      <input type="text" className="form-control" required value={loanForm.city} onChange={(e) => setLoanForm({ ...loanForm, city: e.target.value })} placeholder="e.g. Delhi NCR" />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>Next: Loan Details →</button>
                  </div>
                </form>
              )}

              {loanStep === 2 && (
                <form onSubmit={handleLoanSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Loan Product *</label>
                      <select className="form-control" value={loanForm.loanProduct} onChange={(e) => setLoanForm({ ...loanForm, loanProduct: e.target.value })}>
                        {siteConfig.loanProducts.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Desired Loan Amount (₹) *</label>
                      <input type="number" className="form-control" required min="10000" max="5000000" value={loanForm.loanAmount} onChange={(e) => setLoanForm({ ...loanForm, loanAmount: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>PAN Number</label>
                      <input type="text" className="form-control" maxLength={10} value={loanForm.pan} onChange={(e) => setLoanForm({ ...loanForm, pan: e.target.value.toUpperCase() })} placeholder="ABCDE1234F" />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" className="btn-secondary" onClick={() => setLoanStep(1)} style={{ padding: '10px 20px' }}>← Back</button>
                    <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>Submit Digital Application</button>
                  </div>
                </form>
              )}

              {loanStep === 3 && (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '16px' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Application Registered!</h3>
                  <p style={{ color: '#64748b', marginBottom: '16px' }}>Your digital application reference number is:</p>
                  <div style={{ display: 'inline-block', background: '#f8fafc', padding: '12px 28px', borderRadius: '12px', border: '2px dashed #cbd5e1', fontSize: '1.4rem', fontWeight: 800, color: '#f05a28', letterSpacing: '1px', marginBottom: '20px' }}>
                    {generatedAppId}
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Our lending specialist will reach out within 24 hours to proceed with digital documentation.</p>
                  <button className="btn-primary" onClick={() => setLoanAppOpen(false)} style={{ marginTop: '20px', padding: '10px 28px' }}>Done</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Login Modal */}
      {loginOpen && (
        <div className="modal-backdrop active" id="login-modal" onClick={() => setLoginOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <h3 className="modal-title">Prest Loans Portal Login</h3>
                <span className="modal-date">Secure NBFC Access</span>
              </div>
              <button className="modal-close-btn" onClick={() => setLoginOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <button
                  type="button"
                  style={{ flex: 1, padding: '10px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600, borderBottom: loginTab === 'customer' ? '3px solid #f05a28' : 'none', color: loginTab === 'customer' ? '#f05a28' : '#64748b' }}
                  onClick={() => setLoginTab('customer')}
                >
                  Borrower
                </button>
                <button
                  type="button"
                  style={{ flex: 1, padding: '10px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600, borderBottom: loginTab === 'partner' ? '3px solid #f05a28' : 'none', color: loginTab === 'partner' ? '#f05a28' : '#64748b' }}
                  onClick={() => setLoginTab('partner')}
                >
                  Partner / DSA
                </button>
                <button
                  type="button"
                  style={{ flex: 1, padding: '10px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 600, borderBottom: loginTab === 'employee' ? '3px solid #f05a28' : 'none', color: loginTab === 'employee' ? '#f05a28' : '#64748b' }}
                  onClick={() => setLoginTab('employee')}
                >
                  Employee
                </button>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Redirecting to secure SSO gateway...'); setLoginOpen(false); }}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    {loginTab === 'customer' ? 'Registered Mobile Number' : loginTab === 'partner' ? 'Partner ID / Email' : 'Employee ID'}
                  </label>
                  <input type="text" className="form-control" required placeholder={loginTab === 'customer' ? 'Enter 10-digit mobile' : 'Enter registered ID'} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Password / OTP</label>
                  <input type="password" className="form-control" required placeholder="Enter password or OTP" />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px' }}>
                  Login to {loginTab === 'customer' ? 'Borrower' : loginTab === 'partner' ? 'Partner' : 'Staff'} Portal
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 4. Track Status Modal */}
      {trackOpen && (
        <div className="modal-backdrop active" id="track-status-modal" onClick={() => setTrackOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <h3 className="modal-title">Track Loan Application Status</h3>
                <span className="modal-date">Real-time Digital Verification</span>
              </div>
              <button className="modal-close-btn" onClick={() => setTrackOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleTrackSubmit}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter App ID (e.g. PL-100234) or Mobile"
                    value={trackQuery}
                    onChange={(e) => setTrackQuery(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '10px 20px', whiteSpace: 'nowrap' }}>
                    Track Now
                  </button>
                </div>
              </form>

              {trackResult && (
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 700, color: '#1e293b' }}>Application Ref: {trackResult.appId}</span>
                    <span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {trackResult.status}
                    </span>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <strong>Product:</strong> {trackResult.product}
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {trackResult.remarks}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-backdrop active" id="gallery-lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '85vw', maxHeight: '85vh', textAlign: 'center' }}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)} style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: '#fff', fontSize: '1.8rem', cursor: 'pointer' }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={lightboxData.src} alt={lightboxData.caption} style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
            {lightboxData.caption && (
              <div style={{ color: '#ffffff', marginTop: '14px', fontWeight: 700, fontSize: '1.1rem' }}>
                {lightboxData.caption}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. Career Application Modal */}
      {careerOpen && (
        <div className="career-modal-backdrop active" id="careerApplyModal" onClick={() => setCareerOpen(false)}>
          <div className="career-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="career-modal-header">
              <div className="career-modal-title">Apply for Position</div>
              <div className="career-modal-sub" id="applyModalRoleTitle">{careerRole}</div>
              <button className="career-modal-close" onClick={() => setCareerOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="career-modal-body">
              {careerStep === 'form' && (
                <form onSubmit={(e) => { e.preventDefault(); setCareerStep('otp'); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Full Name *</label>
                      <input type="text" className="form-control" required placeholder="Your full name" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Email Address *</label>
                      <input type="email" className="form-control" required placeholder="you@domain.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Mobile Number *</label>
                      <input type="tel" className="form-control" required pattern="[0-9]{10}" placeholder="10-digit number" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Relevant Experience *</label>
                      <input type="text" className="form-control" required placeholder="e.g. 5 Years in Credit" />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Resume / CV Link</label>
                    <input type="text" className="form-control" placeholder="LinkedIn profile or Google Drive resume link" />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px' }}>
                    Proceed to Mobile OTP Verification →
                  </button>
                </form>
              )}

              {careerStep === 'otp' && (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <p style={{ color: '#475569', marginBottom: '16px' }}>Enter the 4-digit verification code sent to your mobile:</p>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
                    <input type="text" maxLength={1} defaultValue="4" style={{ width: '45px', height: '45px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                    <input type="text" maxLength={1} defaultValue="9" style={{ width: '45px', height: '45px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                    <input type="text" maxLength={1} defaultValue="2" style={{ width: '45px', height: '45px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                    <input type="text" maxLength={1} defaultValue="1" style={{ width: '45px', height: '45px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, border: '1px solid #cbd5e1', borderRadius: '8px' }} />
                  </div>
                  <button className="btn-primary" onClick={() => setCareerStep('success')} style={{ width: '100%', padding: '12px' }}>
                    Verify & Submit Application
                  </button>
                </div>
              )}

              {careerStep === 'success' && (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '3rem', marginBottom: '14px' }}></i>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Application Submitted!</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '20px' }}>
                    Thank you! Your profile for <strong>{careerRole}</strong> has been received by our Talent Acquisition Team.
                  </p>
                  <button className="btn-primary" onClick={() => setCareerOpen(false)} style={{ padding: '10px 24px' }}>
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
