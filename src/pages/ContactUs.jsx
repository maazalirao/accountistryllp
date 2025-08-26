import React, { useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailTest from "../components/EmailTest";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        subject: '',
        inquiry: '',
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
        
        // Validate form data
        if (!formData.fullName || !formData.email || !formData.inquiry) {
            alert('Please fill in all required fields (Name, Email, and Message)');
            return;
        }
        
        // Initialize EmailJS with your public key
        emailjs.init('Jglgb34WZ5hr5qe1f');
        
        // Create template parameters with all contact information
        const templateParams = {
            from_name: formData.fullName,
            from_email: formData.email,
            phone_number: formData.phoneNumber,
            city: formData.city,
            subject: formData.subject,
            message: formData.inquiry,
            time: new Date().toLocaleString(),
            to_email: 'info@accountistryllp.com',
            reply_to: 'info@accountistryllp.com',
            email_subject: 'Accountistry Contact Information - New Inquiry'
        };

        console.log('Attempting to send email with params:', templateParams);
        console.log('Service ID: service_ppyrnoc');
        console.log('Template ID: template_o089pra');
        console.log('Public Key: Jglgb34WZ5hr5qe1f');
        
        // Send email using EmailJS
        emailjs.send('service_ppyrnoc', 'template_o089pra', templateParams)
            .then((response) => {
                console.log('✅ Email sent successfully!');
                console.log('Response status:', response.status);
                console.log('Response text:', response.text);
                setMessageSent(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    city: '',
                    subject: '',
                    inquiry: '',
                });
                
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    setMessageSent(false);
                }, 5000);
                
            })
            .catch((error) => {
                console.error('❌ Failed to send email!');
                console.error('Full error object:', error);
                
                // More detailed error logging
                if (error.status) {
                    console.error('Error status:', error.status);
                }
                if (error.text) {
                    console.error('Error text:', error.text);
                }
                if (error.message) {
                    console.error('Error message:', error.message);
                }
                
                // Common error explanations
                if (error.status === 400) {
                    console.error('❌ Bad Request - Check your template ID and parameters');
                } else if (error.status === 401) {
                    console.error('❌ Unauthorized - Check your public key');
                } else if (error.status === 404) {
                    console.error('❌ Not Found - Check your service ID or template ID');
                } else if (error.status === 422) {
                    console.error('❌ Invalid template parameters - Check your template variables');
                }
                
                setError(true);
                
                // Auto-hide error message after 5 seconds
                setTimeout(() => {
                    setError(false);
                }, 5000);
            });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="relative min-h-screen w-screen bg-grey-900">
            {/* Animated background */}
            <div className="absolute z-[-1] inset-0 bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
            </div>

            <Navbar />
            <EmailTest />

            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src="/skyscrapers-blue-sky-with-clouds.jpg"
                        alt="Modern business skyline"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-grey-900/90 via-grey-800/80 to-grey-900/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Get In{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Ready to transform your business? Let's start the conversation
                    </motion.p>
                </div>

                {/* Floating elements */}
                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-full blur-xl"
                ></motion.div>
                <motion.div
                    animate={{
                        y: [10, -10, 10],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-xl"
                ></motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center mt-16 md:mt-20 mb-20"
            >
                <div className="w-[90%] max-w-6xl px-5 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column - Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Let's{" "}
                                    <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                        Connect
                                    </span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full mb-8"></div>
                            </div>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                            >
                                Ready to take your finances to the next level? Our accounting experts are here to help you achieve your goals.
                            </motion.p>

                            {/* Contact Cards */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="bg-gradient-to-r from-grey-800/80 to-grey-900/80 backdrop-blur-sm p-6 rounded-2xl border border-grey-600 hover:border-primary-400 transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">Email Us</h3>
                                            <a href="mailto:info@accountistryllp.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
                                                info@accountistryllp.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-grey-800/80 to-grey-900/80 backdrop-blur-sm p-6 rounded-2xl border border-grey-600 hover:border-primary-400 transition-all duration-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">Call Us</h3>
                                            <a href="tel:+19512231881" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
                                                (951) 223-1881
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Contact Form */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="bg-gradient-to-br from-grey-800/90 to-grey-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-grey-600">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="fullName">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="phoneNumber">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                                                placeholder="(555) 123-4567"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="city">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                                                placeholder="Your city"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="subject">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                                            placeholder="Subject of your inquiry"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="inquiry">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="inquiry"
                                            name="inquiry"
                                            value={formData.inquiry}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-grey-700/50 border border-grey-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 resize-none"
                                            rows="5"
                                            placeholder="Tell us about your project or inquiry..."
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>

                                {/* Success/Error Messages */}
                                {messageSent && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-300 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Message sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    </motion.div>
                                )}
                                
                                {error && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 text-red-300 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Failed to send message. Please try again or contact us directly.</span>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-400/20 to-primary-500/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-xl"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default ContactUs;
