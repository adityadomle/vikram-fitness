import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";

const programs = [
  {
    num: "01",
    title: "Fit & Functional Quiz",
    description: "Fill out a detailed questionnaire about your current exercise activities, eating habits, lifestyle preferences, and health information to build your perfect plan.",
    image: program1,
  },
  {
    num: "02",
    title: "Customized Meal Plan",
    description: "A menu designed to fit your daily routine with all the data from your questionnaire. Tailored to your nutritional requirements and caloric intake.",
    image: program2,
  },
  {
    num: "03",
    title: "Personal Training",
    description: "Customized workout programs with 24/7 support, form checks, and progressive overload tracking to ensure you're always moving forward.",
    image: program3,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-section text-center mb-12">Our Program</h2>

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
