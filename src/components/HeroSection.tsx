import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16">
      <div className="max-w-7xl mx-auto section-padding flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="heading-hero">
            Build Your Best<br />
            <span className="text-accent">Body Today</span>
          </h1>
          <p className="body-large max-w-lg">
            Transform your physique at Vikram Fitness Studio. We offer state-of-the-art equipment, personalized training programs, and nutrition guidance tailored to your goals. Join hundreds of members who have already achieved their fitness dreams.
          </p>
          <Button size="lg" className="shadow-button text-base px-8 py-6">
            Start Your Journey
          </Button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={heroModel}
              alt="Fitness coach"
              className="rounded-lg w-full max-w-md object-cover shadow-card"
            />
            <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-semibold px-4 py-2 rounded-lg shadow-button">
              VIKRAM STUDIO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
