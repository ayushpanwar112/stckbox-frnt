import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Stars from "../assets/Stars";
import YellowBlack from "../assets/YellowBlack";
import "./Css/DetailsSection.css"

const DetailsSection = () => {
  const sectionRef = useRef(null);
  const numbersRef = useRef(null);
  const starsRef = useRef(null);
  const experienceRef = useRef(null);
  const mobileNumbersRef = useRef(null);
  const mobileStarsRef = useRef(null);
  const mobileExperienceRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Desktop Numbers animation
    gsap.fromTo(numbersRef.current, 
      { textContent: 0 },
      {
        textContent: 45,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
         // markers: true
        }
      }
    );

    // Desktop Stars animation
    gsap.fromTo(".star",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: starsRef.current,
          start: "top center",
        }
      }
    );

    // Mobile Numbers animation
    gsap.fromTo(mobileNumbersRef.current,
      { textContent: 0 },
      {
        textContent: 45,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".neon-background",
          start: "top center",
        }
      }
    );

    // Mobile Stars animation
    gsap.fromTo(".star",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: mobileStarsRef.current,
          start: "top center",
        }
      }
    );

    // Experience number animations
    const experienceAnim = (ref, value) => {
      gsap.fromTo(ref,
        { textContent: 0 },
        {
          textContent: value,
          duration: 2,
          ease: "power1.inOut",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: ref,
            start: "top center",
          }
        }
      );
    };

    experienceAnim(experienceRef.current, 17);
    experienceAnim(mobileExperienceRef.current, 17);
  }, []);

  return (
    <section>
      {/* for destop */}
    <section ref={sectionRef} className="w-full py-14 px-4 hidden md:block">
      <div className="max-w-[1252px] mx-auto bg-[#1D1C1C] rounded-[25px] md:h-[158px] ">
        <div className="md:flex w-full h-full">
          <div className="w-full justify-center flex items-center h-full text-white">
            <div className="flex flex-col items-center justify-center">
              <p  className="md:text-[32px] font-[plus-jakarta-sans] font-extrabold flex">
             <span ref={numbersRef}>45</span>   
             <span className='flex'>K+</span>
              </p>
              
              <p className="font-[plus-jakarta-sans] text-[32px] font-medium">
                Registered Users
              </p>
            </div>
            <span className="w-[2px] h-[80%] bg-[#7E7E7E] ml-[45.5px]"></span>
          </div>

          <div className="w-full justify-center flex items-center h-full text-white">
            <div ref={starsRef} className="flex flex-col items-center justify-center gap-2">
              <span className="font-[plus-jakarta-sans] font-extrabold flex">
                {[...Array(4)].map((_, index) => (
                  <Stars key={index} className="star" />
                ))}
                <YellowBlack className="star" />
              </span>
              <p className="font-[plus-jakarta-sans] text-[32px] font-medium">
                4.5 Out of 5 Stars
              </p>
            </div>
          </div>

          <div className="w-full justify-center flex items-center h-full text-white">
            <span className="w-[2px] h-[80%] bg-[#7E7E7E] mr-[45.5px]"></span>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[32px] font-[plus-jakarta-sans] font-extrabold flex items-center">
                <span ref={experienceRef}>17</span>
                <span className="ml-1">+</span>
              </p>
              <p className="font-[plus-jakarta-sans] text-[32px] font-medium">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

   {/* for mobile */}
   <section className="md:hidden w-full py-8 px-4">
  <div className="bg-[#1D1C1C] rounded-xl p-6 w-[85%] mx-auto neon-background">
    <h2 className="text-lg font-[plus-jakarta-sans] text-[#7E7E7E] font-bold mb-8 text-center">
      We take Our Number 1
    </h2>

    {/* Registered Users */}
    <div className="flex flex-col items-center mb-8">
      <p className="text-2xl font-[plus-jakarta-sans] font-extrabold flex items-center text-white">
        <span ref={mobileNumbersRef}>45</span>
        <span className="ml-1">K+</span>
      </p>
      <p className="text-lg font-[plus-jakarta-sans] text-white mt-2">
        Registered Users
      </p>
    </div>

    {/* Stars Rating */}
    <div ref={mobileStarsRef} className="flex flex-col items-center mb-8">
      <span className="font-[plus-jakarta-sans] font-extrabold flex gap-1">
        {[...Array(4)].map((_, index) => (
          <Stars key={index} className="star w-6 h-6" />
        ))}
        <YellowBlack className="star w-6 h-6" />
      </span>
      <p className="text-lg font-[plus-jakarta-sans] text-white mt-2">
        4.5 Out of 5 Stars
      </p>
    </div>

    {/* Experience */}
    <div className="flex flex-col items-center">
      <p className="text-2xl font-[plus-jakarta-sans] font-extrabold flex items-center text-white">
        <span ref={mobileExperienceRef}>17</span>
        <span className="ml-1">+</span>
      </p>
      <p className="text-lg font-[plus-jakarta-sans] text-white mt-2">
        Years Of Experience
      </p>
    </div>
  </div>
</section>



    </section>
  );
};

export default DetailsSection;
