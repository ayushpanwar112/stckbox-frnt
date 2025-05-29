import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mobile from "../../assets/expert/mobile.webp";

gsap.registerPlugin(ScrollTrigger);

const UspScreener = () => {
  useGSAP(() => {
    gsap.from(".usp-point", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".usp-content",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="flex flex-col md:flex-row items-center mt-20 px-4 md:px-[8vw] gap-10 md:gap-[10vw] w-full usp">
      {/* Text content */}
      <div className="text-white text-[14px] md:text-lg md:w-1/2 w-full usp-content">
        <h2 className="font-bold text-xl md:text-2xl mb-4">A few of the USPs of the tool are:</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li className="usp-point">Generates a portfolio’s evaluation report.</li>
          <li className="usp-point">Suggests selling of underwhelming stocks.</li>
          <li className="usp-point">Suggests buying substitute stocks with better credentials.</li>
          <li className="usp-point">Shows final report after the changes are made in the portfolio.</li>
          <li className="usp-point">Easy to use, requires only a few steps.</li>
          <li className="usp-point">Produces an evaluation report quickly.</li>
          <li className="usp-point">Free from personal bias and emotions, as the tool is based on algorithms.</li>
          <li className="usp-point">Analysis is purely based on logic and calculation due to absence of human intervention.</li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={mobile} alt="mobile view" className="w-[80%] md:w-full max-w-[400px]" />
      </div>
    </div>
  );
};

export default UspScreener;
