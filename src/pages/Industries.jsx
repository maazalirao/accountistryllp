
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
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
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
                                icon: '🏥'
                            },
                            {
                                title: 'Technology & Software',
                                description: 'Expert financial guidance for tech startups, software companies, and digital transformation initiatives.',
                                icon: '💻'
                            },
                            {
                                title: 'Real Estate & Property',
                                description: 'Comprehensive financial services for real estate developers, property managers, and investment firms.',
                                icon: '🏢'
                            },
                            {
                                title: 'Manufacturing & Distribution',
                                description: 'Tailored accounting solutions for manufacturers, distributors, and supply chain operations.',
                                icon: '🏭'
                            },
                            {
                                title: 'Retail & E-commerce',
                                description: 'Financial expertise for retail businesses, online stores, and omnichannel commerce operations.',
                                icon: '🛍️'
                            },
                            {
                                title: 'Professional Services',
                                description: 'Specialized support for consulting firms, law practices, and other professional service providers.',
                                icon: '💼'
                            },
                            {
                                title: 'Construction & Engineering',
                                description: 'Project-based accounting and financial management for construction and engineering firms.',
                                icon: '🏗️'
                            },
                            {
                                title: 'Hospitality & Tourism',
                                description: 'Financial services designed for hotels, restaurants, travel agencies, and entertainment venues.',
                                icon: '🏨'
                            },
                            {
                                title: 'Non-Profit Organizations',
                                description: 'Grant management, compliance, and financial reporting for charitable and non-profit organizations.',
                                icon: '🤝'
                            },
                            {
                                title: 'Financial Services',
                                description: 'Regulatory compliance and specialized accounting for banks, credit unions, and financial institutions.',
                                icon: '🏦'
                            },
                            {
                                title: 'Education & Training',
                                description: 'Financial management solutions for schools, universities, and educational service providers.',
                                icon: '🎓'
                            },
                            {
                                title: 'Transportation & Logistics',
                                description: 'Cost accounting and financial optimization for transportation companies and logistics providers.',
                                icon: '🚛'
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
