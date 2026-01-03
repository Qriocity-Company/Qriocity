import React from 'react';
import { BadgeCheck, Users, Briefcase, Star, Sparkles } from 'lucide-react';

const Hero = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        mobile: '',
        education: '',
        profile: ''
    });
    const [status, setStatus] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/course-leads/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    phone: formData.mobile // Map mobile to phone
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Success! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    education: '',
                    profile: ''
                });
            } else {
                setStatus(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to connect to server.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden" id="hero">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in">

                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-5 py-2 rounded-full text-sm font-bold shadow-md animate-pulse">
                            <Sparkles size={16} className="text-orange-500" />
                            <span>🔥 Limited Seats | Next Batch Starting Soon</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Become a <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Job-Ready AI/ML Engineer</span> in <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">3 Months</span> + 1 Month Real Internship!
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Learn from industry experts, build real AI projects, and get placement support until you land your dream AI job.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="group relative bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-1 hover:scale-105">
                                <span className="relative z-10">Book My Free Call</span>
                                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </button>
                            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl text-lg font-bold shadow-md hover:shadow-lg transition-all hover:scale-105">
                                Download Syllabus
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold">
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <BadgeCheck className="text-green-500" size={20} />
                                <span className="text-gray-700">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <Users className="text-blue-500" size={20} />
                                <span className="text-gray-700">500+ Students</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <Briefcase className="text-purple-500" size={20} />
                                <span className="text-gray-700">87% Placement</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <Star className="text-yellow-500" size={20} />
                                <span className="text-gray-700">4.8/5 Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-scale-in">
                        <div className="bg-white p-1 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 hover:shadow-glow transition-all duration-300 animate-float">
                            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Book A Free Career Counseling</h3>
                                    <p className="text-sm text-gray-600 mt-2">Talk to our experts about your AI Career</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-gray-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-gray-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-600 font-medium">+91</span>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                required
                                                className="flex-1 w-full px-4 py-3 border-2 border-gray-200 rounded-r-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-gray-300"
                                                placeholder="98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Education Qualification</label>
                                        <select
                                            name="education"
                                            value={formData.education}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-gray-300 bg-white"
                                        >
                                            <option value="">Select your qualification</option>
                                            <option value="engineering-cs">Engineering Degree (CS / IT / ECE / EEE)</option>
                                            <option value="engineering-other">Engineering Degree (Mech / Civil / Others)</option>
                                            <option value="non-engineering">Non-Engineering Degree (B.Sc / B.Com / BCA / MBA / M.Sc / Others)</option>
                                            <option value="iti-diploma">ITI / Diploma</option>
                                            <option value="hsc-ssc">HSC / SSC</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Current Profile</label>
                                        <select
                                            name="profile"
                                            value={formData.profile}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-gray-300 bg-white"
                                        >
                                            <option value="">Select your current profile</option>
                                            <option value="working-non-it">Working in Non IT Industry</option>
                                            <option value="working-it">Working in IT Industry</option>
                                            <option value="student">Student</option>
                                            <option value="graduated">Graduated and Looking for a Career</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Booking...' : 'Book Free Slot'}
                                    </button>

                                    {status && (
                                        <div className={`text-sm text-center p-2 rounded-lg ${status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {status}
                                        </div>
                                    )}

                                    <p className="text-xs text-center text-gray-500 mt-3">
                                        By clicking, you agree to our Terms & Conditions
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
