"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Import all images
import Img from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import OnlineIcon from "./assets/online-icon.png";
import WhatsApp from "./assets/whats_btn.png";
import Apple from "./assets/app_btn.png";

// Sample App section for the slider
const AppSlider = [
  {
    step: "1",
    imgsrc: Img, 
    title: "Taxi App",
    description: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi",
    titlecolor: "black",
    descriptioncolor: "#161223",
    backgroundColor: "#B8CDDD",
    buttonImg: Apple,
    borderColor: '62FF00'
  },
  {
    step: "2",
    imgsrc: Img2, 
    title: "WhatsApp",
    description: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi",
    titlecolor: "#5BD770",
    descriptioncolor: "#BFE3C1",
    backgroundColor: "#000000",
    buttonImg: WhatsApp,
    borderColor: '0037FF'
  },
  {
    step: "1",
    imgsrc: Img, 
    title: "Taxi App",
    description: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi",
    titlecolor: "black",
    descriptioncolor: "#161223",
    backgroundColor: "#B8CDDD",
    buttonImg: Apple,
    borderColor: '62FF00'
  },
  {
    step: "2",
    imgsrc: Img2, 
    title: "WhatsApp",
    description: "Our Mykonos Taxi app is available in the iOS and Google play store. Download and register to book your Mykonos Taxi",
    titlecolor: "#5BD770",
    descriptioncolor: "#BFE3C1",
    backgroundColor: "#000000",
    buttonImg: WhatsApp,
    borderColor: '0037FF'
  },
];

const AppSliderCard = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 350; // Approximate width of each card
  const [isDragging, setIsDragging] = useState(false);

  // Improved scroll and index tracking
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), AppSlider.length - 1));
  };

  // Handle drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      if (!scrollRef.current) return;
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      updateActiveIndex();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Handle touch functionality for mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    const startX = e.touches[0].clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleTouchEnd = () => {
      if (!scrollRef.current) return;
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      updateActiveIndex();
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  // Add scroll event listener to update active index
  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        if (!isDragging) {
          updateActiveIndex();
        }
      };

      currentScrollRef.addEventListener('scroll', handleScroll);
      return () => {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isDragging]);


  return (
    <div className="relative">
      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide cursor-grab space-x-4 p-6"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {AppSlider.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[310px] h-[520px]"
          >
            <div
              className="flex flex-col p-5 relative w-full h-full rounded-3xl"
              style={{
                backgroundColor: item.backgroundColor,
                border: `4px solid #${item.borderColor}`,
              }}
            >
              {/* Step Icon */}
                <div
                    className="absolute w-10 h-10 rounded-full bg-[#62FF00] border-[#E1D016] border-2  text-lg text-black font-bold flex items-center justify-center"
                    style={{
                        top: "-17px",
                        left: "-13px",
                        backgroundImage: {OnlineIcon},
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    >
                    {item.step}
                    </div>


              {/* Image */}
              <Image
                src={item.imgsrc}
                alt="App Image"
                className="w-full h-2/3 object-cover rounded-lg"
              />

              {/* Title */}
              <h2
                className="text-xl font-bold mt-4"
                style={{
                  color: item.titlecolor,
                }}
              >
                {item.title}
              </h2>

              {/* Description */}
              <p
                className="text-sm mt-2"
                style={{
                  color: item.descriptioncolor,
                }}
              >
                {item.description}
              </p>

              {/* Button */}
              <button className="pt-4 justify-center align-center mx-auto">
                <Image
                  src={item.buttonImg}
                  alt="Download Button"
                  width={170}
                  height={20}
                  className="rounded-"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center mt-4 space-x-4">
        
        {/* Indicator Dots */}
        <div className="flex space-x-2">
          {AppSlider.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollLeft = index * cardWidth;
                  setActiveIndex(index);
                }
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                activeIndex === index 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};

const HowBook = () => {
  return (
    <div  
      className="px-4 py-20 flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000000 0%, #2F393F 30%, #8AB1CC 61%, #A3BFD9 100%)",
      }}
    >
      {/* Heading Section */}
      <div className="text-left pb-10 px-6 ">
        <h1 className="text-3xl font-bold leading-[1.1] bg-clip-text text-white">
          How to book your airport taxi ride with us:
        </h1>
        <p className="text-white mt-4">
          We made it easier to book your airport ride in Greece! Whether its an island or city taxi, and airport or port transfer or tour, its simple for all! With 4 booking options available to choose from, you can enjoy your holidays in Greece and leave the logistics to us!
        </p>
      </div>

      <AppSliderCard/>
    </div>
  );
};

export default HowBook;