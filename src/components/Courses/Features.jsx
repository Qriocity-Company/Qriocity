import React, { useState } from 'react';
import { Video, Users, MessageCircle, Award, Code, Database, Server, Smartphone, Monitor } from 'lucide-react';

const Features = () => {
    const [activeFilter, setActiveFilter] = useState('All Tools');

    const categories = ['All Tools', 'Programming', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Database & Deployment'];

    const tools = [
        // Programming
        { name: 'Python', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'SQL', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

        // Data Science & Machine Learning
        { name: 'NumPy', category: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', category: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Matplotlib', category: 'Machine Learning', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'Scikit-learn', category: 'Machine Learning', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },

        // Deep Learning
        { name: 'TensorFlow', category: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', category: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
        { name: 'PyTorch', category: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },

        // Generative AI
        { name: 'OpenAI', category: 'Generative AI', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png' },
        { name: 'Hugging Face', category: 'Generative AI', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
        { name: 'LangChain', category: 'Generative AI', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },

        // Database & Deployment
        { name: 'FAISS', category: 'Database & Deployment', icon: 'https://avatars.githubusercontent.com/u/15658638?s=200&v=4' },
        { name: 'Streamlit', category: 'Database & Deployment', icon: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
        { name: 'Git', category: 'Database & Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', category: 'Database & Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ];

    const filteredTools = activeFilter === 'All Tools'
        ? tools
        : tools.filter(tool => tool.category === activeFilter);

    // PRD: SECTION 2, 5, 7
    return (
        <section className="py-20 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* How You'll Learn */}
                <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-[3rem] sm:rounded-[4rem] p-8 lg:p-16 text-white overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">🎓 How You'll Learn at Qriocity</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-4">
                                <div className="text-accent text-xl font-bold">01</div>
                                <h3 className="text-xl font-bold">Recorded Lessons</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Watch high-quality video lessons at your own pace. Available 24/7 with Tamil explanations where needed.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-accent text-xl font-bold">02</div>
                                <h3 className="text-xl font-bold">Weekly Live Sessions</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Live Q&A, doubt clearing, and code-along workshops every weekend with instructors.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-accent text-xl font-bold">03</div>
                                <h3 className="text-xl font-bold">Daily Mentor Support</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Personal mentor assigned to you. Daily WhatsApp check-ins to ensure you never fall behind.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-accent text-xl font-bold">04</div>
                                <h3 className="text-xl font-bold">Batch Learning</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Learn with 20-30 peers. Celebrate wins together and stay motivated with gamified rewards.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Tools Section */}
                <div className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-white rounded-[3rem] sm:rounded-[4rem] mt-12 scale-95">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-3">Tools Covered</h2>
                            <p className="text-gray-400">Master 12+ Tools Directly from Top Industry Experts</p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex justify-center gap-3 mb-10 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-semibold ${activeFilter === cat
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Tools Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                            {filteredTools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                                >
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="h-12 w-auto object-contain mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-xs font-semibold text-gray-700 text-center">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

// Helper Icon for specific usage
function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}

export default Features;
