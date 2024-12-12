"use client";
import React from "react";
import Image from "next/image";

// Import all images
import AppImg1 from "./assets/app_img1.png";
import AppImg2 from "./assets/app_img2.png";
import WebAppImg1 from "./assets/webapp_img1.png";
import WebAppImg2 from "./assets/webapp_img2.png";
import WhatsappImg1 from "./assets/whatsapp_img1.png";
import PhoneImg1 from "./assets/phone_img1.png";
import PhoneImg2 from "./assets/app_img2.png";
import DownloadIcon from "./assets/icon1.png";
import WhatsAppIcon from "./assets/whatsappIcon.png";
import WhatsAppLogo from "./assets/whatsappIcon2.png";
import CallIcon from "./assets/phoneIcon.png";
import Arrow from "./assets/arrow.png";
import OnlineIcon from "./assets/online-icon-removebg-preview.png";


// Sample App section for the slider
const AppSlider = [
  {
    step: "Step 1",
    imgsrc: AppImg1, 
    description: "Download the Mykonos Taxi app from the App Store or Google Play.",
    textcolor: "white",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 2",
    imgsrc: AppImg2, 
    description: "Register with your details to create an account.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 3",
    imgsrc: AppImg1, 
    description: "Choose a taxi category and book your ride.",
    textcolor: "white",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 4",
    imgsrc: AppImg2, 
    description: "Enjoy your ride and leave feedback.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
];

// Sample Webapp Slider section for the slider
const WebAppSlider = [
  {
    step: "Step 1",
    imgsrc: WebAppImg1, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "white",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 2",
    imgsrc: WebAppImg2, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 3",
    imgsrc: WebAppImg1, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "white",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 4",
    imgsrc: WebAppImg2, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
];

// Sample Whatsapp slider section for the slider
const WhatsappSlider = [
  {
    step: "Step 1",
    imgsrc: WhatsappImg1, 
    description: "Click on any whatsapp link on our site or simply text us on +30 6944 500 689 ",
    textcolor: "white",
    textAlignment: "bottom-0 text-left",
  },
  {
    step: "Step 2",
    imgsrc: WebAppImg2, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 3",
    imgsrc: WhatsappImg1, 
    description: "Click on any whatsapp link on our site or simply text us on +30 6944 500 689.",
    textcolor: "white",
    textAlignment: "bottom-0 text-left",
  },
  {
    step: "Step 4",
    imgsrc: WebAppImg2, 
    description: "Select your location from the initial list of islands screen.",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
];

// Sample data for phone slider section for the slider
const PhoneSlider = [
  {
    step: "Step 1",
    imgsrc: PhoneImg1, 
    description: "Dial our 24/7 customer service line on +30 215 215 4000",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 2",
    imgsrc: PhoneImg2, 
    description: "Dial our 24/7 customer service line on +30 215 215 4000",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 3",
    imgsrc: PhoneImg1, 
    description: "Dial our 24/7 customer service line on +30 215 215 4000",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
  {
    step: "Step 4",
    imgsrc: PhoneImg2, 
    description: "Dial our 24/7 customer service line on +30 215 215 4000",
    textcolor: "black",
    textAlignment: "top-0 text-left",
  },
];

// Reusable Slider Component
const SliderComponent = ({ 
  sliderData, 
  backgroundColor, 
  gradientColors, 
  headingText, 
  descriptionText, 
  buttonText, 
  buttonIcon, 
  buttonArrowIcon, 
  buttonBgColor,
  buttonTextColor,
  headingIcon = null 
}) => {
  const [ setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef(null);
  const cardWidth = 260; // Width of each card
  const [isDragging, setIsDragging] = React.useState(false);

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), sliderData.length - 1));
  };

  

  // Drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.clientX;
      const walk = (startX - x) * 2; // Adjust scroll speed
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      updateActiveIndex();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Add event listener for touch and drag events
  React.useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        if (!isDragging) updateActiveIndex();
      };

      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDragging]);

  return (
    <div className={`mb-20 flex flex-col ${backgroundColor} py-8 pl-8 rounded-3xl`}>
      <div className="flex items-center gap-6">
        {/* Gradient Heading */}
        <h1
          className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent pr-4"
          style={{
            backgroundImage: gradientColors,
          }}
        >
          {headingText}
        </h1>

        {headingIcon && (
          <div className="w-10 h-10 flex-shrink-0">
            <Image
              src={headingIcon}
              alt="Heading Icon"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <p className="text-[#3E4A54] mt-4 mb-4 pr-4">
        {descriptionText}
      </p>

      {/* Slider Section */}
      <div className="mt-5 ">
        <div
          ref={scrollRef}
          className="flex   gap-3 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
        >
          {sliderData.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[260px]">
              <p className="text-sm  px-4 pb-2 font-bold text-black">{item.step}</p>
              <div
                className="w-[238px] h-[316px] rounded-3xl bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${item.imgsrc.src})`,
                }}
              >
                <p
                  className={`absolute p-4 w-full ${item.textAlignment} ${
                    item.textcolor === "white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="pr-8">
        <button
                      className={`${buttonBgColor} border border-white mt-6 text-white rounded-3xl flex items-center justify-between w-full py-2 px-4 hover:opacity-90 transition`}
                    >
                      {/* Icon on the left */}
                      <Image
                        src={buttonIcon}
                        alt="Button Icon"
                        className="flex-shrink-0"
                        width={24}
                        height={24}
                      />

                      {/* Button text */}
                      <span className={`text-sm font-bold text-center ${buttonTextColor}`}>
                        {buttonText}
                      </span>

                      {/* Arrow icon on the right */}
                      <Image
                        src={buttonArrowIcon}
                        alt="Arrow Icon"
                        className="flex-shrink-0"
                        width={24}
                        height={24}
                      />
                    </button>
                    </div>

      </div>
    </div>
  );
};

// Main BookingOptions Component
const BookingOptions = () => {
  return (
    <div className="bg-[#121212] px-4 py-20 flex flex-col py-20">
      {/* Heading Section */}
      <div className="text-left pb-10 px-6 ">
        <h1
          className="text-3xl font-bold leading-[1.1] bg-clip-text text-white"
          
        >
          Mykonos Taxi Booking options and process
        </h1>
        <p className="text-white mt-4">
        We made is easier to book your taxi ride in Mykonos! With 4 booking options available to choose from, and a simple process, you can enjoy your Mykonos holiday and leave the logistics to us!
        </p>
      </div>

      {/* Taxi Application Section */}
      <SliderComponent 
        sliderData={AppSlider}
        backgroundColor="bg-[#E3E3E3]"
        gradientColors="linear-gradient(to right, #0048FF 0%, #356FA5 24%, #001C79 51%, #0C2787 76%)"
        headingText="Taxi Application"
        descriptionText="Our Mykonos Taxi app is available in the IOS and the Google play store. Follow these simple steps to download and register to book your Mykonos Taxi"
        buttonText="Download the Taxi App"
        buttonIcon={DownloadIcon}
        buttonArrowIcon={Arrow}
        buttonBgColor="bg-[#346DA4]"
        buttonTextColor="text-white"
      />

      {/* Online Webapp Section */}
      <SliderComponent 
        sliderData={WebAppSlider}
        backgroundColor="bg-[#C2D3E4]"
        gradientColors="linear-gradient(to right, #4C7F00 0%, #18C5AB 24%, #51B481 52%, #64429A 76%)"
        headingText="Book Online / Webapp"
        descriptionText="We made it easier to book your taxi ride in Mykonos with 4 booking options available to we made is"
        buttonText="Book Online"
        buttonIcon={OnlineIcon}
        buttonArrowIcon={Arrow}
        buttonBgColor="bg-[#444444]"
        buttonTextColor="text-white"
      />

      {/* Whatsapp Section */}
      <SliderComponent 
        sliderData={WhatsappSlider}
        backgroundColor="bg-[#D8F6A5]"
        gradientColors="linear-gradient(to right, #4C7F00 0%, #18C5AB 24%, #51B481 52%, #64429A 76%)"
        headingText="Whatsapp"
        descriptionText="Mykonos taxi whatsapp booking, available 24/7. Use whatsapp to request and book a ride in Mykonos instantly. Online and always available. Book now or later."
        buttonText="Launch Whatsapp"
        buttonIcon={WhatsAppIcon}
        buttonArrowIcon={Arrow}
        buttonBgColor="bg-[#21540F]"
        buttonTextColor="text-white"
        headingIcon={WhatsAppLogo}
      />



      {/* Phone Section */}
      <SliderComponent 
        sliderData={PhoneSlider}
        backgroundColor="bg-[#9FF4E4]"
        gradientColors="linear-gradient(to right, #00087F 0%, #0FE665 24%, #51B481 52%, #64429A 76%)"
        headingText="Phone booking 24/7"
        descriptionText="Our call center is available 24.7 call us anytime to book a ride for now or schedule for later"
        buttonText="Call us:  +30 215 215 4000 "
        buttonIcon={CallIcon}
        buttonArrowIcon={Arrow}
        buttonBgColor="bg-white"
        buttonTextColor="text-black"
       
      />


    </div>
  );
};

export default BookingOptions;