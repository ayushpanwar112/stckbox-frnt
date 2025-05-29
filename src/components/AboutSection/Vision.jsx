import graphic from"../../assets/aboutus/graphic.png"
import stock from "../../assets/aboutus/stock.png"
import { Ball2, Ball3 } from "../../assets/aboutus/SVG/Ball"
import Design from "../../assets/aboutus/SVG/Design"

import Management from "./Management"
import "../Css/vision.css"


const Vision = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">

 
   <div className=" w-full h-auto  flex mt-25  overflow-x-hidden">  
          <Design className="absolute left-0 top-0"/>  
           <div className=" flex flex-col relative overflow-x-hidden">
             
           <div className="w-full max-w-md bg-gradient-to-r from-[#ebff86]/20 to-[#ebff86]/10 rounded-xl p-4 flex items-center gap-4 mb-8 mx-auto lg:mx-0 border border-[#ebff86]/30 backdrop-blur-sm">
  <div className="bg-[#ebff86] p-3 rounded-lg">
    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.9774 1.78711L30.5379 7.23633L42.7645 19.4629L48.2039 14.0234C50.3426 11.8848 50.3426 8.42773 48.2039 6.28906L43.7117 1.78711C41.5731 -0.351562 38.116 -0.351562 35.9774 1.78711ZM28.1258 9.23828L27.2274 9.51172L13.1551 13.7305C11.2117 14.3164 9.66877 15.8008 9.02423 17.7344L0.371889 43.5352C0.000795364 44.6387 0.274233 45.8691 1.08478 46.6992L16.0848 31.709C15.7918 31.0938 15.6258 30.4102 15.6258 29.6875C15.6258 27.0996 17.7254 25 20.3133 25C22.9012 25 25.0008 27.0996 25.0008 29.6875C25.0008 32.2754 22.9012 34.375 20.3133 34.375C19.5906 34.375 18.907 34.209 18.2918 33.916L3.29181 48.916C4.13166 49.7266 5.35236 50.0098 6.45587 49.6289L32.2664 40.9766C34.1903 40.332 35.6844 38.7891 36.2703 36.8457L40.4891 22.7734L40.7528 21.875L28.1258 9.23828Z" fill="white"/>
    </svg>
  </div>
   <h2 className="font-bold lg:text-[30px] text-[20px] text-white"><span>Vision </span>& Mission</h2>
</div>

          
               <p className=" mt-5 space-y-2 text-white list-none lg:text-[16px] md:w-[60%] w-[80%] relative z-10">
               Our vision is to be the leading provider of comprehensive, data-driven stock market research and analytics that empowers investors with the insights and knowledge they need to make informed investment decisions. We aim to deliver innovative solutions and cutting-edge technology, coupled with our team’s deep expertise and commitment to excellence, to drive superior outcomes for our clients. Through our relentless focus on delivering actionable insights and exceptional customer service, we aspire to be the trusted partner of choice for investors seeking to maximize their returns in the dynamic world of stock market investing.
               
               </p>
                <img src={graphic} className="absolute md:right-[25%] md:top-[25%] -bottom-20 right-[10%]"/>
             </div>
              
               <img src={stock} alt="no img" className="w-[26%] z-10  hidden md:block"/>
             
         </div>
         
         <div className="">
          
        
       
         <div className="management-title">
  <h2 className="neon-text">
    <span className="neon-underline text-center w-full">
      Meet The Management Team
    </span>
  </h2>
</div>
       {/*blue topp fund */}
        <div className="absolute   z-10 top-[78em] ball1 hidden lg:block">
          <Ball3 className=""/>
        </div>
        {/*  orange ceo */}
        <div className="absolute  md:right-[10%]  ball hidden lg:block">
          <Ball2 className="ball " />
        </div>
        {/*  orng senior*/}
        <div className="absolute  z-10 top-[150em] ball1 hidden lg:block">
          <Ball3 className=""/>
        </div>


               {/* hr blue */}
        <div className="absolute  ball top-[130em]  right-0 hidden lg:block">
          <Ball2 className="" />
        </div>
        <div className="absolute  left-0 top-[190em]  z-10  ball1 hidden lg:block">
          <Ball3 className=""/>
        </div>
      </div>
         <Management/>
         
        
        
         </div>
  )
}

export default Vision
