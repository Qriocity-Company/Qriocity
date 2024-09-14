import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { Courses } from "../components/Courses";
import { Project } from "../components/Project";
import { Testimonial } from "../components/Testimonial";
import { Footer } from "../components/Footer";
import WebinarPopup from "../components/WebinarPopup";
import { ImSpinner8 } from "react-icons/im";
import axios from "axios";

const Home = () => {
  const [popupForm, setpopForm] = useState(false);
  const [popuploading, setPopuploading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const isFilled = localStorage.getItem("popUpForm");

  const handleClose = () => {
    setpopForm(false);
  };

  const handlePopUp = async () => {
    setPopuploading(true);
    const currentDate = new Date();
    try {
      const { data } = await axios.post(
        "https://crm-backend-o6sb.onrender.com/enquiry/newStudent",
        {
          name: name,
          email: email,
          phone: phone,
          college: college,
          department: department,
          year: year,
          date: currentDate.toLocaleDateString(),
        }
      );

      if (data?.success) {
        localStorage.setItem("popUpForm", true);
        // window.location.href =
        //   "https://courses.qriocity.in/single-checkout/66b35ef1dee0af7f1cf35ee4?pid=p1";
        setPopuploading(false);
        setpopForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isFilled) setpopForm(true);
  }, []);
  return (
    <>
      <div className="bg-[#000] justify-center items-center flex flex-col">
        <Hero />
        {popupForm && (
          <div className="fixed inset-0 bg-black h-screen  bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-bl from-orange-500 via-slate-500 to-white z-50  rounded-lg shadow-lg w-96 p-4 text-white flex flex-col">
              <h1
                onClick={handleClose}
                className="place-self-end cursor-pointer text-4xl font-bold text-gray-100"
              >
                &times;
              </h1>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
                Get Your Free DSA Course!!
              </h2>

              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 md:p-2 border-2 border-black  outline-none focus:ring-2  text-black rounded-xl"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border-2 border-black rounded-xl outline-none focus:ring-2  text-black"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="college"
                    name="college"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="College Name"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="w-full p-2 border-black  rounded-xl outline-none focus:ring-2  text-black border-2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option hidden>Select Your Year</option>
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                    <option>Graduate</option>
                  </select>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={handlePopUp}
                    type="submit"
                    className="bg-gradient-to-r from-orange-600 to-orange-400 text-white  py-2 rounded-full hover:from-orange-500 hover:to-orange-600 px-10"
                  >
                    {popuploading ? (
                      <ImSpinner8 className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Courses />
        <Project />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default Home;
