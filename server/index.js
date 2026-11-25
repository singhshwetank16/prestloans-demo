import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendInquiryEmail } from './emailService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure inquiries log directory exists
const logDir = path.join(__dirname, 'data');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}
const logFile = path.join(logDir, 'inquiries_log.json');

// --- API ROUTES ---

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'Prest Loans Node.js Backend',
    timestamp: new Date().toISOString(),
  });
});

// 2. Loan Quote Inquiry submission
app.post('/api/send-inquiry', async (req, res) => {
  try {
    const { loanAmount, loanProduct, mobileNumber, referenceId, inquiryDate } = req.body;

    const refNum = referenceId || `PL-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionDate = inquiryDate || new Date().toLocaleString('en-IN');
    const applicantIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    const entry = {
      referenceId: refNum,
      loanAmount: loanAmount || '₹5,00,000',
      loanProduct: loanProduct || 'Business Loan',
      mobileNumber: mobileNumber || '',
      inquiryDate: submissionDate,
      applicantIp,
      createdAt: new Date().toISOString(),
    };

    // 1. Always log to local disk so no lead is ever lost
    try {
      fs.appendFileSync(logFile, JSON.stringify(entry) + '\n', 'utf-8');
    } catch (fsErr) {
      console.error('[Inquiry Log Error]:', fsErr.message);
    }

    // 2. Dispatch email via Nodemailer
    let mailSent = false;
    let mailError = '';
    let provider = '';

    try {
      const emailResult = await sendInquiryEmail(entry);
      mailSent = emailResult.success;
      provider = emailResult.provider;
      console.log(`[Email Sent] Inquiry #${refNum} delivered via ${provider}`);
    } catch (mailErr) {
      mailSent = false;
      mailError = mailErr.message;
      console.warn(`[Email Warning] Inquiry #${refNum} logged on server, but email delivery deferred: ${mailErr.message}`);
    }

    return res.status(200).json({
      success: true,
      message: mailSent ? 'Inquiry received and email dispatched to info@prestloans.com' : 'Inquiry logged successfully on server',
      referenceId: refNum,
      mailSent,
      mailError: mailError || undefined,
      provider: provider || undefined,
    });
  } catch (error) {
    console.error('[API Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry',
      error: error.message,
    });
  }
});

// --- SERVE PRODUCTION REACT SPA ---
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));

  // SPA fallback for all non-API routes
  app.use((req, res) => {
    const indexPath = path.join(distDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('React build not found. Run npm run build first.');
    }
  });
}

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 Prest Loans Node.js Server is running!`);
  console.log(`  🌐 Local:            http://localhost:${PORT}`);
  console.log(`  📧 Mail Target:      info@prestloans.com`);
  console.log(`  📁 React Dist:       ${distDir}`);
  console.log(`======================================================\n`);
});
