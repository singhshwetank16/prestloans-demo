<%@ WebHandler Language="C#" Class="SendInquiryHandler" %>
using System;
using System.Web;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

public class SendInquiryHandler : IHttpHandler {
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "application/json; charset=utf-8";
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

        if (context.Request.HttpMethod == "OPTIONS") {
            context.Response.StatusCode = 200;
            return;
        }

        string loanAmount = "";
        string loanProduct = "Business Loan";
        string mobileNumber = "";
        string referenceId = "PL-INQ-" + new Random().Next(100000, 999999);
        string inquiryDate = DateTime.Now.ToString("dd/MM/yyyy hh:mm tt");

        try {
            string jsonBody = "";
            using (var reader = new StreamReader(context.Request.InputStream, Encoding.UTF8)) {
                jsonBody = reader.ReadToEnd();
            }

            if (!string.IsNullOrEmpty(jsonBody)) {
                loanAmount = ExtractJsonVal(jsonBody, "loanAmount");
                loanProduct = ExtractJsonVal(jsonBody, "loanProduct");
                mobileNumber = ExtractJsonVal(jsonBody, "mobileNumber");
                string refIn = ExtractJsonVal(jsonBody, "referenceId");
                if (!string.IsNullOrEmpty(refIn)) referenceId = refIn;
            } else {
                loanAmount = context.Request.Form["loanAmount"] ?? "";
                loanProduct = context.Request.Form["loanProduct"] ?? "Business Loan";
                mobileNumber = context.Request.Form["mobileNumber"] ?? "";
            }

            // 1. Log inquiry to secure local file on Windows IIS
            try {
                string logPath = context.Server.MapPath("~/api/inquiries_log.json");
                string entry = string.Format("{{\"refId\":\"{0}\",\"amount\":\"{1}\",\"product\":\"{2}\",\"mobile\":\"{3}\",\"date\":\"{4}\",\"ip\":\"{5}\"}}\r\n",
                    referenceId, loanAmount, loanProduct, mobileNumber, inquiryDate, context.Request.UserHostAddress);
                File.AppendAllText(logPath, entry);
            } catch {}

            // 2. Prepare Email Notification
            string smtpUser = "info@prestloans.com";
            string smtpPass = "Prestloans2026@#";

            MailMessage msg = new MailMessage();
            msg.To.Add("info@prestloans.com");
            msg.From = new MailAddress("info@prestloans.com", "Prest Loans Official Portal");
            msg.Subject = string.Format("New Loan Inquiry [{0}]: {1} - {2}", referenceId, loanProduct, loanAmount);
            msg.Body = string.Format(
                "==================================================\r\n" +
                " PREST LOANS - ONLINE INSTANT LOAN INQUIRY\r\n" +
                " Lord Krishna Financial Services Ltd (RBI Regd NBFC)\r\n" +
                "==================================================\r\n\r\n" +
                "Reference ID      : {0}\r\n" +
                "Loan Product      : {1}\r\n" +
                "Requested Amount  : {2}\r\n" +
                "Applicant Mobile  : +91 {3}\r\n" +
                "Submission Time   : {4}\r\n" +
                "Applicant IP      : {5}\r\n\r\n" +
                "Action Required:\r\n" +
                "Please assign an executive to contact the applicant within 4 business hours.\r\n" +
                "Portal URL: https://www.prestloans.com\r\n",
                referenceId, loanProduct, loanAmount, mobileNumber, inquiryDate, context.Request.UserHostAddress);
            msg.IsBodyHtml = false;

            bool mailSent = false;
            string mailError = "";
            string deliveryRoute = "";

            // Attempt 1: Microsoft 365 / Office 365 (MX 0 primary for prestloans.com)
            if (!mailSent) {
                try {
                    using (SmtpClient smtp = new SmtpClient("smtp.office365.com", 587)) {
                        smtp.EnableSsl = true;
                        smtp.UseDefaultCredentials = false;
                        smtp.Credentials = new NetworkCredential(smtpUser, smtpPass);
                        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                        smtp.Timeout = 12000;
                        smtp.Send(msg);
                        mailSent = true;
                        deliveryRoute = "Office 365 (smtp.office365.com:587)";
                    }
                } catch (Exception ex1) {
                    mailError = "O365: " + ex1.Message;
                }
            }

            // Attempt 2: Domain Mail Server mail.prestloans.com (Port 587 SSL)
            if (!mailSent) {
                try {
                    using (SmtpClient smtp = new SmtpClient("mail.prestloans.com", 587)) {
                        smtp.EnableSsl = true;
                        smtp.UseDefaultCredentials = false;
                        smtp.Credentials = new NetworkCredential(smtpUser, smtpPass);
                        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                        smtp.Timeout = 12000;
                        smtp.Send(msg);
                        mailSent = true;
                        deliveryRoute = "mail.prestloans.com:587";
                    }
                } catch (Exception ex2) {
                    mailError += " | Mail587: " + ex2.Message;
                }
            }

            // Attempt 3: Domain Mail Server mail.prestloans.com (Port 25 Non-SSL Relay)
            if (!mailSent) {
                try {
                    using (SmtpClient smtp = new SmtpClient("mail.prestloans.com", 25)) {
                        smtp.EnableSsl = false;
                        smtp.UseDefaultCredentials = false;
                        smtp.Credentials = new NetworkCredential(smtpUser, smtpPass);
                        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                        smtp.Timeout = 10000;
                        smtp.Send(msg);
                        mailSent = true;
                        deliveryRoute = "mail.prestloans.com:25";
                    }
                } catch (Exception ex3) {
                    mailError += " | Mail25: " + ex3.Message;
                }
            }

            // Attempt 4: Default web.config mailSettings
            if (!mailSent) {
                try {
                    using (SmtpClient smtp = new SmtpClient()) {
                        smtp.Timeout = 8000;
                        smtp.Send(msg);
                        mailSent = true;
                        deliveryRoute = "web.config mailSettings";
                    }
                } catch (Exception ex4) {
                    mailError += " | LocalIIS: " + ex4.Message;
                }
            }

            if (mailSent) {
                context.Response.Write(string.Format("{{\"success\":true,\"message\":\"Inquiry received and email dispatched to info@prestloans.com\",\"referenceId\":\"{0}\",\"mailSent\":true,\"route\":\"{1}\"}}",
                    referenceId, deliveryRoute));
            } else {
                context.Response.Write(string.Format("{{\"success\":true,\"message\":\"Inquiry logged on server\",\"referenceId\":\"{0}\",\"mailSent\":false,\"mailError\":\"{1}\"}}",
                    referenceId, mailError.Replace("\"", "\\\"").Replace("\r", "").Replace("\n", " ")));
            }
        } catch (Exception ex) {
            context.Response.StatusCode = 200;
            context.Response.Write(string.Format("{{\"success\":true,\"referenceId\":\"{0}\",\"notice\":\"{1}\"}}",
                referenceId, ex.Message.Replace("\"", "\\\"")));
        }
    }

    private string ExtractJsonVal(string json, string key) {
        try {
            string pattern = "\"" + key + "\":\"";
            int idx = json.IndexOf(pattern);
            if (idx == -1) return "";
            int start = idx + pattern.Length;
            int end = json.IndexOf("\"", start);
            if (end == -1) return "";
            return json.Substring(start, end - start);
        } catch {
            return "";
        }
    }

    public bool IsReusable {
        get { return false; }
    }
}