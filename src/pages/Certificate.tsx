import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import {
    CheckCircle2,
    Clock,
    Calendar,
    GraduationCap,
    ArrowRight,
    Download,
    Star
} from "lucide-react";
import { Link } from "react-router-dom";

export function Certificate() {
    return (
        <PageTransition>
            <SEO
                title="Certificate in Culinary Skills | Best Hospitality College in Kerala"
                description="Fast-track your career with a CTH UK-accredited Certificate in Culinary Skills in Kerala. 12-month program focusing on core culinary skills for entry-level roles."
                keywords="certificate in culinary skills, best hospitality college in kerala, culinary courses kerala"
            />
            {/* Hero */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(184,149,42,0.1),transparent_60%)] pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center relative z-10"
                >
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#B8952A] p-1 shadow-lg transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer border-2 border-white/20">
                        <div className="w-full h-full rounded-full border-2 border-[#1E1E1E]/20 flex items-center justify-center bg-white shadow-inner">
                            <span className="font-serif text-[#1E1E1E] font-bold text-xl tracking-widest">
                                CTH
                            </span>
                        </div>
                    </div>
                    <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-xs font-bold mb-4">
                        Level 2 • 12 Months
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#1E1E1E] mb-6 font-bold tracking-tight">
                        Certificate in Culinary Skills
                    </h1>
                    <p className="text-[#4B5563] max-w-2xl mx-auto text-lg leading-relaxed mb-8 font-medium">
                        A shorter fast-track program focused on core culinary skills. Prepares students for entry-level kitchen roles globally.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link to="/admissions" className="btn-primary flex items-center shadow-lg w-full sm:w-auto justify-center">
                            Apply for Certificate <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <button className="btn-secondary flex items-center w-full sm:w-auto justify-center bg-white">
                            <Download className="mr-2 w-4 h-4" /> Download Brochure
                        </button>
                    </div>
                </motion.div>
                <div className="mt-12">
                    <SectionDivider />
                </div>
            </section>

            {/* Course Details */}
            <section className="py-20 bg-[#FDF9F1]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-8">
                                Programme Overview
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <Clock className="w-6 h-6 text-[#B8952A] shrink-0" />
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Duration</div>
                                        <div className="text-sm text-[#1E1E1E] font-bold">~12 months</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <Calendar className="w-6 h-6 text-[#B8952A] shrink-0" />
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Breakdown</div>
                                        <div className="text-sm text-[#1E1E1E] font-bold">6m training + 6m internship</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <GraduationCap className="w-6 h-6 text-[#B8952A] shrink-0" />
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Internship</div>
                                        <div className="text-sm text-[#1E1E1E] font-bold">6 months mandatory</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-[#B8952A] shrink-0" />
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Eligibility</div>
                                        <div className="text-sm text-[#1E1E1E] font-bold">18 & above</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#B8952A]/10 p-6 rounded-2xl border border-[#B8952A]/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-[#1E1E1E]">CTH Accredited</span>
                                    <div className="bg-white rounded-full px-2 py-0.5 text-[10px] font-bold text-[#1E1E1E] border border-gray-200">UK Certified</div>
                                </div>
                                <p className="text-sm text-[#4B5563] font-medium leading-relaxed">
                                    Fast-track your entry into the hospitality industry with an internationally valid qualification.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-lg"
                        >
                            <h3 className="text-2xl font-serif text-[#1E1E1E] font-bold mb-6">
                                Programme Outcomes
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Achieve solid foundational cooking skills (knife work, basic recipes, hygiene).",
                                    "Understand kitchen operations and service flow.",
                                    "Critically evaluate food quality and presentation.",
                                    "Improve taste and consistency in practical assignments."
                                ].map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#B8952A] mt-2 shrink-0"></div>
                                        <span className="text-sm text-[#4B5563] leading-relaxed font-medium">
                                            {outcome}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>


        </PageTransition>
    );
}
