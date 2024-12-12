
"use client"
import { useState } from "react";
import Image from "next/image";
import ArrowDown from "./assets/arrow.png"; 
import ArrowBtn from "./assets/arrow2.png";
import curtains from './assets/curtains.png';
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is Online booking available 24/7 for Mykonos?",
      answer: "Yes, online booking is available 24/7 to make your trip convenient.",
    },
    {
      question:
        "What are the payment options when booking a taxi for Mykonos with Aegean Taxi?",
      answer: "You can pay using credit card, debit card, or cash.",
    },
    {
      question:
        "Will I get instant confirmation of my car and driver details?",
      answer: "Yes, confirmation will be sent instantly via email.",
    },
    {
      question: "How can I track my Mykonos Taxi after booking online?",
      answer: "You can track your taxi using the provided tracking link.",
    },
    {
      question: "How can I find a taxi or transfer in Mykonos?",
      answer: "You can find a taxi easily by booking online or calling us.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col py-20 px-8 bg-white">
      {/* FAQ Section */}
      <div className="px-4 pt-6 bg-[#CCD3E1] rounded-3xl shadow-md">
        <h1 className="text-2xl font-bold text-left text-black py-6">
          Frequently asked questions about Mykonos taxi
        </h1>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm font-semibold text-gray-800">
                  {faq.question}
                </span>
                <Image
                  src={ArrowDown}
                  alt="Toggle FAQ"
                  className={`w-6 h-5 ml-2 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-center mt-6 mb-4">
                        <button className="flex justify-center items-center mx-10 w-full py-3 bg-black text-white text-lg font-semibold rounded-2xl hover:bg-gray-800">
                                <span className="mr-2">Read More</span>
                                <Image
                                    src={ArrowBtn} // Replace with the actual path to your arrow image
                                    alt="Arrow Icon"
                                    className="w-5 h-4 ml-2"
                                />
                        </button>


        </div>
        <Image src={curtains} alt='Curtains' />
      </div>
    </div>
  );
};

export default FAQs;
