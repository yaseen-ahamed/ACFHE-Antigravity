import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { MapPin, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const locations = [
  { name: "India", x: "70%", y: "48%" },
  { name: "UAE", x: "64%", y: "44%" },
  { name: "Oman", x: "65%", y: "46%" },
  { name: "Mauritius", x: "66%", y: "68%" },
  { name: "Croatia", x: "53%", y: "32%" },
  { name: "Netherlands", x: "49%", y: "27%" },
];

const process = [
  {
    icon: GraduationCap,
    title: "Training & Preparation",
    desc: "Resume and interview coaching, soft-skills training, and industry guest lectures.",
  },
  {
    icon: Briefcase,
    title: "Mandatory Internship",
    desc: "Significant on-the-job internship (6 months for Diploma, 1 month for Certificate).",
  },
  {
    icon: MapPin,
    title: "Global Placement",
    desc: "Active partnerships and brand-linked placements worldwide, ensuring a smooth transition to employment.",
  },
];

export function Careers() {
  return (
    <PageTransition>
      <SEO
        title="Global Careers & Placements | ACFHE"
        description="Launch your global hospitality career with ACFHE. We offer mandatory internships and placement assistance across India, UAE, Oman, Mauritius, and Europe."
        keywords="Hospitality Course in Kerala, global placements, ACFHE careers, Ayurgreen Centre for Hospitality Excellence, hospitality jobs"
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
            Internships & Global Careers
          </h1>
          <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-sm font-bold">
            Your passport to the world
          </p>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Global Reach Map */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#1E1E1E] font-bold mb-4">
              Global Placements
            </h2>
            <p className="text-[#4B5563] font-medium text-lg">
              Opportunities across India & overseas
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto aspect-[2/1] bg-[#FDF9F1] rounded-[32px] border border-gray-200 overflow-hidden shadow-sm">
            {/* World Map Background (adjusted opacity/filter for light bg) */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter:
                  "sepia(0.8) hue-rotate(5deg) saturate(2) brightness(0.6) contrast(1.2)",
              }}
            ></div>

            {/* Map Grid Lines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(184,149,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,42,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Glowing Dots */}
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{
                  left: loc.x,
                  top: loc.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-4 h-4 rounded-full bg-[#B8952A] shadow-md relative border-2 border-white">
                  <div className="absolute inset-0 rounded-full bg-[#B8952A] animate-ping opacity-60"></div>
                </div>
                <div className="mt-2 px-3 py-1 bg-white shadow-lg border border-gray-100 rounded-full text-xs text-[#1E1E1E] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {loc.name}
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="text-gray-400 font-bold text-xs uppercase tracking-widest bg-white/80 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm">
                Global Network
              </div>
              <div className="flex gap-2">
                {locations.map((loc, i) => (
                  <span
                    key={i}
                    className="text-[#8A6D1C] font-bold text-[10px] uppercase tracking-wider bg-[#B8952A]/10 px-2 py-0.5 rounded-md"
                  >
                    {loc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-32 bg-[#F5EEDB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1E1E1E] font-bold mb-4">
              Career Journey
            </h2>
            <p className="text-[#4B5563] font-medium text-lg mb-8">
              Dedicated support from enrollment to employment
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#B8952A]/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#B8952A]/10 -translate-y-1/2 z-0 rounded-full"></div>

            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d p-8 relative z-10 bg-white border border-gray-100 group shadow-lg"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#B8952A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="font-serif text-[#1E1E1E] font-bold text-xl">
                    {index + 1}
                  </span>
                </div>

                <div className="mt-10 text-center">
                  <step.icon className="w-10 h-10 text-[#B8952A] mx-auto mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-serif text-[#1E1E1E] font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#4B5563] font-medium text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
