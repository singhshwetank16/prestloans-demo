<%@ WebHandler Language="C#" Class="SendInquiryHandler" %>
using System;
using System.Web;
using System.IO;
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

            // 1. Log to local file on Windows IIS
            try {
                string logPath = context.Server.MapPath("~/api/inquiries_log.json");
                string entry = string.Format("{{\"refId\":\"{0}\",\"amount\":\"{1}\",\"product\":\"{2}\",\"mobile\":\"{3}\",\"date\":\"{4}\",\"ip\":\"{5}\"}}\r\n",
                    referenceId, loanAmount, loanProduct, mobileNumber, inquiryDate, context.Request.UserHostAddress);
                File.AppendAllText(logPath, entry);
            } catch {}

            // 2. Try sending email if local SMTP configured
            bool mailSent = false;
            try {
                MailMessage msg = new MailMessage();
                msg.To.Add("info@prestloans.com");
                msg.From = new MailAddress("info@prestloans.com", "Prest Loans Portal");
                msg.Subject = string.Format("New Loan Inquiry [{0}]: {1} - {2}", referenceId, loanProduct, loanAmount);
                msg.Body = string.Format("Prest Loans Online Inquiry\n\nReference ID: {0}\nProduct: {1}\nAmount: {2}\nMobile: {3}\nDate: {4}\n",
                    referenceId, loanProduct, loanAmount, mobileNumber, inquiryDate);
                msg.IsBodyHtml = false;

                SmtpClient smtp = new SmtpClient();
                smtp.Send(msg);
                mailSent = true;
            } catch {
                mailSent = false;
            }

            context.Response.Write(string.Format("{{\"success\":true,\"message\":\"Inquiry received\",\"referenceId\":\"{0}\",\"mailSent\":{1}}}",
                referenceId, mailSent ? "true" : "false"));
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
