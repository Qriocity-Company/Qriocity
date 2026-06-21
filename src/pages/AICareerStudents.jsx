import React, { useState } from 'react';

const AICareerStudents = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');
        try {
            const response = await fetch('https://crm-backend-o6sb.onrender.com/enquiry/newStudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', college: '', year: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const scrollToForm = () => {
        document.getElementById('consultation-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="font-figtree bg-white overflow-x-hidden">

            {/* ── SECTION 1: HERO ── */}
            <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-20 left-[-5rem] w-72 h-72 bg-purple-600 rounded-full blur-[8rem] opacity-30"></div>
                <div className="absolute bottom-10 right-[-5rem] w-72 h-72 bg-orange-500 rounded-full blur-[8rem] opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-10">

                        {/* Left */}
                        <div className="w-full lg:w-1/2 text-white space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                                🔥 Limited Seats | Next Batch Starting July 2026
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                                Your Degree Won't<br />
                                Get You Placed.<br />
                                <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">This Will.</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                While you're attending lectures, thousands of students just like you are already building AI projects, completing internships, and getting shortlisted — before graduation.
                            </p>
                            <p className="text-white font-semibold text-lg">
                                The students who get placed first aren't the toppers.<br />
                                They're the ones with <span className="text-orange-400">proof.</span>
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 w-full sm:w-auto"
                            >
                                Book My Free Consultation Call →
                            </button>

                            {/* Trust bar */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                                {['⏱️ 120-Day Program', '🤖 Real AI Projects', '🏢 Internship Experience', '🎯 Placement Prep', '👨💻 1:1 Mentorship'].map((item) => (
                                    <span key={item} className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                        ✓ {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" id="consultation-form">
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Book Your Free AI Career</h3>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Consultation Call</h3>
                                    <p className="text-sm text-gray-500 mt-2">In this 1:1 call, we'll assess exactly where you stand and show you the fastest path to placement.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                            placeholder="Enter your full name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-600 font-medium text-sm">+91</span>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength={10}
                                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-r-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                                placeholder="98765 43210" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                            placeholder="your.email@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">College Name</label>
                                        <input type="text" name="college" value={formData.college} onChange={handleChange} required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                                            placeholder="Your college name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Current Status</label>
                                        <select name="year" value={formData.year} onChange={handleChange} required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white">
                                            <option value="">Select your year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="Final Year">Final Year</option>
                                        </select>
                                    </div>
                                    <button type="submit" disabled={loading}
                                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                                        {loading ? 'Booking...' : 'Book My Free Consultation Call →'}
                                    </button>
                                    {status === 'success' && (
                                        <div className="bg-green-50 border border-green-200 text-green-700 text-sm text-center p-3 rounded-xl font-medium">
                                            ✅ Booked! We'll call you within 24 hours.
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 text-sm text-center p-3 rounded-xl font-medium">
                                            Something went wrong. Please try again.
                                        </div>
                                    )}
                                    <p className="text-xs text-center text-gray-400">Only 40 seats per cohort. Next batch starts July 2026.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: THE PAIN ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                            Here's What Nobody Tells You<br />
                            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">About Campus Placements</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            You've been told: study hard, get good grades, and opportunities will come.<br />
                            But look around.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Placement season is already deciding who gets shortlisted — and who gets left behind. Companies aren't looking for students who attended the most classes. They're looking for students who <strong>can do something on day one.</strong>
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                            Right now, your batchmates who started building projects 6 months ago are already ahead of you. The ones who didn't — are panicking.
                        </p>
                        <p className="text-2xl font-bold text-center text-gray-900 mt-6">Where are you?</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { emoji: '📄', text: 'Walking into a placement interview with only certificates feels like showing up to a cricket match with a bat you\'ve never actually used.' },
                            { emoji: '😓', text: 'Watching your friends get placed while you\'re still "learning" AI on YouTube is a specific kind of pain.' },
                            { emoji: '🎓', text: 'Graduating without a job offer isn\'t just embarrassing — it changes the trajectory of everything that comes after.' },
                            { emoji: '👨\u200D👩\u200D👦', text: 'Your parents sacrificed for 4 years of engineering fees. The pressure to make that count is real, and it\'s heavy.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                                <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 text-white text-center">
                        <p className="text-xl font-bold mb-2">You're not lazy. You're not incapable.</p>
                        <p className="text-lg opacity-90">You just haven't been shown the right path yet.</p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: FUTURE WITHOUT ACTION ── */}
            <section className="py-20 bg-[#0f0c29] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
                        What Happens If The Next 6 Months<br />
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pass Without Proof?</span>
                    </h2>
                    <p className="text-gray-400 text-center text-lg mb-12">Imagine this...</p>

                    <div className="space-y-6">
                        {[
                            'Your final semester ends. Your friends start posting offer letters on LinkedIn. You refresh your email. Nothing.',
                            'You start applying anyway — mass applying, hoping something sticks. Recruiters open your resume and see the same thing they\'ve seen a hundred times. Tutorials. Certifications. No projects. No internship. No portfolio.',
                            'They move on in 8 seconds.',
                            'You attend a few interviews. The technical round asks you to walk through a project you\'ve built. You freeze.',
                            'You go back home and answer the question: "So, what happened with placements?"'
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                                <span className="text-orange-400 font-bold text-xl flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                <p className="text-gray-300 text-base leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-xl font-bold text-white mb-2">This is not a hypothetical. This is happening to lakhs of engineering graduates every single year.</p>
                        <p className="text-orange-400 text-2xl font-extrabold mt-4">The difference between placed and not placed isn't talent. It's proof.</p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: TURNING POINT ── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                        You Still Have Time.<br />
                        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">But Only If You Start Now.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        If you're in your 3rd or final year, you're sitting in the best possible window to change this outcome. Not next semester. <strong>Now.</strong>
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                        Because the students getting placed 6 months from now are building their portfolios today. Qriocity was built for exactly this moment — for students who refuse to leave their career to chance.
                    </p>
                    <button onClick={scrollToForm}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
                        Book My Free Consultation Call →
                    </button>
                </div>
            </section>

            {/* ── SECTION 5: THE FRAMEWORK ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">The System</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                            How We Turn You From a Student Into a<br />
                            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Candidate Companies Actually Want</span>
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">Through our Learn → Build → Prove → Launch™ Framework</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: 'Learn™', icon: '🧠', color: 'from-purple-500 to-purple-700', desc: 'Master Python, Machine Learning, Deep Learning, Generative AI, LangChain — through structured, mentor-led sessions. No random YouTube rabbit holes.' },
                            { step: 'Build™', icon: '👨💻', color: 'from-blue-500 to-blue-700', desc: 'Build actual AI applications. Projects that go on GitHub. Projects that become your portfolio. Projects that give you something real to talk about in every interview.' },
                            { step: 'Prove™', icon: '🏅', color: 'from-orange-500 to-orange-700', desc: 'Complete a 3–4 week internship with live project execution, code reviews, and mentor feedback. This is the experience freshers are always told they don\'t have. Now you will.' },
                            { step: 'Launch™', icon: '🚀', color: 'from-green-500 to-green-700', desc: 'Resume guidance, portfolio positioning, mock interviews, and career clarity — so you walk into every opportunity with confidence, not dread.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className={`bg-gradient-to-br ${item.color} p-6 text-white text-center`}>
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <h3 className="text-xl font-extrabold">{item.step}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: WHAT YOU GET ── */}
            <section className="py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-3">Everything Included</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold">The Complete AI Career Accelerator™</h2>
                        <p className="text-gray-400 mt-3 text-lg">Everything in one system. Nothing missing.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                        {[
                            { icon: '🧠', title: 'AI & Generative AI Mastery Path™', desc: 'From Python basics to building and deploying real Generative AI applications. Exactly what the industry expects from a fresher AI hire.' },
                            { icon: '📂', title: 'Portfolio Builder System™', desc: 'Multiple real projects. GitHub-ready. Recruiter-evaluated. The kind of proof that makes your resume impossible to ignore.' },
                            { icon: '🏢', title: 'Industry Internship Experience™', desc: 'Live project execution. Code reviews. Industry workflow. Real feedback from real mentors. This is the experience that separates you from every other fresher in the room.' },
                            { icon: '🚀', title: 'Career Launch System™', desc: 'Resume that gets opened. Portfolio that gets reviewed. Placement preparation that actually prepares you. No generic advice — specific, actionable career support.' },
                            { icon: '🎯', title: 'Interview Success System™', desc: 'AI interviews. ML interviews. Python rounds. HR rounds. Mock frameworks. You\'ll walk in knowing exactly what to expect and how to respond.' },
                            { icon: '👨🏫', title: 'Mentor Success Ecosystem™', desc: 'Daily doubt support. Weekly reviews. A community of peers going through the same journey. Accountability built in so you never fall behind.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-orange-500/40">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bonuses */}
                    <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl font-extrabold text-center mb-2">🎁 Included At No Extra Cost</h3>
                        <p className="text-center text-gray-400 mb-8">Total Bonus Value: ₹47,000+ — Free</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { title: 'Final Year Project Accelerator™', value: '₹20,000+ Value', desc: 'Turn your final year project into a resume asset, portfolio showcase, and interview talking point.' },
                                { title: 'Personal AI Career Strategy Session™', value: '₹12,000 Value', desc: 'A dedicated 1:1 session focused entirely on your career roadmap — where you are and exactly how to get there.' },
                                { title: 'AI Career Community Network™', value: '₹15,000 Value', desc: 'Mentors. Alumni. Peers. Industry updates. A support system that stays with you beyond 120 days.' }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3">{item.value}</div>
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guarantee */}
                    <div className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-2xl font-extrabold mb-4">The Build-Your-Portfolio-Or-We-Stay-With-You Guarantee™</h3>
                        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Show up. Do the work. Attend sessions, complete assignments, participate in internship activities.
                            If you do all of that and still haven't completed your portfolio — we don't walk away.
                            We stay with you, mentor you, and support you beyond the 120 days at <strong className="text-white">zero extra cost</strong> until it's done.
                        </p>
                        <p className="text-orange-400 font-bold mt-4">Because your career matters too much to leave half-built.</p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 7: TESTIMONIALS ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Student Stories</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                            Students Who Were Exactly<br />
                            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Where You Are — And What Changed</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {[
                            { name: 'Yogesh H', college: 'BMS College of Technology', role: 'Placed as Data Scientist', text: 'I was in my final year with no projects, no internship, no clue what to do. Six months later I was placed as a Data Scientist. What changed was having something real to show.' },
                            { name: 'Janani S', college: 'Sri Eshwar Engineering College', role: 'Placed as ML Engineer', text: 'I thought I needed more certifications. Turns out I needed to build something. The portfolio I built here was the reason I got shortlisted for every interview.' },
                            { name: 'Vikram R', college: 'Kumaraguru College of Technology', role: 'Placed as AI Developer', text: 'I went from confused about AI to confident in interviews. The internship experience made all the difference — I had real work to talk about.' },
                            { name: 'Sathish K', college: 'BMS College of Engineering', role: 'Placed as ML Engineer', text: 'The mentor support was unlike anything I\'d experienced before. I had someone pushing me, reviewing my work, and making sure I didn\'t give up.' }
                        ].map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400 text-lg">★</span>)}
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{t.name}</p>
                                        <p className="text-sm text-gray-500">{t.college}</p>
                                        <p className="text-sm text-green-600 font-semibold">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: SCARCITY ── */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="text-6xl mb-6">⏰</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">40 Seats. One Cohort. One Chance.</h2>
                    <p className="text-xl leading-relaxed opacity-90 mb-4">
                        To protect the quality of mentorship, project reviews, internship guidance, and career support — every cohort is limited to <strong>40 students.</strong>
                    </p>
                    <p className="text-lg opacity-80 mb-10">
                        Every week you wait is a week your peers spend building their portfolios, completing their internships, and pulling further ahead. Placement season doesn't pause for anyone.
                    </p>
                    <button onClick={scrollToForm}
                        className="bg-white text-orange-600 hover:bg-orange-50 font-extrabold px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        Book My Free Consultation Call →
                    </button>
                    <p className="mt-4 text-sm opacity-75">Next cohort starts July 2026. This window won't stay open.</p>
                </div>
            </section>

            {/* ── SECTION 9: FINAL CTA ── */}
            <section className="py-20 bg-white" id="final-form">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                                Stop Watching.<br />
                                Start Building.<br />
                                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Get Placed.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The students getting placed in the next 6 months started building proof months ago. You can be one of them — but only if you start now.
                            </p>
                            <p className="text-gray-500 text-base">No pressure. No commitment. Just clarity on exactly where you stand and how to fix it.</p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 w-full max-w-md p-8">
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Book My Free Consultation Call</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none transition-all"
                                        placeholder="Full Name" />
                                    <div className="flex">
                                        <span className="inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-600 font-medium text-sm">+91</span>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength={10}
                                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-r-xl focus:border-purple-500 outline-none transition-all"
                                            placeholder="Mobile Number" />
                                    </div>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none transition-all"
                                        placeholder="Email Address" />
                                    <input type="text" name="college" value={formData.college} onChange={handleChange} required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none transition-all"
                                        placeholder="College Name" />
                                    <select name="year" value={formData.year} onChange={handleChange} required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none transition-all bg-white">
                                        <option value="">Current Status</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="Final Year">Final Year</option>
                                    </select>
                                    <button type="submit" disabled={loading}
                                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-105 disabled:opacity-50 text-lg">
                                        {loading ? 'Booking...' : 'Book My Free Consultation Call →'}
                                    </button>
                                    {status === 'success' && (
                                        <div className="bg-green-50 border border-green-200 text-green-700 text-sm text-center p-3 rounded-xl">
                                            ✅ Booked! We'll call you within 24 hours.
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 text-sm text-center p-3 rounded-xl">
                                            Something went wrong. Please try again.
                                        </div>
                                    )}
                                    <p className="text-xs text-center text-gray-400">40 seats only. Next cohort starts July 2026. Spots are filling.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: FAQ ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "I'm only in 3rd year. Is it too early?", a: "It's actually the perfect time. Students who start building in 3rd year enter final year with a complete portfolio, internship experience, and a head start most of their peers won't have." },
                            { q: "I have no AI knowledge. Can I still join?", a: "Yes. The program is built to start from zero and take you to industry-ready. You don't need prior AI experience — just the commitment to show up and do the work." },
                            { q: "I'm still in college. Can I manage this alongside studies?", a: "Yes. The program is structured specifically for engineering students managing academics. It's designed around your schedule, not against it." },
                            { q: "What if I don't get placed after this?", a: "We don't guarantee jobs. We guarantee that you'll have the projects, portfolio, internship experience, and preparation that give you a real, fighting chance most students never get." },
                            { q: "What makes this different from just doing an online course?", a: "Courses give you knowledge. We give you proof — real projects, real internship experience, real mentor feedback, and real career support. That's what gets you placed." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button onClick={scrollToForm}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
                            Book My Free Consultation Call →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="font-bold text-gray-900 text-base pr-4">{question}</span>
                <span className={`text-orange-500 text-2xl font-bold flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open && (
                <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default AICareerStudents;
