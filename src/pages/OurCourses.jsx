import React , {useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import "../styles/Courses.css";
import Course1 from "../assets/courses1.jpeg";
import Course2 from "../assets/courses2.jpeg";
import Course3 from "../assets/courses3.jpeg";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Modal from "../components/Modal";
import Python from "../assets/Courses/Python.jpg";
import FullStackDev from "../assets/Courses/FullStackDev.jpg";
import MachineLearning from "../assets/Courses/MachineLearning.jpg";
import DataScience from "../assets/Courses/DataScience.jpg";
import DSA from "../assets/Courses/DSA.jpg";
import Automation from "../assets/Courses/Automation.jpg";


const OurCourses = () => {

  const [showForm, setShowForm] = useState(false);

  // Define a common animation config
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
  });

  return (
    <> 
     {showForm && (
         <Modal setShowForm={setShowForm}/>
      )}
      <div className="bg-cover bg-center bg-no-repeat header-course w-full flex flex-col justify-center items-center mt-[68px] ">
        <h1 className="font-figtree text-[16px] mt-8 z-10 md:text-[48px] text-white font-semibold">
          Get 10% OFF all our Premium Courses{" "}
        </h1>
        <Link to="/contact">
        <button className=" bg-[#F15A29] mb-8 text-white rounded-2xl mt-1 p-1 w-[100px] md:p-3 text-[12px] md:text-[16px] md:rounded-3xl md:w-[200px]">
          <span>Get Offer </span>
        </button>
        </Link>
      </div>
      <div className="relative">
        <div className="bg-[#FF7A00] absolute top-[34rem] left-[-15rem] h-[35.25rem]   w-[20rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#3cffff] absolute top-[20rem] right-[-20rem]  h-[15.25rem]   w-[30.25rem] rounded-full blur-[10rem]"></div>

        <h1 className="font-figtree  text-[32px]  z-10 md:text-[60px] mt-8 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-semibold">
          Our Self Paced Courses
        </h1>
   
        <div className="flex lg:flex-row  flex-col gap-8 justify-center items-center my-16 font-figtree">
          <animated.div style={cardAnimation} className="wrapper gap-8">
            <animated.div style={cardAnimation} className="card">
              <img src={Python} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Python</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}} >Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={FullStackDev} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Full Stack Web Development</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}} >Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={MachineLearning} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Machine Learning</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}} >Buy Now</button>
              </div>
            </animated.div>
          </animated.div>
        </div>
        <div className="flex lg:flex-row justify-center items-center flex-col gap-8 my-16 font-figtree">
          <animated.div style={cardAnimation} className="wrapper gap-8">
            <animated.div style={cardAnimation} className="card">
              <img src={DSA} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Data Structures And Algorithms</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}}>Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={DataScience} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Data Science</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}} >Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={Automation} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Automation Testing</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button onClick={()=>{setShowForm(true)}}>Buy Now</button>
              </div>
            </animated.div>
          </animated.div>
        </div>
        {/* <div className="flex lg:flex-row justify-center items-center flex-col gap-8 my-16 font-figtree">
          <animated.div style={cardAnimation} className="wrapper gap-8">
            <animated.div style={cardAnimation} className="card">
              <img src={Course1} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Python</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button>Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={Course2} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Python</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button>Buy Now</button>
              </div>
            </animated.div>
            <animated.div style={cardAnimation} className="card">
              <img src={Course3} alt="Course 1" />
              <div className="info">
                <h1 className="font-bold text-[20px]">Python</h1>
                <p className="text-[16px]">
                  Reach out to us for something awesome together
                </p>
                <button>Buy Now</button>
              </div>
            </animated.div>
          </animated.div>
        </div> */}
      </div>
      <Footer/>
    </>
  );
};

export default OurCourses;
