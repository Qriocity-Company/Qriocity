import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

const iframeLinks = [
  "https://www.youtube.com/embed/n66_7be_Mho",
  "https://www.youtube.com/embed/HEca583ur0o",
  "https://youtube.com/embed/m7RUMwFm6os",
  "https://youtube.com/embed/uxiStoqtSIs",
];

function CarasouleWithIframe() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoplay, setAutoplay] = useState(true);
  const playerRefs = useRef([]); // To store multiple player instances

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    function handleResize() {
      const width = window.innerWidth;
      if (width <= 600) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        if (width <= 1000) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPlayerStateChange = (event) => {
    // Detect when the video starts playing or is paused
    if (event.data === window.YT.PlayerState.PLAYING) {
      setAutoplay(false); // Stop the slider autoplay
    } else if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      setAutoplay(true); // Resume slider autoplay
    }
  };

  const onYouTubeIframeAPIReady = (index) => {
    if (!playerRefs.current[index] && window.YT) {
      // Initialize YouTube player for each iframe
      playerRefs.current[index] = new window.YT.Player(
        `youtube-player-${index}`,
        {
          events: {
            onStateChange: onPlayerStateChange,
          },
        }
      );
    }
  };

  useEffect(() => {
    // Ensure players are initialized after API load
    iframeLinks.forEach((_, index) => {
      if (window.YT && window.YT.Player) {
        onYouTubeIframeAPIReady(index);
      }
    });
  }, [iframeLinks]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="h-full w-full px-4 md:px-8 py-8">
      <div className="slider-container max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Conditionally render carousel or static layout */}
        {isMobileView ? (
          <div className="static-videos w-full grid grid-cols-1 gap-4">
            {iframeLinks.map((link, index) => (
              <div className="p-4" key={index}>
                <div className="shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                  <iframe
                    id={`youtube-player-${index}`}
                    src={link} // Now using the embed link
                    title={`YouTube video player ${index + 1}`}
                    className="rounded-lg shadow-md"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      minHeight: "200px",
                      aspectRatio: "16/9",
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...settings} className="w-full">
            {iframeLinks.map((link, index) => (
              <div className="p-4" key={index}>
                <div className="shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                  <iframe
                    id={`youtube-player-${index}`}
                    src={link} // Now using the embed link
                    title={`YouTube video player ${index + 1}`}
                    className="rounded-lg shadow-md"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      minHeight: "200px",
                      aspectRatio: "16/9",
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default CarasouleWithIframe;
