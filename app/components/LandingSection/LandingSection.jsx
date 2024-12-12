"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Head from 'next/head';

import MinibusImage from "./assets/mini-bus.png";
import VanBusImage from "./assets/van-bus.png";
import StandardCarImage from "./assets/standard-car.png";
import TextLogoImage from "./assets/text-logo.png";
import LogoImage from "./assets/logo.png";
import MapImage from "./assets/map.png";
import WhatsAppImage from "./assets/whtasapp.png";

// SEO metadata
const seoData = {
  title: "Mykonos Transportation Services | Book Your Ride",
  description: "Book reliable transportation services in Mykonos. Choose from standard cars, vans, and minibuses. Easy booking, fast pickup, and competitive prices.",
  keywords: "Mykonos transportation, taxi service, airport transfer, minibus rental, van service Mykonos"
};

const LandingSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('standard');

  // Vehicle data for selection
  const vehicles = [
    {
      type: 'Standard',
      capacity: 4,
      pickupTime: 7,
      price: 36,
      image: StandardCarImage,
      alt: "Standard 4-seater car for Mykonos transportation"
    },
    {
      type: 'Van',
      capacity: 7,
      pickupTime: 12,
      price: 36,
      image: VanBusImage,
      alt: "7-seater van for group transportation in Mykonos"
    },
    {
      type: 'Minibus',
      capacity: 12,
      pickupTime: 12,
      price: 36,
      image: MinibusImage,
      alt: "12-seater minibus for large group transfers in Mykonos"
    }
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Main Wrapper */}
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="bg-black px-8 py-4 flex justify-between items-center" role="banner">
          <Image
            src={TextLogoImage}
            alt="Mykonos Transportation Services Logo"
            className="cursor-pointer w-[130px] h-[30px]"
            priority
          />
          <div className="flex items-center gap-4">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center gap-2"
              aria-label="Call for booking"
            >
              <Phone size={20} />
              Call
            </button>
            <Image
              src={LogoImage}
              alt="Mykonos Transport Company Logo"
              width={40}
              height={50}
              className="cursor-pointer"
              priority
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 pt-8 pb-16 flex flex-col gap-6" role="main">
          {/* Map Image Section */}
          <div id="mapImage" className="w-[346px] h-[271px] relative fade-in-slide-up">
            <Image
              src={MapImage}
              alt="Interactive map of Mykonos transportation routes"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </div>

          {/* Input Fields Section */}
          <div className="flex flex-col gap-4">
            <div className="relative input-field fade-in-slide-up">
              <label htmlFor="pickup" className="sr-only">Pick-up location</label>
              <input
                id="pickup"
                type="text"
                placeholder="Enter pick-up location"
                className="w-full p-4 border rounded-lg pl-12"
                aria-label="Enter your pick-up location"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
            </div>

            <div className="relative input-field fade-in-slide-up">
              <label htmlFor="destination" className="sr-only">Destination</label>
              <input
                id="destination"
                type="text"
                placeholder="Enter destination"
                className="w-full p-4 border rounded-lg pl-12"
                aria-label="Enter your destination"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-black rounded-sm" />
              </div>
            </div>
          </div>

          {/* Vehicle Selection Section */}
          <div className="h-[200px] overflow-y-auto relative fade-in-slide-up" role="region" aria-label="Vehicle selection">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.type}
                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${
                  selectedVehicle === vehicle.type.toLowerCase() ? 'border-black' : 'border-gray-200'
                }`}
                onClick={() => setSelectedVehicle(vehicle.type.toLowerCase())}
                role="button"
                aria-pressed={selectedVehicle === vehicle.type.toLowerCase()}
                aria-label={`Select ${vehicle.type} vehicle`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    width={80}
                    height={48}
                  />
                  <div>
                    <div className="text-gray-500 flex items-center gap-4">
                      <h3 className="font-bold">{vehicle.type}</h3>
                      <div className="flex items-center gap-1">
                        <span aria-label="Passenger capacity">👤 {vehicle.capacity}</span>
                      </div>
                    </div>
                    <div className="text-gray-500 flex items-center gap-2">
                      <span>Pickup</span>
                      <span className="inline-block w-4">&rarr;</span>
                      <span>{vehicle.pickupTime} min</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm text-gray-500">From</div>
                    <div className="font-bold text-xl">€{vehicle.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div id="ctaButtons" className="flex gap-4 fade-in-slide-up">
            <button
              id="priceButton"
              className="flex-1 bg-black text-white py-4 rounded-lg font-bold"
              aria-label="View prices and book transportation"
            >
              See prices & book
            </button>
            <button
              id="whatsAppButton"
              className="w-12 bg-green-500 rounded-lg flex items-center justify-center"
              aria-label="Contact us on WhatsApp"
            >
              <Image src={WhatsAppImage} alt="Contact via WhatsApp" width={34} height={34} />
            </button>
          </div>
        </main>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        .fade-in-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInSlideUp 1s forwards;
        }

        @keyframes fadeInSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default LandingSection;
