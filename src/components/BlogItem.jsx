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
      <div className="md:hidden max-w-md mx-auto mt-4 p-4 bg-white border rounded-lg shadow-lg">
        <img
          src={`${URL}/${blog.imageURL}`}
          alt={blog.title}
          className="mb-4 w-full  rounded-lg"
        />

        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-2">{blog.caption}</p>
        <p className="text-gray-700 ">{blog.description}</p>
        <p className="text-gray-700 mt-3 ">
            {" "}
            By : <span className="font-medium italic">{blog.writer}</span>{" "}
          </p>
          <p className="text-gray-700 ">
           
            Date : <span className="italic">{date.getDay() +" " + monthNames[date.getMonth()]  + " " +  date.getFullYear()}</span>
          </p>
      </div>
      <div className=" p-5  md:block  hidden   gap-10  bg-white border rounded-lg shadow-lg">
       <h2 className="text-2xl w-full  font-bold ">{blog.title}</h2>
       <p className="text-gray-600  italic mb-3">{blog.caption}</p>
        <img src={`${URL}/${blog.imageURL}`} className="mb-4  max-h-[500px] rounded-lg" />

        <div className="flex flex-col gap-5">
  
          <p className="text-gray-700 text-lg ">{blog.description}</p>
          <p className="text-gray-700 ">
            {" "}
            By : <span className="font-medium italic">{blog.writer}</span>{" "}
          </p>
          <p className="text-gray-700 ">
           
            Date : <span className="italic">{date.getDay() +" " + monthNames[date.getMonth()]  + " " +  date.getFullYear()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
