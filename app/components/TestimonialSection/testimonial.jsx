"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import PersonImg from "./assets/person-img.png";
import Star from "./assets/star.png";
import CalenderIcon from "./assets/calender.png";
import TrustPilot from "./assets/trustpilot.png";
import TripAdvisor  from "./assets/tripadvisor.png";

// Feedback Data
const feedbacks = [
  {
    img: PersonImg,
    name: "Matt Williams",
    bgColor: "#4DADE1",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "July 2024",
  },
  {
    img: PersonImg,
    name: "Emily Johnson",
    bgColor: "#B1B0B0",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "May 2024",
  },
  {
    img: PersonImg,
    name: "Emily Johnson",
    bgColor: "#7E7E7E",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "May 2024",
  },
  {
    img: PersonImg,
    name: "Sophia Brown",
    bgColor: "#B1B0B0",
    stars: 4,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "June 2024",
  },
 
];

const Testimonial = () => {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(feedbacks);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const startTime = useRef(0);

  const minSwipeDistance = 50;
  const transitionDuration = 300;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');

    setTimeout(() => {
      const newFeedbacks = [...visibleFeedbacks];
      const firstFeedback = newFeedbacks.shift();
      newFeedbacks.push(firstFeedback);

      setVisibleFeedbacks(newFeedbacks);
      setIsAnimating(false);
    }, transitionDuration);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');

    setTimeout(() => {
      const newFeedbacks = [...visibleFeedbacks];
      const lastFeedback = newFeedbacks.pop();
      newFeedbacks.unshift(lastFeedback);

      setVisibleFeedbacks(newFeedbacks);
      setIsAnimating(false);
    }, transitionDuration);
  };

  const handleTouchStart = (e) => {
    if (isAnimating) return;
    touchStartX.current = e.touches[0].clientX;
    startTime.current = Date.now();
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isAnimating) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);

    const swipeDistance = touchEndX.current - touchStartX.current;
    const swipeTime = Date.now() - startTime.current;
    const swipeVelocity = Math.abs(swipeDistance) / swipeTime;

    if (Math.abs(swipeDistance) >= minSwipeDistance || swipeVelocity > 0.5) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const getCardStyles = (index) => {
    const baseStyles = {
      transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      zIndex: visibleFeedbacks.length - index,
    };

    // First card (index 0) should be centered and not rotated
    if (index === 0) {
      if (isAnimating) {
        if (direction === 'next') {
          return {
            ...baseStyles,
            transform: 'translate(-10px, 0)',
            opacity: 0,
          };
        } else {
          return {
            ...baseStyles,
            transform: 'translate(10px, 0)',
            opacity: 0,
          };
        }
      }
      return baseStyles;
    }

    // New stacking logic: 
    // - 4px left displacement per card
    // - 4 degrees rotation per card
    const leftDisplacement = index * 10;
    const rotation = index * 4;

    const rotationStyles = {
      transform: `translateX(-${leftDisplacement}px) rotate(-${rotation}deg)`,
    };

    if (isAnimating && index === 1) {
      if (direction === 'next') {
        return {
          ...baseStyles,
          ...rotationStyles,
          transform: 'translate(-100px, 0) rotate(-10deg)',
          opacity: 0,
        };
      } else {
        return {
          ...baseStyles,
          ...rotationStyles,
          transform: 'translate(100px, 0) rotate(10deg)',
          opacity: 0,
        };
      }
    }

    return {
      ...baseStyles,
      ...rotationStyles,
    };
  };

  return (
    <div className="flex bg-white flex-col items-center justify-center py-20">
      {/* Header Section */}
      <div className="text-left px-4 mx-8">
        <h2
          className="text-4xl font-bold text-[#0000FF] bg-clip-text mb-2"
         
        >
          Testimonials
        </h2>

        <p className="text-gray-600 text-left">
          What travellers who booked an airport transfer in Mykonos say about our service
        </p>
      </div>

      <div 
        className="relative w-full max-w-4xl h-[400px] flex justify-center items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {visibleFeedbacks.map((feedback, index) => (
          <div
            key={index}
            className="absolute p-4 w-[275px] h-[290px] text-center rounded-lg shadow-lg transition-all duration-300 hover:z-50"
            style={{
              backgroundColor: feedback.bgColor,
              ...getCardStyles(index),
              left: '55%',
              marginLeft: '-137.5px',
            }}
          >
            {/* User Info */}
            <div className="flex items-center justify-left mx-4 mb-2">
              <Image
                src={feedback.img}
                alt={`${feedback.name} profile`}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-lg text-white font-semibold ml-4">{feedback.name}</h3>
            </div>

            {/* Stars */}
            <div className="flex justify-center mt-2 space-x-1">
              {Array.from({ length: feedback.stars }).map((_, starIndex) => (
                <Image
                  key={starIndex}
                  src={Star}
                  alt="Star"
                  width={25}
                  height={25}
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-white text-left text-sm mt-6 px-6">{feedback.feedback}</p>

            {/* Date */}
            <div className="flex items-center justify-center mt-4 bg-black text-white px-4 py-2 rounded-full text-xs">
              <Image
                src={CalenderIcon}
                alt="Calendar"
                width={16}
                height={16}
              />
              <span className="ml-2">{feedback.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Trustpilot & TripAdvisor Section */}
      <div className="flex flex-col items-center w-full mt-8 px-8" >
        <div className="flex w-full">
          {/* Trustpilot Section */}
          <div className="flex flex-col items-center w-1/2">
            
            <div className="h-[100px] flex items-center">
              <Image
                src={TrustPilot}
                alt="Trustpilot Logo"
                width={200}
                height={100}
              />
            </div>
            <a href="#" className="px-2 self-start  text-blue-500 hover:underline text-sm mb-2 ml-1">
              Go to Trustpilot →
            </a>
          </div>

          {/* TripAdvisor Section */}
          <div className="flex flex-col items-center w-1/2">
            
            <div className="h-[100px] flex items-center">
              <Image
                src={TripAdvisor}
                alt="TripAdvisor Logo Duplicate"
                width={200}
                height={100}
              />
              
            </div>
            <a href="#" className="text-blue-500 hover:underline text-sm mb-2">
              Go to Tripadvisor →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;