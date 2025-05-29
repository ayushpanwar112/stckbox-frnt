import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import SideAnimateCard from "./SideAnimateCard";

const Card = () => {
  const cardRefs = useRef([]);
  const [activeImages, setActiveImages] = useState([]);

  // Fetch only active images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/crousal/getAll_Images`);
        const activeData = res.data.data.filter((item) => item.Active === true);
        const imgs = activeData.flatMap((item) => [item.img1, item.img2, item.img3, item.img4]);
        setActiveImages(imgs);
      } catch (err) {
        console.error("Error fetching images", err);
      }
    };

    fetchImages();
  }, []);

  // GSAP animation for mobile view
  useGSAP(() => {
    const rotateCards = () => {
      if (cardRefs.current.length < 2) return;

      const firstCard = cardRefs.current.shift();
      cardRefs.current.push(firstCard);

      cardRefs.current.forEach((card, i) => {
        gsap.to(card, {
          duration: 1.5,
          zIndex: cardRefs.current.length - i,
          width: `${290 + i * 10}px`,
          height: "370px",
          scale: 1 - i * 0.05,
          x: i * 10,
          y: i * 20,
          opacity: 1 - i * 0.3,
        });
      });
    };

    const interval = setInterval(rotateCards, 2800);
    return () => clearInterval(interval);
  }, [activeImages]);

  return (
    <div className="">
      {/* Desktop */}
      <SideAnimateCard className="w-screen bg-amber-100" />

      {/* Mobile */}
      <div className="flex justify-center items-center h-[70vh] md:hidden">
        <div className="relative flex justify-center w-1/2 items-center">
          {activeImages.slice(0, 4).map((imgObj, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute flex justify-center items-center"
              style={{
                width: "220px",
                height: "200px",
                borderRadius: "20px",
                boxShadow: "0px 24px 10px rgba(255, 255, 255, 0.04)",
              }}
            >
              <img
                src={imgObj.secure_url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
