import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import blogimage from "../assets/about2.jpeg";
import { IoArrowBackCircle } from "react-icons/io5";
const URL = "https://crm-backend-o6sb.onrender.com"
const BlogItem = () => {
  const location = useLocation();
  const blog = location.state.b;
  // console.log(blog);
  const date = new Date(blog.createdAt);
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];
  return (
    <div className="mt-[100px] mb-10 w-5/6  mx-auto ">
      <Link
        to={-1}
        className="w-fit text-white  flex items-center gap-2 bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-5 md:py-2 py-1 rounded-full mb-5 "
      >
        back <IoArrowBackCircle className="md:text-4xl text-2xl" />{" "}
      </Link>
      <div className="md:hidden max-w-md mx-auto mt-4 p-4 border border-[#F15A29] rounded-lg shadow-lg">
        <img
          src={`${URL}/${blog.imageURL}`}
          alt={blog.title}
          className="mb-4 w-full  rounded-lg self-center"
        />

        <h2 className="text-2xl font-bold mb-2 text-[#F15A29]">{blog.title}</h2>
        <p className="text-white mb-2">{blog.caption}</p>
        <p className="text-white">{blog.description}</p>
          <p className="text-white ">
           
            Date : <span className="italic">{date.getDay() +" " + monthNames[date.getMonth()]  + " " +  date.getFullYear()}</span>
          </p>
      </div>
      <div className=" p-5 md:flex flex-col hidden gap-5 border border-[#F15A29] rounded-lg shadow-lg items-center">
       <h2 className="text-2xl text-start w-full text-[#F15A29] font-bold ">{blog.title}</h2>
       <p className="text-white text-start w-full italic mb-3">{blog.caption}</p>
        <img src={`${URL}/${blog.imageURL}`} className="mb-4  max-h-[500px] rounded-lg self-center" />

        <div className="flex flex-col gap-5 w-full">
  
          <p className="text-white text-lg text-start">{blog.description}</p>
          <p className="text-white ">
           
            Date : <span className="italic">{date.getDay() +" " + monthNames[date.getMonth()]  + " " +  date.getFullYear()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
