
import broker from "../assets/brokerspng/broker"

import Marquee from "react-fast-marquee";


const Brokers = () => {
  
  return (
    <div className="md:mt-[40vh] mb-[10%] relative mt-[10vh]">
      <div className="absolute left-0 top-0 w-[100px] h-full  z-10"></div>
      <div className=" overflow-hidden ">
 <h1 className="md:text-[4rem] lg:text-[7vh] text-white text-center text-3xl">Easy One Tap Execution</h1>
 <p className="md:text-[2rem] lg:text-[3vh] text-[#909090] text-center text-sm">We Support 16 brokers</p>
 <div className="fle flex-col h-[40%] mt-10">
   {/* first row */}
   <div className="flex  md:gap-30   gap-10 ">
   <Marquee 
              className="flex flex-row gap-10 md:gap-10" 
              speed={30} 
              pauseOnHover={true}
              gradient={false}
            >
      {broker().map((item, key) => (
        <img 
          src={item} 
          alt={`Image ${key + 1}`} 
          className="md:w-[10vh] md:h-[10vh] w-[50px] h-[50px] object-cover md:mx-7" 
          key={key} 
        />
      ))}
      </Marquee>
    </div>
{/* second row */}
    <div className="flex  md:gap-30   mt-10 gap-10">

    <Marquee 
              className="flex flex-row gap-10 md:gap-10" 
              speed={30} 
              pauseOnHover={true}
              gradient={false}
              direction="right"
            >

      {broker().map((item, key) => (
        <img 
          src={item} 
          alt={`Image ${key + 1}`} 
          className="md:w-[10vh] md:h-[10vh] w-[50px] h-[50px] object-cover md:mx-7" 
          key={key} 
        />
      ))}
      </Marquee>
    </div>

 </div>
      </div>
   
    </div>
  )
}

export default Brokers








