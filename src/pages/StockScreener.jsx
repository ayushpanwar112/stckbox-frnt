import art from "../assets/readymade/art.png";
import ready from "../assets/ready/ready.png";
import place from "../assets/ready/place.webp";

const StockScreener = () => {
  return (
    <div className="w-full min-h-screen  px-4 md:px-8 lg:px-16 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative group overflow-hidden rounded-3xl">
          <img 
            src={art} 
            alt="Stock analysis" 
            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-all duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Stock
              </span>
              <span className="text-orange-400">Screener</span>
            </h1>
          </div>
        </div>

        <div className="md:pl-8">
          <h2 className="text-2xl md:text-3xl text-white leading-relaxed font-medium border-l-4 border-orange-500 pl-6">
            Get a competitive edge with a tool that provides in-depth analysis and ratings on every stock listed in Nifty 500,
            giving you the information you need to invest smarter.
          </h2>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="max-w-7xl mx-auto mb-24 grid md:grid-cols-2 gap-12 items-center">
     
        
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stockbox <span className="text-orange-500">Ratings</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Introducing the ultimate tool for every investor and trader in the stock market – 
            our StockboxRating tool! Simplify your investment decisions with comprehensive analysis.
          </p>
          
          <ul className="space-y-6">
            {[
              "Investing made simple with confidence-building tools",
              "User-friendly interface for all experience levels",
              "Comprehensive multi-parameter analysis",
              "Algorithm-powered accurate ratings",
              "Real-time market insights",
              "Data-driven investment decisions"
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-orange-500 text-xl mt-1">▹</div>
                <p className="text-gray-300 flex-1">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <img 
          src={ready} 
          alt="Stock ratings" 
          className="rounded-2xl shadow-xl w-full object-contain" 
        />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Key <span className="text-orange-500">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "FILTER CRITERIA",
              content: "Screen stocks based on 52-week high/low, sector, dividend yield, and more",
              icon: "📊"
            },
            {
              title: "CUSTOMIZABLE SCREENS",
              content: "Create and save custom filters for quick future use",
              icon: "⚙️"
            },
            {
              title: "USER-FRIENDLY INTERFACE",
              content: "Intuitive design for seamless analysis",
              icon: "💻"
            },
            {
              title: "Reliable Data",
              content: "Information from authorized providers",
              icon: "🔒"
            },
            {
              title: "NEWS UPDATES",
              content: "Real-time stock news and insights",
              icon: "📰"
            },
            {
              title: "Cost-Effective",
              content: "Almost free premium features",
              icon: "💰"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-orange-500/20 to-green-500/10 p-8 rounded-3xl">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Achieve Your Investment Goals
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Curated <span className="text-orange-500">Stock Baskets</span>
            </h1>
            <p className="text-lg text-gray-300">
              Professionally managed stock portfolios by our Research Desk
            </p>
          </div>
          
          <button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://stockboxtech.smallcase.com/', '_blank')}
          >
            Discover Baskets →
          </button>
        </div>

        <div className="relative group overflow-hidden rounded-2xl">
          <img 
            src={place} 
            alt="Investment portfolio" 
            className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-all duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50" />
        </div>
      </div>
    </div>
  );
};

export default StockScreener;