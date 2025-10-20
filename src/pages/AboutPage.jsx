// src/pages/AboutPage.jsx
import AboutHero from "../components/AboutHero";
import History from "../components/History";
import VisionMission from "../components/VisionMission";
import Value from "../components/Value";



// jika ada section tambahan, tinggal import dan taruh di bawah

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <History />
      <VisionMission />
      <Value />
    </>
  );
}
