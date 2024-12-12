"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import TickIcon from "./assets/tick-icon.png"; // Replace with the actual path to your tick icon

export default function Blogs() {
  const slider1Ref = useRef(null);
  const slider3Ref = useRef(null);

  useEffect(() => {
    // Set Slider Row 1 to start at 40% of its total scrollable width
    if (slider1Ref.current) {
      const slider1 = slider1Ref.current;
      const totalWidth1 = slider1.scrollWidth; // Total scrollable width
      slider1.scrollLeft = totalWidth1 * 0.45; // Set to 40%
    }

    // Set Slider Row 3 to start at the center
    if (slider3Ref.current) {
      const slider3 = slider3Ref.current;
      const totalWidth3 = slider3.scrollWidth; // Total scrollable width
      const visibleWidth3 = slider3.offsetWidth; // Visible width of the container
      slider3.scrollLeft = (totalWidth3 - visibleWidth3) / 2; // Set to the center
    }
  }, []);

  return (
    <section className="py-10 bg-black">
      {/* Title and Description */}
      <div className="text-white mb-6 mx-8 my-5">
        <h2 className="text-3xl font-bold text-[#067DF9]">Blog</h2>
        <p className="mt-2 text-lg">
          Read our Mykonos Taxi blog, your ultimate resource for insider tips, local insights, and guides about understanding Taxis in Mykonos.
        </p>
      </div>

      {/* Pinterest-style Grid */}
      <div className="flex flex-col gap-4">
        

        {/* Slider Row 3 */}
        <div
          ref={slider3Ref}
          className="flex space-x-4 overflow-x-auto no-scrollbar"
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-[170px] h-[110px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[130px] lg:w-[220px] lg:h-[150px] bg-[#D9D9D9] rounded-3xl flex-shrink-0"
            ></div>
          ))}
        </div>


        {/* Slider Row 1 */}
        <div
          ref={slider1Ref}
          className="flex space-x-4 overflow-x-auto no-scrollbar"
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-[170px] h-[110px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[130px] lg:w-[220px] lg:h-[150px] bg-[#D9D9D9] rounded-3xl flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div className="mt-8 space-y-4 mx-8 text-white">
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Written by local Mykonos experts</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Fact-checked information</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Practical, actionable advice</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Updated regularly</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6 mb-4">
        <button className="flex justify-center items-center py-3 w-full mx-8 bg-[#067DF9] text-white text-lg font-semibold rounded-2xl hover:bg-gray-800">
          <span className="">Go to Blog</span>
        </button>
      </div>
    </section>
  );
}
