import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandBanner from "./components/BrandBanner";

export default function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <BrandBanner />
    </>
  );
}