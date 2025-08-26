// Test script to verify EmailJS configuration
import emailjs from 'emailjs-com';

// Test function to verify email sending
const testEmailConfiguration = async () => {
    console.log('🧪 Starting Email Configuration Test...');
    console.log('='.repeat(50));
    
    // Initialize EmailJS with your public key
    emailjs.init('Jglgb34WZ5hr5qe1f');
    
    // Test template parameters
    const testTemplateParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        phone_number: '(555) 123-4567',
        city: 'Test City',
        subject: 'Email Configuration Test',
        message: 'This is a test message to verify the email configuration is working correctly.',
        time: new Date().toLocaleString(),
        to_email: 'info@accountistryllp.com',
        reply_to: 'info@accountistryllp.com',
        email_subject: 'Accountistry Contact Information - Test Email'
    };

    console.log('📧 Test Email Parameters:');
    console.log('Service ID: service_ppyrnoc');
    console.log('Template ID: template_o089pra');
    console.log('Public Key: Jglgb34WZ5hr5qe1f');
    console.log('To Email:', testTemplateParams.to_email);
    console.log('Reply To:', testTemplateParams.reply_to);
    console.log('From Name:', testTemplateParams.from_name);
    console.log('From Email:', testTemplateParams.from_email);
    console.log('Subject:', testTemplateParams.subject);
    console.log('Message:', testTemplateParams.message);
    console.log('-'.repeat(50));
    
    try {
        console.log('📤 Attempting to send test email...');
        
        const response = await emailjs.send('service_ppyrnoc', 'template_o089pra', testTemplateParams);
        
        console.log('✅ EMAIL SENT SUCCESSFULLY!');
        console.log('Response Status:', response.status);
        console.log('Response Text:', response.text);
        console.log('🎉 Email configuration is working correctly!');
        console.log('📬 Check info@accountistryllp.com for the test email.');
        
        return {
            success: true,
            status: response.status,
            text: response.text
        };
        
    } catch (error) {
        console.error('❌ EMAIL SENDING FAILED!');
        console.error('Error Details:', error);
        
        // Detailed error analysis
        if (error.status) {
            console.error('Error Status:', error.status);
            
            switch (error.status) {
                case 400:
                    console.error('🔍 Bad Request - Check template ID and parameters');
                    break;
                case 401:
                    console.error('🔑 Unauthorized - Check public key');
                    break;
                case 404:
                    console.error('🔍 Not Found - Check service ID or template ID');
                    break;
                case 422:
                    console.error('📝 Invalid template parameters - Check template variables');
                    break;
                default:
                    console.error('🔍 Unknown error status');
            }
        }
        
        if (error.text) {
            console.error('Error Text:', error.text);
        }
        
        return {
            success: false,
            error: error
        };
    }
};

// Export the test function
export default testEmailConfiguration;

// If running directly in browser console
if (typeof window !== 'undefined') {
    window.testEmailConfiguration = testEmailConfiguration;
    console.log('📋 Test function available as window.testEmailConfiguration()');
}