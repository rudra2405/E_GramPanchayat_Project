import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Contact Us
        </h2>
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border p-2 rounded-lg"
            ></textarea>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
