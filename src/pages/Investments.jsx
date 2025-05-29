import span from "../assets/expert/span.png";
import pc from "../assets/expert/pc.webp";
import { useNavigate } from "react-router-dom";

const Investments = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen  px-4 md:px-8 lg:px-16 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="flex"> 

       
        <div className="text-center md:text-left mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              FII/DII
            </span>
            <span className="flex flex-col md:flex-row items-center gap-4">
             
              <span className="text-orange-400">Investments</span>
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto md:mx-0">
            Unlock the power of expert investing with personalized stock recommendations, delivered straight to your phone inbox.
          </h2>
          
        </div>
        <img 
                src={span} 
                alt="Market trends" 
                className="w-100 h-auto" 
              />

         </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={pc} 
              alt="Investment dashboard" 
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-all duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50" />
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Analyze the daily activity of domestic and foreign institutional investors in the Indian stock market. Enjoy efficient monitoring and tracking of market trends, aiding in informed investment decisions.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105" onClick={() => navigate("/Download")}>
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key <span className="text-orange-500">Features</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Track Market Movers",
                content: "Monitor actions of big bulls & bears in the market",
                icon: "📈"
              },
              {
                title: "FII & DII Data Access",
                content: "Easily analyze domestic and foreign investor activity",
                icon: "🌐"
              },
              {
                title: "Daily Insights",
                content: "Stay updated on market trends with real-time investment data",
                icon: "🔔"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Investment Strategy?
          </h3>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
           onClick={() => navigate("/Download")}>
            Subscribe Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investments;