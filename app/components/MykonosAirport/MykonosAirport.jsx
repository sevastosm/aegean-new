"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChildSeatIcon from "./assets/childseat.png";
import SIMIcon from "./assets/localSIM.png";
import beach from './assets/beach.png';
export default function AdditionalServices() {
  const cards = [
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 240; // Approximate width of each card (w-60 is 240px)
  const [isDragging, setIsDragging] = useState(false);

  // Improved scroll and index tracking
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
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
    <div className="py-20 flex flex-col bg-white ">
      <div className="w-full mb-12">
        <Image src={beach} alt="Beach Image" />
      </div>
      <div className="px-8">
        {/* Heading Section */}

        <div className="text-left pb-4">
          <h1 className="text-3xl font-bold leading-[1.1] text-[#0000FF]">
          Getting to Mykonos Airport (JMK)
          </h1>
        </div>
        <div className="text-left pb-4">
          <h2 className="text-xl font-med leading-[1.1] text-[#407BFF]">
          Mykonos International Airport (JMK)
          </h2>
          <h2 className="text-xl font-med leading-[1.1] text-[#407BFF]">
          Fira 84700,Greece
          </h2>
        </div>
        <div className="text-left pb-4">
          <p className="text-lg font-med leading-[1.3] text-black">
          Mykonos International Airport ( JMK) Fira 847 00, Greece Flying from to or from Mykonos International Airport? We takes the stress out of arranging a drop-off. Whether you’re catching a domestic or international flight, Aegean Taxi has options for you, from private rides to premium cars to more cost-effective options. In a few quick steps, you can request a ride right now or reserve one for later.
          </p>
        
        </div>

        <div className="text-left pb-4 mt-4">
          <h1 className="text-3xl font-bold leading-[1.1] text-[#0000FF]">
          Additional services we offer in Mykonos airport.
          </h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-black mx-8 text-lg leading-[1.3]">
      We remove the stress of additional logistics and hassle by offering you essential services and extras.      </p>

      {/* Slider Section */}
      <div className="mt-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {cards.map((card, index) => (
            <div key={index} className="relative flex-shrink-0 w-60 h-60 ml-6">
              {/* Card with Gradient Border */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600">
                <div className="relative rounded-3xl bg-white shadow-lg p-4 pb-7 pl-5">
                  <div className="flex justify-left">
                    <Image
                      src={card.imgsrc}
                      alt={card.heading}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h2 className="text-lg pt-2 font-bold text-left">{card.heading}</h2>
                  <h3 className="text-sm pt-2 font-med text-left">{card.text}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

            {/* Indicator Section */}
        <div className="flex justify-center mt-4 space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 ${
                activeIndex === index 
                  ? 'bg-black' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
        {/* Links Section */}
        <div className="mt-10 mx-8 ">
          <a
            href="#"
            className="block text-center px-6 text-white bg-[#174FCD] text-md hover:bg-blue-600 font-semibold py-3 rounded-xl"
          >
            Contact us for details
          </a>
        </div>
      </div>
    </div>
  );
}