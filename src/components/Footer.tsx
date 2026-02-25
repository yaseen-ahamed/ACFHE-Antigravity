import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-[#B8952A]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/d/1LCVsW9RhHV_Vt7hkdprBerS8u5iOMQeh"
                alt="ACFHE Logomark"
                className="h-20 w-auto object-contain bg-white p-2 rounded-xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden",
                  );
                }}
              />
              <div className="hidden w-12 h-12 rounded-full border border-[#DFCA89] flex items-center justify-center bg-[#1E1E1E]">
                <span className="font-serif text-[#DFCA89] text-2xl font-bold">
                  A
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Transforming aspiring professionals into industry-ready,
              confident, and ethically grounded hospitality practitioners.
            </p>
            <p className="font-serif italic text-[#DFCA89] font-bold text-lg">
              "Excellence. Empathy. Integrity."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide font-bold">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Programmes",
                "Campus & Facilities",
                "Internships & Careers",
                "Admissions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-gray-300 hover:text-[#DFCA89] text-sm transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide font-bold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DFCA89] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm font-medium">
                  Kavilpadi, Edappal,
                  <br />
                  Malappuram District,
                  <br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#DFCA89] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">+91 7034886897</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#DFCA89] shrink-0" />
                <a
                  href="mailto:info@acfhe.com"
                  className="text-gray-300 hover:text-[#DFCA89] text-sm transition-colors font-medium"
                >
                  info@acfhe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide font-bold">
              Connect
            </h4>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-[#DFCA89] hover:border-[#DFCA89] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-[#DFCA89] hover:border-[#DFCA89] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-[#DFCA89] hover:border-[#DFCA89] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <h4 className="font-serif text-lg text-white mb-4 tracking-wide font-bold">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/policies"
                  className="text-gray-300 hover:text-[#DFCA89] text-sm transition-colors font-medium"
                >
                  Policies & Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-gray-300 hover:text-[#DFCA89] text-sm transition-colors font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} Ayurgreen Centre for Hospitality
            Excellence. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs font-medium">Affiliated with CTH UK</p>
        </div>
      </div>
    </footer>
  );
}
