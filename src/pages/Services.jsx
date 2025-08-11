// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ServicesCard from "../components/ServicesCard";

// const Services = () => {
//     return (
//         <div
//             className="relative min-h-screen w-screen bg-bgnew bg-cover bg-center bg-repeat"
//         >
//             <div className="absolute z-[-1] inset-0 animate-pulse bg-gradient-to-r from-transparent to-primary opacity-30"></div>

//             <Navbar />

//             <div className="relative flex mt-48 items-center justify-center">
//                 <div className="flex flex-col items-center justify-center w-[85%] space-y-8">
//                     <img
//                         src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991421/Services_y4wtxc.svg"
//                         className="w-[35%] h-[35%] z-100 rounded-xl mt-[-4%] animate-slideInFromRight"
//                         alt="Background"
//                     />
//                     <div className="w-[60%] ">
//                         <p className="text-secondary font-primary text-justify text-center rounded-xl py-2 px-5 text-2xl mt-5 animate-slideInFromLeft">
//                             <span>
//                                 Accountistry offers a comprehensive suite of accounting services tailored to meet the diverse needs of our clients.<br /><br />
//                             </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>


//             <div className="relative flex justify-center mt-24">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
//                     <ServicesCard title={'Bookkeeping'} />
//                     <ServicesCard title={'QuickBooks and Other ERP Implementation'} />
//                     <ServicesCard title={'Audits, Reviews, and Compilations'} />
//                     <ServicesCard title={'Financial Planning'} />
//                     <ServicesCard title={'Contract CFO'} />
//                     <ServicesCard title={`Payroll and Back-Office Support`} />
//                     <ServicesCard title={'Technical Accounting Consultations'} />
//                     <ServicesCard title={'SOX / Internal Controls'} />
//                     <ServicesCard title={'Tax Preparation'} />
//                     <ServicesCard title={'Tax Planning'} />
//                     <ServicesCard title={'Non-Profit and Government Accounting'} />
//                     <ServicesCard title={'CPA Verification Letters'} />
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Services;


import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
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
                        src="/businessmen-looking-through-window.jpg"
                        alt="Professional business consultation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
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
                        Our{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                            Services
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Comprehensive accounting solutions tailored to drive your business forward
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

            {/* Services Grid */}
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
                            What We{" "}
                            <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                Offer
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
                                title: 'Bookkeeping',
                                description: 'Comprehensive bookkeeping services to maintain accurate financial records and ensure your business stays organized.',
                                icon: '📊'
                            },
                            {
                                title: 'Accounts Receivable / Payable',
                                description: 'Efficient management of your incoming and outgoing payments to optimize cash flow and vendor relationships.',
                                icon: '💰'
                            },
                            {
                                title: 'QuickBooks and ERP Implementation',
                                description: 'Expert setup and cleanup of QuickBooks and other ERP systems to streamline your financial operations.',
                                icon: '⚙️'
                            },
                            {
                                title: 'Audit and Reviews',
                                description: 'Professional audit and review services to ensure compliance and provide stakeholders with confidence.',
                                icon: '🔍'
                            },
                            {
                                title: 'Financial Statement Preparation',
                                description: 'Accurate preparation and compilation of financial statements that meet regulatory requirements.',
                                icon: '📋'
                            },
                            {
                                title: 'CPA Verification Letters',
                                description: 'Official CPA verification letters for loans, contracts, and other business requirements.',
                                icon: '✅'
                            },
                            {
                                title: 'Tax Returns & Planning',
                                description: 'Comprehensive personal and business tax preparation with strategic planning to minimize liability.',
                                icon: '📄'
                            },
                            {
                                title: 'Payroll & Sales Tax',
                                description: 'Complete payroll processing and sales tax filing services to ensure compliance and accuracy.',
                                icon: '👥'
                            },
                            {
                                title: 'IRS Representations',
                                description: 'Professional representation and advocacy in dealings with the IRS and other tax authorities.',
                                icon: '🛡️'
                            },
                            {
                                title: 'Technical Accounting',
                                description: 'Expert consultations on complex accounting issues and technical accounting standards.',
                                icon: '🎯'
                            },
                            {
                                title: 'SOX & Internal Controls',
                                description: 'Sarbanes-Oxley compliance and internal control design to strengthen your financial governance.',
                                icon: '🔒'
                            },
                            {
                                title: 'Fractional CFO Services',
                                description: 'Strategic financial leadership and guidance without the cost of a full-time CFO.',
                                icon: '👔'
                            }
                        ].map((service, index) => (
                            <motion.div key={service.title} variants={itemVariants}>
                                <ServicesCard 
                                    title={service.title} 
                                    description={service.description}
                                    icon={service.icon}
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

export default Services;
