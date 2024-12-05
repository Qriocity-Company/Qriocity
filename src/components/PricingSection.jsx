import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <div className="bg-gray-800 text-white p-2 rounded">
        <span className="text-xl">{minutes}</span> Minutes
      </div>
      <div className="bg-gray-800 text-white p-2 rounded">
        <span className="text-xl">{seconds}</span> Seconds
      </div>
    </div>
  );
}

const PricingSection = () => {
  // Timer setting (e.g., 10 minutes from now)
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-[800px] mx-auto mt-20 text-center">
      <p className="text-lg font-bold text-gray-700">
        Total Value : <del>₹8000/-</del>
      </p>
      <p className="text-lg font-bold text-gray-700">Regular Price : ₹1000/-</p>

      <div className="bg-white text-gray-900 rounded-md shadow-lg py-4 mt-4">
        <p className="text-2xl font-semibold">
          Today's Price : <span className="text-red-600">Free</span>
        </p>
      </div>

      <button className="mt-4 bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-bold shadow-md transition hover:bg-orange-600">
        CLAIM YOUR OFFER FOR FREE NOW
      </button>

      <p className="mt-4 text-gray-600 text-sm">
        Reserve Your Seat Before The Timer Ends To Unlock Bonuses Worth ₹7,993/-
      </p>

      {/* Timer Component */}
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

export default PricingSection;
