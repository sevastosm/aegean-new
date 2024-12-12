"use client";

import Image from "next/image";



import { useRouter } from "next/navigation";



// Image imports
import SearchIcon from "./assets/search.png";
import HamburgerIcon from "./assets/hamburger.png";
import BlogImage from "./assets/card1.png";
import CalendarIconBlack from "./assets/calendarB.png";
import TimeIcon from "./assets/clock.png";
import Lindedin from "./assets/linkedIn.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Settings from "./assets/settings.png";
import CodeSnippet from "./assets/codesnippet.png";
import Diagram from "./assets/diagram.png";
import Arrow from "./assets/arrowB.png";

import PopImg1 from "./assets/most_popular1.png";
import PopImg2 from "./assets/most_popular2.png";
import PopImg3 from "./assets/most_popular3.png";
import PopImg4 from "./assets/most_popular4.png";





const BlogPost = () => {


  const router = useRouter();
    
    const articles = [
        {
          category: "Engineering, Data/ML",
          date: "August 29",
          region: "Global",
          title: "Pinot for Low-Latency Offline Table Analytics",
          image: PopImg1, // Add your image paths here
        },
        {
          category: "Engineering, Data/ML",
          date: "November 07",
          region: "Global",
          title: "Presto Express: Speeding up Query Processing with Minimal Resources",
          image: PopImg2,
        },
        {
          category: "Engineering, Data/ML",
          date: "August 29",
          region: "Global",
          title: "Lucene: Uber’s Search Platform Version Upgrade",
          image: PopImg3,
        },
        {
          category: "Engineering, Backend, Mobile",
          date: "August 29",
          region: "Global",
          title: "Unified Checkout: Streaming Uber’s Payment Ecosystem",
          image: PopImg4,
        },
      ];
    







    return (
      <div className="font-inter bg-white text-black min-h-screen">
        {/* Header */}
        <header className="bg-black px-8 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-base font-medium">
            Aegean Taxi <span className="font-bold">Blog</span>
          </div>
          {/* Action Section */}
          <div className="flex items-center space-x-4">
            <Image src={SearchIcon} alt="Search" width={20} height={20} />
            <button className="bg-white text-black py-2 px-4 rounded-full font-medium">
              Sign Up
            </button>
            <Image src={HamburgerIcon} alt="Menu" width={20} height={20} />
          </div>
        </header>
  



        
        {/* Blog Content */}
        
        <div className="mt-6 max-w-2xl mx-auto ">
          {/* Title Section */}
          <div className="px-8">
          <h1 className="text-2xl font-bold text-gray-800 leading-snug">
            Aegean Taxi launches automated WhatsApp taxi booking bot
          </h1>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                <div className="flex items-center text-sm">
                <Image src={CalendarIconBlack} alt="Clock" className="w-5 h-5 mr-2" />
                    May 25th 2024
                </div>
                <div className="flex items-center text-sm">
                <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
                     5 min read
                </div>
</div>

          </div>
          
          {/* Image */}
          <div className="mt-6">
            <Image
              src={BlogImage}
              alt="Blog Image"
              width={700}
              height={300}
              className="w-full object-cover"
            />
          </div>
  

        <div className="px-8 ">
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <Image src={Lindedin} alt="LinkedIn" width={30} height={30} />
            <Image src={Facebook} alt="Facebook" width={30} height={30} />
            <Image src={Twitter} alt="Twitter" width={30} height={30} />
            <Image src={Settings} alt="WhatsApp" width={30} height={30} />
          </div>
  
          {/* Summary Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-gray-800">Summary</h2>
            <p className="text-gray-600 text-sm mt-2">
              Every year, the day after Thanksgiving earns its title as the
              biggest shopping day of the year, drawing droves of eager consumers
              ready to nab the best deals on everything from tech gadgets to home
              goods.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              In recent years, however, the event has evolved significantly.
              Technological advances and changes in consumer behavior have
              blurred the lines between in-store and online shopping, redefining
              what Black Friday means in today’s digital age. Without further ado,
              let’s explore all you need to know about Black Friday 2024.
            </p>
          </div>
  
          {/* Table of Contents */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-800">Table of Contents</h2>
            <ul className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>Idea conception</li>
              <li>Drawing board and strategy</li>
              <li>Partner selection</li>
              <li>Execution</li>
              <li>Testing</li>
              <li>Bot Deployment</li>
            </ul>
          </div>


          <div className="mt-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">1: Idea Conception</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
          Every year, the day after Thanksgiving earns its title as the biggest
          shopping day of the year, drawing droves of eager consumers ready to nab
          the best deals on everything from tech gadgets to home goods.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light ">
          In recent years, however, the event has evolved significantly.
          Technological advances and changes in consumer behavior have blurred the
          lines between in-store and online shopping, redefining what Black Friday
          means in today’s digital age. Without further ado, let’s explore all you
          need to know about Black Friday 2024.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
        Every year, the day after Thanksgiving earns its
        title as the biggest shopping day of the year,
        drawing droves of eager consumers ready to nab 
        the best deals on everything from tech gadgets to home goods.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
        In recent years, however, the event has evolved significantly.
        Technological advances and changes in consumer behavior have 
        blurred the lines between in-store and online shopping.
        </p>
        {/* Code Snippet Image */}
        <Image
          src={CodeSnippet}
          alt="Code Snippet"
          className="w-full rounded-md shadow-md my-4"
          width={700}
          height={300}
        />
      </div>

      {/* Section 2 */}
      <div className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          1: Drawing board and strategy
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
          Every year, the day after Thanksgiving earns its title as the biggest
          shopping day of the year, drawing droves of eager consumers ready to nab
          the best deals on everything from tech gadgets to home goods.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light ">
          In recent years, however, the event has evolved significantly.
          Technological advances and changes in consumer behavior have blurred the
          lines between in-store and online shopping, redefining what Black Friday
          means in today’s digital age. Without further ado, let’s explore all you
          need to know about Black Friday 2024.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
        Every year, the day after Thanksgiving earns its
        title as the biggest shopping day of the year,
        drawing droves of eager consumers ready to nab 
        the best deals on everything from tech gadgets to home goods.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
        In recent years, however, the event has evolved significantly.
        Technological advances and changes in consumer behavior have 
        blurred the lines between in-store and online shopping.
        </p>
        {/* Diagram Image */}
        <Image
          src={Diagram}
          alt="Diagram"
          className="w-full rounded-md shadow-md my-4"
          width={700}
          height={300}
        />
      </div>
          



      {/*Most Popular Section*/}
      <div className="font-inter bg-white text-black max-w-3xl pt-4 mx-auto">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Most popular</h1>
      <hr className="mb-4 border-gray-300" />

      {/* Article List */}
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex justify-between items-center   pb-4"
          >
            {/* Left Section */}
            <div>
              <p className="text-sm text-gray-500">
                <span className="text-gray-800">{article.category}</span> <span>{article.date}</span> / {article.region}
              </p>
              <h2 className="text-base font-medium mt-1">{article.title}</h2>
            </div>
                      {/* Image Section */}
                      <Image
                        src={article.image} // Dynamically add images
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-md"
                        width={80}
                        height={84}
                      />
                    </div>
                  ))}
                </div>
              </div>



          {/*Back Button */}
          <button className={`bg-white  text-black px-4 py-2 mt-4 mb-4 rounded-full border-[1px] border-black flex items-center space-x-2 `} onClick={() => router.push("/blog")} >
          <Image src={Arrow} alt="Arrow" className="w-3.5 h-3.5 rotate-180" />
          <span className="text-bold">Back</span>
          </button>

        </div>




        </div>
        
      </div>
    );
  };
  
  export default BlogPost;