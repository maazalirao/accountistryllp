import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div className="relative min-h-screen w-screen bg-grey-900">
            <div className="absolute z-[-1] inset-0 bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900"></div>

            <Navbar />

            <div className="relative flex mt-28 items-center justify-center">
                <div className="rounded-xl flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-10 w-[85%] px-5 md:px-10">
                    <div className="md:h-[60%] md:w-[60%] mt-[-5%]">
                        <p className="text-white font-primary text-center md:text-justify text-xl md:text-2xl mt-3 animate-slideInFromLeft">
                            <span>
                                At Accountistry, the story began with two friends—seasoned CPAs who spent years refining their expertise at Big 4 audit firms and within the world of multinational and publicly traded corporations. Along the way, they noticed something intriguing: these large entities, with their vast resources, were adeptly managing rising domestic labor costs by offshoring their accounting functions to highly skilled professionals overseas. This sparked a lightbulb moment—why should this powerful strategy be reserved for the corporate giants? <br /> <br />
                                Driven by a desire to shake up the financial services industry, they launched Accountistry—a firm dedicated to leveling the playing field for smaller businesses. Whether the need is for project-based assistance or full accounting department support, Accountistry connects businesses with their top-tier team of accountants abroad, including certified and chartered professionals, to deliver exceptional service at a fraction of the cost. <br /> <br />
                                The firm's name, a unique blend of "accounting" and "dentistry," pays homage to the founders' wives, both dentists, and symbolizes their commitment to precision, care, and holistic service. Accountistry's mission is clear: to ensure businesses achieve cost savings without sacrificing quality, thereby empowering them to thrive in a competitive landscape.
                                <br /> <br />
                            </span>
                        </p>
                    </div>
                    <img
                        src="https://res.cloudinary.com/dm56xy1oj/image/upload/v1725990759/About_Us_yw6pmi.svg"
                        className="w-[100%] md:w-[50%] h-[100%] md:h-[50%] z-100 rounded-xl animate-slideInFromRight"
                        alt="Background"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
