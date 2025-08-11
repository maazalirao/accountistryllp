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
                className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src="/calculating-finances-investing-future-wealth-generated-by-ai.jpg"
                        alt="Financial planning and wealth management"
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
                                At Accountistry, the story began with two friends—seasoned CPAs who spent years refining their expertise at Big 4 audit firms and within the world of multinational and publicly traded corporations. Along the way, they noticed something intriguing: these large entities, with their vast resources, were adeptly managing rising domestic labor costs by offshoring their accounting functions to highly skilled professionals overseas. This sparked a lightbulb moment—why should this powerful strategy be reserved for the corporate giants?
                            </motion.p>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                Driven by a desire to shake up the financial services industry, they launched Accountistry—a firm dedicated to leveling the playing field for smaller businesses. Whether the need is for project-based assistance or full accounting department support, Accountistry connects businesses with their top-tier team of accountants abroad, including certified and chartered professionals, to deliver exceptional service at a fraction of the cost.
                            </motion.p>

                            <motion.p 
                                variants={itemVariants}
                                className="text-lg text-slate-300 leading-relaxed"
                            >
                                The firm's name, a unique blend of "accounting" and "dentistry," pays homage to the founders' wives, both dentists, and symbolizes their commitment to precision, care, and holistic service. Accountistry's mission is clear: to ensure businesses achieve cost savings without sacrificing quality, thereby empowering them to thrive in a competitive landscape.
                            </motion.p>

                            {/* Stats */}
                            <motion.div 
                                variants={containerVariants}
                                className="grid grid-cols-2 gap-6 mt-12"
                            >
                                <motion.div variants={itemVariants} className="text-center">
                                    <div className="text-3xl font-bold text-primary-400 mb-2">Big 4</div>
                                    <div className="text-slate-400">Experience</div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="text-center">
                                    <div className="text-3xl font-bold text-primary-400 mb-2">Global</div>
                                    <div className="text-slate-400">Reach</div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image */}
                        <motion.div variants={imageVariants} className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/businessmen-looking-through-window.jpg"
                                    alt="Professional Business Team"
                                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                                />
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
