import React from "react";
import { Hero } from "../components/Hero";
import { Courses } from "../components/Courses";
import { Project } from "../components/Project";
import { Testimonial } from "../components/Testimonial";
import { Footer } from "../components/Footer";
import WebinarPopup from "../components/WebinarPopup";

const Home = () => {
  return (
    <>
      <div className="bg-[#000] justify-center items-center flex flex-col">
        <Hero />
        <Courses />
        <Project />
        <Testimonial />
        <WebinarPopup/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
