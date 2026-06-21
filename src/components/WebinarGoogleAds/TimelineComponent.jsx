import React from 'react';

const timelineData = [
  {
    content: "How to choose your project domain and title",
    img: "https://cdn.prod.website-files.com/63c5e29f1b5bc83fe0af2489/6424d753f8eb7a9e69c372fc_Gantt%20Chart%20Online%20Software%20Instagantt%20Ideation%202.webp",
    alt: "Choose Project Domain",
  },
  {
    content:
      "Step-by-step guidance on how to complete your final year project with ease.",
    img: "https://t3.ftcdn.net/jpg/00/50/28/04/360_F_50280421_c3QPI4se3DD2dpppDZKWv035EAlQrY7J.jpg",
    alt: "Step by Step guide",
  },
  {
    content:
      "How to add Novelty to your project and publish your research paper.",
    img: "https://assets.myperfectwords.com/blog/research-paper-guide/research-paper-outline/Research-Paper-Outline-MPW-9355.jpg",
    alt: "Research Paper",
  },
  {
    content:
      "The perfect project roadmap that impresses both professors and recruiters.",
    img: "https://hrfibreglass.co.uk/wp-content/uploads/2023/09/road-map.jpg",
    alt: "Project Roadmap",
  },
  {
    content:
      "Pro tips for scoring good grades in final year projects without burning out.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-Av4gw8KIUYvW5MLPU6HggvtfK7LWAYsXA&s",
    alt: "Good Grades",
  },
  {
    content:
      "Step-by-step roadmap and plan of action on how to get your dream job.",
    img: "https://www.admitedge.com/blog/wp-content/uploads/2019/02/New-to-GRE-A-step-by-step-Guide-to-GRE-ETS-Registration.jpg",
    alt: "Dream Job",
  },
];

const TimelineComponent = () => {
  return (
    <div className="bg-[#EDEDED] mt-20 flex flex-col justify-start items-center p-4">
      <h1 className="font-bold lg:text-4xl lg:mt-20 mt-8">
        Start with a{" "}
        <span
          className="lg:px-8 lg:py-2 px-4 py-1 rounded-2xl font-bold text-white"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
            display: "inline-block", 
            transform: "rotate(-2deg)",
            transformOrigin: "center",
          }}
        >
          Project Consultation,{" "}
        </span>{" "}
        End with Your Dream Job
      </h1>

      <div className="relative flex flex-col justify-center items-center mt-10 gap-10 px-4 sm:px-8 md:px-16">
        {/* Vertical Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-1 h-full bg-gray-300 relative">
            {/* Circles on the line */}
            {Array(7).fill(0).map((_, i) => (
              <div
                key={i}
                className="hidden lg:block absolute w-4 h-4 bg-[#F47338] rounded-full transform -translate-x-1/2"
                style={{ top: `${i * 16.66}%` }} // Positions circles equally
              ></div>
            ))}
          </div>
        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              } justify-center items-center gap-10 md:gap-20 z-40`}
          >
            <img
              className="h-[250px] w-full md:w-[250px] object-contain"
              src={item.img}
              alt={item.alt}
            />
            <div className="bg-slate-200 p-4 rounded-xl h-[200px] w-full md:w-[200px] lg:w-[250px] font-semibold text-lg flex justify-center items-center">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
