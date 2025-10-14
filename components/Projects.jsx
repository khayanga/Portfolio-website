"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
  title: "Smart Water Solutions Landing Page",
  description:
    "A responsive company website for showcasing smart water ATMs and metering solutions. Designed with Next.js, React, and Tailwind CSS to deliver a modern, fast, and engaging digital experience.",
  tech: ["Next.js", "React", "Tailwind CSS"],
  github: "https://github.com/khayanga/Ubuntu",
  live: "https://waterhub.africa/",
},

  {
  title: "Senti - Mobile Expense Tracker",
  description:
    "A cross-platform expense tracker helping users manage budgets, monitor spending, and visualize financial habits. Built with React Native, Node.js, Express, and PostgreSQL.",
  tech: ["React Native", "Node.js", "Express", "PostgreSQL"],
  github: "https://github.com/khayanga/expense-tracker-app",
  live: "#",
},

 {
  title: "Untitled Gallery - Modern Art Storefront",
  description:
    "A clean and immersive frontend for an art e-commerce platform where users can explore and purchase artworks. Developed with Next.js, React, and Tailwind CSS, the site integrates REST APIs for real-time data and a smooth shopping experience.",
  tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
  github: "https://github.com/khayanga/Untitled-gallery",
  live: "#",
},

  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects showcasing my expertise in building scalable,
              production-ready applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.1_0.02_240_/_0.5)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
