
import { HeroSection } from "@/components/HeroSection";
import { Synopsis } from "@/components/Synopsis";
import { AuthorSection } from "@/components/AuthorSection";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="bg-space-950 min-h-screen font-space">
      <HeroSection />
      <Synopsis />
      <AuthorSection />
      <Newsletter />
    </div>
  );
};

export default Index;
