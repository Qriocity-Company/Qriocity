import React, { useEffect, useState } from "react";
import axios from "axios";
import blogimage from "../assets/about2.jpeg";
import {  useNavigate } from "react-router";
import { Link } from "react-router-dom";
const URL = "https://crm-backend-o6sb.onrender.com"
const Blog = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/Qriocity`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-5/6 mx-auto max-w-[1440px]  mt-[100px] mb-10">
    
      <h1 className="text-white md:text-5xl text-2xl md:mb-5  font-bold">Blogs </h1>
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {blogs.map((b, index) => {
          return (
            <Link  key={index}  to={`/blogs/${b}`} state={{ b}} className="max-w-md mx-auto mt-4 p-4 bg-white border rounded-lg shadow-lg">
              <img src={`${URL}/${b.imageURL}`} alt={b.title} className="mb-4 w-full  rounded-lg" />

              <h2 className="md:text-2xl font-bold mb-2">{b.title}</h2>
              <p className="text-gray-600 mb-2">{b.caption}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;



  {/* <div key={index}  className='my-10 text-white flex md:flex-row flex-col md:items-center  gap-5'>
               <img src={blogimage} className='md:w-[200px] rounded-xl' />
                <div className='flex flex-col gap-3'>
                  <div className='lg:text-3xl md:text-2xl text-xl  '>  {b.title}</div>
                  <div className='md:text-xl italic'> {b.caption} </div>
                </div>
            </div> */}