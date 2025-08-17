import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            category: "About Accountistry LLP",
            questions: [
                {
                    question: "Are your CPAs licensed?",
                    answer: "Yes. Our team includes highly experienced accounting professionals. Both of our founding and managing partners are fully licensed Certified Public Accountants (CPAs) in good standing with the California Board of Accountancy."
                },
                {
                    question: "Do you work with clients outside California?",
                    answer: "Absolutely. We proudly serve clients across the United States using secure virtual platforms and cloud-based accounting tools."
                }
            ]
        },
        {
            category: "Tax Services",
            questions: [
                {
                    question: "When is the tax filing deadline?",
                    answer: "For individuals, the deadline is usually April 15. Business deadlines vary depending on the entity type. We can also prepare and file extensions when needed."
                },
                {
                    question: "Can you help with IRS notices or audits?",
                    answer: "Yes. We represent clients before the IRS and state tax agencies, assisting with audits, setting up payment plans, and requesting penalty abatements."
                },
                {
                    question: "Do you handle back taxes?",
                    answer: "Definitely. We help clients file overdue returns, resolve outstanding tax debts, and get back in compliance with both federal and state authorities."
                }
            ]
        },
        {
            category: "Bookkeeping & Accounting",
            questions: [
                {
                    question: "Do I need QuickBooks or other software before starting?",
                    answer: "No. We can work with the software you already have or set you up with QuickBooks Online or another solution that fits your business."
                },
                {
                    question: "Can you fix disorganized or outdated books?",
                    answer: "Yes. We specialize in catch-up and clean-up bookkeeping to bring your financial records up to date and ready for accurate reporting."
                }
            ]
        },
        {
            category: "Audit & Assurance Services",
            questions: [
                {
                    question: "What's the difference between an audit, review, and compilation?",
                    answer: "Audit – Provides the highest level of assurance, including detailed testing of financial records.\nReview – Offers limited assurance through analytical procedures and inquiries.\nCompilation – Presents financial information without offering any assurance."
                },
                {
                    question: "Do you provide nonprofit audits?",
                    answer: "Yes. We perform nonprofit audits, reviews, and compilations to meet grant, donor, and regulatory requirements."
                }
            ]
        },
        {
            category: "Pricing & Engagement",
            questions: [
                {
                    question: "How do you price your services?",
                    answer: "For ongoing, routine accounting services, we typically use flat-fee pricing. For complex or one-time projects, we may bill at an hourly rate."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept ACH transfers, checks, credit cards, and secure online payments."
                }
            ]
        },
        {
            category: "Working With Accountistry LLP",
            questions: [
                {
                    question: "How do you protect my information?",
                    answer: "We use encrypted file-sharing portals and follow strict confidentiality and data security procedures."
                },
                {
                    question: "Are you open year-round?",
                    answer: "Yes. We operate year-round to provide consistent support for our clients' financial needs."
                },
                {
                    question: "How do I get started?",
                    answer: "Email us at info@accountistryllp.com or call (951) 223-1881 to schedule a consultation and receive a personalized proposal."
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900">
            <Navbar />
            
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[60vh] flex items-center justify-center overflow-hidden"
            >
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

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Find answers to common questions about our accounting services
                    </motion.p>
                </div>
            </motion.div>

            {/* FAQ Content */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center mt-16 md:mt-20 mb-20"
            >
                <div className="w-[90%] max-w-4xl px-5 md:px-10">
                    {faqData.map((category, categoryIndex) => (
                        <motion.div 
                            key={categoryIndex}
                            variants={itemVariants}
                            className="mb-12"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                    {category.category}
                                </span>
                            </h2>
                            
                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const itemKey = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openItems[itemKey];
                                    
                                    return (
                                        <motion.div
                                            key={questionIndex}
                                            variants={itemVariants}
                                            className="bg-gradient-to-r from-grey-800/80 to-grey-900/80 backdrop-blur-sm rounded-2xl border border-grey-600 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleItem(itemKey)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-grey-700/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-inset"
                                            >
                                                <h3 className="text-lg font-semibold text-white pr-4">
                                                    {faq.question}
                                                </h3>
                                                <div className="flex-shrink-0">
                                                    {isOpen ? (
                                                        <ChevronUpIcon className="w-5 h-5 text-primary-400" />
                                                    ) : (
                                                        <ChevronDownIcon className="w-5 h-5 text-primary-400" />
                                                    )}
                                                </div>
                                            </button>
                                            
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? "auto" : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-4">
                                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-grey-600 to-transparent mb-4"></div>
                                                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Contact CTA */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 text-center bg-gradient-to-r from-grey-800/80 to-grey-900/80 backdrop-blur-sm p-8 rounded-2xl border border-grey-600"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Can't find the answer you're looking for? Our team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:info@accountistryllp.com"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Email Us
                            </a>
                            <a 
                                href="tel:+19512231881"
                                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-primary-400 text-primary-400 font-semibold rounded-lg hover:bg-primary-400 hover:text-white transition-all duration-300"
                            >
                                Call (951) 223-1881
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default FAQ;