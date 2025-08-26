import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 }
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
                className="relative min-h-[70vh] max-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src="/businessmen-looking-through-window.jpg"
                        alt="Professional business consultation"
                        className="w-full h-full object-cover object-center"
                        style={{
                            objectPosition: 'center center',
                            minHeight: '100%',
                            minWidth: '100%'
                        }}
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
                        About{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Us
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Dedicated professionals committed to your financial success and growth
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

            {/* Content Section */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center mt-16 md:mt-20 mb-20"
            >
                <div className="w-[90%] max-w-6xl px-5 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Text */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Our{" "}
                                    <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                        Story
                                    </span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full mb-8"></div>
                            </div>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                At Accountistry, our story began with two friends—seasoned CPAs who honed their skills at Big 4 audit firms and within multinational and publicly traded corporations. They had seen it all: the intensity of year-end audits, the precision required for financial reporting, and the strategic thinking needed to guide businesses through complex financial landscapes. Along the way, they discovered a shared passion—not just for numbers, but for helping people and businesses make sense of them.
                            </motion.p>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                They wanted to take the expertise and discipline they'd developed at the highest levels and bring it to clients who deserved the same caliber of service, no matter their size. With that mission in mind, they launched Accountistry—a firm designed to provide the kind of accounting support that empowers clients to take charge of their finances.
                            </motion.p>

                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                Whether it's keeping your books clean and organized, preparing personal or business tax returns, conducting audits and reviews, or delivering clear financial reports you can actually use, our goal is to provide thoughtful guidance and support that makes sense for where you are and where you're headed. No jargon. No cookie-cutter solutions. Just smart, reliable accounting that works for you.
                            </motion.p>

                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                So, whether you're launching a new venture, running a growing company, managing a nonprofit, or planning for your future, we're here to make the numbers work for you—and to be in your corner every step of the way. Reach out today, and let's start building the financial foundation that will keep you moving forward.
                            </motion.p>


                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div variants={imageVariants} className="relative w-full">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
                                <div className="aspect-[4/3] w-full max-w-full">
                                    <img
                                        src="/businessmen-looking-through-window.jpg"
                                        alt="Professional Business Team"
                                        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                                        style={{
                                            objectPosition: 'center center',
                                            maxWidth: '100%',
                                            maxHeight: '100%'
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-400/10"></div>
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

export default AboutUs;
