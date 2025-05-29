import team from "../../assets/aboutus/founder.png";
import cofond from "../../assets/aboutus/cofounder.png";
import manager from "../../assets/aboutus/manager.png";
import coo from "../../assets/aboutus/coo.png";
import ResearchHead from "../../assets/aboutus/ResearchHead.png";
import "../Css/management.css"

const Management = () => {
  return (
    <div className="min-h-screen w-full  md:py-20 px-4 md:px-10 lg:px-20 mt-[35vh] md:mt-0">
      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-32 md:mb-40 relative z-10">
        <div className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ebff86] mb-4">Founder</h2>
       {/*    <h3 className="text-xl text-gray-300 mb-6">Mr. R S Chauhan</h3> */}
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              NISM Certified Research Analyst with 17+ years in the financial sector.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              M.Com & MBA in Marketing & Finance.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Innovator & trainer focused on educating retail investors.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Integrates AI, research, and risk management for trading models.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Key contributor to technology-driven solutions at Stockbox.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4  rounded-lg opacity-75"></div>
            <img
              src={team}
              alt="Founder - Mr. R S Chauhan"
              className="relative w-full max-w-md h-auto rounded-lg "
            />
            <h3 className="text-[28px] mt-3 font-bold text-gray-300 mb-6 text-center">Mr. R S Chauhan</h3>
          </div>
        </div>
      </div>

      {/* Co-Founder & CEO Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-32 md:mb-40  bg-opacity-50 p-8 rounded-xl">
        <div className="md:w-1/2 order-2 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ebff86] mb-4">Co-Founder & CEO</h2>
          
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Doctorate in Engineering (Design) from IIT (BHU), Varanasi.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              NISM Certified Research Analyst.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Oversees company operations, strategy execution & digital marketing.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Committed to enhancing customer experience at Stockbox.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-4  rounded-lg blur opacity-75"></div>
            <img
              src={cofond}
              alt="Co-Founder & CEO - Dr. Shushant Singh"
              className="relative w-full max-w-md h-auto rounded-lg  transform scale-x-[-1]"
            />
            <h3 className="text-[28px] mt-3 font-bold text-gray-300 mb-6 text-center">Dr. Shushant Singh</h3>
          </div>
        </div>
      </div>

      {/* HR Manager Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-32 md:mb-40">
        <div className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ebff86] mb-4">HR Manager</h2>
          
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Postgraduate in Marketing & HR from ICFAI University.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              10+ years of experience in financial markets.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Expert in investment techniques & digital marketing outreach.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4  rounded-lg blur opacity-75"></div>
            <img
              src={manager}
              alt="HR Manager - Dolly Singh"
              className="relative w-full max-w-md h-auto rounded-lg "
            />
            <h3 className="text-[28px] mt-3 font-bold text-gray-300 mb-6 text-center">Dolly Singh</h3>
          </div>
        </div>
      </div>

      {/* Research Head Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-32 md:mb-40  bg-opacity-50 p-8 rounded-xl">
        <div className="md:w-1/2 order-2 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ebff86] mb-4">Senior Research Analyst & Research Head</h2>
          
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              FRM Charter (GARP, USA) | EPAT (Quantinsti) | NISM Certified.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              8+ years in capital market research & advisory.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Guest market expert on Zee Business & speaker at ICAI & academic institutions.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Skilled in technical & fundamental analysis.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-4  rounded-lg blur opacity-75"></div>
            <img
              src={ResearchHead}
              alt="Research Head - Mr. Siddhart Rai Mangla"
              className="relative w-full max-w-md h-auto rounded-lg transform scale-x-[-1]"
            />
            <h3 className="text-[28px] mt-3 font-bold text-gray-300 mb-6 text-center">Mr. Siddhart Rai Mangla</h3>
          </div>
        </div>
      </div>

      {/* COO Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ebff86] mb-4">COO</h2>
          <ul className="space-y-3 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              NISM Certified Research Analyst with 5+ years of trading experience.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Background in Commerce & CA (Intermediate).
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Worked with international blockchain startups in operations & fundraising.
            </li>
            <li className="flex items-start">
              <span className="text-[#ebff86] mr-2">•</span>
              Key contributor to marketing & sales strategies at Stockbox.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4  rounded-lg blur opacity-75"></div>
            <img
              src={coo}
              alt="COO"
              className="relative w-full max-w-md h-auto rounded-lg "
            />
               <h3 className="text-[28px] mt-3 font-bold text-gray-300 mb-6 text-center">Vishal Sharma</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;