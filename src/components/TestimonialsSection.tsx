import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Rajesh K.",
    result: "7 kg Muscle Gain",
    timeframe: "12 Weeks",
    quote: "Vikram Fitness changed my life completely. The trainers here actually understand body mechanics and progressively challenge you. Best decision I made!",
    image: testimonial1,
  },
  {
    name: "Priya S.",
    result: "10 kg Fat Loss",
    timeframe: "16 Weeks",
    quote: "The nutrition guidance combined with personalized workouts is unbeatable. I've never been this confident about my body. Highly recommended!",
    image: testimonial2,
  },
  {
    name: "Amit P.",
    result: "15 kg Transformation",
    timeframe: "20 Weeks",
    quote: "From flab to fab! The community here is incredibly motivating. Vikram Fitness isn't just a gym, it's a family that pushes you to be better.",
    image: testimonial3,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-section text-center mb-4">Member Success Stories</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Real transformations from real members. See what's possible at Vikram Fitness Studio.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-96 object-cover rounded-lg shadow-card mb-6"
              />
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl uppercase tracking-wide text-foreground">
                    {t.name}
                  </h3>
                </div>
                <div className="space-y-1">
                  <div className="text-accent font-semibold text-lg">{t.result}</div>
                  <div className="text-sm text-muted-foreground">{t.timeframe}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
