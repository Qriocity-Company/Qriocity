import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const stories = [
        {
            name: "Priya K.",
            role: "ML Engineer at TCS",
            prev: "BCA Fresher",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "I had zero coding confidence when I joined. The daily mentor calls changed everything. Honestly, I almost gave up in Week 2. Python felt so hard. But my mentor Ravi anna called me and said 'Priya, let's solve this together.' He spent 2 hours explaining loops until I got it. Today I'm working as an ML Engineer at TCS. I still can't believe it sometimes.",
            package: "₹7.2 LPA",
            location: "Chennai",
            timeline: "3 months after course"
        },
        {
            name: "Karthik R.",
            role: "AI Developer at Zoho",
            prev: "IT Support",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            quote: "After 4 years in IT support, I thought switching to AI was impossible. Qriocity proved me wrong. I was doing basic IT support work, feeling stuck. Everyone said 'AI is for IIT people only.' But the way Qriocity teaches — starting from scratch, with Tamil explanations when needed — made it possible for someone like me. The internship project on my resume got me shortlisted at Zoho. Now I'm building AI features for their products!",
            package: "₹12 LPA",
            location: "Coimbatore",
            timeline: "5 months"
        },
        {
            name: "Swetha M.",
            role: "Placed at Infosys",
            prev: "Final Year ECE Student",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            quote: "My friends were worried about placements. I already had an offer letter. I joined Qriocity in my 7th semester. By the time placement season started, I had 3 AI projects on GitHub and knew how to crack ML interviews. I got placed at Infosys in their AI unit while my classmates were still preparing for generic IT roles. Best decision I made in college!",
            package: "₹6.5 LPA",
            location: "Trichy",
            timeline: "Before graduation"
        },
        {
            name: "Mohammed Ashiq",
            role: "Data Analyst",
            prev: "Commerce Graduate",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
            quote: "They said commerce students can't do AI. They were wrong. Coming from a B.Com background, I had never written a single line of code. The mentors at Qriocity were so patient. They started from 'what is programming' and took me all the way to building ML models. The group learning helped a lot — knowing others were also struggling made me feel less alone. Now I'm a Data Analyst at a startup, working on AI projects!",
            package: "₹5.5 LPA",
            location: "Chennai",
            timeline: "6 months"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % stories.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, stories.length]);

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    const currentStory = stories[currentIndex];

    return (
        <section className="py-4 bg-gradient-to-br from-blue-50 to-purple-50" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                        💼 From Our Students to AI Professionals
                    </h2>
                    <p className="text-xl text-gray-600">Real Stories, Real Results</p>
                    <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
                        <span>⭐ 4.8/5 Rating</span>
                        <span>•</span>
                        <span>👥 500+ Students Trained</span>
                        <span>•</span>
                        <span>💼 87% Placement Rate</span>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-4xl mx-auto scale-90 md:scale-80">
                    {/* Main Testimonial Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden min-h-[400px] transition-all duration-500">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>

                        <Quote className="absolute top-8 right-8 text-purple-100" size={60} />

                        <div className="relative z-10">
                            {/* Header with Image and Info */}
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={currentStory.image}
                                        alt={currentStory.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                                        <Star size={16} className="text-white fill-white" />
                                    </div>
                                </div>

                                <div className="text-center md:text-left flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">🌟 {currentStory.name}</h3>
                                    <p className="text-primary font-semibold text-lg mb-1">{currentStory.role}</p>
                                    <p className="text-gray-500 text-sm mb-2">Previously: {currentStory.prev}</p>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                                            {currentStory.package}
                                        </span>
                                        <span>📍 {currentStory.location}</span>
                                        <span>•</span>
                                        <span>⏱️ {currentStory.timeline}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed italic border-l-4 border-primary pl-6 mb-6">
                                "{currentStory.quote}"
                            </blockquote>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'bg-primary w-8 h-3'
                                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-play indicator */}
                    <div className="text-center mt-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {isAutoPlaying ? '⏸️ Pause auto-play' : '▶️ Resume auto-play'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
