"use client";

import React from "react";
import Image from "next/image";

// Dynamic imports to lazy load non-critical components
const TicketSection = React.lazy(() => import("../../components/AirportTickets/AirportTickets"));
const WhyBookSection = React.lazy(() => import("../../components/Why_Book_Section/WhyBookSection"));
const CategorySection = React.lazy(() => import("../../components/TaxiCategoriesSection/TaxiCategories"));
const AdditionalAirport = React.lazy(() => import("../../components/MykonosAirport/MykonosAirport"));
const Testimonial = React.lazy(() => import("../../components/TestimonialSection/testimonial"));
const FAQs = React.lazy(() => import("../../components/FAQsSection/faqs"));
const Blog = React.lazy(() => import("../../components/BlogSection/blog"));
const HowToBookSection = React.lazy(() => import("../../components/BookingOptionsSection/BookingOptions"));
const Driver = React.lazy(() => import("../../components/Driver Section/drivers"));
const FindUsSection = React.lazy(() => import("../../components/FindUsSsection/findus"));

// Assets
import HamgurgerIcon from "./assets/hamburger.svg";
import Logo from "./assets/logo.svg";
import AppleStore from "./assets/apple.svg";
import Maps from "./assets/img.png";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";
import PickUpIcon from "./assets/pickupicon.svg";
import DestinationIcon from "./assets/destination-icon.svg";

const AirportTransfers = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-transparent flex flex-row items-center justify-between px-8 py-2">
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
          <Image src={Logo} alt="Aegean Taxi" width={120} height={20} className="h-5 ml-1" />
        </div>

        <button className="ml-6 h-8 bg-white pl-auto py-1 rounded-xl flex items-center">
          <Image src={AppleStore} alt="App Store" className="w-full h-8" />
        </button>
      </header>

      {/* Main Section */}
      <main className="mx-8 mt-6 mb-8 flex flex-col">
        <div className="flex flex-col items-center text-left text-black">
          <h1 className="text-3xl font-bold mb-2">
            Airport transfers for all airport in Greece
          </h1>
          <Image
            src={Maps}
            alt="Map showing locations"
            height={200}
            className="my-5 w-full max-w-lg h-[220px]"
            priority
          />
        </div>
        <h1 className="font-bold text-black mt-3">
          Book a Mykonos airport taxi ride to and from the airport. Book now or schedule for later
        </h1>

        <div className="pt-8 rounded-xl">
          <div className="relative flex flex-col gap-4">
            {/* Pick-Up Input */}
            <div className="relative">
              <input
                id="pickup"
                type="text"
                placeholder="Enter pick-up location"
                className="w-full p-4 border border-black rounded-lg pl-12"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Image src={PickUpIcon} alt="Pick-up location icon" width={16} height={16} />
              </div>
            </div>

            {/* Connecting Line */}
            <div
              className="absolute left-[23px] top-[35px] h-[60px] w-[2px] bg-black z-20"
              aria-hidden="true"
            ></div>

            {/* Destination Input */}
            <div className="relative">
              <input
                id="destination"
                type="text"
                placeholder="Enter destination"
                className="w-full p-4 border border-black rounded-lg pl-12"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
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
      <div className="flex flex-row justify-between mb-20 w-full">
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
          <Image src={Call} alt="Phone" width={46} height={36} className="mb-1" />
          <span className="font-medium text-[10px]">Call</span>
        </button>
        <button className="flex items-center justify-center w-60 h-12 mt-1 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
          <span className="text-sm">Book Online</span>
        </button>
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
          <Image
            src={WhatsApp}
            alt="WhatsApp Icon"
            width={50}
            height={36}
            className="mb-1"
          />
          <span className="font-medium text-[10px]">WhatsApp</span>
        </button>
      </div>

      {/* Lazy Loaded Sections */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <WhyBookSection />
        <CategorySection />
        <TicketSection />
        <AdditionalAirport />
        <HowToBookSection />
        <Testimonial />
        <FAQs />
        <Blog />
        <Driver />
        <FindUsSection />
      </React.Suspense>
    </div>
  );
};

export default AirportTransfers;
