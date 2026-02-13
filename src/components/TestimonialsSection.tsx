import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Marcus T.",
    result: "15 lbs Muscle Gain",
    timeframe: "12 Weeks",
    quote: "The customized program changed everything. I had tried generic plans before, but Ely's approach was different—tailored to my body and lifestyle.",
    image: testimonial1,
  },
  {
    name: "Sarah M.",
    result: "24 lbs Fat Loss",
    timeframe: "16 Weeks",
    quote: "The meal plans were easy to follow, and having 24/7 support made all the difference. This isn't just coaching, it's accountability.",
    image: testimonial2,
  },
  {
    name: "James R.",
    result: "32 lbs Transformation",
    timeframe: "20 Weeks",
    quote: "I've never felt stronger or more confident. The systematic approach combined with personal attention is unmatched.",
    image: testimonial3,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-section text-center mb-4">Client Transformations</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Real results from real clients. See what's possible when you commit to the program.
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
