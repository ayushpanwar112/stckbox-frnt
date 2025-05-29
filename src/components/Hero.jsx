import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";


const Hero = () => {
    const navigator = useNavigate();
  gsap.registerPlugin(useGSAP);
  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.from(".container11", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });
    t1.from(".container1", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    t1.from(".container2", {
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power2.in",
    });
    t1.from(".container3", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.in",
    });
    gsap.from(".container4", {
      opacity: 0,
      y: 500,
      duration: 0.8,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-[7%]  px-4 sm:px-6 lg:px-8">
     <div className="relative w-[230px] md:w-[300px] h-[30px] md:h-[27px] mb-5 md:mb-0">
  <div className="relative  rounded-full box text-white text-xs md:text-sm flex items-center justify-center h-full w-full">
    Your Money is our responsibility
  </div>
</div>


      <div className="container2 mx-auto px-4">
        <h1
          className="md:text-[80px] text-3xl lg:text-[5vw]  text-center  mx-auto leading-tight text-white  font-bold "
          style={{ fontFamily: "plus-jakarta-sans" }}
        >
          Invest in Your Future, With a
          <span className="md:block">{""} Trusted & SEBI Registered</span>
          <span className="md:block mt-2">{""} Research Analyst</span>
        </h1>
      </div>
      <div className="w-[60%] max-w-[60%] sm:max-w-[80%] lg:max-w-[80%]  mt-4 container3">
        <p className="text-sm sm:text-base md:text-lg text- text-center text-white
          leading-relaxed sm:leading-loose">
          We are a SEBI Registered Research Analyst firm that assists in
          empowering your trading and investment decisions/opportunities with
          best-in-class stock market research and insights, utilizing our
          time-tested algorithmic tools.
        </p>
      </div>
      <button onClick={() => navigator("/Download")}
        className="w-[205px]  px-1  h-[48px] sm:h-[56px] 
          bg-[#ebff86] mt-6 sm:mt-10 text-gray-700
          text-base sm:text-lg font-semibold rounded-2xl 
          hover:bg-[#e4ebc1] transition-colors duration-1000 container4
          font-[plus-jakarta-sans] shadow-lg   drop-shadow-md"
      >
       <div className="flex items-center justify-center gap-3">
        <p className=" font-bold"> Download Now  </p> 
        <svg
  className="w-8 h-8 animate-bounce text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 30 24"
  xmlns="http://www.w3.org/2000/svg"
>
<MdDownloadForOffline className="text-gray-700 h-20 w-40" size={30} />

</svg></div>
        
      </button>
     

    </div>
  );
};

export default Hero;
