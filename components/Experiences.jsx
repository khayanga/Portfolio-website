const experiences = [
  {
    role: "Head of Tech and Digital Transformation",
    company: "Arbarne Agricultural Group",
    period: "Oct 2025 - Present",
    description:
      "Leading product and technology at an agritech company, driving the vision, direction, and development of digital solutions that digitize food safety and compliance across agricultural operations.",
    achievements: [
      "Own product direction for the Future Farms Framework, a farmer assessment platform defining the assessment pillars, shaping the roadmap, and translating strategy into a working digital product",
      "Lead a cross-functional team, including coordinating interns through recent development sprints, to take the platform from concept toward launch",
      "Work across the full stack backend services, APIs, and the frontend interfaces farm teams use daily to ensure product decisions translate cleanly into what gets built",
      "Oversee database and system architecture decisions to keep the platform scalable, reliable, and performant as it grows",

    ],
  },

  {
    role: "Frontend Developer (Contractor)",
    company: "Kodit Afrika",
    period: "Aug 2025 - Oct 2025",
    description:
      "Developed a visually rich e-commerce frontend for an online art marketplace connecting artists and buyers.",
    achievements: [
      "Built responsive layouts and interactive components using Next.js, React, and Tailwind CSS, enhancing user engagement by 25%",
      "Integrated REST APIs for dynamic product listings and artist profiles, improving real-time content delivery",
      "Optimized user experience through smooth navigation and responsive design, increasing average session duration",
    ],
  },

  {
    role: "Frontend Developer",
    company: "Ubuntu WaterHub Africa",
    period: "Aug 2024 - Jan 2026",
    description:
      "Develop and maintain the company's digital presence, including a modern landing page for smart water ATM and metering solutions.",
    achievements: [
      "Designed and implemented a mobile-friendly landing page using Next.js and Tailwind CSS, boosting site traffic by 20%",
      "Integrated REST APIs to display real-time product and service information, improving customer access to information",
      "Collaborated with marketing to align design, branding, and user experience, enhancing conversion rates and engagement",
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
            <h2 className="mt-4 text-4xl  tracking-tight md:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              My journey leading products and building the software behind them.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-8" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="space-y-4">
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

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-md font-medium text-foreground">Key Achievements:</p>
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