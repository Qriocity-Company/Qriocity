import {React,useState,useEffect} from "react";

import quote from '../assets/“.svg'
import "../styles/Testimonial.css";
import User1 from "../assets/user_01.jpg";
import User2 from "../assets/user_02.jpg";
import User3 from "../assets/user_03.jpg";


export const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    if (slideIndex<=2)
      setSlideIndex(slideIndex + n);
    else
      setSlideIndex(1)
  };
  const minusSlide = (n) => {
    if (slideIndex>1)
      setSlideIndex(slideIndex +n );
    else
      setSlideIndex(3)
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    const screenWidth = window.screen.width;
    if(screenWidth>600)
      slides[slideIndex - 1].style.display = "flex";
    else{
      slides[slideIndex - 1].style.display = "block";
    }
    dots[slideIndex - 1].className += " active";
  };

  return (

    <div className="testimonial-container">

      <img src={quote} alt="" className="quote"/>
      <div className="testimonial-header">Our Students speak</div>

      <div className="outer-container">
        
        <div className="slideshow-container">

          <div className="mySlides fade">
            <div className="slide-img-container">
              <img src={User1} alt="" className="slide-img"/>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nihil! Deleniti reprehenderit tempora nulla quidem reiciendis temporibus sed asperiores est error saepe, suscipit atque obcaecati at dolorem? Saepe, odio reiciendis.</p>
              <div className="credentials">
                <div>Bhatri Narayana</div>
                <p >CSE,VIT Univeristy </p>
              </div>
              <div className="dot-div">
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
              </div>
            </div>
          </div>
          <div className="mySlides fade">
            <div className="slide-img-container">
              <img src={User2} alt="" className="slide-img"/>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nihil! Deleniti reprehenderit tempora nulla quidem reiciendis temporibus sed asperiores est error saepe, suscipit atque obcaecati at dolorem? Saepe, odio reiciendis.</p>
              <div className="credentials">
                <div>Gowtham</div>
                <p >ECE, Satyabama University</p>
              </div>
              <div className="dot-div">
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
              </div>
            </div>
          </div>
          <div className="mySlides fade">
            <div className="slide-img-container">
              <img src={User3} alt="" className="slide-img"/>
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nihil! Deleniti reprehenderit tempora nulla quidem reiciendis temporibus sed asperiores est error saepe, suscipit atque obcaecati at dolorem? Saepe, odio reiciendis.</p>
              <div className="credentials">
                <div>Deekha</div>
                <p >IT , Githam University</p>
              </div>
              <div className="dot-div">
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
              </div>
            </div>
          </div>

          <a className="prev" onClick={() => minusSlide(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
          
          
        </div>
      </div>
    </div>
  );
};
