import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags handled in index.html */}
      <Hero />
      <ProductGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;