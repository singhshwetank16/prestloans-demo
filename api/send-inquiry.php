<?php
/**
 * PREST LOANS - INQUIRY EMAIL DISPATCH SCRIPT
 * Target Email: info@prestloans.com
 * Brand: Lord Krishna Financial Services Ltd (RBI Regd NBFC)
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight CORS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. POST required.']);
    exit();
}

// Read JSON input or POST form data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || !is_array($data)) {
    $data = $_POST;
}

$loanAmount = isset($data['loanAmount']) ? trim(strip_tags($data['loanAmount'])) : '';
$loanProduct = isset($data['loanProduct']) ? trim(strip_tags($data['loanProduct'])) : 'Business Loan';
$mobileNumber = isset($data['mobileNumber']) ? trim(strip_tags($data['mobileNumber'])) : '';
$referenceId = isset($data['referenceId']) ? trim(strip_tags($data['referenceId'])) : ('PL-INQ-' . rand(100000, 999999));
$submittedAt = isset($data['inquiryDate']) ? trim(strip_tags($data['inquiryDate'])) : date('d/m/Y h:i A');

if (empty($loanAmount) || empty($mobileNumber)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Loan amount and mobile number are required.']);
    exit();
}

// 1. SAVE TO LOCAL BACKUP LOG (So no inquiry is ever lost even if mail fails)
$logEntry = [
    'refId' => $referenceId,
    'amount' => $loanAmount,
    'product' => $loanProduct,
    'mobile' => $mobileNumber,
    'date' => $submittedAt,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

$logFile = __DIR__ . '/inquiries_log.json';
$existingLogs = [];
if (file_exists($logFile)) {
    $content = @file_get_contents($logFile);
    if ($content) {
        $existingLogs = json_decode($content, true) ?: [];
    }
}
$existingLogs[] = $logEntry;
@file_put_contents($logFile, json_encode($existingLogs, JSON_PRETTY_PRINT));

// 2. SEND EMAIL TO info@prestloans.com
$to = 'info@prestloans.com';
$subject = "New Loan Quote Inquiry [{$referenceId}]: {$loanProduct} - {$loanAmount}";

// HTML Email Template
$message = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: linear-gradient(135deg, #70146e 0%, #f05a28 100%); color: #ffffff; padding: 20px 24px; }
    .header h2 { margin: 0; font-size: 20px; }
    .body { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; }
    th, td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; text-align: left; font-size: 14px; }
    th { background: #f8fafc; color: #64748b; width: 38%; }
    td { color: #0f172a; font-weight: 600; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
    .badge { display: inline-block; background: #ecfdf5; color: #059669; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>Prest Loans - New Online Loan Inquiry</h2>
      <p style='margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;'>Lord Krishna Financial Services Ltd (RBI Regd NBFC)</p>
    </div>
    <div class='body'>
      <p>A prospective customer has submitted an instant loan quote inquiry on the website portal:</p>
      <table>
        <tr>
          <th>Reference ID</th>
          <td><span style='color: #70146e; font-weight: bold;'>{$referenceId}</span></td>
        </tr>
        <tr>
          <th>Loan Product</th>
          <td>{$loanProduct}</td>
        </tr>
        <tr>
          <th>Required Amount</th>
          <td><span style='color: #f05a28; font-size: 16px; font-weight: bold;'>{$loanAmount}</span></td>
        </tr>
        <tr>
          <th>Applicant Mobile</th>
          <td><a href='tel:{$mobileNumber}' style='color: #2563eb;'>+91 {$mobileNumber}</a></td>
        </tr>
        <tr>
          <th>Submitted On</th>
          <td>{$submittedAt}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td><span class='badge'>NEW INQUIRY</span></td>
        </tr>
      </table>
      <p style='margin-top: 20px; font-size: 13px; color: #64748b;'>
        Please connect with the applicant within 4 business hours to proceed with document collection and digital eligibility verification.
      </p>
    </div>
    <div class='footer'>
      Prest Loans Web Inquiry System • Lord Krishna Financial Services Ltd
    </div>
  </div>
</body>
</html>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Prest Loans Web <noreply@prestloans.com>';
$headers[] = 'Reply-To: info@prestloans.com';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $message, implode("\r\n", $headers));

echo json_encode([
    'success' => true,
    'message' => 'Inquiry logged and sent to info@prestloans.com',
    'referenceId' => $referenceId,
    'mailSent' => (bool)$mailSent
]);
