# EmailJS Integration Setup Guide

This guide will help you set up EmailJS to handle contact form submissions for the Morning Star Resort website.

## Prerequisites

- EmailJS account (sign up at https://www.emailjs.com/)
- Email service provider (Gmail, Outlook, etc.)

## Important: Content Security Policy Fix

**⚠️ If you encounter CSP errors in the browser console, ensure your `index.html` includes EmailJS in the Content Security Policy:**

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.emailjs.com;" />
```

The key part is: `connect-src 'self' https://api.emailjs.com;` which allows connections to the EmailJS API.

**If you still get CSP errors:**
1. Check your browser's developer console for the exact CSP violation
2. Restart your development server after making changes
3. Clear your browser cache

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create your account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (e.g., Gmail)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (you'll need this later)

### For Gmail:
1. Select "Gmail" as your service
2. Click "Connect Account" and authorize EmailJS
3. Your service will be created automatically

### For Other Providers:
1. Select your email provider or "Other" for custom SMTP
2. Fill in the required SMTP settings
3. Test the connection

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use the following template structure:

### Template Content:

**Subject:** New Contact Form Submission - {{from_name}}

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #009ee2; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background-color: white; padding: 10px; border-left: 3px solid #009ee2; margin-top: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏨 Morning Star Resort</h1>
            <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">📝 Submitted:</div>
                <div class="value">{{submitted_at}}</div>
            </div>
            
            <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the Morning Star Resort contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
        </div>
    </div>
</body>
</html>
```

4. Set the **"To Email"** to your resort's email: `morningstarresorts92@gmail.com`
5. Set the **"From Name"** to: `{{from_name}}`
6. Set the **"Reply To"** to: `{{from_email}}`
7. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Find your **Public Key** (it looks like: `user_xxxxxxxxx` or a similar string)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

### Example:
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456ghi789
```

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email for the contact form submission
5. Check the browser console for any errors

## Step 7: Email Template Variables

The following variables are automatically sent to your email template:

- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address
- `{{phone}}` - Customer's phone number (or "Not provided")
- `{{message}}` - Customer's message
- `{{to_name}}` - Always "Morning Star Resort"
- `{{reply_to}}` - Customer's email (for easy reply)
- `{{submitted_at}}` - Timestamp in Sri Lanka time

## Troubleshooting

### Common Issues:

1. **Content Security Policy (CSP) Errors**
   ```
   Refused to connect to 'https://api.emailjs.com/api/v1.0/email/send' because it violates the following Content Security Policy directive
   ```
   
   **Solution:** Update your `index.html` file to include EmailJS in the CSP:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.emailjs.com;" />
   ```
   Then restart your development server.

2. **"EmailJS configuration is incomplete" error**
   - Check that all three environment variables are set correctly
   - Restart your development server after changing .env
   - Ensure there are no extra spaces in your .env values

3. **"Failed to send email" error**
   - Verify your Service ID, Template ID, and Public Key
   - Check EmailJS dashboard for any service issues
   - Ensure your email service is properly connected
   - Check browser network tab for specific API errors

4. **Template not rendering correctly**
   - Check that all variable names match exactly (case-sensitive)
   - Test your template in the EmailJS dashboard
   - Ensure template variables use double curly braces: `{{variable_name}}`

5. **Emails going to spam**
   - Add your domain to EmailJS whitelist
   - Configure SPF/DKIM records if using custom domain
   - Test with different email addresses

### Development vs Production

**Development:** 
- CSP is enforced in `index.html`
- Environment variables loaded from `.env`
- CORS handled by EmailJS

**Production:**
- Set environment variables in your hosting platform
- Ensure the production domain is whitelisted in EmailJS
- Test the contact form on the live site
- Monitor EmailJS usage limits

### Testing Steps:

1. **Check Configuration:**
   - Open browser console
   - Import and run: `testEmailJSConfig()` from `emailTestUtils.ts`

2. **Test Form Submission:**
   - Fill out the contact form with test data
   - Check browser console for any errors
   - Verify email delivery to the configured address

3. **Verify Email Content:**
   - Check that all form fields appear in the email
   - Verify timestamp shows correct timezone
   - Test reply-to functionality

### Error Codes:

- **400 Bad Request:** Invalid template parameters or missing required fields
- **401 Unauthorized:** Invalid public key or service ID
- **404 Not Found:** Invalid template ID or service ID
- **429 Too Many Requests:** Rate limit exceeded
- **500 Server Error:** EmailJS service issue

## Security Best Practices

1. **Environment Variables**: Never commit your actual EmailJS credentials to version control
2. **Rate Limiting**: EmailJS has built-in rate limiting, but consider adding client-side debouncing
3. **Validation**: The form includes client-side validation, but always validate on your email processing side too
4. **Spam Protection**: Consider adding a simple honeypot or captcha for production use

## Production Deployment

When deploying to production:

1. Set the environment variables in your hosting platform
2. Ensure the production domain is whitelisted in EmailJS
3. Test the contact form on the live site
4. Monitor EmailJS usage limits

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/contact/
- Project Support: Check the GitHub repository issues

---

**Note**: Keep your EmailJS credentials secure and never share them publicly. If you suspect they've been compromised, regenerate them in your EmailJS dashboard.
