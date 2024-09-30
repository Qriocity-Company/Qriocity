import React from 'react';

const Comparision = () => {
  const data2 = [
    { name: "College Format Ppt and Report", check1: "❌", check2: "✅" },
    {
      name: "Project Titles",
      check1: "Old Basic Titles",
      check2: "Novelty Based Research Titles",
    },
    { name: "Plagiarism", check1: "Github Codes", check2: "0% Plagiarized Code" },
    {
      name: "Review Wise Code",
      check1: "Only full code",
      check2: "Module Wise Code",
    },
    { name: "Referral Program", check1: "❌", check2: "Earn upto 10k " },
    {
      name: "Placement Preparation support",
      check1: "❌",
      check2: "Free Placement Support",
    },
    { name: "Bonus", check1: "❌", check2: "Bonus worth ₹7993" },
    { name: "Price Discount", check1: "5-10%", check2: "30-40%" },
    {
      name: "Doubt Solving Sessions",
      check1: "❌",
      check2: "1-1 Project explanations",
    },
    {
      name: "Delivery Timing",
      check1: "No guaranteed delivery date",
      check2: "1 Day",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-20 flex justify-center items-center flex-col">
      <h1 className="mt-10 text-red-500 font-bold text-[25px]">COMPARISON</h1>
      <h1 className="text-white font-semibold lg:text-[45px] text-[30px] lg:mt-0 mt-5">
        What makes us standout?
      </h1>

      <div className="lg:w-[900px] w-auto mx-auto p-4 bg-[#0F0F0F] rounded-lg overflow-hidden mt-10">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="text-center p-4 text-white lg:text-2xl text-xl border-b border-gray-700 border-r">
                Features
              </th>
              <th className="text-center p-4 text-white lg:text-2xl text-xl border-b border-r border-gray-700">
                Other Project Centers
              </th>
              <th className="text-center p-4 text-orange-500 lg:text-2xl text-xl border-b border-gray-700">
                Qriocity
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data2.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-4 text-left border-t border-r border-gray-700">
                  {row.name}
                </td>
                <td className="p-4 text-center border-t border-r border-gray-700 text-green-400">
                  {row.check1}
                </td>
                <td className="p-4 text-center border-t border-gray-700 text-green-400">
                  {row.check2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col justify-center items-center lg:mr-10 mt-10 mb-10">
        <button
          className="px-14 py-4 rounded-full font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={scrollToTop}
        >
          START YOUR PROJECT JOURNEY WITH QRIOCITY
        </button>
      </div>
    </div>
  );
};

export default Comparision;
