import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaTimesCircle, FaClock, FaCalendar, FaLaptop, FaDollarSign, FaRocket, FaBrain, FaCode, FaFileAlt, FaChartLine, FaComments } from "react-icons/fa";

const ProjectWorkshop = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Countdown timer
  const offerEndTime = new Date();
  offerEndTime.setHours(offerEndTime.getHours() + 12);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let difference = Math.max(0, offerEndTime - new Date());
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    difference -= hours * 60 * 60 * 1000;
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    difference -= minutes * 60 * 1000;
    const seconds = Math.floor((difference / 1000) % 60);
    return { hours, minutes, seconds };
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.college.trim()) newErrors.college = "College is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.year) newErrors.year = "Year is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("https://crm-backend-o6sb.onrender.com/workshop/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful! We'll send you the workshop details via email.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          department: "",
          year: "",
        });
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const learningOutcomes = [
    {
      icon: <FaRocket className="text-[#F15A29]" size={40} />,
      title: "Select the Perfect Project Title",
      description: "Learn how to identify titles with scope for novelty and impact",
    },
    {
      icon: <FaBrain className="text-[#F15A29]" size={40} />,
      title: "Add Novelty Like a Pro",
      description: "Discover techniques to make your project unique and publication-ready",
    },
    {
      icon: <FaCode className="text-[#F15A29]" size={40} />,
      title: "Master AI Tools for Coding",
      description: "Use ChatGPT, GitHub Copilot, and other tools effectively to write clean, functional code",
    },
    {
      icon: <FaFileAlt className="text-[#F15A29]" size={40} />,
      title: "Create Stunning PPTs Fast",
      description: "Generate professional presentations using AI tools that actually impress reviewers",
    },
    {
      icon: <FaChartLine className="text-[#F15A29]" size={40} />,
      title: "Write & Publish Research Papers",
      description: "Step-by-step guide to writing and publishing papers at minimal cost",
    },
    {
      icon: <FaComments className="text-[#F15A29]" size={40} />,
      title: "Ace Your Project Explanations",
      description: "Learn frameworks to confidently explain your project in reviews and interviews",
    },
  ];

  const faqs = [
    {
      question: "Is this really free?",
      answer: "Yes, 100% free. No hidden charges, no upsells. Just pure value.",
    },
    {
      question: "Will the recording be available if I can't attend live?",
      answer: "This is a live, interactive workshop. To get maximum value and ask questions, we highly recommend attending live. Recordings may not be shared.",
    },
    {
      question: "I'm from a non-CSE branch (Mechanical/Civil/EEE). Can I join?",
      answer: "This workshop is specifically designed for CSE, IT, Data Science, and Cyber Security students. The content won't be relevant for non-CSE branches.",
    },
    {
      question: "I'm in third year. Can I attend?",
      answer: "This workshop is tailored for final-year students facing immediate project reviews and placements. The strategies are time-sensitive and final-year specific.",
    },
    {
      question: "What if I already have a project title?",
      answer: "Perfect! You'll learn how to add novelty, improve implementation, use AI tools for coding, and present it better. This workshop will make your existing project significantly stronger.",
    },
    {
      question: "Do I need any prior knowledge of AI tools?",
      answer: "Not at all. We'll teach you everything from scratch — the right way to use ChatGPT, prompt engineering basics, and which tools to use for what purpose.",
    },
  ];

  const firstColumnFAQs = faqs.slice(0, 3);
  const secondColumnFAQs = faqs.slice(3);

  return (
    <>
      <div className="flex flex-col bg-white min-h-screen w-full">
        {/* Hero Section */}
        {/* Hero Section with Form */}
        <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

              {/* Left Column: Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-6xl leading-tight text-gray-900">
                  Stop Struggling With Your Final Year Project —
                  <span className="block mt-2 bg-gradient-to-r from-[#FBA154] to-[#F15A29] bg-clip-text text-transparent">
                    Master AI Tools That Actually Work
                  </span>
                </h1>

                <div className="mt-6">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Your project review is coming. ChatGPT isn't helping. Your code is messy. Your PPT looks generic. And you're running out of time.
                  </p>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-4">
                    What if you could fix everything in just one weekend?
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#FFF7F4] to-white border-l-4 border-[#F15A29] mt-8 p-4 shadow-sm rounded-r-xl">
                  <p className="text-lg text-gray-800">
                    Join our <span className="font-bold text-[#F15A29]">FREE 2-Hour Workshop</span> and learn how industry experts with{" "}
                    <span className="font-bold">7+ years of experience</span> help students like you ace their final year projects.
                  </p>
                </div>

                {/* Workshop Details - Grid for better layout on left */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                    <FaCalendar className="text-[#F15A29] flex-shrink-0" size={20} />
                    <p className="font-bold text-gray-900 text-sm xl:text-base">January 18th, Sunday</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                    <FaClock className="text-[#F15A29] flex-shrink-0" size={20} />
                    <p className="font-bold text-gray-900 text-sm xl:text-base">7:00 PM - 9:00 PM</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                    <FaLaptop className="text-[#F15A29] flex-shrink-0" size={20} />
                    <p className="font-bold text-gray-900 text-sm xl:text-base">Online (Join from Anywhere)</p>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                    <FaDollarSign className="text-[#F15A29] flex-shrink-0" size={20} />
                    <p className="font-bold text-gray-900 text-sm xl:text-base">Absolutely FREE</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Registration Form */}
              <div id="registration-form" className="lg:w-1/2 w-full" data-aos="fade-left">
                <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-2xl border-2 border-orange-100 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F15A29] text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    🔥 Popular! Only 20 Slots Left
                  </div>

                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900">Reserve Your Spot</h3>
                    <p className="text-gray-500 text-sm">Join 1000+ students transforming their projects</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${errors.name ? "border-red-500" : "border-gray-200"
                          } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${errors.email ? "border-red-500" : "border-gray-200"
                          } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-sm">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${errors.phone ? "border-red-500" : "border-gray-200"
                          } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50`}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-sm">
                          Department <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${errors.department ? "border-red-500" : "border-gray-200"
                            } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50 text-sm`}
                        >
                          <option value="">Select Dept</option>
                          <option value="CSE">CSE</option>
                          <option value="IT">IT</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="Other CSE">Other</option>
                        </select>
                        {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-sm">
                          Year <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${errors.year ? "border-red-500" : "border-gray-200"
                            } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50 text-sm`}
                        >
                          <option value="">Select Year</option>
                          <option value="Final Year">Final Year</option>
                          <option value="Pre-Final Year">Pre-Final Year</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
                      </div>
                    </div>

                    {/* College (Full width below split) */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1 text-sm">
                        College Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${errors.college ? "border-red-500" : "border-gray-200"
                          } focus:border-[#F15A29] focus:outline-none transition-colors bg-gray-50`}
                        placeholder="Enter your college name"
                      />
                      {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                      style={{
                        background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                      }}
                    >
                      {loading ? "Registering..." : "🚀 Reserve My Spot Now"}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <FaClock size={12} className="text-green-500" />
                      <span>Takes less than 30 seconds</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem-Agitation Section */}
        <div className="bg-white py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl text-center text-gray-900 mb-12">
              Does This Sound Like You?
            </h2>

            <div className="space-y-6">
              {[
                "Your project idea isn't bad, but you don't know how to add novelty or make it impressive",
                "You've tried using ChatGPT for coding and PPTs, but the output is useless or generic",
                "Your project review is approaching, and you're nowhere near ready",
                "You want to publish a research paper, but it seems too expensive or complicated",
                "You're worried you won't be able to explain your project confidently in interviews",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200">
              <p className="text-xl lg:text-2xl font-bold text-gray-900 text-center">
                Here's the truth: Your project idea is fine. You're just using AI tools the wrong way — and nobody taught you the right way.
              </p>
              <p className="text-lg text-center text-[#F15A29] font-semibold mt-4">
                That's exactly what this workshop will fix.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
                Introducing:{" "}
                <span className="bg-gradient-to-r from-[#FBA154] to-[#F15A29] bg-clip-text text-transparent">
                  Mastering Final Year Projects with AI Tools
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-6">
                A <span className="font-bold text-[#F15A29]">FREE 2-hour live workshop</span> designed specifically for final-year engineering students who want to:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "🎯", text: "Choose project titles that stand out and add real novelty" },
                { icon: "🤖", text: "Use AI tools like ChatGPT the right way for coding, debugging, and documentation" },
                { icon: "📊", text: "Create professional, impressive PPTs that reviewers actually appreciate" },
                { icon: "📝", text: "Write and publish research papers at low cost (yes, it's possible!)" },
                { icon: "💬", text: "Explain your project with confidence in reviews and job interviews" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#F15A29]">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-800 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl text-center">
              <p className="text-lg text-gray-800">
                Conducted by <span className="font-bold text-[#F15A29]">industry experts</span> who have mentored{" "}
                <span className="font-bold">1000+ students</span> over <span className="font-bold">7+ years</span> and know exactly what works.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={scrollToForm}
              >
                🚀 Reserve My Spot Now
              </button>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-white py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl text-center text-gray-900 mb-4">
              By the End of This Workshop,{" "}
              <span className="bg-gradient-to-r from-[#FBA154] to-[#F15A29] bg-clip-text text-transparent">
                You'll Be Able To:
              </span>
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              No fluff. No theory. Just practical, actionable strategies you can implement immediately.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4">{outcome.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{outcome.title}</h3>
                  <p className="text-gray-700">{outcome.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button
                className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={scrollToForm}
              >
                Yes! I Want to Learn This
              </button>
            </div>
          </div>
        </div>

        {/* Who This Is For Section */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl text-center text-gray-900 mb-12">
              Who Should Attend This Workshop?
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="font-bold text-2xl text-green-600 mb-6 flex items-center gap-3">
                <FaCheckCircle size={32} />
                This Workshop Is For You If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You're a final-year engineering student from CSE, IT, Data Science, Cyber Security, or related CSE branches",
                  "Your project review is coming up and you need results fast",
                  "You've been using AI tools but not getting the results you expected",
                  "You want to stand out in placements with a strong project and research paper",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">●</span>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200">
              <h3 className="font-bold text-2xl text-red-600 mb-6 flex items-center gap-3">
                <FaTimesCircle size={32} />
                Please Do NOT Register If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You're NOT in your final year",
                  "You're from non-CSE branches (Mechanical, Civil, EEE, etc.)",
                  "You're not serious about completing your project with excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                    <span className="text-lg text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-700 italic">
                We have limited capacity and want to ensure every seat goes to someone who truly needs it.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <button
                className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={scrollToForm}
              >
                I Qualify! Register Me Now
              </button>
            </div>
          </div>
        </div>

        {/* Instructor Credibility Section */}
        <div className="bg-white py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-3xl lg:text-4xl text-center text-gray-900 mb-6">
              Learn From{" "}
              <span className="bg-gradient-to-r from-[#FBA154] to-[#F15A29] bg-clip-text text-transparent">
                Industry Experts
              </span>{" "}
              Who've Been There
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl shadow-xl">
              <p className="text-xl text-gray-800 text-center mb-8">
                This workshop is conducted by professionals with{" "}
                <span className="font-bold text-[#F15A29]">7+ years of experience</span> helping final-year students successfully complete their projects.
              </p>

              <p className="text-lg text-gray-800 text-center mb-8">
                They've mentored <span className="font-bold">1000+ students</span> across top engineering colleges and know:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Exactly what reviewers and interviewers look for",
                  "Which AI tools work (and which ones waste your time)",
                  "How to add novelty without overcomplicating your project",
                  "The fastest path from \"stuck\" to \"project ready\"",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <FaCheckCircle className="text-[#F15A29] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-800 font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-800 text-center mt-8 font-semibold">
                They've seen every mistake students make — and they'll show you how to avoid them.
              </p>
            </div>
          </div>
        </div>



        {/* FAQ Section */}
        <div className="w-full flex flex-col items-center justify-center bg-white py-16 lg:py-24 px-4" data-aos="fade-up">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
              <span className="text-blue-600">FAQs:</span>
              <span className="ml-2 text-gray-800">Here's everything you may ask...</span>
            </h2>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-start gap-8">
              {/* Left Column */}
              <div className="w-full md:w-auto">
                {firstColumnFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 mb-4 w-full md:w-[500px] transition-all duration-300 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.question}
                      <span className="text-2xl font-bold">{activeIndex === index ? "−" : "+"}</span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                      <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="w-full md:w-auto">
                {secondColumnFAQs.map((faq, index) => (
                  <div
                    key={index + 3}
                    className="border-2 border-gray-300 mb-4 w-full md:w-[500px] transition-all duration-300 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left flex justify-between items-center p-4 text-base md:text-lg text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                      onClick={() => toggleAccordion(index + 3)}
                    >
                      {faq.question}
                      <span className="text-2xl font-bold">{activeIndex === index + 3 ? "−" : "+"}</span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index + 3 ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                      <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
                }}
                onClick={scrollToForm}
              >
                Still Have Questions? Register & Ask Live!
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl lg:text-4xl text-white mb-6">
              Don't Let Your Final Year Project Become Your Biggest Regret
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              20 slots. 1000+ students already transformed. Your turn.
            </p>
            <button
              className="px-10 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
              }}
              onClick={scrollToForm}
            >
              🎯 Register Now Before Slots Run Out
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="bg-black h-auto w-full p-3 lg:p-4 flex flex-row justify-between items-center bottom-0 fixed z-50 shadow-2xl gap-3">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-xl lg:text-4xl text-white">FREE</h1>
            <h1 className="text-sm lg:text-xl text-white line-through">₹999</h1>
          </div>
          <h1 className="text-white text-[10px] lg:text-sm mt-1">
            Offer ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </h1>
        </div>

        <button
          className="px-4 lg:px-8 py-2 lg:py-3 rounded-full font-bold text-white text-xs lg:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
          style={{
            background: "linear-gradient(to right, #FBA154 0%, #F15A29 100%)",
          }}
          onClick={scrollToForm}
        >
          REGISTER NOW
        </button>
      </div>

      {/* Bottom padding to prevent content being hidden by sticky bar */}
      <div className="h-40 lg:h-28"></div>
    </>
  );
};

export default ProjectWorkshop;
