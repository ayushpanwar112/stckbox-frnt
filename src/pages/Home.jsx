import { useState, useEffect } from "react";
import Brokers from "../components/Brokers";
import Card from "../components/Card";
import DetailsSection from "../components/DetailsSection";
import Hero from "../components/Hero";
import Review from "../components/Review";
import ServiceAnimate from "../components/ServiceAnimation";
import purple from "../assets/purple.png";
import Trail from "../components/Trail";

const Home = () => {
  const [event, setEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

 /*  useEffect(() => {
    const popupData = sessionStorage.getItem("popupShown");
    const popupExpireTime = 1 * 20 * 700; // 30 minutes in milliseconds

    if (!popupData || Date.now() - JSON.parse(popupData) > popupExpireTime) {
      fetch(`${import.meta.env.VITE_API_URL}/api/event/`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.message) {
            setEvent(data);
            setShowPopup(true);
            sessionStorage.setItem("popupShown", JSON.stringify(Date.now()));
          }
        })
        .catch((err) => console.error("Error fetching event:", err));
    }
  }, []); */

  const closeEvent = () => {
    setShowPopup(false);
  };

  return (
    <section className="w-full h-full bg-[#1A2521]">
      {/* Pop-up Banner */}
      {event && event.image && showPopup && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    onClick={closeEvent}
  >
    <div
      className="relative  p-0 rounded-2xl shadow-2xl overflow-hidden group max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeEvent}
        className="absolute top-4 right-4 p-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-lg transition hover:scale-110 z-10"
      >
        ✕
      </button>

      {/* Image centered with proper ratio */}
      <div className="flex justify-center items-center w-full h-full p-4 sm:p-6 md:p-8">
        <img
          src={event.image}
          alt="Event"
          className="w-full max-w-[600px] max-h-[80vh] object-contain rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Optional overlay gradient if needed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none rounded-2xl"></div> */}
    </div>
  </div>
)}


      {/* Page Content */}
      <section className="bg-transparent">
        <Hero />
      </section>

      <section className="bg-transparent">
        <Card />
      </section>

      <section className="bg-transparent">
        <DetailsSection />
      </section>

      <section className="w-full h-auto bg-transparent">
        <ServiceAnimate />
      </section>

      <section className="bg-transparent ">
        <Review />
      </section>

      <section className="w-full h-[10px] bg-transparent">
        <img src={purple} alt="no img found" className="w-full object-contain" />
      </section>

      <section className="bg-transparent">
        <Brokers />
      </section>

      <section>
        <Trail />
      </section>
    </section>
  );
};

export default Home;
