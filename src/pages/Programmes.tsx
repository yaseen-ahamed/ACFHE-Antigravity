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
} from "lucide-react";
import { Link } from "react-router-dom";

const programmes = [
  {
    title: "Diploma in Culinary Skills",
    level: "Level 2, CTH",
    duration: "~12 months",
    breakdown: "6m training + 6m internship",
    internship: "6 months mandatory",
    eligibility: "18–35 years",
    desc: "A comprehensive full-time program. Builds on basic cookery skills to introduce advanced techniques and senior kitchen tasks.",
    outcomes: [
      "Demonstrate proficiency in cooking techniques for meat, seafood, vegetables, starches, pastries and desserts.",
      "Apply knowledge of kitchen management (menu planning, costing, supplier relations).",
      "Work effectively in a team and execute multi-course meals.",
      "Ensure food safety and quality in a commercial kitchen.",
    ],
  },
  {
    title: "Certificate in Culinary Skills",
    level: "Level 2, CTH",
    duration: "~12 months",
    breakdown: "6m training + 6m internship",
    internship: "6 months mandatory",
    eligibility: "18 & above",
    desc: "A shorter fast-track program focused on core culinary skills. Prepares students for entry-level kitchen roles.",
    outcomes: [
      "Achieve solid foundational cooking skills (knife work, basic recipes, hygiene).",
      "Understand kitchen operations and service flow.",
      "Critically evaluate food quality and presentation.",
      "Improve taste and consistency in practical assignments.",
    ],
  },
];

export function Programmes() {
  return (
    <PageTransition>
      <SEO
        title="CTH Accredited Hospitality Courses India | ACFHE Programmes"
        description="Explore CTH UK-accredited hospitality courses in India at ACFHE Kerala. We offer global Diploma and Certificate programs in Culinary Skills."
        keywords="cth accredited hospitality courses india, ACFHE, Ayurgreen Centre for Hospitality Excellence, culinary programs, best hospitality courses in kerala"
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
          <h1 className="text-5xl md:text-7xl font-serif text-[#1E1E1E] mb-6">
            Our Programmes
          </h1>
          <p className="text-[#B8952A] tracking-widest uppercase text-sm font-bold">
            CTH-certified culinary excellence
          </p>
        </motion.div>
        <SectionDivider />
      </section>

      {/* Comparison Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programmes.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card-3d p-10 relative group border border-gray-100 bg-white"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_top_right,rgba(184,149,42,0.1),transparent_70%)] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      {prog.level}
                    </div>
                    <h3 className="text-3xl font-serif text-[#1E1E1E] font-bold">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#4B5563] mb-8 leading-relaxed h-20 font-medium">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#B8952A]" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                        Duration
                      </div>
                      <div className="text-sm text-[#1E1E1E] font-bold">
                        {prog.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-[#B8952A]" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                        Internship
                      </div>
                      <div className="text-sm text-[#1E1E1E] font-bold">
                        {prog.internship}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#B8952A]" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                        Breakdown
                      </div>
                      <div className="text-sm text-[#1E1E1E] font-bold">
                        {prog.breakdown}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8952A]" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                        Eligibility
                      </div>
                      <div className="text-sm text-[#1E1E1E] font-bold">
                        {prog.eligibility}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h4 className="text-lg font-serif text-[#1E1E1E] font-bold mb-6">
                    Programme Outcomes
                  </h4>
                  <ul className="space-y-6">
                    {prog.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-4 relative">
                        <div className="w-2 h-2 rounded-full bg-[#B8952A] mt-2 shrink-0"></div>
                        {i !== prog.outcomes.length - 1 && (
                          <div className="absolute left-1 top-4 bottom-[-24px] w-px bg-[#B8952A]/20"></div>
                        )}
                        <span className="text-sm text-[#4B5563] leading-relaxed font-medium">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <Link to={index === 0 ? "/programmes/diploma-in-culinary-skills" : "/programmes/certificate-in-culinary-skills"} className="btn-primary w-full shadow-lg text-center block max-w-sm mx-auto">
                    View {prog.title.split(" ")[0]} Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Skills */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-6">
            Transferable Skills
          </h2>
          <p className="text-[#4B5563] leading-relaxed mb-12 font-medium">
            Across all programs, students also develop key transferable skills:
            communication, teamwork, problem-solving and customer-service
            orientation. These outcomes align with CTH's competency framework
            and prepare graduates for roles in kitchens, restaurants,
            institutions (hospitals, hotels, NGOs), or for further studies in
            hospitality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Communication",
              "Teamwork",
              "Problem-Solving",
              "Customer-Service",
            ].map((skill, i) => (
              <div
                key={i}
                className="px-6 py-3 border border-[#B8952A]/20 rounded-full text-sm font-bold text-[#8A6D1C] tracking-wider uppercase bg-[#B8952A]/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
