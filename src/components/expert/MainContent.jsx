import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import man from "../../assets/expert/man.png";

const MainContent = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(".man", {
      rotation: [10, -10], // Rotates from 10° to -10°
      y: 10,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".para", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.in",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".para", // Element to trigger the animation
        start: "50% 80%", // Animation starts when `.para` reaches 80% of the viewport height
        end: "top 50%", // Animation ends when `.para` reaches 50% of the viewport
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="mainContent md:flex  items-center ml-[2em] md:ml-0 ">
      <div className=" w-full">
        <img src={man} alt="" className="w-[80%] man" />
      </div>
      <div className="md:w-1/2 text-white text-lg para w-[90%]">
  {/* Desktop view */}
  <ul className="md:block hidden list-disc pl-5 space-y-2">
    <li>
      <span className="font-bold text-amber-100">Smart Investing Made Easy:</span> No need to track market trends—our tool does it for you!
    </li>
    <li>
      <span className="font-bold text-amber-100">Expert Stock Picks:</span> Get curated stock recommendations directly on your smartphone.
    </li>
    <li>
      <span className="font-bold text-amber-100">Perfect for All Investors:</span> Ideal for both beginners and experienced traders.
    </li>
    <li>
      <span className="font-bold text-amber-100">Timely & Reliable:</span> Receive expert-backed insights for informed decisions.
    </li>
    <li>
      <span className="font-bold text-amber-100">Customizable & User-Friendly:</span> Set preferences based on your investment goals.
    </li>
    <li>
      <span className="font-bold text-amber-100">Maximize Returns, Save Time:</span> Focus on profits while we handle the research.
    </li>
    <li>
      <span className="font-bold text-amber-100">Join & Invest Smarter:</span> Subscribe now for high-growth stock recommendations!
    </li>
  </ul>

  {/* Mobile view */}
  <ul className="text-[12px] md:hidden mt-10 list-disc pl-5 space-y-2">
    <li>
      <span className="font-bold text-amber-100">Smart Investing Made Easy:</span> No need to track market trends—our tool does it for you!
    </li>
    <li>
      <span className="font-bold text-amber-100">Expert Stock Picks:</span> Get curated stock recommendations directly on your smartphone.
    </li>
    <li>
      <span className="font-bold text-amber-100">Perfect for All Investors:</span> Ideal for both beginners and experienced traders.
    </li>
    <li>
      <span className="font-bold text-amber-100">Timely & Reliable:</span> Receive expert-backed insights for informed decisions.
    </li>
    <li>
      <span className="font-bold text-amber-100">Customizable & User-Friendly:</span> Set preferences based on your investment goals.
    </li>
    <li>
      <span className="font-bold text-amber-100">Maximize Returns, Save Time:</span> Focus on profits while we handle the research.
    </li>
    <li>
      <span className="font-bold text-amber-100">Join & Invest Smarter:</span> Subscribe now for high-growth stock recommendations!
    </li>
  </ul>
</div>

    </div>
  );
};

export default MainContent;