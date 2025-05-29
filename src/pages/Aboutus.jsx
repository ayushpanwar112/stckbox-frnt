import { useState, useEffect } from "react";
import mark from "../assets/aboutus/Mark.png";
import Mobile from "../assets/aboutus/SVG/Mobile";

import principal from "../assets/aboutus/principal.png";
import Vision from "../components/AboutSection/Vision";
import { Ball } from "../assets/aboutus/SVG/Ball";
import image from "../assets/aboutus/mobile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import "../components/Css/about.css"

const Aboutus = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full font-[plus-jakarta-sans] overflow-x-hidden ">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] w-full px-4 md:px-8 lg:px-16  ">
        {/* Floating background elements */}
        <motion.div 
          className="absolute left-0 top-0 opacity-70"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Ball className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 md:w-[60%] flex flex-col justify-center h-auto">
          <motion.h2 
            className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-[#ebff86]">Stockbox</span>
          </motion.h2>
          
          <motion.p 
            className="text-[#DBDBDB] text-sm md:text-lg lg:text-xl leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stockbox Technologies is a SEBI-registered research analyst firm that provides in-depth market analysis and actionable investment recommendations to help our clients achieve their financial goals.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h3 className="text-[#ebff86] font-bold mb-2">Our Expertise</h3>
              <p className="text-white text-sm">Cutting-edge analysis of stocks, commodities, and financial instruments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h3 className="text-[#ebff86] font-bold mb-2">Our Promise</h3>
              <p className="text-white text-sm">Helping you make informed decisions for long-term success</p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative z-10 md:w-[40%] flex items-center justify-center md:ml-[10%] mobile">
          {isMobile ? (
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={image} 
                alt="Stockbox mobile" 
                className="w-full max-w-md object-contain"
              />
              <img 
                src={mark} 
                alt="Mark" 
                className="absolute w-[120px] h-[80px] bottom-4 -right-4"
              />
            </motion.div>
          ) : (
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Mobile className="w-full max-w-lg" />
              <img 
                src={mark} 
                alt="Mark" 
                className="absolute w-[190px] h-[120px] top-36 right-0"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 ">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={principal} 
              alt="Principal" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           <div className="w-full max-w-md bg-gradient-to-r from-[#ebff86]/20 to-[#ebff86]/10 rounded-xl p-4 flex items-center gap-4 mb-8 mx-auto lg:mx-0 border border-[#ebff86]/30 backdrop-blur-sm">
  <div className="bg-[#ebff86] p-3 rounded-lg">
    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.9774 1.78711L30.5379 7.23633L42.7645 19.4629L48.2039 14.0234C50.3426 11.8848 50.3426 8.42773 48.2039 6.28906L43.7117 1.78711C41.5731 -0.351562 38.116 -0.351562 35.9774 1.78711ZM28.1258 9.23828L27.2274 9.51172L13.1551 13.7305C11.2117 14.3164 9.66877 15.8008 9.02423 17.7344L0.371889 43.5352C0.000795364 44.6387 0.274233 45.8691 1.08478 46.6992L16.0848 31.709C15.7918 31.0938 15.6258 30.4102 15.6258 29.6875C15.6258 27.0996 17.7254 25 20.3133 25C22.9012 25 25.0008 27.0996 25.0008 29.6875C25.0008 32.2754 22.9012 34.375 20.3133 34.375C19.5906 34.375 18.907 34.209 18.2918 33.916L3.29181 48.916C4.13166 49.7266 5.35236 50.0098 6.45587 49.6289L32.2664 40.9766C34.1903 40.332 35.6844 38.7891 36.2703 36.8457L40.4891 22.7734L40.7528 21.875L28.1258 9.23828Z" fill="white"/>
    </svg>
  </div>
  <h2 className="font-bold text-2xl lg:text-3xl text-white">Principal/Values</h2>
</div>
            
            <ul className="space-y-6 text-white list-none text-base md:text-lg w-full max-w-2xl mx-auto">
              {[
                {
                  title: "INNOVATION",
                  content: "We at Stockbox create original investment ideas based on cutting-edge market research while delivering our clients with speed, flexibility, and cost effectiveness."
                },
                {
                  title: "RELIABILITY",
                  content: "Stockbox make no compromises when it comes to data quality."
                },
                {
                  title: "CONSULTANCY",
                  content: "Stockbox guarantees highest level of research service and attentive observation."
                },
                {
                  title: "TRUST",
                  content: "We will never make promises we can not keep"
                },
                {
                  title: "SOCIAL RESPONSIBILITY",
                  content: "We believe in a better community and every contribution can make a difference. Stockbox is committed to maintaining the highest standards."
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-white/5 to-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <span className="text-[#ebff86] font-bold text-lg">{item.title}</span>
                  <p className="mt-2">{item.content}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Vision Component */}
      <Vision />
    </div>
  );
};

export default Aboutus;