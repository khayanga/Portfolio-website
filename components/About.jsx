"use client";

import { Code2, Database, Globe, Server } from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "React Native", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Code2 },
  { name: "REST APIs", icon: Globe },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
  <p>
    I’ve always believed creativity and technology share the same heartbeat
    both are about solving problems in unexpected ways. I love exploring where
    those worlds meet.
  </p>
  <p>
    Whether it’s building tools, designing systems, or testing wild ideas, I’m
    driven by curiosity and a constant desire to understand how things work and
    how they can work better.
  </p>
  <p>
    I’m less focused on titles and more on impact. The real goal is to keep
    learning, keep creating, and keep building the future one idea at a time.
  </p>
</div>


            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
