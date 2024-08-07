import React, { useEffect, useState } from "react";

const Book = () => {
  const offerEndTime = new Date();
  offerEndTime.setHours(offerEndTime.getHours() + 12);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let difference = Math.max(0, offerEndTime - new Date());

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    difference -= hours * 60 * 60 * 1000;

    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    difference -= minutes * 60 * 1000;

    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  return (
    <div className="bg-[#000000] h-[100px] w-full p-4 flex justify-between z-50 items-center bottom-0 fixed">
      <div className="flex flex-col">
        <div className="flex justify-center items-center lg:gap-6 gap-2 h-full">
          <h1 className="font-bold text-2xl lg:text-5xl text-white lg:ml-10">
            FREE
          </h1>
          <h1 className=" text-[20px] text-white line-through">₹999</h1>
        </div>
        <h1 className="mt-2 text-white lg:ml-10 text-sm">
          Offer ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}
          s!!
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center lg:mr-10">
        <span className="lg:-mr-20 -mr-10 -mb-2 bg-[#DCDCDC] rounded-2xl px-2 lg:px-4 z-50 py-1">
          90% seats booked
        </span>
        <button
          className="lg:px-14 py-4 px-2 rounded-full lg:font-bold text-white "
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
        >
          Book your Free spot
        </button>
      </div>
    </div>
  );
};

export default Book;
