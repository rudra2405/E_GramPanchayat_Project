import React from "react";
import Hero from "../assets/Images/Hero.webp";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="p-8 bg-gray-100 flex flex-col lg:flex-row lg:items-center md:items-center lg:gap-6 space-y-5 lg:space-y-0"
      >
        <img
          src={Hero}
          alt="Gram Panchayat"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Welcome to E-Gram Panchayat
          </h2>
          <p className="mb-4">
            Our Gram Panchayat is committed to delivering essential services
            online. Citizens can access information, submit requests, and stay
            updated with notices.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
