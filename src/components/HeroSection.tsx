import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16">
      <div className="max-w-7xl mx-auto section-padding flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="heading-hero">
            Fit &amp; Functional<br />
            <span className="text-accent">Program</span>
          </h1>
          <p className="body-large max-w-lg">
            With the Fit and Functional Program, we give you access to every tool necessary to achieve your goals in the most effective and engaging way. The program includes unique training methods customized for you with 24/7 personal support and a customized meal plan.
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
              ELY COHEN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
