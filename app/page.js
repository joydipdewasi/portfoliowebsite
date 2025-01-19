import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';
// import ContectInfo from './components/contectInfo';
// import EmailSection from './components/EmailSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <hr className="border-t-2 border-[#333] my-8" />
        <AchievementsSection />
        <hr className="border-t-2 border-[#333] my-10" />
        <AboutSection />
        <hr className="border-t-2 border-[#333] my-10" />
        <ProjectsSection />
        <hr className="border-t-2 border-[#333] my-10" />
        {/* <EmailSection /> */}
      </div>

      <Footer />
      {/* <ContectInfo /> */}
    </main>
  );
}
