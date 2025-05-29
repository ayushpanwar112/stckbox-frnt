import paper from "../assets/portfoliohedger/paper.png";
import headge from "../assets/portfoliohedger/headge.webp";
import headge1 from "../assets/portfoliohedger/headge1.webp";

const PortfolioHedger = () => {
  return (
    <div className="w-full min-h-screen  px-4 md:px-8 lg:px-16 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16 md:mb-24">


        
        <div className="relative group overflow-hidden rounded-3xl order-2 md:order-1">
          <img 
            src={paper} 
            alt="Portfolio protection" 
            className="w-full h-[400px] object-fill transform group-hover:scale-105 transition-all duration-300" 
          />
          <div className="" />
        </div>

        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="text-orange-400">Hedger</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Advanced risk management for sophisticated investors
          </p>
        </div>
      </div>

      {/* Protection Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
      
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent Portfolio Protection
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Get peace of mind knowing your investments are protected with our 
            advanced risk management algorithms designed to mitigate drawdown 
            risks and maximize portfolio stability.
          </p>
        </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={headge} 
            alt="Risk management" 
            className="w-full h-[400px] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
        </div>

      </div>

      {/* Advantages Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">

<div className="hidden md:block relative overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={headge1} 
            alt="Hedging benefits" 
            className="w-full h-[500px] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60" />
        </div>
        
        <div className="md:hidden">
          <img 
            src={headge1} 
            alt="Hedging benefits" 
            className="rounded-2xl shadow-xl w-full h-[300px] object-cover" 
          />
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Key Advantages
          </h3>
          
          <div className="grid gap-6">
            {[
              {
                title: "Portfolio Protection",
                content: "Shields against significant losses using advanced algorithms",
                icon: "🛡️"
              },
              {
                title: "Emotion-Free Decisions",
                content: "Algorithm-driven objective risk management",
                icon: "🧠"
              },
              {
                title: "Market Fear Advantage",
                content: "Optimized performance during market volatility",
                icon: "📉"
              },
              {
                title: "Statistical Hedging",
                content: "Sophisticated calculations for optimal coverage",
                icon: "📊"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{advantage.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-400">{advantage.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default PortfolioHedger;