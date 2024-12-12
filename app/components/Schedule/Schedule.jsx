"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import map from './assets/map2.png';
import Mykonos from "./assets/mykonos.png"; 
import Santorini from "./assets/santorini.png";// Placeholder for card images
import NavArrow from "./assets/arrow.svg";
import CarSVG from './assets/car.svg';
import CategorySVG from './assets/cat.svg';
import OperationSVG from './assets/sett.svg';

// Sample App section for the slider

export default function BookSection() {
  const cards = [
    {
        imgsrc: Mykonos,
        heading: "Mykonos Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Santorini,
        heading: "Santorini Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Mykonos,
        heading: "Mykonos Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Santorini,
        heading: "Santorini Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Mykonos,
        heading: "Mykonos Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Santorini,
        heading: "Santorini Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Mykonos,
        heading: "Mykonos Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Santorini,
        heading: "Santorini Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Mykonos,
        heading: "Mykonos Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
    {
        imgsrc: Santorini,
        heading: "Santorini Airport (JMK)",
        cars: "100+ cars",
        categories: "4 car categories",
        operation: "24/7 operations",
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current) return;
      const x = e.clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      if (!scrollRef.current) return;
      scrollRef.current.removeEventListener("mousemove", handleMouseMove);
      scrollRef.current.removeEventListener("mouseup", handleMouseUp);
      // Calculate and update active index
      updateActiveIndex();
    };

    scrollRef.current.addEventListener("mousemove", handleMouseMove);
    scrollRef.current.addEventListener("mouseup", handleMouseUp);
  };

  // Handle touch functionality for mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;

    const startX = e.touches[0].clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      if (!scrollRef.current) return;
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleTouchEnd = () => {
      if (!scrollRef.current) return;
      scrollRef.current.removeEventListener("touchmove", handleTouchMove);
      scrollRef.current.removeEventListener("touchend", handleTouchEnd);
      // Calculate and update active index
      updateActiveIndex();
    };

    scrollRef.current.addEventListener("touchmove", handleTouchMove);
    scrollRef.current.addEventListener("touchend", handleTouchEnd);
  };

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
  
    const cardWidth = 240; // Width of each card
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth); // Use Math.round for more accurate index
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  // Add scroll event listener to update active index
  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        updateActiveIndex();
      };

      currentScrollRef.addEventListener('scroll', handleScroll);
      return () => {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleLeftClick = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      scrollRef.current.scrollLeft = newIndex * 240;
      setActiveIndex(newIndex);
    }
  };

  const handleRightClick = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(activeIndex + 1, cards.length - 1);
      scrollRef.current.scrollLeft = newIndex * 240;
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="py-20 flex flex-col bg-white">
      <div className="px-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-[30px] font-bold leading-[1.1] bg-gradient-to-r from-[#0044FF] to-[#00BBFF] bg-clip-text text-transparent">
            Book a ride online with
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] bg-gradient-to-r from-[#0044FF] to-[#00BBFF] bg-clip-text text-transparent">
            Aegean Taxi in any of
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] bg-gradient-to-r from-[#0044FF] to-[#00BBFF] bg-clip-text text-transparent">
            following 20 locations
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-end">
          <div className="w-full my-4">
            <Image
              src={map}
              alt="Taxi"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="my-4">
        <div
          ref={scrollRef}
          className="flex gap-4 mb-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-60 h-full ml-6"
            >
              <div className="relative w-full h-full rounded-3xl p-4 pb-7 pl-5">
                <div className="flex justify-left">
                  <Image
                    src={card.imgsrc}
                    alt={card.heading}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg pt-2 font-bold text-left ml-2">{card.heading}</h3>
                <div className="flex items-center mt-2">
                  <Image
                    src={CarSVG}
                    alt="Cars"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.cars}</p>
                </div>

                <div className="flex items-center mt-2">
                  <Image
                    src={CategorySVG}
                    alt="Categories"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.categories}</p>
                </div>

                <div className="flex items-center mt-2">
                  <Image
                    src={OperationSVG}
                    alt="Operation"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.operation}</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">Book Mykonos Taxi</button>
                <div className="flex items-center justify-center mt-4">
                  <a
                    href="#"
                    className="block text-center text-blue-500 underline"
                  >
                    Find us in Mykonos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Section */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleLeftClick}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center mr-4"
            aria-label="Previous card"
          >
            <Image src={NavArrow} alt="Left arrow" className="w-4 h-4 rotate-180" />
          </button>
                            {/* Navigation Section */}
                            <div className="flex gap-2">
                        {cards.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                            index === activeIndex 
                                ? "bg-black" // Wider and blue when active 
                                : "bg-gray-300" // Gray when inactive
                            }`}
                        ></div>
                        ))}
                    </div>
          <button
            onClick={handleRightClick}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ml-4"
            aria-label="Next card"
          >
            <Image src={NavArrow} alt="Right arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
