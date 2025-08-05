
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



import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Industries = () => {
    return (
        <div className="relative min-h-screen w-screen bg-grey-900">
            <div className="absolute z-[-1] inset-0 bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900"></div>

            <Navbar />

            <div className="relative flex mt-24 md:mt-36 items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[85%] space-y-8 px-5 md:px-10">
                    <img
                        src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991586/Industries_pb5l81.svg"
                        className="w-[70%] md:w-[55%] h-[70%] md:h-[55%] z-100 rounded-xl mt-[-8%] animate-slideInFromRight"
                        alt="Background"
                    />
                    <div className="w-[100%] md:w-[60%]">
                        <p className="text-white font-primary md:text-justify text-center text-lg md:text-2xl mt-8 md:mt-12 animate-slideInFromLeft">
                            <span>
                                Accountistry supports a wide array of companies across different industries, offering tailored solutions that address the unique financial needs of each sector.<br /> <br />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center mt-5 md:mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20">
                    <ServicesCard title={'Consumer Products and Services'} />
                    <ServicesCard title={'Manufacturing'} />
                    <ServicesCard title={'Food and Beverage'} />
                    <ServicesCard title={'Real Estate'} />
                    <ServicesCard title={'Life Sciences and Healthcare'} />
                    <ServicesCard title={'Technology'} />
                    <ServicesCard title={'Financial Services'} />
                    <ServicesCard title={'Professional Services'} />
                    <ServicesCard title={'Education'} />
                    <ServicesCard title={'Media, Gaming, and Entertainment'} />
                    <ServicesCard title={'Non-Profit'} />
                    <ServicesCard title={'Government'} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Industries;
