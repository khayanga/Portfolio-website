const experiences = [
  
  {
    role: "Founder & Product Lead",
    company: " Senti Expense Tracker App (Personal Project)",
    period: "2025 - Present",
    description:
      "Building a cross-platform mobile app expense tracking application designed to help users manage their finances with clarity and insight.",
    achievements: [
      "Developed the React Native frontend with Node.js and Express backend",
      "Integrated PostgreSQL for data persistence and analytics",
      "Focused on clean UI/UX and scalable architecture for future feature growth",
    ],
  },
  {
    role: "Frontend Developer (Contractor)",
    company: "Kodit Afrika",
    period: "Aug 2025 - Present",
    description:
      "Created a visually rich e-commerce frontend for an online art marketplace focused on connecting artists and buyers.",
    achievements: [
      "Developed using Next.js, React, and Tailwind CSS with REST API integration",
      "Designed responsive layouts and interactive components for a smooth user experience",
      "Implemented dynamic product listings and artist profiles via API consumption",
    ],
  },
  {
    role: "Software Developer",
    company: "Ubuntu WaterHub Africa",
    period: "2024 - Present",
    description:
      "Developing and maintaining the company’s digital presence through a modern, responsive landing page for its smart water ATM and metering solutions.",
    achievements: [
      "Designed and built a sleek, mobile-friendly landing page using Next.js and Tailwind CSS",
      "Integrated REST APIs to display real-time product and service information",
      "Collaborated with the marketing team to align design and branding with company goals",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              My professional journey building impactful software solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-8" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Achievements:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
