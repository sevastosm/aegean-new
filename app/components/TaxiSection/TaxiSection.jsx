"use client";

// Import statements
import React from "react";
import Image from "next/image";
import standardCar from "./assets/standard-car.png";
import vanCar from "./assets/van-bus.png";
import miniBus from "./assets/mini-bus.png";
import taxiIcon from "./assets/car-icon.png";
import bagIcon from "./assets/bag-icon.png";

// CSS animations definition using CSS-in-JS
const animationStyles = `
  /* Define fade and slide up animation */
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animation class for staggered elements */
  .animate-fade-slide-up {
    opacity: 0;
    animation: fadeSlideUp 1s forwards;
    will-change: transform, opacity;
  }
`;

const TaxiSection = () => {
  return (
    <>
      {/* Include animation styles */}
      <style>{animationStyles}</style>

      {/* Main container */}
      <div className="flex flex-col px-5 py-8 bg-[#f5f5f5]">
        {/* Header Section */}
        <div className="flex flex-col items-left mb-6">
          {/* Title with animation */}
          <h1
            className="text-3xl font-semibold font-inter animate-fade-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Your Mykonos Taxi App
          </h1>

          {/* Subtitle with animation */}
          <p
            className="text-[18px] font-medium font-inter mt-2 text-left text-[#5E5E5E] animate-fade-slide-up"
            style={{ animationDelay: '1s' }}
          >
            Aegean Taxi is the best taxi service in Mykonos operating since 2015
            with the largest fleet and cheapest prices
          </p>
        </div>

        {/* Vehicle Cards Section */}
        <div className="flex flex-col bg-[#D0D8EF] rounded-[40px] px-6 py-8 gap-6">
          {/* Section Header */}
          <div
            className="flex flex-col items-left mb-4 animate-fade-slide-up"
            style={{ animationDelay: '1.5s' }}
          >
            <h1 className="text-[24px] font-semibold font-inter">Ride Your Way</h1>
            <p className="text-[18px] font-medium font-inter mt-2 text-left">
              From taxis to luxury cars, you choose the right ride for you
            </p>
          </div>

          {/* Standard Car Card */}
          <div
            className="flex flex-row items-center justify-between animate-fade-slide-up"
            style={{ animationDelay: '1.7s' }}
          >
            <Image src={standardCar} alt="Standard Car" width={163} height={134} />
            <div className="flex flex-col items-center">
              <h2 className="text-[20px] font-medium font-inter">Standard</h2>
              {/* Capacity Indicators */}
              <div className="flex flex-row mt-2 gap-2">
                {/* Passenger Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">4</p>
                </button>
                {/* Luggage Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">3</p>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-[#C3C3C3]"></div>

          {/* Van Car Card */}
          <div
            className="flex flex-row items-center justify-between animate-fade-slide-up"
            style={{ animationDelay: '1.9s' }}
          >
            <Image src={vanCar} alt="Van Car" width={163} height={134} />
            <div className="flex flex-col items-center">
              <h2 className="text-[20px] font-medium font-inter">Van</h2>
              {/* Capacity Indicators */}
              <div className="flex flex-row mt-2 gap-2">
                {/* Passenger Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">4</p>
                </button>
                {/* Luggage Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">3</p>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-[#C3C3C3]"></div>

          {/* Mini Bus Card */}
          <div
            className="flex flex-row items-center justify-between animate-fade-slide-up"
            style={{ animationDelay: '2.1s' }}
          >
            <Image src={miniBus} alt="Mini Bus" width={163} height={134} />
            <div className="flex flex-col items-center">
              <h2 className="text-[20px] font-medium font-inter">Mini Bus</h2>
              {/* Capacity Indicators */}
              <div className="flex flex-row mt-2 gap-2">
                {/* Passenger Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">4</p>
                </button>
                {/* Luggage Capacity */}
                <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                  <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                  <p className="text-white text-[16px] ml-[5px]">3</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxiSection;