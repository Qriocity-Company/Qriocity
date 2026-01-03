// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import BookConsultations from "./pages/BookConsultations";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import Webinar from "./pages/Webinar";
import Blog from "./pages/Blog";
import BlogItem from "./components/BlogItem";
import Privacy from "./pages/Privacy";
import ResourceLandingPage from "./pages/ResourcesLandingPage";
import FormPage from "./pages/FormPage";
import TermsandServices from "./pages/TermsandServices";
import Refund from "./pages/Refund";
import RoadMap from "./pages/RoadMap";
import Placement from "./pages/Placement";
import Dsa from "./pages/Dsa";
import Fullstack from "./pages/Fullstack";
import BootCamp from "./pages/BootCamp";
import ProjectWorkshop from "./pages/ProjectWorkshop";
import WebinarAds from "./pages/WebinarAds";
import WebinarGoogleAds from "./pages/WebinarGoogleAds";
import WebinarUK from "./pages/WebinarUK";
import WebinarPhdProffesors from "./pages/WebinarPhdProffesors";
import WebinarHardware from "./pages/WebinarHardware";
import EarnWebinar from "./pages/EarnWebinar";
import ThankYouPage from "./pages/ThankYouPage";
import ConsultAds from "./pages/ConsultAds";
import ThankYouPage2 from "./pages/ThankyouPage2";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Router>
      <div className="bg-black z-50 flex flex-col overflow-hidden">
        <Navbar />

        <Routes>
          {/* General Routes */}
          <Route index path="/" element={<Home />} />
          <Route index path="/bookConsultations" element={<BookConsultations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blog" element={<BlogItem />} />

          {/* Campaign / Consultation */}

          {/* Website&Query */}
          <Route path="/consultations" element={<Webinar />} />

          {/* FaceBook Page */}
          <Route path="/bookacall" element={<WebinarAds />} />
          <Route path="/assignments-service" element={<WebinarUK />} />
          <Route path="/phd-projects" element={<WebinarPhdProffesors />} />
          <Route path="/hardware-projects" element={<WebinarHardware />} />
          <Route path="/bookacallnow" element={<WebinarGoogleAds />} />

          <Route path="/bookconsultation" element={<ConsultAds />} />

          {/* Resources / Forms */}
          <Route
            path="/resource/:uniqueLink"
            element={<ResourceLandingPage />}
          />
          <Route path="/form/:uniqueLink" element={<FormPage />} />

          {/* Policies */}
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<TermsandServices />} />
          <Route path="/refund" element={<Refund />} />

          {/* Other Pages */}
          <Route path="/webinar" element={<RoadMap />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/DsaBootcamp" element={<Dsa />} />
          <Route path="/FullstackBootcamp" element={<Fullstack />} />
          <Route path="/Bootcamp" element={<BootCamp />} />
          <Route path="/projectWorkshop" element={<ProjectWorkshop />} />
          <Route path="/campus-expert-program" element={<EarnWebinar />} />

          {/* Thank You Pages */}
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/thank_you" element={<ThankYouPage2 />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
