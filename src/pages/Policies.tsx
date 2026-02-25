import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

const policies = [
  {
    id: "conflict",
    title: "Conflict of Interest",
    content: `ACFHE is committed to ensuring that all its activities are conducted in a fair, transparent, and ethical manner. This policy outlines the procedures for identifying, declaring, and managing conflicts of interest that may arise in the course of our operations.

All staff, faculty, and board members are required to disclose any potential conflicts of interest, whether financial, personal, or professional. A conflict of interest exists when an individual's personal interests could improperly influence their professional judgment or actions on behalf of ACFHE.

The Academic Governance Board is responsible for reviewing declared conflicts and determining appropriate management strategies to ensure the integrity of our educational programs and assessment processes.`,
  },
  {
    id: "complaints",
    title: "Complaints & Appeals",
    content: `We strive to provide the highest quality of education and service. However, we recognize that there may be occasions when students, staff, or other stakeholders feel dissatisfied. This policy provides a clear, fair, and accessible mechanism for raising and resolving complaints and academic appeals.

Complaints should initially be raised informally with the relevant staff member. If unresolved, a formal written complaint can be submitted to the Quality Assurance Committee.

Academic appeals regarding assessment outcomes must be submitted within 14 days of receiving results. Appeals are reviewed by an independent panel to ensure fairness and adherence to CTH assessment regulations.`,
  },
  {
    id: "edi",
    title: "Equality, Diversity & Inclusion (EDI)",
    content: `ACFHE is dedicated to fostering an inclusive environment where everyone is treated with dignity and respect. We believe that diversity enriches our learning community and prepares our students for the global hospitality industry.

We do not tolerate discrimination, harassment, or victimization on any grounds, including age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, or sexual orientation.

Our EDI policy informs all aspects of our operations, from student recruitment and admissions to staff hiring, curriculum design, and campus facilities. We actively promote equal opportunities and strive to eliminate barriers to participation.`,
  },
  {
    id: "health",
    title: "Health & Safety",
    content: `The health, safety, and wellbeing of our students, staff, and visitors are of paramount importance. ACFHE is committed to providing a safe and healthy environment for learning and working, particularly within our training kitchens and restaurant labs.

This policy outlines our responsibilities for risk assessment, hazard control, emergency procedures, and safety training. All individuals on campus are expected to comply with health and safety regulations, report hazards promptly, and participate in required safety training (e.g., food hygiene, fire safety).

Regular safety audits are conducted by the Quality Assurance Committee to ensure ongoing compliance with national regulations and CTH centre approval criteria.`,
  },
];

export function Policies() {
  const [activePolicy, setActivePolicy] = useState(policies[0].id);

  return (
    <PageTransition>
      <SEO
        title="Policies & Compliance | ACFHE"
        description="Review the policies and compliance standards of Ayurgreen Centre for Hospitality Excellence, ensuring a safe and ethical learning environment."
        keywords="ACFHE policies, Ayurgreen Centre for Hospitality Excellence, Hospitality College in Kerala"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#1E1E1E] font-bold tracking-tight mb-6">
            Policies & Compliance
          </h1>
          <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-sm font-bold">
            Governance and Standards
          </p>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Nav */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/4 shrink-0"
            >
              <div className="bg-white rounded-[24px] border border-gray-200 p-6 sticky top-32 shadow-sm">
                <h3 className="font-serif text-[#1E1E1E] font-bold text-xl mb-6 border-b border-gray-100 pb-4">
                  Documents
                </h3>
                <nav className="space-y-2">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => setActivePolicy(policy.id)}
                      className={clsx(
                        "w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center gap-3 font-medium",
                        activePolicy === policy.id
                          ? "bg-[#B8952A]/10 text-[#8A6D1C] font-bold shadow-sm"
                          : "text-gray-500 hover:bg-gray-50 hover:text-[#1E1E1E]",
                      )}
                    >
                      <FileText className={clsx("w-4 h-4 shrink-0", activePolicy === policy.id ? "text-[#B8952A]" : "text-gray-400")} />
                      {policy.title}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-3/4"
            >
              <div className="bg-white p-10 md:p-16 rounded-[32px] border border-gray-200 shadow-md min-h-[500px]">
                {policies.map((policy) => (
                  <div
                    key={policy.id}
                    className={clsx(
                      "transition-opacity duration-500",
                      activePolicy === policy.id
                        ? "block opacity-100"
                        : "hidden opacity-0",
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 border-b border-gray-100 pb-8">
                      <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] font-bold">
                        {policy.title}
                      </h2>
                      <button className="bg-gray-100 hover:bg-gray-200 text-[#1E1E1E] font-bold rounded-full transition-colors shrink-0 flex items-center gap-2 text-xs py-2 px-5">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>

                    <div className="prose prose-lg max-w-none text-[#4B5563] font-medium leading-relaxed font-sans">
                      {policy.content.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400 font-bold flex justify-between items-center">
                      <span>Last updated: January 2026</span>
                      <span>Approved by: Academic Governance Board</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
