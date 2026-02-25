/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programmes } from "./pages/Programmes";
import { Campus } from "./pages/Campus";
import { Careers } from "./pages/Careers";
import { Admissions } from "./pages/Admissions";
import { Policies } from "./pages/Policies";
import { Blog } from "./pages/Blog";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React Router types don't include key, but AnimatePresence needs it */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="campus" element={<Campus />} />
          <Route path="careers" element={<Careers />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="policies" element={<Policies />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}
