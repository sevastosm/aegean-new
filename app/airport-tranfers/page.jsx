"use client";

import React from "react";
import Image from "next/image";

import HamgurgerIcon from "./assets/hamburger.png";
import Logo from "./assets/logo.png";
import AppleStore from "./assets/apple.png";
import Maps from "./assets/img.png";
import Call from "./assets/phone.png";
import WhatsApp from "./assets/whatsapp.png";
import PickUpIcon from "./assets/pickupicon.png";
import DestinationIcon from "./assets/destination-icon.png";

import WhyBookSection from "../components/Why_Book_Section/WhyBookSection";
import ScheduleAirport from "../components/Schedule/Schedule";
import AirportTaxi from "../components/AirportTaxi/AirportTaxi";
import AdditionalAirport from "../components/AdditionalAirportServices/AdditionalServices";
import Testimonial from "../components/TestimonialSection/testimonial";
import FAQs from "../components/FAQsSection/faqs";
import Blog from "../components/BlogSection/blog";
import HowToBookSection from "../components/HowToBook/HowBook";

const AirportTransfers = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div 
        className="h-screen flex flex-col justify-between pb-10 pt-[2%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #10014C 0%, #43659C 30%, #5078B1 67%, #298ED1 100%)",
        }}
      >
        {/* Header Section */}
        <header className="bg-transparent flex flex-row items-center justify-between px-[5%] py-[1%]">
          <button>
            <Image
              src={HamgurgerIcon}
              alt="Menu"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>

          <div>
            <Image 
              src={Logo} 
              alt="Aegean Taxi" 
              width={120} 
              height={20} 
              className="h-5 ml-1" 
            />
          </div>

          <button className="ml-6 h-8 bg-white pl-auto py-1 mt-1 rounded-xl flex items-center">
            <Image 
              src={AppleStore} 
              alt="App Store" 
              className="w-full h-8" 
            />
          </button>
        </header>

        {/* Main Section */}
        <main className="mx-[5%] flex flex-col justify-center space-y-[3%]">
          <div className="flex flex-col items-center text-left text-white space-y-[3%]">
            <h1 className="text-2xl md:text-3xl text-3xl font-bold text-left">
              Airport transfers for all airports in Greece
            </h1>
            <div className="w-full max-w-lg h-[40%] min-h-[200px]">
              <Image
                src={Maps}
                alt="Map showing locations"
                layout="responsive"
                width={500}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-white font-bold text-lg text-center">
            Request an airport taxi ride
          </h2>

          <div className="pt-[2%] rounded-xl">
            <div className="relative flex flex-col gap-4">
              {/* Pick-Up Input */}
              <div className="relative">
                <input
                  id="pickup"
                  type="text"
                  placeholder="Enter pick-up location"
                  className="w-full p-[4%] border border-black rounded-lg pl-[12%]"
                />
                <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
                  <Image 
                    src={PickUpIcon} 
                    alt="Pick-up location icon" 
                    width={16} 
                    height={16} 
                  />
                </div>
              </div>

              {/* Connecting Line */}
              <div
                className="absolute left-[6%] top-[35px] h-[60px] w-[2px] bg-black z-20"
                aria-hidden="true"
              ></div>

              {/* Destination Input */}
              <div className="relative">
                <input
                  id="destination"
                  type="text"
                  placeholder="Enter destination"
                  className="w-full p-[4%] border border-black rounded-lg pl-[12%]"
                />
                <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
                  <Image
                    src={DestinationIcon}
                    alt="Destination location icon"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Buttons Section */}
        <div className="flex flex-row justify-between  space-x-1">
          <button className="flex flex-col items-center justify-center w-[30%] aspect-square bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
            <Image 
              src={Call} 
              alt="Phone" 
              width={46} 
              height={36} 
              className="mb-1 " 
            />
            <span className="font-medium text-[10px]">Call</span>
          </button>
          <button className="flex items-center justify-center  mt-2 h-12 w-full bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
            <span className="text-sm">Book Online</span>
          </button>
          <button className="flex flex-col items-center justify-center w-[30%] aspect-square bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
            <Image
              src={WhatsApp}
              alt="WhatsApp"
              width={50}
              height={36}
              className="mb-1"
            />
            <span className="font-medium text-[10px]">WhatsApp</span>
          </button>
        </div>
      </div>

      <WhyBookSection/>
      <ScheduleAirport/>
      <AirportTaxi/>
      <HowToBookSection/>
      <AdditionalAirport />
      <Testimonial />
      <FAQs />
      <Blog />
    </div>
  );
};

export default AirportTransfers;