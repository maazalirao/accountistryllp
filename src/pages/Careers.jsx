
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

const Careers = () => {
    return (
        <div className="relative min-h-screen w-screen bg-bgnew bg-cover bg-center bg-repeat">
            <div className="absolute z-[-1] inset-0 animate-pulse bg-gradient-to-r from-transparent to-primary opacity-30"></div>

            <Navbar />

            <div className="relative flex items-center justify-center">
                <div className="rounded-xl flex flex-col items-center justify-center w-[85%] space-y-8 px-5 md:px-10">
                    <img
                        src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725991623/careers_hed6pu.svg"
                        className="w-[60%] md:w-[35%] h-[60%] md:h-[35%] z-100 rounded-xl animate-slideInFromRight"
                        alt="Careers"
                    />
                    <div className="w-full md:w-[60%]">
                        <p className="text-secondary font-primary md:text-justify text-center text-lg md:text-2xl mt-[-10%] md:mt-[-10%] animate-slideInFromLeft">
                            <span>
                                Accountistry prides itself in providing its clients with top-notch accounting professionals. Do you think you have what it takes to offer exceptional client service? If so, please apply to any of our open positions below.<br /> <br />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="text-secondary justify-center text-center font-bold font-primary text-3xl md:text-5xl mt-5 md:mt-5 animate-slideInFromLeft">
                Benefits
            </h1>

            <div className="relative flex justify-center mt-5 md:mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20">
                    <ServicesCard title={'Competitive Compensation'} />
                    <ServicesCard title={'Discretionary Bonuses'} />
                    <ServicesCard title={'Health Insurance'} />
                    <ServicesCard title={'Flexible Schedules'} />
                    <ServicesCard title={'Professional Training'} />
                    <ServicesCard title={'Generous Paid-Time Off'} />
                </div>
            </div>

            <div className="flex justify-center items-center mt-20 md:mt-32 mb-5">
                <h1 className="text-secondary text-center font-bold font-primary text-3xl md:text-5xl animate-slideInFromLeft rounded-xl px-8 py-4">
                    Open Positions
                </h1>
            </div>

            <div className="relative flex justify-center mt-5 md:mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20">
                    <ServicesCard title={'Student / Internship Positions'} text={'Apply'} />
                    <ServicesCard title={'Entry Level Positions'} text={'Apply'} />
                    <ServicesCard title={'Experienced Positions'} text={'Apply'} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Careers;
