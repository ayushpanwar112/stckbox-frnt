import span from "../assets/expert/span.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainScreener from "../components/portfolio/MainContent";
import UspScreener from "../components/portfolio/UspScreener";

const PortfolioScreener = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".main", {
      opacity: 0,
      x: -30,
      duration: 0.9,
      ease: "power2.in",
      stagger: 0.4,
    });

    gsap.from(".main1", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.in",
      stagger: 0.2,
    });
  });

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-16 py-12 overflow-hidden ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="main block mb-4">Portfolio</span>
              <span className="main flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <img
                  src={span}
                  alt=""
                  className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto transition-transform hover:scale-105"
                  aria-hidden="true"
                />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Screener
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            <div className="main1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
                Get a comprehensive evaluation of your portfolio's quality and performance with our
                <span className="font-semibold text-blue-300"> AI-powered analysis tool </span>
                that delivers actionable insights through sophisticated algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <MainScreener />
        <UspScreener />
      </div>
    </div>
  );
};

export default PortfolioScreener;
