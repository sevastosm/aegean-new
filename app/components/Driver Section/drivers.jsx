"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Driver1 from "./assets/driver1.png";
import Driver2 from "./assets/driver2.png";

export default function DriverSection() {
  const cards = [
    {
      imgsrc: Driver1,
      name: "KOSTAS | MYKONOS",
      startDate: "2016",
      car: "Mercedes V 250",
    },
    {
      imgsrc: Driver2,
      name: "GIANNIS | MYKONOS",
      startDate: "2019",
      car: "Mercedes VITO",
    },
    {
      imgsrc: Driver1,
      name: "KOSTAS | MYKONOS",
      startDate: "2016",
      car: "Mercedes V 250",
    },
    {
      imgsrc: Driver2,
      name: "GIANNIS | MYKONOS",
      startDate: "2019",
      car: "Mercedes VITO",
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 240;
  const [isDragging, setIsDragging] = useState(false);

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.clientX;
      const walk = (startX - x) * 2;
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      updateActiveIndex();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const startX = e.touches[0].clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2;
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      updateActiveIndex();
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        if (!isDragging) {
          updateActiveIndex();
        }
      };

      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDragging]);

  const navigateToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = index * cardWidth;
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-20 flex flex-col">
      <div className="mx-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-3xl font-bold leading-[1.1] text-[#0000FF]">
          Meet some of our Mykonos taxi drivers
          </h1>
        </div>

        {/* Description */}
        <p className="text-[#3F3F3F] mt-5 text-lg">
          We employ only the best and treat them fairly. All our Mykonos taxi
          drivers speak English, are professionally trained, and know the areas
          they work in like the back of their hands. 
        </p>
        <p className="text-[#3F3F3F] mt-5 text-lg">
          Whatever the occasion, you can rest assured that we will get you where
          you need to be on time!
        </p>
      </div>

      {/* Slider Section */}
      <div className="mt-10 ">
        <div
          ref={scrollRef}
          className="flex gap-4 p-4 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-60 h-auto ml-6 bg-white rounded-3xl p-4 pb-0"
              style={{
                boxShadow: 
                  '10px 10px 30px rgba(0, 0, 0, 0.3), -3px 3px 7px rgba(0, 0, 0, 0.05)',
              }}
            >
                                  {/* Text Section */}
                    <h2 className="text-lg font-med text-left">{card.name}</h2> {/* Changed to h2 */}
                    <p className="text-sm font-light text-left">
                      Start Date: {card.startDate}
                    </p>
                    <p className="text-sm font-light text-left">Car: {card.car}</p>


              {/* Image Section */}
              <div className="mt-4">
                <Image
                  src={card.imgsrc}
                  alt={card.name}
                  className="rounded-lg w-full h-auto"
                  width={240}
                  height={150}
                />
              </div>
            </div>
          ))}
        </div>

              {/* Improved Indicator Section */}
        <div className="flex justify-center mt-4 space-x-4"> {/* Increased space between buttons */}
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToIndex(index)}
              className={`
                w-4 h-4 rounded-full transition-all duration-300 ease-in-out cursor-pointer
                ${activeIndex === index
                  ? "bg-black w-4 h-4"
                  : "bg-gray-300 hover:bg-gray-400"
                }
              `}
              aria-label={`Go to card ${index + 1}`} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}