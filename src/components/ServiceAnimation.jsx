import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import handPhone from "../assets/handphone.png";
import backLight from "../assets/backlight.png";
import phoneReplace from "../assets/phoneReplace.png";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faChartLine, 
  faBookOpen, 
  faClipboardCheck, 
  faUsers, 
  faShieldAlt, 
  faCogs 
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ServiceAnimation= () => {
  const Data = {
    Set1: {
      icons: [
        faLightbulb,
        faChartLine,
        faBookOpen,
      ],
      titles: [
        "Knowledge and Expertise",
        "Comprehensive Market Coverage",
        "Investment Strategy",
      ],
      infos: [
        "Stockbox analysts have deep expertise in the stock market, investment strategies, and financial analysis, backed by strong education and experience.",
        "We provide extensive market and sector coverage, aligning with clients’ investment goals through in-depth analysis and trend evaluation.",
        "Our approach is scientific, relying on disciplined, systematic investment strategies rather than speculation or market hype.",
      ],
    },
    Set2: {
      icons: [
        faClipboardCheck,
        faUsers,
        faShieldAlt,
        faCogs,
      ],
      titles: [
        "In-depth Analysis and Insights",
        "Access to the Team",
        "Track Record",
        "Customizable Solutions",
      ],
      infos: [
        "Beyond data, our research includes insightful analysis and interpretations, helping investors make informed decisions and stay ahead.",
        "We offer customized research solutions tailored to individual investment needs, ensuring personalized support and guidance.",
        "Our analysts have a proven track record of delivering accurate and profitable investment recommendations.",
        "We provide clear, concise communication and personal support, ensuring expert guidance on investments and portfolio management.",
      ],
    },
  };

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const [GapBtwSection, setGapBtwSection] = useState(100);

  useGSAP(() => {
    gsap.from(".service-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="min-h-screen  md:py-20 px-4 ">
      {/* Desktop View */} 
      <h2 className="text-center text-white text-[4em] hidden lg:block pb-10">Trusted by Thousands of Investors</h2>
      <div className="hidden lg:flex max-w-7xl mx-auto">
        
        {/* Left Column */}
        <div className="w-1/2 sticky top-20 h-[calc(100vh-160px)] flex items-center justify-center">
       
          <div className="relative w-full max-w-xl">
            <motion.h1 
              className="service-title text-4xl font-bold text-center mb-8  bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            
            </motion.h1>
            
            <div className="relative">
              <img 
                src={backLight} 
                alt="background" 
                className="absolute inset-0 w-full opacity-40 animate-pulse-slow" 
              />
              <img
                src={handPhone}
                className="relative z-10 w-full"
                alt="Smartphone mockup"
              />
              <img
                src={phoneReplace}
                className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] phoneReplace"
                alt="Screen content"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-16 space-y-24 pt-20">
          {Object.keys(Data).map((key, index) => (
            <motion.div 
              key={index}
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
            >
              {Data[key].titles.map((title, titleIndex) => (
                <motion.div 
                  key={titleIndex}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-[#e6ff6a] to-[#cef702] hover:bg-[#DDEE8C] transition-all duration-300 shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: titleIndex * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-[#8a8888] to-[black] group-hover:rotate-[15deg] transition-transform">
                      <FontAwesomeIcon 
                        icon={Data[key].icons[titleIndex]} 
                        className="text-white text-2xl" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-700 mb-3">
                        {title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {Data[key].infos[titleIndex]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden max-w-3xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trusted by Thousands of Investors
        </motion.h1>

        <div className="space-y-12 px-4">
          {Object.keys(Data).map((key, index) => (
            <div key={index} className="space-y-8">
              {Data[key].titles.map((title, titleIndex) => (
                <motion.div
                  key={titleIndex}
                  className="p-6 rounded-xl bg-gray-800 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: titleIndex * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-[#9812db]">
                      <FontAwesomeIcon 
                        icon={Data[key].icons[titleIndex]} 
                        className="text-white text-xl" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                        {title}
                      </h3>
                      <p className="text-neutral-400 text-sm">
                        {Data[key].infos[titleIndex]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceAnimation;