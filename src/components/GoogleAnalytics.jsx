// components/GoogleAnalytics.js
import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-32E3FF3TEW"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-32E3FF3TEW');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
