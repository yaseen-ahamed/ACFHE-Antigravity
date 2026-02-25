import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import {
  ChefHat,
  Utensils,
  BookOpen,
  Bed,
  Wifi,
  MonitorPlay,
  Refrigerator,
  ShieldCheck,
} from "lucide-react";

const facilities = [
  {
    icon: ChefHat,
    title: "Training Kitchens",
    desc: "Modern culinary labs equipped with industry-standard ovens, ranges, deep fryers, blenders, mixers, slicers and other professional tools.",
    details: [
      "Walk-in fridge & freezer",
      "Commercial ranges with 4-burner cooktops",
      "Food processors",
      "Stainless steel work benches",
    ],
  },
  {
    icon: Utensils,
    title: "Training Restaurant / Bar",
    desc: "A fully functional restaurant lab where students practice front-of-house and service skills in a real restaurant setting.",
    details: [
      "Real restaurant setting",
      "Front-of-house practice",
      "Service skills training",
      "Bar operations",
    ],
  },
  {
    icon: BookOpen,
    title: "Classrooms & Labs",
    desc: "Two large classrooms (each 25 seats) with AV equipment and Wi-Fi, plus dedicated theory labs. Facilities for safe exam storage.",
    details: [
      "25 seats per classroom",
      "AV equipment",
      "Wi-Fi enabled",
      "Safe exam storage",
    ],
  },
  {
    icon: Bed,
    title: "Guest Accommodation",
    desc: "To simulate a hospitality environment, the Ayurgreen guest wing (modelled on hotel rooms) is available for student exercises.",
    details: [
      "Modelled on hotel rooms",
      "Guest services practice",
      "Housekeeping exercises",
      "Real-world simulation",
    ],
  },
];

const checklist = [
  { icon: Refrigerator, label: "CTH Equipment Checklist Compliant" },
  { icon: ShieldCheck, label: "Quality Assurance Approved" },
  { icon: MonitorPlay, label: "E-learning Tools & Libraries" },
  { icon: Wifi, label: "Campus-wide Connectivity" },
];

export function Campus() {
  return (
    <PageTransition>
      <SEO
        title="Campus & Facilities | Hospitality institute in Kerala"
        description="Discover the state-of-the-art infrastructure at ACFHE, a premier hospitality institute in Kerala. Our campus features modern training kitchens and real-world restaurant labs."
        keywords="Hospitality institute in Kerala, ACFHE Campus, Ayurgreen Centre for Hospitality Excellence, culinary labs, hospitality training"
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
            Campus & Facilities
          </h1>
          <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-sm font-bold">
            Designed for immersive learning
          </p>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://lh3.googleusercontent.com/d/1uWdxsi8HlxV58nuP3YJnyLHE3RBGa2Zd",
                title: "ACFHE Restaurant",
                className: "lg:col-span-2 aspect-video",
              },
              {
                url: "https://lh3.googleusercontent.com/d/1dIBeLmf1gg-IFS7ytgg6Ul-4XeR__802",
                title: "ACFHE Learning Space",
                className: "aspect-square",
              },
              {
                url: "https://lh3.googleusercontent.com/d/1gHPDBlVIYyRB9WuxS0cIaHCoFjBh0BE4",
                title: "ACFHE Kitchen",
                className: "aspect-square",
              },
              {
                url: "https://lh3.googleusercontent.com/d/1OecLo_lfoPWpFaCYdr7M799s-2n1ZkZx",
                title: "ACFHE Guest Sessions",
                className: "lg:col-span-2 aspect-video",
              },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[24px] bg-[#FDF9F1] group shadow-sm ${img.className}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-serif text-2xl tracking-wide font-bold">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#1E1E1E] font-bold mb-4">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-[#4B5563] font-medium text-lg mb-8">
              Satisfying all CTH approval criteria for culinary centres
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-[#B8952A]/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {facilities.map((fac, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d p-10 group bg-white border border-gray-100"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-[16px] bg-[#B8952A]/10 border border-[#B8952A]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B8952A]/20 transition-colors">
                    <fac.icon className="w-8 h-8 text-[#B8952A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#1E1E1E] font-bold mb-3">
                      {fac.title}
                    </h3>
                    <p className="text-[#4B5563] font-medium text-sm leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDF9F1] rounded-[16px] p-6 border border-gray-200">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fac.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[#4B5563] font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8952A] shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-[#F5EEDB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#1E1E1E] font-bold mb-4">
              Learning Resources & Compliance
            </h2>
            <p className="text-[#4B5563] font-medium">
              We provide current textbooks, online libraries and e-learning
              tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center group cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-[#B8952A] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-[#1E1E1E] font-bold text-sm uppercase tracking-wider">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
