import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const ShowIpos = () => {
  const [ipos, setIpos] = useState([]);
  const [filteredIpos, setFilteredIpos] = useState([]);
  const [upcomingIpos, setUpcomingIpos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todayIpo, setTodayIpo] = useState([]);

  useEffect(() => {
    const fetchIpos = async () => {
      try {
        const ipoRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/company/ipos`);
        setIpos(ipoRes.data);
        setFilteredIpos(ipoRes.data);
      } catch (err) {
        setError('Failed to fetch IPOs. Please try again later.');
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/company`);
        setUpcomingIpos(res.data);
      } catch (err) {
        console.log("Failed to fetch upcoming IPOs");
      }

      try {
        const todayRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/company/list`);
        setTodayIpo(todayRes.data);
      } catch (err) {
        console.error("Error fetching today's IPOs");
      } finally {
        setIsLoading(false);
      }
    };

    fetchIpos();
  }, []);

  useEffect(() => {
    const filtered = ipos.filter(ipo =>
      ipo.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIpos(filtered);
  }, [searchTerm, ipos]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#1A2521]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-800 text-white p-4 rounded-md m-4 max-w-2xl mx-auto">
        <h2 className="font-bold mb-1">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A2521] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-xl p-6 mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-[#ebff86]">📈 Latest IPO Updates</h1>
        <p className="text-lg text-green-200">Track current and upcoming IPOs</p>

        <div className="bg-[#ffffff12] p-4 mt-4 rounded-lg">
          <p className="font-semibold mb-3">Upcoming IPOs:</p>
          <div className="flex flex-wrap gap-2 text-black">
            {upcomingIpos.map((ipo, index) => (
              <span key={index} className="bg-[#ebff86] bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {ipo.upcomingIpos}
              </span>
            ))}
          </div>

          {todayIpo && todayIpo.length > 0 ? (
            todayIpo.map((item) => (
              <div key={item._id} className="mt-4 text-yellow-200 font-medium">
                🚀 IPO listing today:
                <span className="ml-2 text-white underline">
                  {item.ipoListingsToday || "N/A"}
                </span>
              </div>
            ))
          ) : (
            <p className="mt-4 text-gray-400">No IPO listings today.</p>
          )}
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mb-6 mx-auto">
        <input
          type="text"
          placeholder="🔍 Search IPOs by company name..."
          className="w-full px-4 py-3 rounded-md bg-[#2d3b37] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* IPO Table */}
      <div className="overflow-auto rounded-xl shadow-lg bg-[#2d3b37]">
        {filteredIpos.length === 0 ? (
          <div className="p-8 text-center text-gray-300">
            <h3 className="text-lg font-medium mb-2">
              {searchTerm ? `No IPOs found for "${searchTerm}"` : 'No IPOs available'}
            </h3>
            <p>{searchTerm ? 'Try a different search' : 'Check back later for updates.'}</p>
          </div>
        ) : (
          <table className="min-w-full text-left divide-y divide-gray-700">
            <thead className="bg-[#1a1f1c] text-green-300 text-sm ">
              <tr>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Opening Date</th>
                <th className="px-6 py-3">Closing Date</th>
                <th className="px-6 py-3">Listing Date</th>
                <th className="px-6 py-3">Issue Price (₹)</th>
                <th className="px-6 py-3">Issue Amount (Cr.)</th>
                <th className="px-6 py-3">Listing At</th>
                <th className="px-6 py-3">About the IPOs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {filteredIpos.map((ipo) => (
                <tr key={ipo._id} className="hover:bg-[#3b4b46] transition duration-150">
                  <td className="px-6 py-4 font-semibold">{ipo.company}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(ipo.openingDate)}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(ipo.closingDate)}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(ipo.listingDate)}</td>
                  <td className="px-6 py-4 text-sm text-green-300">₹{ipo.issuePrice}</td>
                  <td className="px-6 py-4 text-sm text-green-300">
                    {ipo.issueAmountCr ? `₹${ipo.issueAmountCr}` : 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-sm">{ipo.listingAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {ipo.blogLink ? (
                      <a
                        href={ipo.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-900 hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowIpos;
