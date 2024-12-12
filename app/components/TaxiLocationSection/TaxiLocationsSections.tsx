"use client";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import type { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";

interface ImageData {
  src: StaticImageData;
  location: string;
  id: number;
}

const TaxiInLocationSection = () => {
  const originalCarousel: ImageData[] = [
    { src: img1, location: 'Mykonos', id: 1 },
    { src: img2, location: 'Athens', id: 2 },
    { src: img3, location: 'Santorini', id: 3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<ImageData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const startTime = useRef<number>(0);

  const minSwipeDistance = 50;
  const transitionDuration = 300;

  const updateVisibleImages = (newIndex: number) => {
    const totalImages = originalCarousel.length;
    const images: ImageData[] = [];
    
    images.push(originalCarousel[newIndex]);
    
    for (let i = 1; i < totalImages; i++) {
      const nextIndex = (newIndex + i) % totalImages;
      images.push(originalCarousel[nextIndex]);
    }
    
    setVisibleImages(images);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % originalCarousel.length;
      setCurrentIndex(nextIndex);
      updateVisibleImages(nextIndex);
      setIsAnimating(false);
    }, transitionDuration);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + originalCarousel.length) % originalCarousel.length;
      setCurrentIndex(prevIndex);
      updateVisibleImages(prevIndex);
      setIsAnimating(false);
    }, transitionDuration);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    touchStartX.current = e.touches[0].clientX;
    startTime.current = Date.now();
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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

  useEffect(() => {
    updateVisibleImages(currentIndex);
  }, [currentIndex]);

  const getImageStyles = (index: number) => {
    const baseStyles = {
      transform: `translate(${index * -15}px, ${index * 20}px) rotate(${index * -3}deg)`,
      transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      opacity: 1,
      zIndex: visibleImages.length - index,
    };

    if (isAnimating && index === 0) {
      if (direction === 'next') {
        return {
          ...baseStyles,
          transform: 'translate(-100px, 0) rotate(-10deg)',
          opacity: 0,
        };
      } else {
        return {
          ...baseStyles,
          transform: 'translate(100px, 0) rotate(10deg)',
          opacity: 0,
        };
      }
    }

    return baseStyles;
  };

  return (
    <section className="flex flex-col items-center bg-black px-5 py-16">
      <div className="text-center mb-12">
        <h1 className="text-white text-3xl font-semibold font-inter text-center">
          Book a ride online with Aegean Taxi in the following locations
        </h1>
      </div>
      
      <div className="flex items-center justify-between w-full max-w-3xl mb-10">
        <button 
          onClick={handlePrev}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative mr-10 w-[250px] h-[260px] flex flex-col items-center">
          <h1 
            className={`text-white ml-10 text-center text-2xl font-inter mb-4 transition-all duration-300 ease-in-out ${
              isAnimating 
                ? direction === 'next'
                  ? 'opacity-0 transform -translate-y-4'
                  : 'opacity-0 transform translate-y-4'
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            {visibleImages[0]?.location || ''}
          </h1>
          
          <div 
            className="relative ml-10 w-[200px] h-[210px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleImages.map((item, index) => (
              <div
                key={item.id}
                className="absolute w-[230px] h-[240px] touch-none select-none"
                style={getImageStyles(index)}
              >
                <Image
                  src={item.src}
                  alt={`Location ${index + 1}`}
                  width={230}
                  height={240}
                  className="rounded-lg pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <button className="mt-12 bg-white text-black text-lg font-semibold font-inter px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Book Taxi
      </button>
    </section>
  );
};

export default TaxiInLocationSection;