import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailTest = () => {
    const [testResult, setTestResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const runEmailTest = async () => {
        setIsLoading(true);
        setTestResult(null);
        
        console.log('🧪 Starting Email Configuration Test...');
        
        // Initialize EmailJS with your public key
        emailjs.init('Jglgb34WZ5hr5qe1f');
        
        // Test template parameters
        const testTemplateParams = {
            from_name: 'Test User - Email Configuration Check',
            from_email: 'test@example.com',
            phone_number: '(555) 123-4567',
            city: 'Test City',
            subject: 'Email Configuration Test',
            message: 'This is a test message to verify the email configuration is working correctly with service_ppyrnoc and sending to info@accountistryllp.com.',
            time: new Date().toLocaleString(),
            to_email: 'info@accountistryllp.com',
            reply_to: 'info@accountistryllp.com',
            email_subject: 'Accountistry Contact Information - Test Email'
        };

        console.log('📧 Test Email Parameters:');
        console.log('Service ID: service_ppyrnoc');
        console.log('Template ID: template_o089pra');
        console.log('To Email:', testTemplateParams.to_email);
        
        try {
            console.log('📤 Attempting to send test email...');
            
            const response = await emailjs.send('service_ppyrnoc', 'template_o089pra', testTemplateParams);
            
            console.log('✅ EMAIL SENT SUCCESSFULLY!');
            console.log('Response Status:', response.status);
            console.log('Response Text:', response.text);
            
            setTestResult({
                success: true,
                status: response.status,
                text: response.text,
                message: 'Email sent successfully! Check info@accountistryllp.com for the test email.'
            });
            
        } catch (error) {
            console.error('❌ EMAIL SENDING FAILED!');
            console.error('Error Details:', error);
            
            let errorMessage = 'Failed to send email. ';
            
            if (error.status) {
                switch (error.status) {
                    case 400:
                        errorMessage += 'Bad Request - Check template ID and parameters.';
                        break;
                    case 401:
                        errorMessage += 'Unauthorized - Check public key.';
                        break;
                    case 404:
                        errorMessage += 'Not Found - Check service ID or template ID.';
                        break;
                    case 422:
                        errorMessage += 'Invalid template parameters - Check template variables.';
                        break;
                    default:
                        errorMessage += `Unknown error (Status: ${error.status}).`;
                }
            } else {
                errorMessage += 'Network or configuration error.';
            }
            
            setTestResult({
                success: false,
                error: error,
                message: errorMessage
            });
        }
        
        setIsLoading(false);
    };

    return (
        <div className="fixed top-4 right-4 z-50 bg-grey-800 border border-grey-600 rounded-lg p-6 max-w-md shadow-xl">
            <h3 className="text-white font-bold text-lg mb-4">Email Configuration Test</h3>
            
            <div className="space-y-3 mb-4">
                <div className="text-sm text-grey-300">
                    <strong>Service ID:</strong> service_ppyrnoc
                </div>
                <div className="text-sm text-grey-300">
                    <strong>Template ID:</strong> template_o089pra
                </div>
                <div className="text-sm text-grey-300">
                    <strong>To Email:</strong> info@accountistryllp.com
                </div>
            </div>
            
            <button
                onClick={runEmailTest}
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isLoading
                        ? 'bg-grey-600 text-grey-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
            >
                {isLoading ? 'Sending Test Email...' : 'Send Test Email'}
            </button>
            
            {testResult && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${
                    testResult.success
                        ? 'bg-green-900/20 border border-green-500/30 text-green-300'
                        : 'bg-red-900/20 border border-red-500/30 text-red-300'
                }`}>
                    <div className="font-semibold mb-1">
                        {testResult.success ? '✅ Success!' : '❌ Failed!'}
                    </div>
                    <div>{testResult.message}</div>
                    {testResult.success && (
                        <div className="mt-2 text-xs">
                            Status: {testResult.status} | Response: {testResult.text}
                        </div>
                    )}
                </div>
            )}
            
            <div className="mt-4 text-xs text-grey-400">
                This test will send a test email to verify the configuration is working correctly.
            </div>
        </div>
    );
};

export default EmailTest;