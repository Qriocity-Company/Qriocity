import React, { useEffect, useState } from "react";

const Book = () => {
  const initialTime = 15 * 60 * 1000; // 15 minutes in milliseconds
  const [offerEndTime, setOfferEndTime] = useState(Date.now() + initialTime);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());

        if (calculateTimeLeft().total <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerActive, offerEndTime]);

  function calculateTimeLeft() {
    const difference = Math.max(0, offerEndTime - Date.now());

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds, total: difference };
  }

  // Toggle the timer
  const toggleTimer = () => {
    if (isTimerActive) {
      setIsTimerActive(false);
    } else {
      setOfferEndTime(Date.now() + timeLeft.total);
      setIsTimerActive(true);
    }
  };

  return (
    <div className="bg-[#000000] h-[100px] w-full p-4 flex justify-between z-50 items-center bottom-0 fixed">
      <div className="flex flex-col">
        <div className="flex justify-center items-center lg:gap-6 gap-2 h-full">
          <h1 className="font-bold text-2xl lg:text-5xl text-white lg:ml-10">
            FREE
          </h1>
          <h1 className="text-[20px] text-white line-through">₹999</h1>
        </div>
        <h1 className="mt-2 text-white lg:ml-10 text-sm">
          Offer ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s!!
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center lg:mr-10">
        <span className="lg:-mr-20 -mr-10 -mb-2 bg-[#DCDCDC] rounded-2xl px-2 lg:px-4 z-50 py-1">
          90% seats booked
        </span>
        <button
          className="lg:px-14 py-4 px-2 rounded-full lg:font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={toggleTimer} // Toggle the timer on click
        >
          {isTimerActive ? "Stop Timer" : "Start Your Journey Now"}
        </button>
      </div>
    </div>
  );
};

export default Book;
