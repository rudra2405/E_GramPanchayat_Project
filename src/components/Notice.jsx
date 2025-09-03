import React from "react";

export default function Notice() {
  const notices = [
    {
      title: "Village Cleanliness Drive",
      date: "01-Sep-2025",
      desc: "Join the cleanliness drive this Sunday in the village square.",
    },
    {
      title: "Water Supply Disruption",
      date: "05-Sep-2025",
      desc: "Water supply will be interrupted for pipeline maintenance.",
    },
    {
      title: "Gram Sabha Meeting",
      date: "10-Sep-2025",
      desc: "All villagers are requested to attend the Gram Sabha meeting.",
    },
  ];

  return (
    <section id="notices" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Latest Notices
      </h2>
      <div className="grid gap-4">
        {notices.map((notice, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{notice.title}</h3>
            <p className="text-sm text-gray-500">{notice.date}</p>
            <p className="mt-2">{notice.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
