
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ServicesCard from "../components/ServicesCard";
// const Industries = () => {
//     return (
//         <div
//             className="relative min-h-screen w-screen bg-bgnew bg-cover bg-center bg-repeat"
//         >
//             <div className="absolute z-[-1] inset-0 animate-pulse bg-gradient-to-r from-transparent to-primary opacity-30"></div>

//             <Navbar />

//             <div className="relative flex mt-20 items-center justify-center ">
//                 <div className=" flex flex-col items-center justify-center w-[85%] space-y-8">
//                     <img
//                         src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991586/Industries_pb5l81.svg"
//                         className="w-[55%] h-[55%] z-100 rounded-xl mt-[-12%] animate-slideInFromRight"
//                         alt="Background"
//                     />
//                     <div className=" w-[60%] ">
//                         <p className="text-secondary font-primary text-center text-justify text-2xl mt-12 animate-slideInFromLeft">
//                             <span>Accountistry supports a wide array of companies across different industries, offering tailored solutions that address the unique financial needs of each sector.<br /> <br /></span>

//                         </p>

//                     </div>

//                 </div>
//             </div>

//             <div className="relative flex justify-center mt-24">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
//                     <ServicesCard title={'Consumer Products and Services'} />
//                     <ServicesCard title={'Manufacturing'} />
//                     <ServicesCard title={'Food and Beverage'} />
//                     <ServicesCard title={'Real Estate'} />
//                     <ServicesCard title={'Life Sciences and Healthcare'} />
//                     <ServicesCard title={'Technology'} />
//                     <ServicesCard title={'Financial Services'} />
//                     <ServicesCard title={'Professional Services'} />
//                     <ServicesCard title={'Education'} />
//                     <ServicesCard title={'Media, Gaming, and Entertainment'} />
//                     <ServicesCard title={'Non-Profit'} />
//                     <ServicesCard title={'Government'} />
//                 </div>
//             </div>




//             <Footer />
//         </div>
//     );
// };

// export default Industries;



import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Industries = () => {
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
                        src="/lifestyle-scene-from-ordinary-mall-america.jpg"
                        alt="Modern business environment"
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
                        Industries We{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Serve
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed whitespace-nowrap"
                    >
                        Specialized expertise across diverse sectors to meet your unique business needs
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

            {/* Industries Grid */}
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
                            Our{" "}
                            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                Expertise
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
                                title: 'Healthcare & Medical',
                                description: 'Specialized accounting and financial services for healthcare providers, medical practices, and pharmaceutical companies.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
                            },
                            {
                                title: 'Technology & Software',
                                description: 'Expert financial guidance for tech startups, software companies, and digital transformation initiatives.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
                            },
                            {
                                title: 'Real Estate & Property',
                                description: 'Comprehensive financial services for real estate developers, property managers, and investment firms.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h1v-9c0-2.76 2.24-5 5-5s5 2.24 5 5v9h1c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9zM9 12v7h6v-7c0-1.66-1.34-3-3-3s-3 1.34-3 3z"/></svg>
                            },
                            {
                                title: 'Manufacturing & Distribution',
                                description: 'Tailored accounting solutions for manufacturers, distributors, and supply chain operations.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
                            },
                            {
                                title: 'Retail & E-commerce',
                                description: 'Financial expertise for retail businesses, online stores, and omnichannel commerce operations.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            },
                            {
                                title: 'Professional Services',
                                description: 'Specialized support for consulting firms, law practices, and other professional service providers.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                            },
                            {
                                title: 'Construction & Engineering',
                                description: 'Project-based accounting and financial management for construction and engineering firms.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13.783 15.172l2.121-2.121 5.996 5.996-2.121 2.121zM17.5 10c1.38 0 2.5-1.12 2.5-2.5S18.88 5 17.5 5 15 6.12 15 7.5s1.12 2.5 2.5 2.5zM8.9 6L12 2.9 15.1 6 12 9.1 8.9 6zm6.1 8h4v4h-4v-4zM8 16l4 4-4 4-4-4 4-4z"/></svg>
                            },
                            {
                                title: 'Hospitality & Tourism',
                                description: 'Financial services designed for hotels, restaurants, travel agencies, and entertainment venues.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H9V7H1v10h22V7z"/></svg>
                            },
                            {
                                title: 'Non-Profit Organizations',
                                description: 'Grant management, compliance, and financial reporting for charitable and non-profit organizations.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            },
                            {
                                title: 'Financial Services',
                                description: 'Regulatory compliance and specialized accounting for banks, credit unions, and financial institutions.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                            },
                            {
                                title: 'Education & Training',
                                description: 'Financial management solutions for schools, universities, and educational service providers.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                            },
                            {
                                title: 'Transportation & Logistics',
                                description: 'Cost accounting and financial optimization for transportation companies and logistics providers.',
                                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                            }
                        ].map((industry, index) => (
                            <motion.div key={industry.title} variants={itemVariants}>
                                <ServicesCard 
                                    title={industry.title} 
                                    description={industry.description}
                                    icon={industry.icon}
                                    delay={index * 0.1}
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

export default Industries;
