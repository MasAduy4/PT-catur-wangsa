// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

/* -------------------- Page transition variants -------------------- */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

/* -------------------- Scroll manager (top / #hash) -------------------- */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Jika ada hash -> scroll ke elemen terkait
    if (location.hash) {
      const id = location.hash;
      const tryScroll = () => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      // langsung coba
      tryScroll();
      // coba lagi sebentar (jaga-jaga jika elemen muncul sedikit terlambat)
      const t = setTimeout(tryScroll, 60);
      return () => clearTimeout(t);
    }

    // Tanpa hash -> scroll ke atas
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

/* -------------------- Layout (Navbar + Footer + transition) -------------------- */
function Layout() {
  const location = useLocation();

  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />

      {/* Transisi untuk tiap halaman child route */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname + location.hash}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

/* -------------------- App root -------------------- */
export default function App() {
  const location = useLocation();

  // Init AOS sekali
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  // Refresh AOS setiap ganti route (biar anim muncul lagi)
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname, location.hash]);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="produk" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}
