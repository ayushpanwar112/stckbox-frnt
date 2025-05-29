import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.svg";

const Trail = () => {
  const navigator = useNavigate();

  return (
    <div className="relative  flex items-center justify-center overflow-hidden  mb-3 md:mb-0">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96  rounded-full blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Mockup image */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={mockup} 
            alt="App mockup"
            className="w-full max-w-md xl:max-w-xl hover:scale-[1.02] transition-transform duration-300 animate-float lg:block hidden"
            style={{ animationDuration: '8s' }}
          />
        </div>

        {/* Text content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#97ee8c] to-blue-400 bg-clip-text text-transparent">
            Start Your Free Trial
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With Our All-In-One Platform
            </p>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
              Experience seamless trading and stock analysis with professional-grade tools 
              designed for both beginners and experts.
            </p>
          </div>

          <button 
            onClick={() => navigator("/contact-us")}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-full bg-gradient-to-r from-[#e3ff59] to-[#DDEE8C] hover:from-[#d5ff02] hover:to-[#e6c120] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Trail;