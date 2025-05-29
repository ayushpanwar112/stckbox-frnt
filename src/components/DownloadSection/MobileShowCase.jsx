import mobile from "../../assets/Download/ShowCase/mobile.png";
import div from "../../assets/Download/ShowCase/div.png";
import apple from "../../assets/Download/apple.png"
import playStore from "../../assets/Download/playStore.png"
import ball1 from "../../assets/Download/ShowCase/ball1.png";
import ball2 from "../../assets/Download/ShowCase/ball2.png";
import "../../components/Css/download.css"

const MobileShowCase = () => {
  return (
    <div className="w-full md:h-screen h-[70vh]  md:mt-[20vh] relative top-[130px] md:top-0 overflow-hidden mobile">
        <div className="w-full">
             <a 
               href="https://apps.apple.com/in/app/stockbox-technologies/id6443554700"
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center w-[70%] absolute -mt-1 md:mt-0 z-50"
             >
               <img src={apple} alt="Apple Store" className="md:w-[20%] md:h-[25%] w-[100px]" />
             </a>
        </div>
 <div className="w-full flex justify-center ">
    <img src={mobile} alt="no image" className=" md:w-[55vw]  rounded-sm absolute z-10 w-full md:top-0 sm:-top-[20]"/>
 </div>
 <div className="md:w-full flex  absolute md:h-[100%] md:-top-15 ">
    <img src={div} alt="no image" className=" w-full h-full z-[5] "/>
    <a 
        href="https://play.google.com/store/search?q=stockBox&c=apps&hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex justify-center items-center  w-[80%] absolute md:top-[50%] left-[30%] z-30 top-[40%]"
      >
        <img src={playStore} alt="no image" className="w-[40%] md:w-[20%] "/>
      </a>
   
 </div>
 <div className="absolute flex w-full justify-between top-[59%]  z-10 ">
 <img src={ball2} alt="no image" className="w-[20%] h-[25%] ball"/> 
 <img src={ball1} alt="no image" className="w-[9%] h-[9%] ball1"/>
 </div>
    </div>
  )
}

export default MobileShowCase
