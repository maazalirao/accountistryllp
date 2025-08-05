import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        inquiry: '',
        to_email: 'info@accountistryllp.com' // Adding recipient email
    });
    
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        
        // Create template parameters with the recipient email
        const templateParams = {
            ...formData,
            to_email: 'info@accountistryllp.com', // Ensure emails go to this address
            subject: `Contact Form Submission from ${formData.fullName}`,
            reply_to: formData.email
        };

        // Send email using EmailJS
        emailjs.send('service_1wgwmzl', 'template_3jobarh', templateParams, 'DtyzG95w7OtDJdrGU')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setMessageSent(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    city: '',
                    state: '',
                    inquiry: '',
                    to_email: 'info@accountistryllp.com'
                });
                
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    setMessageSent(false);
                }, 5000);
                
            }, (error) => {
                console.error('Failed to send email:', error);
                setError(true);
            });
    };

    return (
        <div className="min-h-screen bg-grey-900">
            <Navbar />

            <div className="flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
                
                {/* Contact information display */}
                <div className="mb-8 text-center">
                    <p className="text-lg mb-2 text-white">
                        <strong>Email:</strong> <a href="mailto:info@accountistryllp.com" className="text-primary-400 hover:underline">info@accountistryllp.com</a>
                    </p>
                    <p className="text-lg mb-4 text-white">
                        <strong>Phone:</strong> <a href="tel:+19512231881" className="text-primary-400 hover:underline">(951) 223-1881</a>
                    </p>
                    <p className="text-sm text-grey-400 italic">
                        All form submissions will be sent to info@accountistryllp.com
                    </p>
                </div>
                
                <form 
                    className="bg-grey-800 p-8 rounded-xl shadow-lg w-full max-w-lg border border-grey-700"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="inquiry">
                            Your Inquiry
                        </label>
                        <textarea
                            id="inquiry"
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            rows="4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-600 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>

                {messageSent && (
                    <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">
                        Message has been sent successfully to info@accountistryllp.com!
                    </div>
                )}
                
                {error && (
                    <div className="mt-4 p-4 bg-red-200 text-red-800 rounded-lg">
                        Failed to send message. Please try again or contact directly at info@accountistryllp.com
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
