import React, { useEffect, useState } from "react";

const Book = () => {
  const initialTime = 15 * 60 * 1000; // 15 minutes in milliseconds
  const [offerEndTime, setOfferEndTime] = useState(Date.now() + initialTime);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      if (time.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [offerEndTime]);

  function calculateTimeLeft() {
    const difference = Math.max(0, offerEndTime - Date.now());

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds, total: difference };
  }

  // If the timer has finished, don't render the footer
  if (timeLeft.total <= 0) {
    return null;
  }

  const handleSubmit = () => {
    window.location.href = "https://courses.qriocity.in/s/store";
  };

  return (
    <div className="bg-[#000000] h-[100px] w-full p-4 flex justify-between z-40 items-center bottom-0 fixed">
      <div className="flex flex-col">
        <div className="flex justify-center items-center lg:gap-6 gap-2 h-full"></div>
        <h1 className="mt-2 text-white lg:text-bold text-lg lg:text-xl lg:ml-10 ">
          Offer ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}
          s!!
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center lg:mr-10">
        <button
          onClick={handleSubmit}
          className="lg:px-14 py-4 px-4 rounded-full lg:font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Book;
