


"use client";

import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Future Farms",
    category: "Digital Experience",
    description:
      "A digital experience translating the Future Farms vision into a clear story around future-ready agriculture, farm transformation, and the role of technology in building more capable farm systems.",
    contribution:
      "Frontend development, UI implementation, responsive design, information structure, and translating the organisation's vision into an accessible digital experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.futurefarms.africa/",
  },

  {
    title: "Arbarne Group",
    category: "Corporate Website",
    description:
      "A corporate digital experience bringing together Arbarne Group's work across agriculture, sustainability, technology, and impact in one clearer and more cohesive online presence.",
    contribution:
      "Frontend development, interface implementation, responsive design, information structure, and translating the organisation's work into a more engaging web experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.arbarnegroup.com/",
  },

  {
    title: "Smart Water Solutions",
    category: "Digital Experience",
    description:
      "A digital experience created to make smart water ATMs, metering solutions, and water access initiatives easier for customers, partners, and stakeholders to understand.",
    contribution:
      "UI/UX implementation, frontend development, responsive design, content presentation, and building the interface around the needs of its intended audience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/khayanga/Ubuntu",
    live: "https://waterhub.africa/",
  },

  {
    title: "Dryland Soils",
    category: "Knowledge & Impact Website",
    description:
      "A focused digital platform communicating work around dryland soil health and sustainable land management, with an emphasis on making technical and environmental work easier to discover and understand.",
    contribution:
      "Website development, UI implementation, responsive design, content structure, and frontend execution.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://drylandsoils.vercel.app/",
  },

  {
    title: "AyshaKiu Maji Safi",
    category: "Organisation Website",
    description:
      "A digital presence designed to communicate the organisation's work, programmes, and impact more clearly while giving audiences a simpler way to discover what it does.",
    contribution:
      "UI implementation, frontend development, responsive design, information structure, and digital experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.ayshakiumajisafi.co.ke/",
  },

  {
    title: "Untitled Gallery",
    category: "E-commerce Experience",
    description:
      "A modern art storefront centred around discovery, visual storytelling, and a straightforward journey from exploring artwork to making a purchase.",
    contribution:
      "Frontend development, UI/UX implementation, API integration, responsive design, and shaping the browsing and purchasing experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/khayanga/Untitled-gallery",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================================================
            SECTION INTRO
        ========================================================== */}

        <div className="max-w-3xl animate-fade-in-up">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            From ideas to
            <span className="text-primary"> digital experiences.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-primary" />

          <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A selection of websites, digital experiences, and products I've
            helped bring to life across{" "}
            <span className="font-medium text-foreground">
              agriculture, sustainability, water, impact, and creative commerce.
            </span>
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            My role varies from project to project — from{" "}
            <span className="font-medium text-foreground">
              UI/UX and frontend development
            </span>{" "}
            to helping shape how an idea is presented, understood, and
            experienced digitally.
          </p>

        </div>

        {/* =========================================================
            PROJECT GRID
        ========================================================== */}

        <div className="mt-20">

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className="
                  group
                  relative
                  flex
                  min-h-[410px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-7
                  md:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-lg
                "
              >

                {/* =====================================================
                    CARD HEADER
                ====================================================== */}

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-primary/10
                      px-3
                      py-1
                      text-[11px]
                      font-medium
                      text-primary
                    "
                  >
                    {project.category}
                  </span>

                </div>

                {/* =====================================================
                    TITLE
                ====================================================== */}

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-primary
                    md:text-3xl
                  "
                >
                  {project.title}
                </h3>

                {/* =====================================================
                    DESCRIPTION
                ====================================================== */}

                <p
                  className="
                    mt-4
                    text-base
                    leading-relaxed
                    text-muted-foreground
                    md:text-lg
                  "
                >
                  {project.description}
                </p>

                {/* =====================================================
                    CONTRIBUTION
                ====================================================== */}

                <div className="mt-6 border-l-2 border-primary/20 pl-4">

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-primary
                    "
                  >
                    My contribution
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.contribution}
                  </p>

                </div>

                {/* =====================================================
                    CARD FOOTER
                ====================================================== */}

                <div className="mt-auto pt-8">

                  {/* Technology */}

                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-muted
                          px-3
                          py-1.5
                          text-xs
                          text-muted-foreground
                        "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Links */}

                  <div className="mt-7 flex items-center gap-5">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-foreground
                          transition-all
                          duration-300
                          hover:gap-3
                          hover:text-primary
                        "
                      >
                        View project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          text-muted-foreground
                          transition-colors
                          hover:text-foreground
                        "
                      >
                        <Github className="h-4 w-4" />
                        View code
                      </a>
                    )}

                  </div>

                </div>

                {/* =====================================================
                    HOVER ACCENT
                ====================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-primary/5
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

              </article>
            ))}

          </div>

        </div>

        {/* =========================================================
            TRANSITION INTO PRODUCT THINKING
        ========================================================== */}

        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              How I work
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Technology is part of the work.
              <span className="text-primary">
                {" "}
                Understanding the problem is where it starts.
              </span>
            </h3>

          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">

            <p>
              Not every project needs the same role. Sometimes I'm focused on
              translating a design into a responsive interface. Sometimes I'm
              working through the user experience, information structure, and
              interaction details.
            </p>

            <p>
              And increasingly, I'm interested in the space before the code
              understanding the problem, the people using the experience, and
              what the digital solution needs to achieve.
            </p>

            <p>
              That combination of{" "}
              <span className="font-medium text-foreground">
                product thinking, design awareness, and technical understanding
              </span>{" "}
              is the direction I'm continuing to build toward.
            </p>

          </div>

        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <div className="relative mt-24 overflow-hidden rounded-3xl border border-border bg-card">

          {/* Background glow */}

          <div
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24
              h-64
              w-64
              rounded-full
              bg-primary/5
              blur-3xl
            "
          />

          <div className="relative px-7 py-12 md:px-12 md:py-16">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What's next
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Have a problem worth solving?
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I'm interested in working with people and teams who are
                building meaningful things especially where{" "}
                <span className="font-medium text-foreground">
                  people, technology, and real-world impact
                </span>{" "}
                come together.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-primary-foreground
                    transition-all
                    duration-300
                    hover:gap-3
                    hover:opacity-90
                  "
                >
                  Let's talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://app.futurefarms.africa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    bg-background/40
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:text-primary
                  "
                >
                  Explore Future Farms
                  <ArrowUpRight className="h-4 w-4" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}