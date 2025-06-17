import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  } else {
    console.error('EmailJS public key is not configured');
  }
};

// Email service interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Validate configuration
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_name: 'Morning Star Resort',
      reply_to: formData.email,
      // Add timestamp
      submitted_at: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Colombo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };

    console.log('Sending email with template params:', templateParams);

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Validate EmailJS configuration
export const validateEmailJSConfig = (): boolean => {
  const isValid = !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );

  if (!isValid) {
    console.warn('EmailJS configuration is incomplete:', {
      serviceId: !!EMAILJS_CONFIG.serviceId,
      templateId: !!EMAILJS_CONFIG.templateId,
      publicKey: !!EMAILJS_CONFIG.publicKey,
    });
  }

  return isValid;
};
