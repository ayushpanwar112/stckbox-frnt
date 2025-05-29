import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const InvestPage = () => {


  const [tableData, setTableData] = useState([]);
  const [yearTableData, setYearTableData] = useState([]);

  // ✅ Fetch Data from API on Component Mount
  useEffect(() => {
    fetchTableData();
    fetchTableYearlyData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/table`); // Ensure this is the correct API URL
      setTableData(response.data); // Store fetched data in state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 const fetchTableYearlyData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tableYearly`); // Ensure this is the correct API URL
      setYearTableData(response.data); // Store fetched data in state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


 

  return (
    <div className="container mx-auto p-6 text-white">
    <h1 className="text-2xl font-bold mb-4 text-center">Investor Information</h1>
    
    {/* Vision and Mission */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold my-1">A )Vision and Mission Statements for investors</h2>
      <p><strong className="">Vision:</strong> Invest with knowledge & safety.</p>
      <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
    </section>
    
    {/* Business Details */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold">B ) Details of business transacted by the Research Analyst with respect to the investors.</h2>
      <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
      We publish research reports based on robust and ethical research activities carried out by our organization. All reports are prepared with diligence, ensuring accuracy and relevance for investors.</p>
       <p> <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp; Our research reports and recommendations are independent and free from external influences. We ensure that our views on securities are neutral and unbiased to help investors make informed decisions.</p>
        <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        We conduct an annual audit of our research activities, policies, and procedures to ensure compliance with SEBI regulations. The audit findings are documented, and necessary corrective measures are implemented promptly.</p>
   <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp; We provide clear disclosures of any financial interests or conflicts of interest in the securities that we recommend. These disclosures are prominently included in our reports as per regulatory requirements.</p>
    <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
    All our research recommendations are based on publicly available information and our own observations. We comply with all regulations concerning the use of non-public or sensitive information.</p>
    </section>
    
    {/* Services Provided */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold">C )  Details of grievance redressal mechanism and how to access it</h2>
      
        <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        In case of any grievance / complaint, an investor should approach the concerned research analyst and we shall ensure that the grievance is resolved within 30 days.</p>
        <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
        <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
          With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.
        </p>
      
    </section>
    
    {/* Grievance Redressal */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold">D ) Details of grievance redressal mechanism and how to access it</h2>
      <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        In case of any grievance / complaint, an investor should approach the concerned research analyst and we shall ensure that the grievance is resolved within 30 days.</p>
      <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
    <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
    With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.

    </p>
    </section>
    
    {/* Expectations from Investors */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold">E ) Expectations from the investors (Responsibilities of investors)</h2>
      <h3 className="font-medium">Do’s</h3>
      <ul className="list-disc pl-6">
        <li>Always deal with SEBI registered Research Analysts.</li>
        <li>Check for SEBI registration number.</li>
        <li>
        Ensure that the Research Analyst has a valid registration certificate.</li>
        <li>
        Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14.</li>
       <li>
       Always pay attention towards disclosures made in the research reports before investing.</li>
     <li>
     Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
     <li>
     Before buying securities or applying in public offer, check for the research recommendation provided by your research Analyst.</li>
     <li>
     Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
    <li>
    Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
      </ul>
      <h3 className="font-medium mt-4">Don’ts</h3>
      <ul className="list-disc pl-6">
        <li>Do not provide funds for investment to the Research Analyst.</li>
        <li>
        Don’t fall prey to luring advertisements or market rumours.
        </li>
        <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
       <li>Do not share login credentials and password of your Trading and Demat Account with the Research Analyst.</li>
      </ul>
    </section>
    <div className="w-full">
      <h1 className="w-full text-2xl font-bold text-center">Details of Complaints</h1>
      <p className="text-gray-400">
      Data for the month ending - December 2024</p>
    </div>
 
     <div className="bg-blue-300 h-[5%] p-2 rounded-b-md">
    
 <p>*Inclusive of complaints of previous months resolved in the current month. #Inclusive of complaints pending as on the last day of the month.</p>
   
    </div>
     <h1>
     Trend of monthly disposal of complaints</h1>
    {/* Complaint Data Table */}
    <table className="w-full border-collapse bg-white text-black">
  <thead>
    <tr className="bg-white text-black">
      <th className="border p-2">Sr. No.</th>
      <th className="border p-2">Month</th>
      <th className="border p-2">Carried forward from previous month</th>
      <th className="border p-2">Received</th>
      <th className="border p-2">Resolved</th>
      <th className="border p-2">Pending</th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={index}>
        <td className="border p-2 text-center">{index + 1}</td>
        <td className="border p-2 text-center">{row.month}</td>
        <td className="border p-2 text-center">{row.carriedForward}</td>
        <td className="border p-2 text-center">{row.received}</td>
        <td className="border p-2 text-center">{row.resolved}</td>
        <td className="border p-2 text-center">{row.pending}</td>
      </tr>
    ))}
  </tbody>
</table>


    <section className="mb-6">
      <h2 className="text-lg font-semibold">
      Trend of annual disposal of complaints
</h2>
      <table className="w-full border-collapse bg-white text-black">
        <thead>
          <tr className="bg-white text-black">
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">year</th>
            <th className="border p-2">	Carried forward from previous year</th>
            <th className="border p-2">Received</th>
            <th className="border p-2">Resolved</th>
            <th className="border p-2">Pending</th>
          </tr>
        </thead>
        <tbody>
      {yearTableData.map((row,index) =>(    <tr key={index}>
            <td className="border p-2 text-center">{index}</td>
            <td className="border p-2 text-center">{row.Year}</td>
            <td className="border p-2 text-center">{row.carriedForward}</td>
            <td className="border p-2 text-center">{row.received}</td>
            <td className="border p-2 text-center">{row.resolved}</td>
            <td className="border p-2 text-center">{row.pending}</td>
          </tr>))}
        </tbody>
      </table>
    </section>
    <div className="bg-blue-300 h-[5%] p-2 rounded-b-md">
      <p className="">*Inclusive of complaints of previous years resolved in the current year. #Inclusive of complaints pending as on the last day of the year.</p>
    </div>
    {/* Contact Details */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold my-5">Compliant redressal and scores process</h2>
      <p>
        Client’s queries / complaints may arise due to lack of understanding or a deficiency of 
        service experienced by clients. Deficiency of service may include lack of explanation, 
        clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.</p>
      <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
        Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team on customercare@stockboxtech.com. Alternatively, the Investor may call on 9997098943</p>
      <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
      A letter may also be written with their query/complaint and posted at
       the below mentioned address: Stockbox Technologies Pvt Ltd., 9 Doon Enclave Extension, Near Shimla Bypass road, Dehradun, Uttarakhand 248171</p>
    <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
    Clients can write to the principal officer at Radhey Shyam Chauhan stockboxtech@gmail.com if 
    the Investor does not receive a response within 10 business days of writing to the Client Servicing Team. The client can expect a reply within 10 business days of approaching research analyst.</p>
    <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
  In case you are not satisfied with our response, you can lodge your grievance with SEBI at  
  <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer">http://scores.gov.in</a>  
  or you may also write to any of the offices of SEBI. SCORES may be accessed through the SCORES mobile application as well.  
  The same can be downloaded from the link below:  
  <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" className="text-blue-500" target="_blank" rel="noopener noreferrer">
   &nbsp; Download SCORES Mobile App
  </a>
</p>
    </section>
  </div>
  )
}

export default InvestPage
