import Banner from "../components/layout/Banner";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import BrandBanner from "../components/sections/BrandBanner";
import SectionProductList from "../components/sections/SectionProductList";
import { newArrivalsProducts, topSellingProducts } from "../data/products";

export default function HomePage() {
  function handleViewAll(section) {
    alert(`View all clicked for ${section}`);
  }
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <BrandBanner />
      <SectionProductList
        title="NEW ARRIVALS"
        products={newArrivalsProducts}
        onViewAll={handleViewAll}
        sectionKey="new-arrivals"
      />
      <div className="section-separator"></div>
      <SectionProductList
        title="TOP SELLING"
        products={topSellingProducts}
        onViewAll={handleViewAll}
        sectionKey="top-selling"
      />
    </>
  );
}