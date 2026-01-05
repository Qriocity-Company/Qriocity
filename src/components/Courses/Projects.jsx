import React, { useState, useEffect } from 'react';
import { Code, Sparkles, Brain, MessageSquare, TrendingUp, Shield, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const projects = [
        {
            title: "AI-Powered Chatbot",
            category: "Generative AI",
            description: "Build an intelligent chatbot using OpenAI API and LangChain. Implement context-aware conversations and integrate with vector databases.",
            icon: MessageSquare,
            techStack: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"],
            difficulty: "Advanced",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Image Classification System",
            category: "Deep Learning",
            description: "Develop a CNN-based image classifier using TensorFlow. Train on custom datasets and deploy as a web application.",
            icon: Brain,
            techStack: ["TensorFlow", "Keras", "Python", "OpenCV", "Gradio"],
            difficulty: "Intermediate",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Stock Price Predictor",
            category: "Machine Learning",
            description: "Create a time-series forecasting model to predict stock prices using LSTM networks and technical indicators.",
            icon: TrendingUp,
            techStack: ["Python", "Pandas", "Scikit-learn", "PyTorch", "Matplotlib"],
            difficulty: "Intermediate",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Fraud Detection System",
            category: "Machine Learning",
            description: "Build a real-time fraud detection system using ensemble learning. Handle imbalanced datasets effectively.",
            icon: Shield,
            techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Flask"],
            difficulty: "Advanced",
            gradient: "from-red-500 to-orange-500"
        },
        {
            title: "Sentiment Analysis Dashboard",
            category: "Data Science",
            description: "Analyze customer reviews and social media sentiment with interactive visualizations using NLP techniques.",
            icon: Sparkles,
            techStack: ["Python", "NLTK", "Pandas", "Plotly", "Streamlit"],
            difficulty: "Beginner",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Code Generator with AI",
            category: "Generative AI",
            description: "Develop an AI-powered code generation tool using LLMs. Fine-tune models for specific programming languages.",
            icon: Code,
            techStack: ["Python", "Hugging Face", "OpenAI API", "React", "FastAPI"],
            difficulty: "Advanced",
            gradient: "from-indigo-500 to-purple-500"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 6000); // Slower 6 second interval for smoother experience

        return () => clearInterval(interval);
    }, [isAutoPlaying, projects.length]);

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-green-100 text-green-700';
            case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
            case 'Advanced': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(projects[(currentIndex + i) % projects.length]);
        }
        return visible;
    };

    const visibleProjects = getVisibleProjects();
    const currentProject = projects[currentIndex];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        🚀 Industry Projects For Your Portfolio
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Build real-world AI/ML projects that will impress recruiters
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop View - 3 Cards */}
                    <div className="hidden md:flex md:justify-center md:items-center gap-6 mb-8">
                        {visibleProjects.map((project, idx) => {
                            const Icon = project.icon;
                            const isCenter = idx === 1; // Middle card is the center
                            return (
                                <div
                                    key={`${project.title}-${idx}`}
                                    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-2xl hover:z-10 animate-fade-in ${isCenter ? 'scale-105 ring-2 ring-primary' : 'scale-95 opacity-75'
                                        }`}
                                    style={{
                                        flex: '0 0 300px',
                                        animation: 'slideIn 0.7s ease-out'
                                    }}
                                >
                                    <div className={`bg-gradient-to-r ${project.gradient} p-4 relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                                        <Icon className="text-white mb-2 relative z-10 transition-transform duration-500 hover:scale-110" size={32} />
                                        <h3 className="text-lg font-bold text-white relative z-10">{project.title}</h3>
                                        <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(project.difficulty)} relative z-10`}>
                                            {project.difficulty}
                                        </span>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            {project.description}
                                        </p>

                                        <div className="mb-3">
                                            <p className="text-xs font-semibold text-gray-500 mb-1">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.techStack.slice(0, 3).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs transition-all duration-300 hover:bg-primary hover:text-white"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs transition-all duration-300 hover:bg-primary hover:text-white">
                                                        +{project.techStack.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile View - 1 Card */}
                    <div className="md:hidden mb-8">
                        {(() => {
                            const Icon = currentProject.icon;
                            return (
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className={`bg-gradient-to-r ${currentProject.gradient} p-6 relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                        <Icon className="text-white mb-3 relative z-10" size={40} />
                                        <h3 className="text-xl font-bold text-white relative z-10">{currentProject.title}</h3>
                                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(currentProject.difficulty)} relative z-10`}>
                                            {currentProject.difficulty}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {currentProject.description}
                                        </p>

                                        <div className="mb-4">
                                            <p className="text-xs font-semibold text-gray-500 mb-2">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {currentProject.techStack.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">
                                                <Github size={16} />
                                                Code
                                            </button>
                                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm font-medium">
                                                <ExternalLink size={16} />
                                                Demo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-20"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-20"
                        aria-label="Next project"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mb-4">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'bg-primary w-8 h-3'
                                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-play control */}
                    <div className="text-center">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                        </button>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Ready to Build These Projects?</h3>
                    <p className="text-white/90 mb-4 text-sm max-w-2xl mx-auto">
                        Each project includes step-by-step guidance, code reviews, and deployment support.
                    </p>
                    <button className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        Start Building Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
