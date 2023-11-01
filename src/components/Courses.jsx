import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Progressbar from "./utils/Progressbar";
import "../styles/Courses.css";
import Course1 from "../assets/courses1.jpeg";
import Course2 from "../assets/courses2.jpeg";
import Course3 from "../assets/courses3.jpeg";
import { Link } from "react-router-dom";

export const Courses = () => {
  const numberProps = useSpring({
    from: { number: 0 },
    to: { number: 1489032 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number2Props = useSpring({
    from: { number: 0 },
    to: { number: 273928397 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number3Props = useSpring({
    from: { number: 0 },
    to: { number: 287 }, // Define your target number here
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className=" relative mt-24 flex flex-col items-center font-figtree">
      <h1 className="font-figtree text-[36px]  z-10 md:text-[60px] text-white font-semibold">
        We are Proud of{" "}
      </h1>
      <div className="flex lg:flex-row flex-col gap-8 mt-8 text-white">
        <div className="w-[254px] h-[130px] bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {numberProps.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Learners</span>
        </div>
        <div className="w-[304px] h-[130px] bg-[#414141] rounded-xl items-start p-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number2Props.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Lines of Codes</span>
        </div>

        <div className="w-[254px] h-[130px] bg-[#414141] rounded-xl items-start p-10 flex flex-col justify-center">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number3Props.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <span className="text-[16px] ">Mentors</span>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-8 mt-8 text-white">
        <div className="md:w-[530px] w-[350px] h-[120px] z-50 bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <div className="flex gap-4 items-center ">
            <h className="text-[40px] font-figtree font-bold">78%</h>
            <span className="text-[16px] font-figtree ">New Users</span>
          </div>
          <div className="w-[90%]">
            <Progressbar totalno={78} />
          </div>
        </div>
        <div className="md:w-[530px] w-[350px] h-[120px] z-50 bg-[#414141] rounded-xl items-start pl-10 flex flex-col justify-center">
          <div className="flex gap-4 items-center ">
            <h className="text-[40px] font-figtree font-bold">95%</h>
            <span className="text-[16px] font-figtree ">Placement Rate</span>
          </div>
          <div className="w-[90%]">
            <Progressbar totalno={95} />
          </div>
        </div>
      </div>
      <div className="bg-[#FF7A00] absolute top-[34rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
      <div className="bg-[#3cffff] absolute top-[20rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>

      <h1 className="font-figtree  text-[32px]  z-10 md:text-[60px] mt-48 text-white font-semibold">
        Our Self Paced Courses
      </h1>

      <div className="flex lg:flex-row  flex-col gap-8 my-16 font-figtree">
        <div className="wrapper gap-8 ">
          <div className="card">
            <img src={Course1} />
            <div className="info">
              <h1 className="font-bold text-[20px]">Python</h1>
              <p className="text-[16px]">
                Reach out to us for something awesome together
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="card">
            <img src={Course2} />
            <div className="info">
              <h1 className="font-bold text-[20px]">HTML</h1>
              <p className="text-[16px]">
                Reach out to us for something awesome together
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="card">
            <img src={Course3} />
            <div className="info">
              <h1 className="font-bold text-[20px]">CSS</h1>
              <p className="text-[16px]">
                Reach out to us for something awesome together
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/courses">
      <button className="button w-[300px]">
        <span>Explore All Courses </span>
      </button>
      </Link>
    </div>
  );
};
