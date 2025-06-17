/**
 * EmailJS Connection Test Script
 * 
 * This script tests if EmailJS API is accessible from your application.
 * Run this in the browser console after starting your dev server.
 */

const testEmailJSConnection = async () => {
  console.log('🧪 Testing EmailJS API Connection...');
  
  try {
    // Test basic fetch to EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'HEAD', // Use HEAD to avoid sending actual data
      mode: 'cors'
    });
    
    console.log('✅ EmailJS API is accessible!');
    console.log('📊 Response status:', response.status);
    
    if (response.status === 405) {
      console.log('✅ Expected 405 Method Not Allowed for HEAD request - this is normal');
    }
    
    return true;
  } catch (error) {
    console.error('❌ EmailJS API connection failed:', error);
    
    if (error.message.includes('Content Security Policy')) {
      console.log('🔧 CSP Error detected. Please check your index.html file:');
      console.log('   Add: connect-src \'self\' https://api.emailjs.com;');
      console.log('   Then restart your dev server.');
    }
    
    return false;
  }
};

const testFullEmailJSSetup = async () => {
  console.log('🔍 Testing Complete EmailJS Setup...');
  
  // Check environment variables
  const config = {
    serviceId: import.meta?.env?.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY
  };
  
  console.log('📋 Configuration Check:');
  console.log('- Service ID:', config.serviceId ? '✅ Set' : '❌ Missing');
  console.log('- Template ID:', config.templateId ? '✅ Set' : '❌ Missing');
  console.log('- Public Key:', config.publicKey ? '✅ Set' : '❌ Missing');
  
  if (!config.serviceId || !config.templateId || !config.publicKey) {
    console.log('❌ Configuration incomplete. Check your .env file.');
    return false;
  }
  
  // Test API connection
  const connectionOk = await testEmailJSConnection();
  
  if (connectionOk) {
    console.log('🎉 EmailJS setup looks good! Try submitting the contact form.');
  }
  
  return connectionOk;
};

// Auto-run basic test
console.log('📧 EmailJS Test Script Loaded');
console.log('Run testEmailJSConnection() to test API access');
console.log('Run testFullEmailJSSetup() to test complete setup');

// Export for manual testing
window.testEmailJSConnection = testEmailJSConnection;
window.testFullEmailJSSetup = testFullEmailJSSetup;

export { testEmailJSConnection, testFullEmailJSSetup };
