import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Curriculum from './Curriculum';
import Projects from './Projects';
import Internship from './Internship';
import Pricing from './Pricing';
import Certification from './Certification';
import FAQ from './FAQ';
import Footer from './Footer';
import PromoPopup from './PromoPopup';
import StickyBottomBar from './StickyBottomBar';

const LandingPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Header />

            <main>
                <div id="hero">
                    <Hero />
                </div>

                <div id="features">
                    <Features />
                </div>

                <div id="testimonials">
                    <Testimonials />
                </div>

                <div id="curriculum">
                    <Curriculum />
                </div>

                <div id="projects">
                    <Projects />
                </div>

                <div id="internship">
                    <Internship />
                </div>

                <div id="pricing">
                    <Pricing />
                </div>

                <div id="certification">
                    <Certification />
                </div>

                <div id="faq">
                    <FAQ />
                </div>
            </main>

            <Footer />

            {/* Interactive Elements */}
            <PromoPopup />
            <StickyBottomBar />
        </div>
    );
};

export default LandingPage;
