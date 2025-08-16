import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsletterSignup from "@/components/NewsletterSignup";
import SeasonalPromoBanner from "@/components/SeasonalPromoBanner";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <SeasonalPromoBanner />
        <BestSellers />
        <Testimonials />
        <NewsletterSignup />
        <Footer />
      </div>
    </>
  );
}
