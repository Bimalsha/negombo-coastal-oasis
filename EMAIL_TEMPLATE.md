# Quick EmailJS Template Setup

## Email Template HTML

Copy and paste this HTML into your EmailJS template editor:

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

## Template Settings

**Subject Line:**
```
New Contact Form Submission - {{from_name}}
```

**To Email:**
```
morningstarresorts92@gmail.com
```

**From Name:**
```
{{from_name}}
```

**Reply To:**
```
{{from_email}}
```

## Environment Variables Template

Add these to your `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Template Variables Used

- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address  
- `{{phone}}` - Customer's phone number
- `{{message}}` - Customer's message
- `{{submitted_at}}` - Submission timestamp
