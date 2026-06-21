import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
const URL = "https://crm-backend-o6sb.onrender.com/"

const BlogItem = () => {
  const location = useLocation();
  const blog = location.state.b;

  if (!blog) {
    // Handle the case where the blog object is not available
    return (
      <div>
        <p>Blog not found.</p>
        <Link to="/" className="text-blue-500">
          Go back to the homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-20 mb-10 w-5/6 mx-auto min-h-screen">
      <Link
        to={-1}
        className="w-fit text-white flex items-center gap-2 bg-gradient-to-r from-[#FBA154] to-[#F15A29] px-5 md:py-2 py-1 rounded-full mb-5 "
      >
        back <IoArrowBackCircle className="md:text-4xl text-2xl" />{" "}
      </Link>
      <div className="w-full bg-white  mx-auto mt-4 p-4 border border-[#F15A29] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogItem;
