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


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
    return (
        <div className="relative min-h-screen w-screen bg-bgnew bg-cover bg-center bg-repeat">
            <div className="absolute z-[-1] inset-0 animate-pulse bg-gradient-to-r from-transparent to-primary opacity-30"></div>

            <Navbar />

            <div className="relative flex mt-36 md:mt-48 items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[85%] space-y-8 px-5 md:px-10">
                    <img
                        src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991421/Services_y4wtxc.svg"
                        className="w-[70%] md:w-[35%] h-[70%] md:h-[35%] z-100 rounded-xl mt-[-4%] animate-slideInFromRight"
                        alt="Background"
                    />
                    <div className="w-[100%] md:w-[60%]">
                        <p className="text-secondary font-primary md:text-justify text-center rounded-xl py-2 px-5 text-lg  md:text-2xl mt-5 animate-slideInFromLeft">
                            <span>
                                Accountistry offers a comprehensive suite of accounting services tailored to meet the diverse needs of our clients.<br /><br />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center mt-5 md:mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20">
                    <ServicesCard title={'Bookkeeping'} />
                    <ServicesCard title={'QuickBooks and Other ERP Implementation'} />
                    <ServicesCard title={'Audits, Reviews, and Compilations'} />
                    <ServicesCard title={'Financial Planning'} />
                    <ServicesCard title={'Contract CFO'} />
                    <ServicesCard title={`Payroll and Back-Office Support`} />
                    <ServicesCard title={'Technical Accounting Consultations'} />
                    <ServicesCard title={'SOX / Internal Controls'} />
                    <ServicesCard title={'Tax Preparation'} />
                    <ServicesCard title={'Tax Planning'} />
                    <ServicesCard title={'Non-Profit and Government Accounting'} />
                    <ServicesCard title={'CPA Verification Letters'} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
