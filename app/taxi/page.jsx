import Image from "next/image";
import HamgurgerIcon from "./assets/hamburgerIcon.svg";
import Logo from "./assets/logo.svg";
import AppleStore from "./assets/apple.svg";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";
import Background from "./assets/background.png";
import PickUpIcon from "./assets/pickupicon.svg";
import DestinationIcon from "./assets/destination-icon.svg";
import CalenderIcon from "./assets/Calendar.svg";

import WhyBookSection from "../components/Why_Book_Section/WhyBookSection";
import TaxiCategories from "../components/TaxiCategoriesSection/TaxiCategories";
import AdditionalServicesSection from "../components/AdditionalServicesSection/AdditionalServices";
import BookingOptionsSection from "../components/BookingOptionsSection/BookingOptions";
import FAQsSection from "../components/FAQsSection/faqs";
import BlogSection from "../components/BlogSection/blog";
import TicketSection from "../components/TicketsSection/tickets";
import TestimonialSection from "../components/TestimonialSection/testimonial";
import DriverSection from "../components/Driver Section/drivers";
import FindUsSection from "../components/FindUsSsection/findus";
import Footer from "../components/Footer/footer";

const LocationPage = () => {
  return (
    <div className="relative bg-white">
      {/* Header and Text Section */}
      <div
        className="relative bg-cover bg-center h-screen pb-10"
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-3 py-2">
          <button aria-label="Open Menu">
            <Image
              src={HamgurgerIcon}
              alt="Menu icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
          <div>
            <Image
              src={Logo}
              alt="Aegean Taxi Logo"
              width={150}
              height={25}
              className="h-8 ml-2"
            />
          </div>
          <button
            className="ml-6 h-10 bg-black px-4 py-2 rounded-xl flex items-center border-1 border-white"
            aria-label="Download on App Store"
          >
            <Image
              src={AppleStore}
              alt="Download on App Store"
              className="w-full h-8"
              width={100}
              height={32}
            />
          </button>
        </header>

        {/* Text Section */}
        <div className="mx-4 my-10 text-black">
          <h1 className="text-4xl font-bold leading-[1.3]">Your Taxi App</h1>
          <h1 className="text-4xl font-bold leading-[1.3]">In Greece</h1>
          <h2 className="text-2xl font-bold leading-[1.3] pt-5 pr-[50%]">
            Download the app and book a ride in seconds
          </h2>
        </div>

        {/* Input Fields Section */}
        <div className="relative mt-[40%] overflow-hidden p-[2px] rounded-t-3xl mx-4 rounded-b-3xl bg-gradient-to-r from-[#49F352] via-blue-500 to-[#3C00FF] mask-image-[linear-gradient(to top, black, transparent), linear-gradient(to bottom, black, transparent)] mask-repeat-no-repeat mask-size-[100%_20px, 100%_20px]">
          <div className="rounded-t-3xl rounded-b-3xl bg-[#D9D9D9]">
            <div className="mx-8 py-6 rounded-xl">
              <div className="relative flex flex-col gap-4">
                {/* Pick-Up Input */}
                <div className="relative">
                  <label htmlFor="pickup" className="sr-only">
                    Pick-up location
                  </label>
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pick-up location"
                    className="w-full p-4 border border-black rounded-lg pl-12"
                    aria-required="true"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
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
                  className="absolute left-[23px] top-[35px] h-[60px] w-[2px] bg-black z-20"
                  aria-hidden="true"
                ></div>

                {/* Destination Input */}
                <div className="relative">
                  <label htmlFor="destination" className="sr-only">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter destination"
                    className="w-full p-4 border border-black rounded-lg pl-12"
                    aria-required="true"
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

                {/* Button Section */}
                <div className="flex gap-4 w-full items-center">
                  <button className="bg-blue-600 text-white px-4 py-4 rounded-xl font-medium hover:bg-blue-700 flex-1">
                    See prices & book
                  </button>
                  <button
                    className="bg-blue-600 text-white flex items-center justify-center rounded-xl hover:bg-blue-700 w-1/4 " 
                    aria-label="Open Calendar"
                    style={{ height: "56px", width: "56px" }}
                  >
                    <Image
                      src={CalenderIcon}
                      alt="Calendar icon"
                      className="h-8 w-8"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row justify-between mt-2 mx-4">
          <button
            className="flex flex-col items-center justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
            aria-label="Call Taxi"
          >
            <Image
              src={Call}
              alt="Phone icon"
              width={55}
              height={40}
              className="mb-1"
            />
            <span className="font-medium text-[10px]">Call</span>
          </button>
          <button
            className="flex flex-col items-center justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
            aria-label="Contact via WhatsApp"
          >
            <Image
              src={WhatsApp}
              alt="WhatsApp contact icon"
              width={60}
              height={40}
              className="mb-1"
            />
            <span className="font-medium text-[10px]">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <WhyBookSection />
      <TaxiCategories />
      <BookingOptionsSection />
      <TicketSection />
      <AdditionalServicesSection />
      <TestimonialSection />
      <FAQsSection />
      <BlogSection />
      <DriverSection />
      <FindUsSection />
      <Footer />
    </div>
  );
};

export default LocationPage;
