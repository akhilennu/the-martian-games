
import { HeroSection } from "@/components/HeroSection";
import { Synopsis } from "@/components/Synopsis";
import { AuthorSection } from "@/components/AuthorSection";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="bg-surface-background min-h-screen">
      <HeroSection />
      <Synopsis />
      <AuthorSection />
      <Newsletter />
    </div>
  );
};

export default Index;
