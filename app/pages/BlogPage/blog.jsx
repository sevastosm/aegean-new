"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Image imports
import SearchIcon from "./assets/search.png";
import HamburgerIcon from "./assets/hamburger.png";
import Card1Img from "./assets/card1.png";
import Card3Img from "./assets/card3.png";
import Card4Img from "./assets/card2.png";
import Card5Img from "./assets/card4.png";
import CalendarIconBlack from "./assets/calendarB.png";
import TimeIconWhite from "./assets/clockW.png";
import CalenderIconWhite from "./assets/calendarW.png";
import TimeIcon from "./assets/clock.png";
import WhatsAppIcon from "./assets/whtasapp.png";
import ArrowIcon from "./assets/arrow.png";
import ArrowIconBlack from "./assets/arrowB.png";
import PopImg1 from "./assets/most_popular1.png";
import PopImg2 from "./assets/most_popular2.png";
import PopImg3 from "./assets/most_popular3.png";
import PopImg4 from "./assets/most_popular4.png";







//most popular card section template
const ArticleCard = ({ title, date, imageUrl }) => (
    <div className={`flex items-center space-x-4 mb-4`}>
      <Image src={imageUrl} alt={title} className="w-24 h-24 object-cover rounded-md" />
      <div>
        <h3 className={`text-lg font-medium `}>{title}</h3>
        <p className={`text-gray-500 text-sm `}>{date}</p>
      </div>
    </div>
  );




const Blog = () => {
  const router = useRouter();
  
  // State to manage the selected section
  const [selectedSection, setSelectedSection] = useState("newest");


  const articles = [
    { title: 'Pinot for Low-Latency Offline Table Analytics', date: 'August 29 / Global', imageUrl: PopImg1 },
    { title: 'Presto Express: Speeding up Query Processing with Minimal Resources', date: 'Noveber 07 / Global', imageUrl: PopImg2 },
    { title: "Lucene:Uber's Search Platfrom Version Upgrade', date: 'August 29 / Global", imageUrl: PopImg3 },
    { title: "Unified Checkout:Streaming Uber's Payment Ecosystem', date: 'August 29 / Global", imageUrl: PopImg4 },
  ];
  

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="bg-black px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-base font-medium">
          Aegean Taxi <span className="font-bold">Blog</span>
        </div>
        {/* Action Section */}
        <div className="flex items-center space-x-4">
          <Image src={SearchIcon} alt="Search" className="w-5 h-5" />
          <button className="bg-white text-black py-2 px-4 rounded-full font-medium">
            Sign Up
          </button>
          <Image src={HamburgerIcon} alt="Menu" className="w-5 h-5" />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 pt-10">
        {/* Navigation Options */}
        <div className="flex space-x-8 mb-8">
          <button
            className={`font-bold ${selectedSection === "newest" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("newest")}
          >
            Newest
          </button>
          <button
            className={`font-bold ${selectedSection === "popular" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("popular")}
          >
            Popular
          </button>
          <button
            className={`font-bold ${selectedSection === "byDate" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("byDate")}
          >
            By Date
          </button>
        </div>

        {/* Blog Content */}
        <div className="space-y-8">
          {/* Conditionally render content based on selected section */}
          {selectedSection === "newest" && (
            <>
              {/* First Blog Card */}
              <div className="bg-[#F6F6F6] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card1Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Image src={CalendarIconBlack} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium">
                      Aegean Taxi launches fully automated WhatsApp taxi booking bot
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        onClick={() => router.push("/blog/details")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Blog Card */}
              <div className="bg-black p-8 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-white">Book a ride with Aegean Taxi</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-black underline text-white font-medium">
                        Download the Taxi App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black underline text-white font-medium">
                        Book Online
                      </a>
                    </li>
                  </ul>
                  <button className="bg-green-500 text-white px-4 h-[60px] rounded-lg flex items-center space-x-2">
                    <Image src={WhatsAppIcon} alt="WhatsApp" className="w-10 h-10" />
                    <span>Contact us on WhatsApp</span>
                  </button>
                </div>
              </div>


               {/* third Blog Card */}
               <div className="bg-black rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card3Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2 text-white">
                      <Image src={CalenderIconWhite} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium text-[#F2FF60]">
                    How Aegean Taxi helps fleet partners to increase their revenues                    </h3>
                    <div className="flex justify-between items-center mt-4 text-white">
                      <div className="flex items-center text-sm text-white">
                        <Image src={TimeIconWhite} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-[#F2FF60] text-black px-4 py-2 rounded-full flex items-center space-x-2"
                        onClick={() => router.push("/blog/details")}
                      >
                        <span>More</span>
                        <Image src={ArrowIconBlack} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>



               {/* forth Blog Card */}
               <div className="bg-[#F6F6F6] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card4Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Image src={CalendarIconBlack} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium">
                    Aegean Taxi and the use of F1 telemetry data to optimise routing                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        onClick={() => router.push("/blog/details")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


               {/* fifth Blog Card */}
               <div className="bg-black rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card5Img} alt="Blog Visual" className="h-[200px] w-full object-scale-down" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2 text-white">
                      <Image src={CalenderIconWhite} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium text-[#F2FF60]">
                    Aegean gives Labros Bizas a handjob and he loves it
                    </h3>
                    <div className="flex justify-between items-center mt-4 text-white">
                      <div className="flex items-center text-sm text-white">
                        <Image src={TimeIconWhite} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-[#F2FF60] text-black px-4 py-2 rounded-full flex items-center space-x-2"
                        onClick={() => router.push("/blog/details")}
                      >
                        <span>More</span>
                        <Image src={ArrowIconBlack} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex justify-between items-center pl-8  pr-8 mb-8">
          <h2 className="text-black text-bold  text-md mr-2">1/10</h2>
          <button className={`bg-white  text-black px-4 py-2 rounded-full border-[1px] border-black flex items-center space-x-2`}>
          <span>Next</span>
            <Image src={ArrowIconBlack} alt="Arrow" className="w-3.5 h-3.5" />
          </button>
        </div>



            </>
          )}

          {/* Empty content for Popular */}
          {selectedSection === "popular" && (
            <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Most popular</h1>
            </div>
            <div className="border-t border-gray-300"></div>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                date={article.date}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
          
          )}

          {/* Empty content for By Date */}
          {selectedSection === "byDate" && (
            <div className="text-center text-gray-500">No posts available by date.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
