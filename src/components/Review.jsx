import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import "./review.css";

const Review = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/review`);
        const filteredReviews = res.data
          .filter((review) => review.score >= 4)
          .map((review) => ({
            ...review,
            text: review.text.split(" ").length > 30 
              ? `${review.text.split(" ").slice(0, 30).join(" ")}...`
              : review.text,
          }));
        setData(filteredReviews);
        setTimeout(() => setLoaded(true), 100);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const renderStars = (score) => {
    return "★".repeat(score) + "☆".repeat(5 - score);
  };

  return (
    <div className={`w-full px-4 md:py-12 transform transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto">
        <h2 className="text-center mb-10 sm:mb-14">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[plus-jakarta-sans] relative pb-2
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
            after:w-20 sm:after:w-24 after:h-1 after:bg-[#ebff86]
            after:transition-all after:duration-500 after:hover:w-full">
            Client Testimonials
          </span>
        </h2>

        {data.length > 0 && (
          <div className="space-y-6 sm:space-y-10">
            {/* Mobile-only single marquee */}
            <div className="block sm:hidden">
              <Marquee 
                speed={30}
                pauseOnHover
                gradient={false}
                className="gap-4 py-2"
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800 w-64 h-44 p-4 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 relative overflow-hidden mx-2
                    transform hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-400/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 animate-float">
                        <div className="w-10 h-10 rounded-full overflow-hidden shadow-md
                          transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={item.userImage}
                            alt={item.userName}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://source.unsplash.com/100x100/?portrait';
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1 truncate max-w-[120px] 
                          transition-all group-hover:text-[#ebff86]">
                          {item.userName}
                        </h3>
                        <div className="text-[#ebff86] text-sm transition-transform group-hover:scale-105">
                          {renderStars(item.score)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4 
                      transition-transform group-hover:translate-x-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Desktop double marquee */}
            <div className="hidden sm:block">
              <Marquee 
                speed={40}
                pauseOnHover
                gradient={false}
                className="gap-6 py-2"
              >
                {data.concat(data).map((item, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800 w-72 h-52 p-6 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-500 relative overflow-hidden mx-3
                    transform hover:-translate-y-2 hover:scale-[1.02] 
                    animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-400/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 animate-float">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md
                          transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={item.userImage}
                            alt={item.userName}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://source.unsplash.com/100x100/?portrait';
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 
                          transition-all group-hover:text-[#ebff86]">
                          {item.userName}
                        </h3>
                        <div className="text-[#ebff86] text-sm tracking-wide 
                          transition-transform group-hover:scale-105">
                          {renderStars(item.score)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 
                      transition-transform group-hover:translate-x-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </Marquee>

              <Marquee 
                speed={45}
                direction="right"
                pauseOnHover
                gradient={false}
                className="gap-6 py-2 mt-6"
              >
                {data.concat(data).reverse().map((item, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800 w-72 h-52 p-6 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-500 relative overflow-hidden mx-3
                    transform hover:-translate-y-2 hover:scale-[1.02]
                    animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-amber-400/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 animate-float">
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-md
                          transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={item.userImage}
                            alt={item.userName}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://source.unsplash.com/100x100/?portrait';
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 
                          transition-all group-hover:text-amber-400">
                          {item.userName}
                        </h3>
                        <div className="text-amber-400 text-sm tracking-wide 
                          transition-transform group-hover:scale-105">
                          {renderStars(item.score)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 
                      transition-transform group-hover:translate-x-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;