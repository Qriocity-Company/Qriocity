import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const Curriculum = () => {
    // PRD: SECTION 4
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            title: "Module 1: Introduction to AI & Python Basics",
            duration: "10 Hours",
            level: "Beginner Friendly",
            topics: [
                "Learn the fundamentals of AI and Python programming",
                "Practice competitive programming with Python",
                "Understand key data structures and functions",
                "Gain insights into current industry trends"
            ]
        },
        {
            title: "Module 2: Data Science Fundamentals (NumPy, Pandas)",
            duration: "12 Hours",
            level: "Beginner to Intermediate",
            topics: [
                "Master NumPy for numerical computing",
                "Data manipulation and analysis with Pandas",
                "Data visualization with Matplotlib and Seaborn",
                "Exploratory Data Analysis (EDA) techniques"
            ]
        },
        {
            title: "Module 3: Machine Learning Algorithms",
            duration: "15 Hours",
            level: "Intermediate",
            topics: [
                "Supervised learning: Regression and Classification",
                "Unsupervised learning: Clustering and Dimensionality Reduction",
                "Model evaluation and hyperparameter tuning",
                "Scikit-learn and XGBoost implementation"
            ]
        },
        {
            title: "Module 4: Deep Learning & Neural Networks",
            duration: "14 Hours",
            level: "Intermediate to Advanced",
            topics: [
                "Neural network fundamentals and architectures",
                "TensorFlow and Keras for deep learning",
                "Convolutional Neural Networks (CNNs)",
                "Introduction to PyTorch basics"
            ]
        },
        {
            title: "Module 5: Generative AI & LLMs",
            duration: "16 Hours",
            level: "Advanced",
            topics: [
                "Understanding Large Language Models (LLMs)",
                "OpenAI API integration and prompt engineering",
                "LangChain for building AI applications",
                "Vector databases: FAISS and Chroma"
            ]
        },
        {
            title: "Module 6: Building Real-world Projects",
            duration: "20 Hours",
            level: "All Levels",
            topics: [
                "End-to-end ML project development",
                "Deployment with Streamlit and Gradio",
                "Version control with Git and GitHub",
                "Building a portfolio-ready AI application"
            ]
        },
        {
            title: "Module 7: Career Prep & Mock Interviews",
            duration: "8 Hours",
            level: "All Levels",
            topics: [
                "Resume building for AI/ML roles",
                "Technical interview preparation",
                "Mock interviews with industry experts",
                "Job search strategies and networking"
            ]
        }
    ];

    const currentModule = modules[activeModule];

    return (
        <section className="py-20 bg-white" id="curriculum">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Industry-Aligned Curriculum</h2>
                    <p className="text-gray-600">Master the tools used by top tech companies.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col lg:flex-row gap-12">
                    {/* Desktop: Vertical Module List */}
                    <div className="hidden lg:block lg:w-1/3 space-y-2">
                        {modules.map((mod, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveModule(idx)}
                                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${idx === activeModule
                                        ? 'bg-primary text-white shadow-md scale-105'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:scale-102'
                                    }`}
                            >
                                <div className="font-semibold">{mod.title.split(':')[0]}</div>
                            </div>
                        ))}
                        <button className="w-full mt-6 bg-accent hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                            <BookOpen size={20} />
                            Download Syllabus
                        </button>
                    </div>

                    {/* Mobile: Horizontal Scrollable Module List */}
                    <div className="lg:hidden w-full">
                        <div className="overflow-x-auto pb-4 -mx-4 px-4 mb-6">
                            <div className="flex gap-3 min-w-max">
                                {modules.map((mod, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveModule(idx)}
                                        className={`px-4 py-3 rounded-lg whitespace-nowrap font-semibold transition-all duration-300 ${idx === activeModule
                                                ? 'bg-primary text-white shadow-md scale-105'
                                                : 'bg-white text-gray-700 hover:bg-blue-50'
                                            }`}
                                    >
                                        {mod.title.split(':')[0]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Module Content */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 animate-fade-in">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{currentModule.title.split(':')[1]?.trim() || currentModule.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{currentModule.duration}</span>
                                <span>•</span>
                                <span>{currentModule.level}</span>
                            </div>

                            <div className="space-y-3">
                                {currentModule.topics.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                                        <p className="text-gray-700 text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-accent hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105">
                            <BookOpen size={20} />
                            Download Syllabus
                        </button>
                    </div>

                    {/* Desktop: Module Content */}
                    <div className="hidden lg:block lg:w-2/3 bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 animate-fade-in">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentModule.title.split(':')[1]?.trim() || currentModule.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{currentModule.duration}</span>
                            <span>•</span>
                            <span>{currentModule.level}</span>
                        </div>

                        <div className="space-y-4">
                            {currentModule.topics.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
