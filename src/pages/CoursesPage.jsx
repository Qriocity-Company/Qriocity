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
        </div>
    );
};

export default CoursesPage;
