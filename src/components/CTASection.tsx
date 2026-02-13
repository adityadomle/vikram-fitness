import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary section-padding">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="heading-section text-primary-foreground">
          Ready to Transform?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Take the first step toward the body and lifestyle you deserve. Join the Fit &amp; Functional Program today.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-base px-8 py-6 shadow-button"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
