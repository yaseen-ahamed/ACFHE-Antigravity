import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { Heart, Shield, Star, Leaf, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import GreetingImage from "../../Assets/ACFHE Greeting.png";

const values = [
  {
    icon: Star,
    title: "Excellence",
    desc: "Highest standards in teaching, practice, and service.",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "Compassionate, guest-centric care inspired by our healthcare roots.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Honesty and accountability in academics and operations.",
  },
  {
    icon: Award,
    title: "Professionalism",
    desc: "Fostering a culture of respectful, ethical conduct.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Eco-friendly practices and responsible resource use.",
  },
  {
    icon: Users,
    title: "People-First",
    desc: "Our students & staff members come first; we support each other.",
  },
];

export function About() {
  return (
    <PageTransition>
      <SEO
        title="About ACFHE | Best Hospitality College in Kerala"
        description="Learn about ACFHE, a leading hospitality institute in Kerala. We offer internationally benchmarked hospitality education rooted in excellence, empathy, and professionalism."
        keywords="About ACFHE, best hospitality college in kerala, Ayurgreen Centre for Hospitality Excellence, hospitality institute in Kerala"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#1E1E1E] mb-6 font-bold tracking-tight">
            Our Story
          </h1>
          <p className="text-[#8A6D1C] tracking-widest uppercase text-sm font-bold bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full">
            Ayurgreen Centre for Hospitality Excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl relative"
        >
          <img
            src={GreetingImage}
            alt="Students at Ayurgreen Centre for Hospitality Excellence (ACFHE) Campus"
            loading="lazy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#1E1E1E]/10"></div>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1E1E1E] mb-4 font-bold tracking-tight">Our Journey</h2>
            <p className="text-[#4B5563] font-medium text-lg text-center">The evolution of excellence</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#B8952A]/20"></div>

            <div className="space-y-24">
              {[
                {
                  year: "2022",
                  title: "Ayurgreen Foundation",
                  desc: "Establishment of the foundation, bringing financial stability and a culture of innovation to healthcare and education.",
                },
                {
                  year: "2024",
                  title: "Diamond Rating",
                  desc: "Ayurgreen Hospital achieves the prestigious Diamond Rating by Kerala Tourism, setting a benchmark in guest experience.",
                },
                {
                  year: "2026",
                  title: "ACFHE Launch",
                  desc: <>Opening of the purpose-built campus in Edappal, offering <Link to="/programmes/diploma-in-culinary-skills" className="text-[#B8952A] hover:underline font-bold">CTH UK-accredited culinary programs</Link>.</>,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center relative">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-[#B8952A] z-10 shadow-lg"></div>
                  </div>
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="text-[#B8952A] font-serif text-3xl font-bold mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-bold text-[#1E1E1E] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-[#4B5563] text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-32 bg-[#F5EEDB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1E1E1E] mb-4 font-bold tracking-tight">Core Values</h2>
            <p className="text-[#4B5563] font-medium text-lg mb-8">Guiding everything we do</p>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#B8952A]/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-3d p-8 group bg-white border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#B8952A]/20 flex items-center justify-center mb-6 group-hover:border-[#B8952A] transition-colors bg-[#B8952A]/10">
                  <value.icon className="w-8 h-8 text-[#B8952A]" />
                </div>
                <h3 className="text-2xl font-serif text-[#1E1E1E] font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
