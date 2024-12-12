import Image from "next/image";


import AirportIcon from "./assets/airport.png";
import PortIcon from "./assets/port.png";
import LineArrow from "./assets/line-arrow.png";
import ToIcon from "./assets/to-icon.png";
import FromIcon from "./assets/from-icon.png";
import DistanceIcon from "./assets/distance-icon.png";
import PriceIcon from "./assets/price.png";







const TaxiPrices = () => {
  // Array of ticket data
  const tickets = [
    {
      from: { name: "Mykonos Airport", icon: AirportIcon },
      to: { name: "Mykonos Port", icon: PortIcon },
      distance: { km: "5 KM", duration: "15 MINS", arrow: LineArrow },
      price: { type: "ECON", amount: "€ 36" },
    },
    {
        from: { name: "Mykonos Airport", icon: AirportIcon },
        to: { name: "Mykonos Port", icon: PortIcon },
        distance: { km: "5 KM", duration: "15 MINS", arrow: LineArrow },
        price: { type: "ECON", amount: "€ 36" },
      },
      {
        from: { name: "Mykonos Airport", icon: AirportIcon },
        to: { name: "Mykonos Port", icon: PortIcon },
        distance: { km: "5 KM", duration: "15 MINS", arrow: LineArrow },
        price: { type: "ECON", amount: "€ 36" },
      },
      {
        from: { name: "Mykonos Airport", icon: AirportIcon },
        to: { name: "Mykonos Port", icon: PortIcon },
        distance: { km: "5 KM", duration: "15 MINS", arrow: LineArrow },
        price: { type: "ECON", amount: "€ 36" },
      },
  ];

  return (
    <section className="bg-white px-4 py-8 md:px-12">
      {/* Heading */}
      <h1
          className="  text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0000FF 0%, #46AFE0 28%, #9898E7 55%, #64429A 83%)",
          }}
        >
          Mykonos taxi prices and distance for popular routes and hotspots
        </h1>

      {/* Table */}
      <div className="mt-6  rounded-lg shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-4 text-center font-semibold py-2 text-sm mb-4">
            <div className="flex flex-col items-center h-[40px] justify-center">
                <Image
                src={FromIcon}
                alt="From Icon"
                width={27}
                height={22}
                className="mx-auto"
                />
                <span className=" text-[#006FE1] font-bold">From</span>
            </div>
            <div className="flex flex-col items-center h-[40px] justify-center">
                <Image
                src={DistanceIcon}
                alt="Distance Icon"
                width={34}
                height={34}
                className="mx-auto"
                />
                <span className="mt-1 text-[#006FE1] font-bold">Distance</span>
            </div>
            <div className="flex flex-col items-center h-[40px] justify-center">
                <Image
                src={ToIcon}
                alt="To Icon"
                width={37}
                height={36}
                className="mx-auto"
                />
                <span className="mt-1 text-[#006FE1] font-bold">To</span>
            </div>
            <div className="flex flex-col items-center h-[40px] justify-center">
                <Image
                src={PriceIcon}
                alt="Price Icon"
                width={34}
                height={34}
                className="mx-auto"
                />
                <span className="mt-1 text-[#006FE1] font-bold">Price</span>
            </div>
            </div>


        {/* Rows */}
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 items-center w-full text-center py-4 border-t text-sm  rounded-xl ${
              index % 2 === 0 ? "bg-[#F1F1F1]" : "bg-white"
            } shadow-sm`}
          >
            {/* From */}
            <div className="flex items-center text-left justify-right gap-1 ml-4">
              
              <span>{ticket.from.name}</span>
              <Image
                src={ticket.from.icon}
                alt={ticket.from.name}
                width={24}
                height={24}
              />
            </div>

            {/* Distance */}
            <div className="flex flex-col items-center">
              <span className="text-[#174FCD] font-med text-sm">{ticket.distance.km}</span>
              <Image
                src={ticket.distance.arrow}
                alt="Dotted Arrow"
                width={60}
                height={10}
              />
              <span className="text-[#174FCD] font-med" >{ticket.distance.duration}</span>
            </div>

            {/* To */}
            <div className="flex items-center text-left justify-center gap-2">
            <Image
                src={ticket.to.icon}
                alt={ticket.to.name}
                width={24}
                height={24}
              />
              <span>{ticket.to.name}</span>
              
            </div>

            {/* Price */}
            <div className="flex flex-col items-center">
              <span className="text-gray-500">{ticket.price.type}</span>
              <span className="text-[#174FCD] font-semibold text-lg">
                {ticket.price.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
          See prices & book instantly
        </button>
      </div>
    </section>
  );
};

export default TaxiPrices;
