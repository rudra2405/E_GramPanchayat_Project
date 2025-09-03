import React from "react";
import certificateImg from "../assets/Images/1.webp";
import waterImg from "../assets/Images/water_supply.webp";
import grievanceImg from "../assets/Images/grivence.webp";

export default function Services() {
  return (
    <>
      <section id="services" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src={certificateImg}
              alt="Certificates"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Birth & Death Certificates
            </h3>
            <p>
              Apply and download birth and death certificates online with ease.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src={waterImg}
              alt="Water Supply"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Water Supply</h3>
            <p>Request new water connections and report water supply issues.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src={grievanceImg}
              alt="Grievance"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Grievance Redressal</h3>
            <p>Submit complaints and track status through our online portal.</p>
          </div>
        </div>
      </section>
    </>
  );
}
