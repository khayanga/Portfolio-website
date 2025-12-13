const experiences = [
  {
    role: "Technical Lead",
    company: "Arbarne Agricultural Group",
    period: "Oct 2025 - Present",
    description:
      "Leading the development of digital solutions at an agri-tech company focused on digitizing food safety and compliance across agricultural operations.",
    achievements: [
      "Design and maintain farm management and compliance software systems, improving operational efficiency by 30%",
      "Develop backend services and APIs, and build responsive front-end interfaces used by farm teams daily",
      "Manage databases and system architecture to ensure scalable, reliable, and high-performance systems",
      "Implement digital solutions that streamline food safety tracking and compliance reporting, reducing manual errors by 40%",
    ],
  },

  {
    role: "Founder & Product Lead",
    company: "Senti Expense Tracker App",
    period: "Apr 2025 - Present",
    description:
      "Building a cross-platform mobile app to help users track and manage their finances with clarity and insight.",
    achievements: [
      "Developed React Native frontend and Node.js/Express backend, achieving smooth cross-platform functionality",
      "Integrate PostgreSQL for data persistence and analytics, enabling users to track spending trends effectively",
      "Focus on clean UI/UX and scalable architecture, preparing the app for future feature expansion and user growth",
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
    role: "Software Developer",
    company: "Ubuntu WaterHub Africa",
    period: "Aug 2024 - Present",
    description:
      "Develop and maintain the company’s digital presence, including a modern landing page for smart water ATM and metering solutions.",
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
