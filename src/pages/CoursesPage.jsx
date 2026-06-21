import React, { useState, useEffect } from 'react';
import Hero from '../components/Courses/Hero';
import Features from '../components/Courses/Features';
import Curriculum from '../components/Courses/Curriculum';
import Projects from '../components/Courses/Projects';
import Certification from '../components/Courses/Certification';
import Internship from '../components/Courses/Internship';
import Testimonials from '../components/Courses/Testimonials';
import Pricing from '../components/Courses/Pricing';
import FAQ from '../components/Courses/FAQ';
import PromoPopup from '../components/Courses/PromoPopup';
import StickyBottomBar from '../components/Courses/StickyBottomBar';

const CoursesPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        // Meta Pixel Code
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        // Initialize and Track
        // eslint-disable-next-line no-undef
        fbq('init', '6604459609678289');
        // eslint-disable-next-line no-undef
        fbq('track', 'PageView');
        // eslint-disable-next-line no-undef
        fbq('track', 'Lead');

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />
            <Features />
            <Curriculum />
            <Projects />
            <Certification />
            <Internship />
            <Testimonials />
            <Pricing />
            <FAQ />
            {showPopup && (
                <PromoPopup onClose={() => setShowPopup(false)} />
            )}
            <StickyBottomBar />

            {/* Meta Pixel NoScript */}
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=6604459609678289&ev=PageView&noscript=1"
                />
            </noscript>
        </div>
    );
};

export default CoursesPage;
