"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import TaxiImage from "./assets/img2.png";
import IconImg from "./assets/icon_img.png";
import Arrow from "./assets/blue_arrow.png"; 
import FrontArrow from "./assets/w-front-arrow.png"; 

export default function WhyBookSection() {
  const cards = [
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
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

    const cardWidth = 240; // Approximate width of each card (w-60 is 240px)
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  // Add scroll event listener to update active index
  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        updateActiveIndex();
      };

      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section className="py-20 flex flex-col bg-[#F1F3FB]" aria-labelledby="why-book-heading">
      <div className="px-8">
        {/* Heading Section */}
        <header className="text-left pb-4">
          <h1
            id="why-book-heading"
            className="text-3xl font-bold leading-[1.1] text-[#0000FF]"
          >
            Why book your Mykonos taxi with Aegean Taxi
          </h1>
        </header>

        {/* Image Section */}
        <div className="flex justify-end">
          <div className="w-full">
            <Image
              src={TaxiImage}
              alt="Aegean Taxi showcasing premium service"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          aria-label="Why choose us cards"
        >
          {cards.map((card, index) => (
            <article
              key={index}
              className="relative flex-shrink-0 w-40 h-60 ml-2"
              aria-labelledby={`card-heading-${index}`}
            >
              <div className="relative border border-black w-50 h-55 rounded-3xl bg-[#F5F5F7] shadow-lg p-3 pb-5 pl-3">
                <div className="flex justify-left">
                  <Image
                    src={card.imgsrc}
                    alt={`Icon representing ${card.heading}`}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 id={`card-heading-${index}`} className="text-lg pt-2 font-bold text-left">
                  {card.heading}
                </h3>
                <p className="text-sm pt-2 font-light text-left">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

              {/* Indicator Section */}
        <div className="flex justify-center mt-2 space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 ${
                activeIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center mx-10">
  <div className="flex justify-center mt-5">
    <button
      className="flex items-center gap-2 px-6 py-2 bg-[#006FE1] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base"
      aria-label="Find out more about Mykonos"
    >
      <span className="whitespace-nowrap">Find out more about Mykonos</span>
      <Image
        src={FrontArrow}
        alt="Arrow Icon"
        width={16} // Reduced size for responsiveness
        height={16}
        className="object-contain"
      />
    </button>
  </div>


          {/* Secondary Link with Icon */}
          <div className="flex items-center justify-center mt-4">
             <a
            href="#"
            className="block text-center text-blue-800 underline hover:text-blue-900"
            aria-label="Find us in Mykonos"
          >
            Find us in Mykonos
          </a>

            <Image
              src={Arrow}
              alt="Arrow pointing to the link"
              className="ml-2"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
