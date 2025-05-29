import apple from "../../assets/Download/apple.png"
import playstore from "../../assets/Download/playStore.png"
import phone from "../../assets/Download/phone.png"
import ring from "../../assets/Download/ring.png"
import "../../components/Css/download.css"
import cards from  "../../assets/Download/card.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {

    gsap.registerPlugin(useGSAP);
    useGSAP(()=>{
     gsap.from(".phone", {
       opacity: 0,
        y:-1000,
       duration: 0.8,
       ease: "power4.out" // Smooth easing for natural growth
     });
     
         gsap.from(".card", {
             opacity: 0,
             x: 70,
             duration: 1.8,
             ease: "elastic.out(1,0.3)",
             stagger: 0.2
           });
           
           gsap.from(".cards", {
             opacity: 0,
             x: -70,
             duration: 1.8,
             ease: "elastic.out(1,0.3)",
             stagger: 0.2
           });
    })


  return (
    <div className="md:mt-20 md:px-20 px-10 mt-4 ">
   <div className="flex w-full justify-center items-center gap-10 md:gap-0">
  <a 
    href="https://apps.apple.com/in/app/stockbox-technologies/id6443554700"
    target="_blank" 
    rel="noopener noreferrer"
    className="flex justify-center items-center w-[50%]"
  >
    <img src={apple} alt="Apple Store" className="md:w-[25%] md:h-[25%] w-[100px]" />
  </a>

  <a 
    href="https://play.google.com/store/search?q=stockBox&c=apps&hl=en" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex justify-center items-center  w-[53%]"
  >
    <img 
      src={playstore} 
      alt="Play Store" 
      className="md:w-[25%] md:h-[15%] w-[100px] cursor-pointer"
    />
  </a>
</div>

    {/* left side cards with phn */}
    <div className="relative mb-[10%] mt-10 md:flex justify-between hidden md:block ">
      <div className="w-[40vh]  flex flex-col card ">
        <img src={cards} alt="no img" className="md:w-[35px] md:h-[35px] lg:w-[3vw] lg:h-[6vh]"/>
        <h1 className="font-bold mb-5 text-[12px] md:text-[2vh] hover:text-orange-500 transition-all duration-900 text-gray-400">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh]">No credit history, credit check, or minimum deposit required.</p>

      </div>
      <div className="">
        <img src={ring} alt="no img" className="absolute -top-[20vh] right-[22vw] w-[48%]   "/>
        <img 
src={phone} 
alt="no img" 
className="absolute top-0 right-[34%] md:w-[28%] float-animation phone "
/>
      </div>
     
      <div className="w-[40vh]  flex flex-col card ">
        <img src={cards} alt="no img" className="md:w-[35px] md:h-[35px] lg:w-[3vw] lg:h-[6vh]"/>
        <h1 className="font-bold mb-5 text-[12px] md:text-[2vh] text-gray-400 hover:text-orange-500">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh]">No credit history, credit check, or minimum deposit required.</p>

      </div>


    </div>
    <div className="md:flex justify-between hidden md:block">
 
    <div className="w-[40vh]  flex flex-col cards ">
        <img src={cards} alt="no img" className="md:w-[35px] md:h-[35px] lg:w-[3vw] lg:h-[6vh]"/>
        <h1 className="font-bold mb-5 text-[12px] md:text-[2vh] text-gray-400 hover:text-orange-500">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh]">No credit history, credit check, or minimum deposit required.</p>

      </div>

 {/* right side card */}
 <div className="w-[40vh]  flex flex-col cards ">
        <img src={cards} alt="no img" className="md:w-[35px] md:h-[35px] lg:w-[3vw] lg:h-[6vh]"/>
        <h1 className="font-bold mb-5 text-[12px] md:text-[2vh] text-gray-400 hover:text-orange-500">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh] ">No credit history, credit check, or minimum deposit required.</p>

      </div>


    </div>
 {/*mobile first page*/}
    <div className="w-full md:hidden mt-5">
        <div className="w-full flex gap-10">
          {/*card1 for mobile*/}
          <div className="w-[60%] ">
          <div className="flex flex-col card ">
        <img src={cards} alt="no img" className=" w-[20px] h-[20px]"/>
        <h1 className="font-bold mb-2 text-[12px] hover:text-orange-500 text-gray-400">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh] ">No credit history, credit check, or minimum deposit required.</p>

      </div>

          </div>
          {/*card2 for mobile*/}
          <div className="w-[60%] ">
          <div className="flex flex-col card ">
        <img src={cards} alt="no img" className=" w-[20px] h-[20px]"/>
        <h1 className="font-bold mb-2 text-[12px] hover:text-orange-500 text-gray-400">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="text-white text-[12px] md:text-[2vh]">No credit history, credit check, or minimum deposit required.</p>

      </div>
          </div>
        </div>
        {/*space for mobile*/}
        <div className="relative h-[40vh]">
          <img src={ring} alt="no ring" className="absolute w-[100vh] -top-20 right-5"/>
         <img src={phone} alt="no image" className="w-[80%] absolute right-10 phone float-animation"/> 
        </div>
        
        {/*space2 for mobile*/}
  
        <div className="w-full flex gap-10">
          {/*card1 for mobile*/}
          <div className="w-[60%] ">
          <div className="flex flex-col card ">
        <img src={cards} alt="no img" className=" w-[20px] h-[20px]"/>
        <h1 className="font-bold mb-2 text-[12px] text-white ">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="font-bold text-[12px] md:text-[2vh] text-gray-400">No credit history, credit check, or minimum deposit required.</p>

      </div>

          </div>
          {/*card2 for mobile*/}
          <div className="w-[60%] ">
          <div className="flex flex-col card ">
        <img src={cards} alt="no img" className=" w-[20px] h-[20px]"/>
        <h1 className="font-bold mb-2 text-[12px] text-white ">Get a secured credit card and bank account in 5 minutes.</h1>
        <p className="font-bold text-[12px] md:text-[2vh] text-gray-400">No credit history, credit check, or minimum deposit required.</p>

      </div>
          </div>
        </div>


    </div>
</div>
  )
}

export default Hero
