"use client";

import React from "react";
import Image from "next/image";

import AthensMap from "./assets/map.png";
import ArrowBlue from "./assets/blue_arrow.png";
import WhiteArrowFront from "./assets/w-front-arrow.png";
import BlueArrowFront from "./assets/b_front_arrow.png";
import ArrowBlack from "./assets/black_arrow.png";


const FindUs = () => {
  const location = {
    name: "Mykonos",
    mapPicture: AthensMap,
    address: "Leoforos Vouliagmenis 58, Voula, 16673",
    navigateLink: "#",
    hours: "24/7",
    phone: "+30 215 215 4000",
    phoneLink: "tel:+302152154000",
    email: "athens@aegeantaxi.com",
    emailLink: "mailto:athens@aegeantaxi.com",
    services: {
      taxi: "#",
      airportTransfers: "#",
      portTransfers: "#",
      tours: "#",
      bookOnline: "#",
    },
    goToLink: "#",
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-white">
       
      <div className="rounded-lg  bg-white text-left p-8 w-[400px]">
        
      <h1 className="text-3xl font-bold text-black text-center mb-6">Find us in Mykonos</h1>

        <Image
          src={location.mapPicture}
          alt={`${location.name} Map`}
         
          height={200}
          className="mx-auto rounded-3xl w-full "
        />

        <div className="mt-6 mx-8 ">
          {/* Address Section */}
          <div className="flex flex-row justify-between items-start mt-2">
              {/* Address Label Column */}
              <div className="flex">
                <p className=" text-[#646464] text-[13px]">Address:</p>
              </div>

              {/* Address and Navigate Link Column */}
              <div className="flex flex-col text-[13px] ml-2">
                <p className="text-[#646464]">{location.address}</p>
                <a
                  href={location.navigateLink}
                  className="text-blue-500 flex items-center mt-2"
                >
                  Navigate
                  <Image
                    src={ArrowBlue}
                    alt="Arrow"
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </a>
              </div>
            </div>

          {/* Hours */}
          <p className="text-[#646464] text-sm mt-4">
            Hours: <span>{location.hours}</span>
          </p>

          {/* Phone */}
          <p className="text-[#646464] text-sm mt-4">
            Phone:&nbsp;
            <a
              href={location.phoneLink}
              className="text-blue-500 underline"
            >
              {location.phone}
            </a>
          </p>

          {/* Email */}
          <p className="text-[#646464] text-sm mt-4">
            Email:&nbsp;
            <a
              href={location.emailLink}
              className="text-blue-500 underline"
            >
              {location.email}
            </a>
          </p>

          {/* Services Section */}
          

 {/* Services Section */}
 <div className="mt-4">
 <h3 className="font-semibold text-base">Services</h3>
 {Object.entries(location.services).map(([key, link]) => (
   <a
     key={key}
     href={link}
     className={`flex items-center mt-1 text-[13px] ${
       key === "bookOnline"
         ? "text-blue-500 underline"
         : "text-[#646464] underline"
     }`}
   >
     {key.charAt(0).toUpperCase() +
       key.slice(1).replace(/([A-Z])/g, " $1")}
      <Image
            src={key === "bookOnline" ? BlueArrowFront : ArrowBlack}
            alt="Arrow"
            width={12}
            height={12}
            className="ml-1"
       />
   </a>
 ))}
</div>

          {/* Go to Link */}
          <a
            href={location.goToLink}
            className="mt-6 block text-center px-4 py-2 bg-[#343434] text-white rounded-full font-bold text-sm"
          >
            Go to {location.name}
            <Image
              src={WhiteArrowFront}
              alt="Arrow"
              width={12}
              height={12}
              className="ml-2 inline"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
































