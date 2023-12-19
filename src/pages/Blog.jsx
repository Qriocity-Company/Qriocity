import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const URL = "https://crm-backend-o6sb.onrender.com";
const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const[category, setCategory]= useState("Qriocity");

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/${category}`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/${category}`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="w-full mx-auto max-w-[1440px] mt-[100px] mb-10 font-Poppins px-4 md:px-0">
      <div className="mt-20 self-start flex items-start flex-col">
        <h1 className="pb-1 font-bold md:text-5xl text-2xl md:mb-5 text-white ">
          Blogs
        </h1>
        <div className="flex flex-col items-center mt-2 text-white">
          <div>Uncover the Secrets: Journey into Our Blog</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start w-full mt-0 md:mt-10  z-10 ">
        <div className="md:flex-[3] flex flex-col justify-start mt-10 mb-10 md:mb-0 ">
          <h1 className="font-semibold text-3xl text-white pb-4 ">
            Categories
          </h1>
          <span
            className={
              category != "Qriocity"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00]  mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("Qriocity");
            }}
          >
            All
          </span>
          <span
            className={
              category != "software-development"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00] mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("software-development");
            }}
          >
            Software Development
          </span>
          <span
            className={
              category != "app-development"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00] mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("app-development");
            }}
          >
            App Development
          </span>
          <span
            className={
              category != "ui-ux"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00] mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("ui-ux");
            }}
          >
            UI/UX Design
          </span>
          <span
            className={
              category != "ai-ml"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00] mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("ai-ml");
            }}
          >
            AI/ML Solutions
          </span>
          <span
            className={
              category != "landing-page"
                ? "text-[20px] text-[#ff5e00] mb-1 hover:text-teal-300 font-medium cursor-pointer"
                : "text-[20px] hover:text-[#ff5e00] mb-1 text-teal-300 font-medium cursor-pointer"
            }
            onClick={() => {
              setCategory("landing-page");
            }}
          >
            Landing Page Development
          </span>
        </div>

        <div className="grid grid-flow-row  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {blogs.map((b, index) => {
            return (
              <Link
                key={index}
                to={`/blogs/${index}`}
                state={{ b }}
                className="flex flex-col  justify-start items-start mb-4 bg-white  rounded-xl "
              >
                <img
                  src={`${URL}/${b.imageURL}`}
                  alt={b.title}
                  className="mb-4 w-[350px]  h-[250px] rounded-[10px] "
                />

                <h2 className="md:text-2xl font-bold mb-2 px-4">{b.title}</h2>
                <p className="text-gray-600 mb-2 px-4">{b.caption}</p>
                <span className="text-center px-4 mb-4 text-gray-800 text-sm font-medium">
                {new Date(b.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;

{
  /* <div key={index}  className='my-10 text-white flex md:flex-row flex-col md:items-center  gap-5'>
               <img src={blogimage} className='md:w-[200px] rounded-xl' />
                <div className='flex flex-col gap-3'>
                  <div className='lg:text-3xl md:text-2xl text-xl  '>  {b.title}</div>
                  <div className='md:text-xl italic'> {b.caption} </div>
                </div>
            </div> */
}
