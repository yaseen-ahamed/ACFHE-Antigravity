import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "Do I need prior cooking experience?",
    a: "No prior cooking experience is required. However, a passion for hospitality and a willingness to learn are essential.",
  },
  {
    q: "What is the medium of instruction?",
    a: "All programs are delivered in English. Candidates must demonstrate basic English proficiency.",
  },
  {
    q: "Are there scholarships available?",
    a: "Yes, we offer a competitive fee structure with scholarships for meritorious students and staff-sponsored seats through Ayurgreen Hospitals.",
  },
  {
    q: "What is the application process?",
    a: "Prospective students must complete the Centre's application form and undergo a personal interview. Intake decisions are based on academic records and aptitude.",
  },
];

export function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Combine first and last name for the script
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    formData.set("name", `${firstName} ${lastName}`.trim());

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxBCw-4DYCtmbScW8WTo0ZjosUkn1tw5tsbT4bF96KcE0iY7pWy-VDopMw2Qm_vdgyXSw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="ACFHE Edappal Admissions | Apply to ACFHE"
        description="Apply now to ACFHE Edappal, the top hospitality college in Kerala. Check eligibility criteria, intake dates, and start your hospitality journey today."
        keywords="ACFHE edappal admissions, ACFHE admission process, Hospitality College in Kerala"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#1E1E1E] font-bold tracking-tight mb-6">
            Admissions
          </h1>
          <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-sm font-bold">
            Begin your journey
          </p>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Info */}
            <div className="space-y-16">
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-8">
                  Eligibility Criteria
                </h2>
                <div className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1E1E1E] text-white">
                        <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">
                          Requirement
                        </th>
                        <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-[#1E1E1E] font-bold">Age</td>
                        <td className="py-4 px-6 text-[#4B5563] font-medium">
                          18–35 years (Certificate allows 18 & above)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-[#1E1E1E] font-bold">
                          Education
                        </td>
                        <td className="py-4 px-6 text-[#4B5563] font-medium">
                          Secondary education qualification or equivalent
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-[#1E1E1E] font-bold">
                          Language
                        </td>
                        <td className="py-4 px-6 text-[#4B5563] font-medium">
                          Basic English proficiency required
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-[#1E1E1E] font-bold">
                          Experience
                        </td>
                        <td className="py-4 px-6 text-[#4B5563] font-medium">
                          No prior cooking experience necessary
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Intake Dates */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-8">
                  Important Dates
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-[16px] border border-gray-200 shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B8952A]/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-[#B8952A]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">
                        Next Intake
                      </div>
                      <div className="text-xl font-serif text-[#1E1E1E] font-bold">
                        June 2026
                      </div>
                      <div className="text-sm text-[#8A6D1C] mt-2 font-bold">
                        First batch for all programs
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-[16px] border border-gray-200 shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B8952A]/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-[#B8952A]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">
                        Following Intake
                      </div>
                      <div className="text-xl font-serif text-[#1E1E1E] font-bold">
                        December 2026
                      </div>
                      <div className="text-sm text-[#4B5563] mt-2 font-medium">
                        Applications open Aug 2026
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-[16px] overflow-hidden shadow-sm hover:border-[#B8952A]/50 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors"
                      >
                        <span className="font-bold text-[#1E1E1E]">{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-[#B8952A] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#B8952A] shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-4 text-[#4B5563] text-sm leading-relaxed border-t border-gray-100 pt-4 font-medium">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-10 rounded-[32px] border border-gray-200 shadow-xl sticky top-32">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-4">
                    Apply Now
                  </h3>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Complete the form below to begin your application process.
                    Our admissions team will contact you shortly.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-medium text-center shadow-sm">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 font-medium text-center shadow-sm">
                      Oops! Something went wrong. Please try again later.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-full focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] placeholder:text-gray-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-full focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] placeholder:text-gray-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Hidden field for combined name to match the script's expectation */}
                  <input type="hidden" name="name" value="" />

                  <div>
                    <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-full focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] placeholder:text-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-full focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] placeholder:text-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-full focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] appearance-none custom-select pr-12"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `calc(100% - 1.5rem) center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                    >
                      <option value="">Select a program...</option>
                      <option value="diploma">
                        Diploma in Culinary Skills (12 Months)
                      </option>
                      <option value="certificate">
                        Certificate in Culinary Skills (4 Months)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2 pl-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-6 py-4 bg-[#FDF9F1] border border-gray-200 rounded-[24px] focus:outline-none focus:border-[#B8952A] focus:ring-2 focus:ring-[#B8952A]/50 transition-colors text-[#1E1E1E] placeholder:text-gray-500 resize-none"
                      placeholder="Tell us about your background and why you want to join ACFHE..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-sm tracking-widest mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4 font-medium">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
