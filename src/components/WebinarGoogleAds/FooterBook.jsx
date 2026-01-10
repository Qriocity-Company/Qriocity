import React, { useState, useEffect } from 'react';

const FooterBook = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown time (replace this with the actual logic for countdown)
  useEffect(() => {
    const countdown = () => {
      const offerEndTime = new Date(); // Set the offer end time here
      offerEndTime.setHours(offerEndTime.getHours() + 5); // Example: offer ends in 5 hours

      const interval = setInterval(() => {
        const currentTime = new Date();
        const difference = offerEndTime - currentTime;

        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        } else {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          setTimeLeft({ hours, minutes, seconds });
        }
      }, 1000);

      return () => clearInterval(interval); // Clean up the interval
    };

    countdown();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="z-40 py-6 fixed bottom-0 left-0 w-full bg-black text-white p-2">
      <div className="md:w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-4xl text-xl font-semibold text-[#F15A29]">
              Free
              <span className="ml-3 md:text-2xl text-xs line-through">
                ₹7993
              </span>
            </p>
            <p className="md:text-lg text-sm font-semibold">
              Offer ends in {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s!!!
            </p>
          </div>

          <div>
            <button
              className="md:text-2xl text-xs bg-gradient-to-r from-[#FBA154] to-[#F15A29] text-white md:px-12 px-4 md:py-4 py-2 rounded-full transition duration-300"
              onClick={scrollToTop}
            >
              BOOK CONSULTATION CALL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBook;
