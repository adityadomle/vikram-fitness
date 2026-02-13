import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";

const programs = [
  {
    num: "01",
    title: "Fitness Assessment",
    description: "Complete fitness evaluation including body composition analysis, strength testing, and flexibility assessment. Our certified trainers create a personalized roadmap based on your current fitness level and goals.",
    image: program1,
  },
  {
    num: "02",
    title: "Personalized Training",
    description: "One-on-one training sessions with certified fitness coaches. Every workout is designed specifically for you with progressive overload, form correction, and real-time motivation to maximize results.",
    image: program2,
  },
  {
    num: "03",
    title: "Nutrition Planning",
    description: "Custom meal plans designed by nutritionists aligned with your fitness goals. Including macro tracking, supplement guidance, and regular adjustments based on your progress.",
    image: program3,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-section text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.num}
              className="bg-card rounded-lg shadow-card overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-heading text-2xl">{p.num}</span>
                  <h3 className="font-heading text-xl text-foreground">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
