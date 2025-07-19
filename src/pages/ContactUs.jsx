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
        inquiry: ''
    });
    
    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send('service_1wgwmzl', 'template_3jobarh', formData, 'DtyzG95w7OtDJdrGU')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageSent(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    city: '',
                    state: '',
                    inquiry: ''
                });
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="min-h-screen bg-bgnew">
            <Navbar />

            <div className="flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl font-bold text-secondary mb-8">Contact Us</h1>
                <form 
                    className="bg-secondary p-8 rounded-xl shadow-lg w-full max-w-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="fullName">
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
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
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
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="phoneNumber">
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
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="city">
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
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="state">
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
                        <label className="block text-primary text-sm font-bold mb-2" htmlFor="inquiry">
                            Your Inquiry
                        </label>
                        <textarea
                            id="inquiry"
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-secondary font-bold py-2 px-4 rounded-lg hover:scale-110 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>

                {messageSent && (
                    <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">
                        Message has been sent successfully!
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
