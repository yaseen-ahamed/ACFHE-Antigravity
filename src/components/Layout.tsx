import { Outlet, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-center z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/admissions" className="w-full bg-[#B8952A] text-white text-center py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-md">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
