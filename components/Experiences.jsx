
"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
} from "lucide-react";

const experiences = [
  {
    role: "Head of Tech & Digital Transformation",
    company: "Arbarne Agricultural Group",
    period: "Oct 2025 — Present",
    type: "Product · Technology · Digital Transformation",
    icon: Layers3,

    description:
      "Working at the intersection of product, technology, and agriculture helping turn ideas around farm transformation into digital systems that can be understood, built, tested, and improved.",

    achievements: [
      "Lead product direction for the Future Farms Framework, shaping how the framework becomes a practical digital journey for farmers.",
      "Translate organisational goals and user needs into product structure, user journeys, platform requirements, and development priorities.",
      "Work closely with a cross-functional team to move the platform from concept and framework into a working digital product.",
      "Contribute across UX, frontend development, backend services, APIs, data structures, and system architecture — keeping product thinking connected to implementation.",
      "Coordinate development work, support sprint planning, and help create clarity around what the team is building and why.",
    ],
  },

  {
    role: "Frontend Developer",
    company: "Kodit Afrika",
    period: "Aug 2025 — Oct 2025",
    type: "Frontend · UI/UX · E-commerce",
    icon: Code2,

    description:
      "Worked on the frontend of an online art marketplace, translating designs and product requirements into a responsive experience for discovering and purchasing artwork.",

    achievements: [
      "Built responsive interfaces and reusable components using Next.js, React, and Tailwind CSS.",
      "Integrated REST APIs to bring dynamic artwork, product, and artist information into the experience.",
      "Worked across interface structure, responsive behaviour, navigation, and interaction details to create a smoother browsing experience.",
      "Collaborated with the wider team to translate visual and functional requirements into working frontend experiences.",
    ],
  },

  {
    role: "Frontend Developer",
    company: "Ubuntu WaterHub Africa",
    period: "Aug 2024 — Jan 2026",
    type: "Digital Experience · UI/UX · Frontend",
    icon: BriefcaseBusiness,

    description:
      "Helped shape the organisation's digital presence, using design and technology to communicate its work in smart water access, water ATMs, and metering solutions.",

    achievements: [
      "Designed and developed responsive web interfaces using Next.js, React, and Tailwind CSS.",
      "Translated organisational goals and service information into clearer digital experiences for customers, partners, and stakeholders.",
      "Worked across UI implementation, responsive design, content structure, and frontend development.",
      "Collaborated around branding, communication, and user experience to create a more cohesive digital presence.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">

        {/* =========================================================
            SECTION INTRO
        ========================================================== */}

        <div className="max-w-3xl animate-fade-in-up">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Where technology meets
            <span className="text-primary"> real-world problems.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-primary" />

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            My experience has grown from building interfaces and software
            into thinking more broadly about{" "}
            <span className="font-medium text-foreground">
              products, users, systems, and execution.
            </span>
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Today, I work across the space between an idea and the thing that
            eventually gets built helping teams make sense of the problem,
            shape the experience, and turn direction into execution.
          </p>

        </div>

        {/* =========================================================
            EXPERIENCE TIMELINE
        ========================================================== */}

        <div className="relative mt-20">

          {/* Timeline */}

          <div
            className="
              absolute
              left-[15px]
              top-2
              bottom-2
              hidden
              w-px
              bg-border
              md:block
            "
          />

          <div className="space-y-8">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="
                    group
                    relative
                    md:pl-16
                  "
                >

                  {/* Timeline node */}

                  <div
                    className="
                      absolute
                      left-0
                      top-8
                      hidden
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      md:flex
                    "
                  >
                    <div className="h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  {/* =================================================
                      EXPERIENCE CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/40
                      md:p-9
                    "
                  >

                    {/* subtle hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-primary/5
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">

                      {/* =================================================
                          CARD HEADER
                      ================================================= */}

                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                        <div className="flex gap-4">

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-primary/10
                            "
                          >
                            <Icon className="h-5 w-5 text-primary" />
                          </div>

                          <div>

                            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                              {experience.type}
                            </p>

                            <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                              {experience.role}
                            </h3>

                            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">

                              <span className="font-medium text-foreground">
                                {experience.company}
                              </span>

                              <span className="hidden sm:inline">
                                ·
                              </span>

                              <span>
                                {experience.period}
                              </span>

                            </div>

                          </div>

                        </div>

                        <span className="hidden font-mono text-xs text-muted-foreground md:block">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* =================================================
                          ROLE DESCRIPTION
                      ================================================= */}

                      <div className="mt-7 max-w-3xl">

                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {experience.description}
                        </p>

                      </div>

                      {/* =================================================
                          WHAT I WORKED ON
                      ================================================= */}

                      <div className="mt-8 border-t border-border pt-7">

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          What I worked on
                        </p>

                        <div className="mt-5 space-y-4">

                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <div
                                key={achievementIndex}
                                className="flex items-start gap-3"
                              >

                                <span
                                  className="
                                    mt-2
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-primary
                                  "
                                />

                                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                  {achievement}
                                </p>

                              </div>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* =========================================================
            CAREER THREAD
        ========================================================== */}

        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              The thread
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              From building interfaces
              <span className="text-primary">
                {" "}
                to shaping what gets built.
              </span>
            </h3>

          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">

            <p>
              My technical background taught me how to build. Working closer
              to organisations, users, and teams has taught me to ask a
              different set of questions:{" "}
              <span className="font-medium text-foreground">
                What problem are we solving? Who are we solving it for? What
                should we build first? And how do we know it is working?
              </span>
            </p>

            <p>
              That shift is shaping the kind of work I want to do next 
              staying close enough to technology to understand what is
              possible, while thinking more deeply about{" "}
              <span className="font-medium text-foreground">
                product direction, experience, execution, and impact.
              </span>
            </p>

          </div>

        </div>

        {/* =========================================================
            CTA
        ========================================================== */}

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">

          <a
            href="#projects"
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
            Explore my work
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-border
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
            Let's talk
            <ArrowUpRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Experience;

