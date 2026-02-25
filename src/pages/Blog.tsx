import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { SectionDivider } from "../components/SectionDivider";
import { SEO } from "../components/SEO";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Why Choose a Hospitality College in Kerala for Your Career?",
    category: "Education",
    date: "February 20, 2026",
    author: "ACFHE Academic Team",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Discover how Kerala's booming tourism industry and world-class educational infrastructure make it the perfect destination for aspiring hospitality professionals.",
    content: `Choosing the right destination for your education is just as important as choosing the right program. When it comes to hospitality, few places offer the unique blend of rich culture, booming tourism, and world-class educational infrastructure quite like Kerala. As a leading hospitality college in Kerala, Ayurgreen Centre for Hospitality Excellence (ACFHE) provides students with an unparalleled learning experience.

The Kerala Advantage
Kerala, often referred to as "God's Own Country," is a global tourism hotspot. This vibrant industry creates a constant demand for skilled hospitality professionals. By studying at a hospitality college in Kerala, you are immersing yourself in an environment where hospitality is not just a subject, but a way of life.

Real-World Exposure
One of the biggest advantages of studying here is the opportunity for real-world exposure. At ACFHE, our students benefit from our unique setting within Ayurgreen Hospitals, a Diamond Rated facility by Kerala Tourism. This means our students interact with a diverse, international guest profile daily, gaining practical experience that goes far beyond textbook theory.

Global Standards, Local Warmth
While our curriculum is internationally accredited by CTH UK, our approach is deeply rooted in the traditional warmth and empathy of Kerala's culture. This combination produces graduates who are not only technically proficient but also possess the soft skills necessary to excel in the global hospitality industry.

If you are passionate about a career in this dynamic field, choosing a hospitality college in Kerala like ACFHE is your first step towards a successful, global career.`,
  },
  {
    id: 2,
    title: "Top Benefits of Pursuing a Hospitality Course in Kerala",
    category: "Careers",
    date: "February 15, 2026",
    author: "ACFHE Placement Cell",
    image:
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "From hands-on training in premium resorts to global placement opportunities, learn what a certified hospitality course can do for your future.",
    content: `The hospitality industry is one of the fastest-growing sectors globally, offering a wide array of exciting career paths. If you're considering entering this field, enrolling in a certified hospitality course in Kerala can provide you with a significant competitive edge.

Comprehensive Skill Development
A structured hospitality course in Kerala, such as the CTH UK-accredited programs offered at ACFHE, ensures you develop a comprehensive skill set. From advanced culinary techniques to front-of-house management and customer service excellence, our courses cover all aspects of the industry.

Industry-Aligned Curriculum
The best courses are those designed in collaboration with industry experts. Our programs are continuously updated to reflect the latest trends and standards in global hospitality. This ensures that upon graduation, you are truly industry-ready.

Guaranteed Internships and Placements
Perhaps the most significant benefit of a quality hospitality course in Kerala is the focus on practical experience. At ACFHE, mandatory internships are built into our programs. Our dedicated placement cell works tirelessly to secure opportunities for our students not just in India, but across the UAE, Oman, Mauritius, and Europe.

Networking Opportunities
Studying in a hub of tourism allows you to build a strong professional network early in your career. Through guest lectures, industry visits, and internships, you will connect with leaders and potential employers, setting the stage for a successful career journey.

Investing in a hospitality course in Kerala is an investment in a dynamic, rewarding, and globally mobile career.`,
  },
];

export function Blog() {
  return (
    <PageTransition>
      <SEO
        title="Insights & News | Hospitality College in Kerala"
        description="Read the latest insights and news from Ayurgreen Centre for Hospitality Excellence. Learn why choosing a hospitality college in Kerala is the best career move."
        keywords="Hospitality College in Kerala, ACFHE blog, hospitality news, Ayurgreen Centre for Hospitality Excellence"
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
            Insights & News
          </h1>
          <p className="text-[#8A6D1C] bg-[#B8952A]/20 inline-block px-4 py-1.5 rounded-full tracking-widest uppercase text-sm font-bold">
            The latest from ACFHE
          </p>
        </motion.div>
        <div className="mt-8">
          <SectionDivider />
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#B8952A] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                    {blog.category}
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-bold mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B8952A]" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#B8952A]" />
                      {blog.author}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1E] font-bold mb-6 leading-tight hover:text-[#B8952A] transition-colors cursor-pointer">
                    {blog.title}
                  </h2>

                  <div className="prose prose-lg max-w-none text-[#4B5563] font-medium leading-relaxed">
                    {blog.content.split("\\n\\n").map((paragraph, i) => (
                      <p key={i} className="mb-6">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="text-xs text-[#8A6D1C] bg-[#B8952A]/10 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                        Hospitality
                      </span>
                      <span className="text-xs text-[#8A6D1C] bg-[#B8952A]/10 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                        Kerala
                      </span>
                    </div>
                    <button className="text-[#B8952A] hover:text-[#1E1E1E] transition-colors font-bold flex items-center text-sm uppercase tracking-wider">
                      Share <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
