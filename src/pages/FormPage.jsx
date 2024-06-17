import React, { useState } from "react";
import namepic from "../Utils/name.png";
import emailpic from "../Utils/email.png";
import phonepic from "../Utils/phone.png";
import collegepic from "../Utils/college.png";
import yearpic from "../Utils/year.png";
import rectangle from "../Utils/Rectangle.png";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner8 } from "react-icons/im";
import axios from "axios";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = "https://crm-backend-o6sb.onrender.com";

  const handleSubmit = async () => {
    const currentDate = new Date().toISOString();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      college === "" ||
      year === ""
    ) {
      toast.error("Please fill all fields!!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`${URL}/students/newStudent`, {
        name: name,
        email: email,
        phone: phone,
        college: college,
        year: year,
        date: currentDate,
      });
      if (data?.success) {
        toast.success("Succesfully Submitted");
        localStorage.setItem("Filled", true);
        setLoading(false);
        window.location.href = "https://www.geeksforgeeks.org/";
      }
    } catch (error) {
      console.log(error);
      toast.error("Submission failed. Please try again later.");
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/; // Change this according to your phone number format
    return re.test(String(phone));
  };

  const divStyle = {
    backgroundImage: `url(${rectangle})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-black h-screen p-4 flex justify-center items-center">
      <div
        className="rectangle p-4 rounded-xl  w-[1000px] flex flex-col mt-16"
        style={divStyle}
      >
        <div className="heading flex justify-center items-center gap-2 text-5xl font-bold">
          <h1 className="text-white">FILL THIS TO</h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#ed9b9b] to-[#FF5924]">
            DOWNLOAD
          </h1>
        </div>
        <div className="flex mt-5 justify-center items-center">
          <h1 className="font-semibold text-2xl text-gray-400">
            Don't miss this anyday
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-5 text-white">
          <div className="flex items-center gap-4 bg-black p-2 rounded-xl w-[600px]">
            <img className="h-5" src={namepic} />
            <input
              className="outline-none bg-black p-2 w-full rounded-xl"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4 bg-black p-2 rounded-xl w-[600px]">
            <img className="h-5" src={emailpic} />
            <input
              className="outline-none bg-black p-2 w-full rounded-xl"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4 bg-black p-2 rounded-xl w-[600px]">
            <img className="h-5" src={phonepic} />
            <input
              className="outline-none bg-black p-2 w-full rounded-xl"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-4 bg-black rounded-xl w-[600px] p-2">
            <img className="h-5" src={collegepic} />
            <input
              className="outline-none bg-black p-2 w-full rounded-xl"
              placeholder="College Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-5 bg-black p-4 rounded-xl w-[600px]">
            <img className="h-5" src={yearpic} />
            <select
              className="outline-none bg-black w-full rounded-xl"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="" hidden>
                Year of studying
              </option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-10">
          <button
            className="mt-auto relative bg-orange-500 text-white text-xl font-bold rounded-3xl shadow-lg hover:opacity-90 transition duration-300 p-4 w-[300px] "
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <ImSpinner8 size={30} className="animate-spin" />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default FormPage;
