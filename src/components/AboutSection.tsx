const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="heading-section">
            Coaching<br />Philosophy
          </h2>
          <p className="body-large max-w-lg">
            I believe in building sustainable habits over quick fixes. Every program is tailored
            to your unique body, goals, and lifestyle — because cookie-cutter plans don't build
            lasting transformations.
          </p>
          <p className="body-large max-w-lg">
            With years of experience coaching clients worldwide, I combine evidence-based training
            with personalized nutrition to deliver real, measurable results.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            { value: "2000+", label: "Active Members" },
            { value: "15+", label: "Years in Business" },
            { value: "50+", label: "Premium Equipment" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-lg shadow-card p-6 text-center"
            >
              <div className="font-heading text-3xl text-accent">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
