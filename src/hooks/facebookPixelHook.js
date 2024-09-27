// src/hooks/usePixelTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const loadFacebookPixelScript = () => {
  if (!window.fbq) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
  }
};

const usePixelTracking = (pixelID) => {
  const location = useLocation();

  useEffect(() => {
    loadFacebookPixelScript();

    fbq("init", pixelID);

    fbq("track", "PageView");
  }, [pixelID]);

  return null; // No need to return anything for simple tracking
};

export default usePixelTracking;
