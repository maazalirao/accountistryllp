
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Careers = () => {
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
                        src="/successfully-young-businessman-keeping-arms-raised-expressing-positivity-while-standing-outdoors.jpg"
                        alt="Successful professional celebrating career growth"
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
                        Join Our{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Team
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Build your career with a team that values growth, innovation, and excellence
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

            {/* Benefits Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center mt-16 md:mt-20 mb-20"
            >
                <div className="w-[90%] max-w-7xl px-5 md:px-10">
                    {/* Section Header */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why Work{" "}
                            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                With Us
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {[
                            {
                                title: 'Competitive Salary & Benefits',
                                description: 'Attractive compensation packages with comprehensive health, dental, and retirement benefits.',
                                icon: '💰'
                            },
                            {
                                title: 'Professional Development',
                                description: 'Continuous learning opportunities, certifications, and skill enhancement programs.',
                                icon: '📚'
                            },
                            {
                                title: 'Flexible Work Environment',
                                description: 'Hybrid work options, flexible schedules, and modern workspace facilities.',
                                icon: '🏠'
                            },
                            {
                                title: 'Health & Wellness Programs',
                                description: 'Comprehensive wellness initiatives including mental health support and fitness programs.',
                                icon: '🏃‍♂️'
                            },
                            {
                                title: 'Team Building Activities',
                                description: 'Regular team events, social gatherings, and collaborative projects to build strong relationships.',
                                icon: '🤝'
                            },
                            {
                                title: 'Career Growth Opportunities',
                                description: 'Clear advancement paths, mentorship programs, and leadership development initiatives.',
                                icon: '📈'
                            }
                        ].map((benefit, index) => (
                            <motion.div key={benefit.title} variants={itemVariants}>
                                <ServicesCard 
                                    title={benefit.title} 
                                    description={benefit.description}
                                    icon={benefit.icon}
                                    delay={index * 0.1}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Open Positions Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center mt-16 md:mt-20 mb-20"
            >
                <div className="w-[90%] max-w-7xl px-5 md:px-10">
                    {/* Section Header */}
                    <motion.div 
                        variants={itemVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Open{" "}
                            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                Positions
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {[
                            {
                                title: 'Staff Accountant / Bookkeeper',
                                description: 'Maintain accurate financial records, assist with daily accounting operations, and support bookkeeping functions. Location: Remote',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                            },
                            {
                                title: 'Accounting Manager',
                                description: 'Lead accounting operations, manage financial reporting, and oversee accounting staff. Location: Remote',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            },
                            {
                                title: 'Administrative Assistant',
                                description: 'Provide administrative support, manage client communications, and assist with office operations. Location: Remote',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                            }
                        ].map((position, index) => (
                            <motion.div key={position.title} variants={itemVariants}>
                                <ServicesCard 
                                    title={position.title} 
                                    description={position.description}
                                    icon={position.icon}
                                    delay={index * 0.1}
                                    buttonText="Apply Now"
                                    onButtonClick={() => window.open('mailto:careers@accountistry.com?subject=Application for ' + position.title, '_blank')}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default Careers;
