


"use client";

import {
  Code2,
  Database,
  Layers3,
  PenTool,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Think",
    subtitle: "Product",
    description:
      "I start with the problem understanding users, exploring opportunities, and shaping ideas into products worth building.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Experience",
    description:
      "I turn product ideas into clear, intuitive experiences that make complex problems feel simple.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Technology",
    description:
      "I understand the technology behind the product and work closely with teams to turn ideas into working solutions.",
    icon: Code2,
  },
];

const technologies = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="max-w-3xl space-y-5 animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            More than code.
          </h2>

          <div className="h-1 w-20 bg-primary rounded-full" />

          <p className="pt-2 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            I care about the{" "}
            <span className="text-foreground font-medium">
              problem before the product,
            </span>{" "}
            the{" "}
            <span className="text-foreground font-medium">
              user before the interface,
            </span>{" "}
            and the{" "}
            <span className="text-foreground font-medium">
              outcome after launch.
            </span>
          </p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start animate-fade-in-up">

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            

            <p>
              I enjoy working where{" "}
              <span className="text-foreground font-medium">
                ideas, people, and technology
              </span>{" "}
              meet figuring out what is worth building and helping turn it
              into something real.
            </p>

            <p>
              My technical background gives me a hands-on understanding of
              development, while my product and design perspective keeps me
              focused on the bigger picture:{" "}
              <span className="text-foreground font-medium">
                users, value, execution, and impact.
              </span>
            </p>
          </div>

          {/* Brand Statement */}
          <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-card/50 overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">
                My approach
              </p>

              <h3 className="text-3xl  text-primary md:text-4xl font-bold leading-tight">
                Not every idea needs to be built.
              </h3>

              <p className="mt-4 text-lg  leading-relaxed">
                I focus on understanding the problem, finding the opportunity,
                and building the things that are actually worth building.
              </p>

              
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.number}
                className="group relative p-7 rounded-2xl border border-border bg-card
                hover:border-primary/50 hover:-translate-y-1
                transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {capability.number}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold">
                    {capability.title}
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      / {capability.subtitle}
                    </span>
                  </h3>

                  <p className="mt-4 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Foundation */}
        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">

            <div className="lg:w-1/3">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Technical foundation
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Enough tech to build the idea.
              </h3>

              <p className="mt-3 text-muted-foreground">
                A hands-on engineering background that helps me understand
                products beyond the surface.
              </p>
            </div>

            <div className="lg:w-2/3 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full border border-border
                  text-sm font-medium text-muted-foreground
                  hover:text-foreground hover:border-primary/50
                  transition-colors duration-300"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

