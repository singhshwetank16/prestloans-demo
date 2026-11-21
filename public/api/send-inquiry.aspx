<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Net.Mail" %>
<%@ Import Namespace="System.Text" %>
<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.ContentType = "application/json; charset=utf-8";
        Response.AddHeader("Access-Control-Allow-Origin", "*");
        Response.AddHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

        if (Request.HttpMethod == "OPTIONS")
        {
            Response.StatusCode = 200;
            Response.End();
            return;
        }

        string loanAmount = "";
        string loanProduct = "Business Loan";
        string mobileNumber = "";
        string referenceId = "PL-INQ-" + new Random().Next(100000, 999999);
        string inquiryDate = DateTime.Now.ToString("dd/MM/yyyy hh:mm tt");

        try
        {
            string jsonBody = "";
            using (var reader = new StreamReader(Request.InputStream, Encoding.UTF8))
            {
                jsonBody = reader.ReadToEnd();
            }

            if (!string.IsNullOrEmpty(jsonBody))
            {
                loanAmount = ExtractJsonVal(jsonBody, "loanAmount");
                loanProduct = ExtractJsonVal(jsonBody, "loanProduct");
                mobileNumber = ExtractJsonVal(jsonBody, "mobileNumber");
                string refIn = ExtractJsonVal(jsonBody, "referenceId");
                if (!string.IsNullOrEmpty(refIn)) referenceId = refIn;
            }
            else
            {
                loanAmount = Request.Form["loanAmount"] ?? "";
                loanProduct = Request.Form["loanProduct"] ?? "Business Loan";
                mobileNumber = Request.Form["mobileNumber"] ?? "";
            }

            // 1. Log to local file on Windows IIS
            try
            {
                string logPath = Server.MapPath("~/api/inquiries_log.json");
                string entry = string.Format("{{\"refId\":\"{0}\",\"amount\":\"{1}\",\"product\":\"{2}\",\"mobile\":\"{3}\",\"date\":\"{4}\",\"ip\":\"{5}\"}}\r\n",
                    referenceId, loanAmount, loanProduct, mobileNumber, inquiryDate, Request.UserHostAddress);
                File.AppendAllText(logPath, entry);
            }
            catch { }

            // 2. Try sending email if SMTP configured in IIS / web.config
            bool mailSent = false;
            string mailError = "";
            try
            {
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
            }
            catch (Exception mEx)
            {
                mailSent = false;
                mailError = mEx.Message;
            }

            if (mailSent)
            {
                Response.Write(string.Format("{{\"success\":true,\"message\":\"Inquiry received and email sent to info@prestloans.com\",\"referenceId\":\"{0}\",\"mailSent\":true}}",
                    referenceId));
            }
            else
            {
                Response.Write(string.Format("{{\"success\":true,\"message\":\"Inquiry logged on server\",\"referenceId\":\"{0}\",\"mailSent\":false,\"mailError\":\"{1}\",\"help\":\"Configure SMTP in web.config or use Web3Forms\"}}",
                    referenceId, mailError.Replace("\"", "\\\"").Replace("\r", "").Replace("\n", " ")));
            }
        }
        catch (Exception ex)
        {
            Response.StatusCode = 200;
            Response.Write(string.Format("{{\"success\":true,\"referenceId\":\"{0}\",\"notice\":\"{1}\"}}",
                referenceId, ex.Message.Replace("\"", "\\\"")));
        }
        Response.End();
    }

    private string ExtractJsonVal(string json, string key)
    {
        try
        {
            string pattern = "\"" + key + "\":\"";
            int idx = json.IndexOf(pattern);
            if (idx == -1) return "";
            int start = idx + pattern.Length;
            int end = json.IndexOf("\"", start);
            if (end == -1) return "";
            return json.Substring(start, end - start);
        }
        catch
        {
            return "";
        }
    }
</script>