
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainContent from "../components/expert/MainContent";
import USP from "../components/expert/USP";
import { useNavigate } from "react-router-dom";

const ExpertAdvice = () => {
  const navigator = useNavigate();

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // Hero section animations
    gsap.from(".hero-heading", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2
    });

    gsap.from(".rocket", {
      opacity: 0,
      scale: 0.8,
      y: 60,
      rotation: -15,
      duration: 1.2,
      ease: "back.out(1.7)"
    });

    gsap.from(".hero-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4
    });

    // Continuous rocket animation
    gsap.to(".rocket", {
      y: 10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  return (
    <div className="container lg:mx-10 mx-auto  md:px-8    overflow-x-hidden">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-20  relative md:mt-10">
        {/* Gradient Background */}
        <div className="absolute inset-0  rounded-3xl -z-10" />
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-start ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
            <span className="hero-heading block mb-4">Expert</span>
            <span className="hero-heading flex items-center gap-4 md:gap-6">
            
              <span className="relative">
                Advice
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full" />
              </span>
            </span>
          </h1>
        </div>

        {/* Rocket Section */}
        <div className="flex flex-col items-center md:items-end  space-y-8">
         
          <div className="hero-text  text-white max-w-md">
            <h2 className="text-2xl md:text-3xl leading-tight font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unlock the power of expert investing with personalized stock recommendations, 
              delivered straight to your phone inbox.
            </h2>
            <button
              onClick={() => navigator("/report")}
              className="group relative bg-gradient-to-br from-[#ddff32] to-[#ebff86] hover:from-[#ebff86] hover:to-[#d4ff00]
                        text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:shadow-purple-500/30
                        transform transition-all duration-300 hover:-translate-y-1 mt-10  "
            >
              <span className="relative z-10 text-black">Get the Performance Report</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      
        <MainContent />
      <USP /> 
     
     
    </div>
  );
};

export default ExpertAdvice;