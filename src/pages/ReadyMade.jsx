import art from "../assets/readymade/art.png";
import ready from "../assets/ready/ready.png";
import place from "../assets/ready/place.webp";

const ReadyMade = () => {
  return (
    <div className="ready-made w-full h-full px-4 md:px-8 lg:px-16 py-12 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative group">
          <img 
            src={art} 
            alt="Investment art" 
            className="rounded-3xl object-cover w-full h-[400px] shadow-xl" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-3xl" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="block mb-2">Ready</span>
              <span className="flex items-center gap-4">
                <span className="text-orange-400">Stockbox</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="md:pl-8">
          <h2 className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
            Get a competitive edge in the market with a tool that provides access to meticulously managed baskets of stocks, 
            ensuring optimal performance based on time-tested investment models.
          </h2>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto mb-24 grid md:grid-cols-2 gap-12 items-center">
      
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Stockbox’s Wizard Box/Readymade Stockbox allows users to access our specially curated basket of stocks. 
            These readymade baskets are diligently managed by the Stockbox research team using time-tested investment models.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We have tailored different baskets of stocks that are re-balanced and updated as per the change in the market trends 
            at every fixed interval. Our goal is to maximize clients’ returns with flexible and adaptive long-term investment strategies.
          </p>
        </div>
  <img 
          src={ready} 
          alt="Stockbox interface" 
          className="rounded-2xl shadow-xl w-full object-contain" 
        />

      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mb-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            title: "Transparency",
            content: "Clear insights on performance, holdings, and fees for informed decisions.",
            icon: "🔍"
          },
          { 
            title: "Expert Monitoring",
            content: "SEBI-registered professionals track and adjust stock baskets based on market trends.",
            icon: "👨💼"
          },
          { 
            title: "Research-Driven",
            content: "Curated using top-quality research and investment strategies by SEBI-registered experts",
            icon: "📈"
          },
          { 
            title: "Control & Flexibility",
            content: "Integrated with broking accounts for real-time tracking, easy withdrawals, and auto-rebalancing",
            icon: "🎛️"
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.content}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-9xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-orange-500/20 to-green-500/10 p-8 rounded-3xl">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Achieve your investment goals with
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Curated Stock Baskets
            </h1>
            <p className="text-lg text-gray-300">
              Smallcases are curated baskets of stocks that are managed by stockbox Research Desk.
            </p>
          </div>
          
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://stockboxtech.smallcase.com/', '_blank')}
          >
            Discover Baskets →
          </button>
        </div>

        <div className="relative group">
          <img 
            src={place} 
            alt="Investment chart" 
            className="rounded-2xl shadow-xl w-full h-[300px] object-cover transform group-hover:scale-95 transition-all duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ReadyMade;