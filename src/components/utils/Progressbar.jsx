import React, { useState, useEffect } from "react";

export default function Progressbar({ totalno }) {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    setIsRunning(true);
  });
  useEffect(() => {
    if (filled < totalno && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  return (
    <div>
      <div className="progressbar rounded-full w-full bg-white">
        <div className="h-[20px] rounded-full bg-gradient-to-r from-[#F5743E] to-[#E90707]"
          style={{
            width: `${filled}%`,
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
}
