import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { ImSpinner8 } from "react-icons/im";

const MainCard = ({ setShowForm }) => {
  const [loading, setLoading] = useState(false);
  const [popuploading, setPopuploading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupForm, setpopForm] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [department, setDepartment] = useState();
  const [college, setCollege] = useState();
  const [year, setYear] = useState();
  const filled = localStorage.getItem("PopUp");
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    phoneNumber: "",
    message: "",
    departmentCollege: "",
    YearCollege: "",
    College: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  async function onSubmit(event) {
    setLoading(true);
    event.preventDefault();

    // Proceed with form submission
    await fetch(
      "https://crm-backend-o6sb.onrender.com/googleadsCustomer/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      }
    );

    const webAppUrl =
      "https://script.google.com/macros/s/AKfycbwfekjniHA2SRTxmWJNbkZLyegxcfC7kc_T5jVo_eu_UGRLdsE6N5f4Cr9iwkmv2MrNzA/exec?source=google";

    await fetch(webAppUrl, {
      method: "POST",
      mode: "no-cors", // Google Script requires no-cors
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setLoading(false);

    if (window.gtag) {
      window.gtag("event", "form_submission", {
        event_category: "Form",
        event_label: "Contact Form",
        value: 1,
      });
    }

    // Custom styled alert using SweetAlert2
    // Swal.fire({
    //   title: "Thank You!",
    //   text: "Thanks for contacting, our team will contact you shortly.",
    //   icon: "success",
    //   confirmButtonText: "OK",
    //   background: "#f4f4f4",
    //   customClass: {
    //     popup: "rounded-lg", // Customize popup style
    //     title: "font-bold text-lg", // Customize title style
    //     content: "text-md", // Customize content style
    //   },
    // });

    await updateSpreadSheet();
    handleClick();

    // Reset form fields after submission
    setFormData({
      name: "",
      senderEmail: "",
      phoneNumber: "",
      message: "",
      departmentCollege: "",
      YearCollege: "",
      College: "",
    });

    // Show popup for 2.5 seconds
    if (typeof window !== undefined) {
      window.location.href = "/thankYou";
    }
    // navigate("/thankYou");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const handleClose = () => {
    setpopForm(false);
  };
  useEffect(() => {
    if (!filled) {
      setpopForm(true);
    }
  }, []);

  const updateSpreadSheet = async () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Format the time as HH:MM:SS
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    try {
      fetch("https://sheetdb.io/api/v1/jjsk0slgx4fy2", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: formData.name,
              Email: formData.senderEmail,
              Date: formattedDate,
              Time: formattedTime,
              Number: formData.phoneNumber,
              Message: formData.message,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePopSpreadSheet = async () => {
    const currentDate = new Date();
    // Format the date as DD/MM/YYYY
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Format the time as HH:MM:SS
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    try {
      const response = await fetch("https://sheetdb.io/api/v1/qr63j4ua71frc", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              Date: formattedDate,
              Time: formattedTime,
              Contact: phone,
            },
          ],
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
          date: currentDate.toLocaleDateString(),
        }
      );

      if (data?.success) {
        handleClickPopup();
        localStorage.setItem("PopUp", true);
        setPopuploading(false);
        setpopForm(false);
        await updatePopSpreadSheet();
        window.location.href =
          "https://docs.google.com/document/d/1p3nWOTCdn80Jfyb0t9BH1rrBSOcdFCuzb2UBQjIuBJY/edit?usp=drivesdk";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    var data = {
      name: formData.name,
      phone: formData.phoneNumber,
      message: formData.message,
      college: formData.College,
      department: formData.departmentCollege,
      year: formData.YearCollege,
    };
    emailjs
      .send("service_audiui6", "template_wja99ms", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => { },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClickPopup = (e) => {
    var data = {
      name: name,
      phone: phone,
      email: email,
    };
    emailjs
      .send("service_audiui6", "template_gftaflp", data, "gNK_PfCqn5ho5f0Kb")
      .then(
        (result) => { },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    window.gtag("config", "AW-11433484632", {
      page_path: "Consultation Page",
    });
  }, []);
  return (
    <div className="lg:min-w-[1048px]  lg:h-[700px] md:min-w-[780px]  max-w-sm text-center  md:py-20 py-10 mx-auto flex flex-col p-5 justify-center items-center border-2 border-white rounded-[42px] ">
      <div className="lg:text-[72px] md:text-5xl  text-3xl md:leading-[72px]  ">
        Quick, Quality Projects <br /> Delivered in 1 Day
      </div>
      <p className="text-[#FBA154] md:text-3xl mt-5 ">
        Leave the project to us and get your dream job
      </p>

      <form onSubmit={onSubmit} className="w-[80%] mt-8 flex flex-col gap-5">
        {/* Email Field */}
        <div className="flex text-black order-1 lg:order-3 self-center lg:w-[50%] w-full">
          <input
            type="text"
            name="message"
            placeholder="Enter Message"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Name, Phone, College */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 text-black order-2">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="senderEmail"
            placeholder="Enter Email"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.senderEmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            maxLength="10"
            pattern="\d{10}"
            name="phoneNumber"
            placeholder="Enter Contact Number"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department, Year, Message */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 text-black order-3 lg:order-2">
          <input
            type="text"
            name="College"
            placeholder="College Name"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.College}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="departmentCollege"
            placeholder="Enter Department"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.departmentCollege}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="YearCollege"
            placeholder="Enter year of studying"
            className="p-4 bg-white rounded-lg outline-none w-full"
            value={formData.YearCollege}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center order-4">
          <button
            className="btn mt-10 font-bold bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-8 md:px-16 md:py-4 py-2 rounded-full md:text-xl flex justify-center items-center"
            type="submit"
          >
            {loading ? (
              <ImSpinner8 size={30} className="animate-spin" />
            ) : (
              "BOOK CONSULTATION CALL"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainCard;
