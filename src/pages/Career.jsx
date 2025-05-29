import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/jobs`);
      setJobs(response.data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between items-center  min-h-screen">
      <div className="flex flex-col justify-center items-center text-center mt-10 w-full px-4">
        <h1 className="font-bold text-5xl md:text-7xl text-white pb-6">Careers</h1>
        <p className="text-lg text-neutral-300 max-w-4xl hidden md:block mb-6">
          At Stockbox, you can take your career to new heights. We believe in providing top-tier products and outstanding customer service, offering unmatched expertise and superior market analysis to keep you ahead of the curve.
        </p>
        <p className="text-lg text-neutral-300 max-w-4xl mb-10">
          At Stockbox, we empower careers with top-tier products and outstanding service. Our partnerships ensure independence, equality, and expert market insights to keep you ahead.
        </p>
      </div>

      



      <div className="w-full max-w-4xl px-4 mb-20">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">Available Positions</h2>
  
  {isLoading ? (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ) : jobs.length > 0 ? (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div 
          key={job._id} 
          className="group bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                  {job.type || 'Full-time'}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{job.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="inline-flex items-center gap-1 text-sm text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.salary}&nbsp;&nbsp;per year
                </span>
                {job.location && (
                  <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                )}
              </div>
            </div>
            
            <a
              href={job.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors self-start md:self-center"
            >
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-12 bg-gray-800 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-gray-400 text-lg mt-4">We're not currently hiring, but check back soon!</p>
    </div>
  )}
</div>

<div className="w-full max-w-4xl px-4 mb-12">
        <Form title="Careers Inquiry" />
      </div>
    </div>
  );
};

export default Careers;