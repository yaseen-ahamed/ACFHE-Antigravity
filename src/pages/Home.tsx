import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroImages = [
  "https://lh3.googleusercontent.com/d/1AGX-YY3E-Q4W_uyDDD8duKQuaiGLqI2i", // ACFHE Banner 1
  "https://lh3.googleusercontent.com/d/14w1npr_FD2-I0zXmA0gT0gZwFUp29nTZ", // ACFHE Banner 2
  "https://lh3.googleusercontent.com/d/1QNrTR9iEJwCCetKNRlCQS9zkYFyU-XKe", // ACFHE Banner 3
  "https://lh3.googleusercontent.com/d/18fgV8356FiQkVqsP7SHRA7CWnVVEDXhr", // ACFHE Hospitality
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxBCw-4DYCtmbScW8WTo0ZjosUkn1tw5tsbT4bF96KcE0iY7pWy-VDopMw2Qm_vdgyXSw/exec",
        {
          method: "POST",
          body: formData,
        },
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
        title="ACFHE | Top Hospitality College in Kerala"
        description="Ayurgreen Centre for Hospitality Excellence (ACFHE) is a premier hospitality institute in Kerala offering CTH UK-accredited hospitality courses and culinary programs."
        keywords="ACFHE, Ayurgreen Centre for Hospitality Excellence, Hospitality College in Kerala, Hospitality Course in Kerala, Hospitality institute in Kerala, culinary school, hotel management"
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-2rem)] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto z-10 block">
        {/* Slideshow Background Inner Container */}
        <div className="absolute inset-x-4 sm:inset-x-8 top-24 bottom-6 z-0 rounded-[40px] overflow-hidden shadow-xl bg-[#1E1E1E]">
          {/* Gradient Overlay for Text Readability - Darker on Left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 transition-colors pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="ACFHE Campus"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Slideshow Controls - Moved to Bottom Left inside image area */}
          <div className="absolute z-20 bottom-12 left-12 flex items-center gap-4">
            <div className="flex gap-3">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 border border-white/40 shadow-sm ${idx === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-transparent w-2.5 hover:bg-white/50"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Right Cutout Wrapper (Illusion of cutout using masking or borders) */}
          <div className="absolute z-20 bottom-0 right-0 hidden md:block">
            {/* The Cutout Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#FDF9F1] p-8 pb-12 pr-12 rounded-tl-[40px] relative w-[400px] shadow-[-20px_-20px_40px_rgba(0,0,0,0.15)] flex gap-5 items-center"
            >
              {/* Outer inverted corner curves utilizing box shells for the bento illusion */}
              <div className="absolute top-0 right-full w-10 h-10 bg-transparent shadow-[20px_-20px_0_20px_#FDF9F1] rounded-tr-[40px] pointer-events-none"></div>
              <div className="absolute bottom-full right-0 w-10 h-10 bg-transparent shadow-[20px_20px_0_20px_#FDF9F1] rounded-br-[40px] pointer-events-none"></div>

              <div className="w-20 h-20 rounded-full shrink-0 overflow-hidden border-2 border-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Culinary Arts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8A6D1C] block mb-1">For Students</span>
                <h3 className="font-serif text-[#1E1E1E] font-bold text-base leading-tight">Master Culinary Arts & Global Hospitality</h3>
                <Link to="/programmes" className="text-sm text-[#B8952A] font-bold mt-2 inline-flex items-center hover:text-[#9A7B1E] transition-colors uppercase tracking-wider">
                  Explore Programmes <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-12 w-full mt-12 pointer-events-none flex flex-col justify-center h-full pt-16">
          <div className="pointer-events-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              {/* CTH Badge - Left Aligned */}
              <div className="w-20 h-20 rounded-full bg-[#B8952A] p-1 shadow-lg transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer border-2 border-white/20">
                <div className="w-full h-full rounded-full border-2 border-[#1E1E1E]/20 flex items-center justify-center bg-white shadow-inner">
                  <span className="font-serif text-[#1E1E1E] font-bold tracking-widest text-lg">
                    CTH
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight mb-6 text-white"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              Integrating excellence into hospitality education.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-white mb-10 font-medium tracking-wide max-w-xl"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              Internationally benchmarked courses designed to transform your passion into a world-class career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link to="/about" className="bg-[#DFCA89] hover:bg-[#B8952A] text-[#1E1E1E] px-8 py-3.5 rounded-full font-bold tracking-widest uppercase text-sm transition-colors shadow-lg flex items-center justify-center w-full sm:w-auto">
                START HERE <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Award, value: "19+", label: "Years Faculty Experience" },
              { icon: Globe, value: "7+", label: "Global Placement Countries" },
              {
                icon: Users,
                value: "90%",
                label: "International Patient Exposure",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d p-8 text-center flex flex-col items-center justify-center group"
              >
                <div className="inline-block bg-[#B8952A]/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-[#8A6D1C]" />
                </div>
                <h3 className="text-5xl font-bold font-serif text-[#1E1E1E] mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#4B5563] font-bold mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E1E1E] mb-6">
              Culinary Excellence
            </h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto text-lg leading-relaxed">
              CTH UK-accredited programs designed to shape the next generation
              of global culinary leaders.
            </p>
            <SectionDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Diploma Card (Dark Slate) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-3d p-10 relative overflow-hidden group bg-[#1E1E1E]"
            >
              <div className="inline-block bg-[#B8952A]/20 text-[#DFCA89] font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full mb-4">
                Level 2 • 12 Months
              </div>
              <h3 className="text-4xl font-serif text-white mb-4 font-bold tracking-tight">
                Diploma in Culinary Skills
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-medium">
                A comprehensive full-time program including a 6-month mandatory
                industry internship. Master advanced techniques and kitchen
                management.
              </p>
              <Link
                to="/programmes"
                className="inline-flex items-center text-[#DFCA89] hover:text-[#B8952A] transition-colors uppercase text-sm tracking-wider font-bold"
              >
                View Details <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Certificate Card (Pale Gold) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-3d p-10 relative overflow-hidden group bg-[#F5EEDB]"
            >
              <div className="inline-block bg-[#B8952A]/20 text-[#8A6D1C] font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full mb-4">
                Level 2 • 4 Months
              </div>
              <h3 className="text-4xl font-serif text-[#1E1E1E] mb-4 font-bold tracking-tight drop-shadow-sm">
                Certificate in Culinary Skills
              </h3>
              <p className="text-[#4B5563] mb-8 leading-relaxed font-medium">
                A fast-track program focused on core culinary skills, including
                a 1-month internship. Perfect for entry-level kitchen roles.
              </p>
              <Link
                to="/programmes"
                className="inline-flex items-center text-[#8A6D1C] hover:text-[#B8952A] transition-colors uppercase text-sm tracking-wider font-bold"
              >
                View Details <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-[#1E1E1E] font-bold tracking-tight mb-6">
                About ACFHE
              </h2>
              <div className="w-20 h-1 rounded-full bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  Ayurgreen Centre for Hospitality Excellence (ACFHE) is a
                  premier institution dedicated to transforming aspiring
                  professionals into industry-ready, confident, and ethically
                  grounded hospitality practitioners.
                </p>
                {[
                  {
                    title: "Industry-Expert Faculty",
                    desc: "Learn from seasoned professionals with global exposure and deep industry networks.",
                  },
                  {
                    title: "Real-World Guest Experience",
                    desc: "Train in an authentic environment with a 90% international patient profile at Ayurgreen Hospitals.",
                  },
                  {
                    title: "Internationally Accredited",
                    desc: "Our programs follow the rigorous CTH UK curriculum, recognized globally.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#B8952A]/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-[#B8952A]"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E1E1E] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#4B5563] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about" className="btn-primary shadow-md">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full overflow-hidden cursor-pointer group img-stroke bg-white shadow-xl aspect-square flex items-center justify-center p-8 border border-gray-100"
              onClick={() => (window.location.href = "/about")}
            >
              <img
                src="https://lh3.googleusercontent.com/d/10XpIuM6yOWcvfRaMXDoP32G5ZnYmnqrz"
                alt="Ayurgreen Campus"
                className="w-full h-full object-cover rounded-[24px] pointer-events-none group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-[#1E1E1E]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[32px]"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-[#B8952A] text-[#1E1E1E] rounded-full px-8 py-4 font-bold tracking-wider uppercase text-sm flex items-center gap-2 shadow-lg drop-shadow-md">
                  Explore Campus <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-[#1E1E1E] font-bold tracking-tight mb-4">
                Latest Insights
              </h2>
              <p className="text-[#4B5563] font-medium text-lg">News and articles from our campus</p>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center text-[#8A6D1C] hover:text-[#B8952A] transition-colors uppercase text-sm tracking-wider font-bold"
            >
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer card-3d overflow-hidden p-6"
            >
              <div className="overflow-hidden rounded-[24px] mb-6 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hospitality College in Kerala"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="inline-block bg-[#B8952A]/20 text-[#8A6D1C] font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full mb-4">
                Education
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#1E1E1E] mb-3 px-2 group-hover:text-[#B8952A] transition-colors leading-tight">
                Why Choose a Hospitality College in Kerala for Your Career?
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-6 px-2 line-clamp-2">
                Discover how Kerala's booming tourism industry and world-class
                educational infrastructure make it the perfect destination for
                aspiring hospitality professionals.
              </p>
              <Link
                to="/blog"
                className="text-[#8A6D1C] text-sm font-bold flex items-center px-2 group-hover:text-[#B8952A]"
              >
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer card-3d overflow-hidden p-6"
            >
              <div className="overflow-hidden rounded-[24px] mb-6 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hospitality Course in Kerala"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="inline-block bg-[#B8952A]/20 text-[#8A6D1C] font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full mb-4">
                Careers
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#1E1E1E] mb-3 px-2 group-hover:text-[#B8952A] transition-colors leading-tight">
                Top Benefits of Pursuing a Hospitality Course in Kerala
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-6 px-2 line-clamp-2">
                From hands-on training in premium resorts to global placement
                opportunities, learn what a certified hospitality course can do
                for your future.
              </p>
              <Link
                to="/blog"
                className="text-[#8A6D1C] text-sm font-bold flex items-center px-2 group-hover:text-[#B8952A]"
              >
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="btn-secondary w-full">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E1E1E] font-bold tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions about our programs or admissions? We're here to
              help you start your hospitality journey.
            </p>
            <SectionDivider />
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-3d p-8 md:p-14 bg-white border border-gray-100"
              onSubmit={handleSubmit}
            >
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-medium text-center shadow-sm">
                  Thank you! Your message has been sent.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 font-medium text-center shadow-sm">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#1E1E1E] mb-2 pl-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#FDF9F1] border border-gray-200 rounded-full px-6 py-4 text-[#1E1E1E] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8952A]/50 focus:border-[#B8952A] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#1E1E1E] mb-2 pl-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#FDF9F1] border border-gray-200 rounded-full px-6 py-4 text-[#1E1E1E] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8952A]/50 focus:border-[#B8952A] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-[#1E1E1E] mb-2 pl-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-[#FDF9F1] border border-gray-200 rounded-full px-6 py-4 text-[#1E1E1E] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8952A]/50 focus:border-[#B8952A] transition-all"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-bold text-[#1E1E1E] mb-2 pl-2"
                  >
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    className="w-full bg-[#FDF9F1] border border-gray-200 rounded-full px-6 py-4 text-[#1E1E1E] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8952A]/50 focus:border-[#B8952A] transition-all appearance-none custom-select pr-12"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `calc(100% - 1.5rem) center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                  >
                    <option value="">Select a program</option>
                    <option value="diploma">Diploma in Culinary Skills</option>
                    <option value="certificate">
                      Certificate in Culinary Skills
                    </option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="mb-10">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#1E1E1E] mb-2 pl-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-[#FDF9F1] border border-gray-200 rounded-[24px] px-6 py-4 text-[#1E1E1E] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8952A]/50 focus:border-[#B8952A] transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto px-12 py-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
