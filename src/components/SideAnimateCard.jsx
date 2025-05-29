import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

const SideAnimateCard = () => {
  const cardRefs = useRef([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/crousal/getAll_Images`);
      const activeItem = res.data.data.find(item => item.Active === true);

      if (activeItem) {
        const activeImages = [activeItem.img1, activeItem.img2, activeItem.img3, activeItem.img4]
          .map(img => img?.secure_url)
          .filter(Boolean); // remove any undefined/null

        setImages(activeImages);
      }
    } catch (err) {
      console.error("Error fetching images", err);
    }
  };

  useEffect(() => {
    const cards = cardRefs.current;

    const rotateCards = () => {
      const frontCard = cards.shift();
      const secondCard = cards.shift();

      cards.push(frontCard);
      gsap.to(frontCard, {
        rotateY: 90,
        opacity: 1,
        duration: 0.36,
      });

      cards.unshift(secondCard);

      gsap.to(cards, {
        duration: 1,
        stagger: 0.1,
        rotateY: 0,
        zIndex: (i) => cards.length - i,
        width: (i) => `${280 + (i + 1) * 200}px`,
        height: (i) => `${300 + -i * 1}px`,
        scale: (i) => 1 - i * 0.05,
        opacity: (i) => 1 - i * 0.25,
      });
    };

    const interval = setInterval(rotateCards, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="md:flex flex-col justify-center items-center h-[60vh] hidden md:display">
      <div>
        <div className="card relative flex justify-center items-center text-white">
          {images.map((url, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="absolute flex justify-center items-center"
              style={{
                borderRadius: "20px",
                boxShadow: "0px 24px 10px rgba(255, 255, 255, 0.09)",
                color: "white",
              }}
            >
              <img src={url} alt={`carousel-${index}`} className="w-full h-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideAnimateCard;
