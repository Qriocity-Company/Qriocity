import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GTMPageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
}

export default GTMPageViewTracker;
