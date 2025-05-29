import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import mobile from "../../assets/expert/mobile.webp";

const USP = () => {
  const containerRef = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".usp-item", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".usp-section",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="usp-section mt-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Text Section */}
      <div className="text-white text-lg md:w-1/2 w-full space-y-6">
        <h2 className="font-bold text-3xl mb-4 usp-item">Why Choose Us?</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li className="usp-item">Credentials and Experience</li>
          <li className="usp-item">Investment Philosophy</li>
          <li className="usp-item">Accessibility and Availability</li>
          <li className="usp-item">Reputation</li>
          <li className="usp-item">Risk Management</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-[30%] hidden md:block">
        <img
          src={mobile}
          alt="Mobile Interface"
          className="w-[90%] rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default USP;
