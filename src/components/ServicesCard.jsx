// const ServicesCard = ({ title, text }) => {
//     return (
//         <div className="relative font-primary flex flex-col mt-6 text-primary bg-secondary shadow-md border-4 border-primary rounded-xl w-72 h-48 hover:bg-primary hover:text-secondary transform transition-transform duration-300 hover:scale-105 hover:border-secondary">
//             <div className="p-6 flex flex-col justify-center items-center h-full">
//                 <h5 className="block mb-2 text-xl antialiased font-semibold text-center">
//                     {title}
//                 </h5>
//                 {text && (
//                     <a
//                         href="mailto:info@accountistryllp.com?subject=Job%20Request"
//                         className="text-secondary bg-primary border border-gray-300 group-hover:bg-secondary focus:ring-4 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 font-bold hover:bg-secondary hover:text-primary"
//                     >
//                         {text}
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ServicesCard;


const ServicesCard = ({ title, text }) => {
    return (
        <div className="relative font-primary flex flex-col mt-6 text-primary bg-secondary shadow-md border-4 border-primary rounded-xl w-72 h-48 md:w-80 md:h-52 hover:bg-primary hover:text-secondary transform transition-transform duration-300 hover:scale-105 hover:border-secondary">
            <div className="p-6 flex flex-col justify-center items-center h-full">
                {/* Title */}
                <h5 className="block mb-2 text-xl antialiased font-semibold text-center">
                    {title}
                </h5>

                {/* Conditionally render button if 'text' prop is passed */}
                {text && (
                    <a
                        href="mailto:info@accountistryllp.com?subject=Job%20Request"
                        className="text-secondary bg-primary border border-gray-300 focus:ring-4 font-medium rounded-lg px-5 py-2.5 mt-4 font-bold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        {text}
                    </a>
                )}
            </div>
        </div>
    );
};

export default ServicesCard;
