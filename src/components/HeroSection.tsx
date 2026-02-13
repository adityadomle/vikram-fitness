import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-14 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Content - More compact on mobile */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-wide uppercase text-foreground">
            Build Your Best
            <br />
            <span className="text-accent">Body Today</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Transform your physique at Vikram Fitness Studio. State-of-the-art equipment, personalized training, and nutrition guidance.
          </p>
          <Button size="default" className="shadow-button md:text-base md:px-8 md:py-6 md:h-auto">
            Start Your Journey
          </Button>
        </div>

        {/* Image - Simplified on mobile */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm md:max-w-md">
            <img
              src={heroModel}
              alt="Fitness coach"
              className="rounded-lg w-full object-cover shadow-card"
            />
            <div className="hidden md:block absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-lg shadow-button">
              VIKRAM STUDIO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
