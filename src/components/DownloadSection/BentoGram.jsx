import ph1 from "../../assets/Download/BentoGram/ph1.png";
import ph2 from "../../assets/Download/BentoGram/ph2.png";
import ph3 from "../../assets/Download/BentoGram/ph3.png";
import box from "../../assets/Download/BentoGram/box.png";

const BentoGram = () => {

  function redirectToStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|windows/i.test(userAgent)) {
      // Redirect to Google Play Store for Android and Windows users
      window.location.href = "https://play.google.com/store/search?q=stockBox&c=apps&hl=en";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store for iOS users
      window.location.href = "https://apps.apple.com/in/app/stockbox-technologies/id6443554700";
    } else {
      // Optional: Handle other devices
      alert("This app is available on Play Store and App Store.");
    }
  }

  return (
    <div className="w-full px-4 md:px-16 py-12 md:py-24 ">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Experience StockBox on Your Mobile
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Download our mobile app to access real-time market data and insights on the go
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-6">
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl h-64 md:h-80">
            <img 
              src={ph2} 
              alt="StockBox app screenshot 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
          
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl h-64 md:h-80">
            <img 
              src={ph3} 
              alt="StockBox app screenshot 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-6">
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl h-[28rem] md:h-[35rem]">
            <img 
              src={ph1} 
              alt="StockBox app screenshot 3" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
          
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl h-32 md:h-40 bg-gradient-to-r from-orange-500 to-amber-600">
            <img 
              src={box} 
              alt="Download background" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white text-2xl md:text-4xl font-bold tracking-wide hover:scale-105 transition-transform duration-300" onClick={()=>redirectToStore()}>
                TRY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* App Store Badges */}
     
    </div>
  );
};

export default BentoGram;