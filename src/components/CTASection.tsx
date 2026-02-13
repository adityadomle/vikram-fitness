import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="bg-primary section-padding">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="heading-section text-primary-foreground">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Join thousands of members at Vikram Fitness Studio and transform your body. Your best self is just one membership away.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-base px-8 py-6 shadow-button"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
