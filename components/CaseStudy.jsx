


"use client";

import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Compass,
  Lightbulb,
  Target,
  Users,
  Workflow,
  RefreshCw,
  BookOpen,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Smart Farming",
    description: "Technology, data and smarter farm systems.",
  },
  {
    number: "02",
    title: "Renewable Energy",
    description: "Using energy as a productive farm asset.",
  },
  {
    number: "03",
    title: "Food Safety",
    description: "Safe, traceable and compliant production.",
  },
  {
    number: "04",
    title: "Knowledge & Resilience",
    description: "Knowledge, climate resilience and adaptation.",
  },
  {
    number: "05",
    title: "Farm Business",
    description: "Business performance, viability and growth.",
  },
  {
    number: "06",
    title: "Human Capital",
    description: "People, leadership and farm operations.",
  },
  {
    number: "07",
    title: "Market Access",
    description: "Customers, markets and competitiveness.",
  },
  {
    number: "08",
    title: "Investment Readiness",
    description: "Enterprise development and responsible capital.",
  },
];

const journey = [
  {
    number: "01",
    title: "Assess",
    shortTitle: "Understand",
    description:
      "Farmers assess their capabilities across the eight Future Farms Framework pillars to establish a clearer picture of where they are today.",
    icon: Target,
  },
  {
    number: "02",
    title: "Diagnose",
    shortTitle: "Find the gaps",
    description:
      "The assessment surfaces strengths, gaps and areas that may need attention, turning responses into something useful for decision-making.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Prioritise",
    shortTitle: "Decide what matters",
    description:
      "The product helps move from knowing what could improve to understanding what should be focused on next.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Learn & act",
    shortTitle: "Take action",
    description:
      "Farmers can discover relevant learning, recommendations, opportunities and services connected to their development priorities.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Measure & advance",
    shortTitle: "Keep progressing",
    description:
      "The journey continues as farmers implement changes, track progress and return to reassess their capabilities over time.",
    icon: RefreshCw,
  },
];

const outcomes = [
  {
    title: "Learning",
    description:
      "Relevant knowledge and practical resources connected to identified needs.",
    icon: BookOpen,
  },
  {
    title: "Recommendations",
    description:
      "Clear next steps that help turn assessment findings into action.",
    icon: Lightbulb,
  },
  {
    title: "Opportunities",
    description:
      "Relevant funding, markets, programmes and other opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Services",
    description:
      "Support and providers that can help farmers act on their priorities.",
    icon: Workflow,
  },
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden bg-muted/30 py-24 px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* =========================================================
            SECTION INTRO
        ========================================================= */}

        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Featured case study
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Building a product around a framework.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            How I’m helping translate the Future Farms Framework into a
            digital product that can help farmers understand where they are,
            decide what comes next, and keep progressing.
          </p>
        </div>

        {/* =========================================================
            CASE STUDY CONTAINER
        ========================================================= */}

        <article className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
          {/* =======================================================
              PROJECT HEADER
          ======================================================= */}

          <header className="border-b border-border px-7 py-7 md:px-9 md:py-8 lg:px-11">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Future Farms Framework
                  </span>

                  
                </div>

                <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  From framework to product.
                </h3>

                <p className="mt-3 text-base text-muted-foreground">
                  Product strategy · Product management · UX · Technology
                </p>
              </div>

              <a
                href="https://app.futurefarms.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-primary-foreground
                  transition-all
                  hover:gap-3
                  hover:opacity-90
                "
              >
                View product
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </header>

          {/* =======================================================
              01 — PRODUCT STORY
          ======================================================= */}

          <div className="px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Story label */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  01 · The opportunity
                </p>

                <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  How do you make a complex framework useful to a farmer?
                </h4>
              </div>

              {/* Story */}

              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The Future Farms Framework describes the capabilities a
                  future-ready farm needs to develop across multiple
                  dimensions. The product opportunity is to turn that
                  framework into something farmers can actually use.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Rather than treating the framework as a static checklist or
                  report, the platform is being shaped around a more useful
                  question
                </p>

                <p className="mt-5 border-l-2 border-primary pl-5 text-xl font-medium leading-relaxed">
                  Where am I now, what should I focus on next, and what support
                  can help me move forward?
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              02 — PRODUCT THINKING
          ======================================================= */}

          <div className="border-t border-border px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  02 · Product thinking
                </p>

                <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Start with the farmer, not the framework.
                </h4>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Card 1 */}

                <div className="rounded-xl border border-border bg-background/50 p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-4 w-4 text-primary" />
                  </div>

                  <h5 className="mt-5 text-lg font-semibold">
                    Understand the user
                  </h5>

                  <p className="mt-2 text-md leading-relaxed text-muted-foreground">
                    The experience starts with the farmer’s questions:
                    understanding the farm, identifying what needs attention,
                    and knowing where to get support.
                  </p>
                </div>

                {/* Card 2 */}

                <div className="rounded-xl border border-border bg-background/50 p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-4 w-4 text-primary" />
                  </div>

                  <h5 className="mt-5 text-lg font-semibold">
                    Make insight actionable
                  </h5>

                  <p className="mt-2 text-md leading-relaxed text-muted-foreground">
                    The assessment is designed as a starting point creating
                    a pathway towards learning, recommendations, opportunities
                    and services.
                  </p>
                </div>

                {/* Card 3 */}

                <div className="rounded-xl border border-border bg-background/50 p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Compass className="h-4 w-4 text-primary" />
                  </div>

                  <h5 className="mt-5 text-lg font-semibold">
                    Prioritise the next step
                  </h5>

                  <p className="mt-2 text-md leading-relaxed text-muted-foreground">
                    Instead of overwhelming farmers with everything they could
                    improve, the product focuses attention on what matters
                    next.
                  </p>
                </div>

                {/* Card 4 */}

                <div className="rounded-xl border border-border bg-background/50 p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <RefreshCw className="h-4 w-4 text-primary" />
                  </div>

                  <h5 className="mt-5 text-lg font-semibold">
                    Design for progress
                  </h5>

                  <p className="mt-2 text-md leading-relaxed text-muted-foreground">
                    The product is not just about the first assessment. It is
                    designed around a journey that farmers can revisit and
                    reassess over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          

         

          

          <div className="border-t border-border px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                03 · The farmer journey
              </p>

              <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                The assessment is only the beginning.
              </h4>

              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                The product connects assessment with a continuous journey:
                understanding the current position, deciding what matters,
                accessing support and returning to measure progress.
              </p>
            </div>

            {/* Journey */}

            <div className="relative mt-10">
              {/* Desktop connecting line */}

              <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />

              <div className="grid gap-8 lg:grid-cols-5 lg:gap-16 ">
                {journey.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="relative">
                      {/* Number */}

                      <div className="relative z-10 flex items-center gap-4 lg:block ">
                        <div
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${
                              index === 0
                                ? "border-primary bg-primary text-primary-foreground"
                                : index === journey.length - 1
                                ? "border-foreground bg-foreground text-background"
                                : "border-border bg-card text-primary"
                            }
                          `}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="lg:mt-5">
                          <p className="font-mono text-[11px] text-muted-foreground">
                            {step.number}
                          </p>

                          <h5 className="mt-1 text-base font-semibold">
                            {step.title}
                          </h5>
                        </div>
                      </div>

                      <p className="mt-3 pl-14 text-md leading-relaxed text-muted-foreground lg:pl-0">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        

          <div className="border-t border-border bg-muted/20 px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  04 · From insight to action
                </p>

                <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  What happens after the assessment?
                </h4>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The product connects the farmer’s identified needs to
                  practical pathways for development.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome) => {
                  const Icon = outcome.icon;

                  return (
                    <div
                      key={outcome.title}
                      className="
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-5
                        transition-all
                        duration-300
                        hover:border-primary/40
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>

                        <h5 className="text-base font-semibold">
                          {outcome.title}
                        </h5>
                      </div>

                      <p className="mt-3 text-md leading-relaxed text-muted-foreground">
                        {outcome.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          
          <div className="border-t border-border px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  05 · My role
                </p>

                <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Thinking across the product, not just the interface.
                </h4>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-foreground/85">
                  My role sits at the intersection of product thinking,
                  technology, experience and execution. I help translate the
                  framework into user journeys and product requirements, think
                  through how the experience should work, and work with the
                  development team to turn those decisions into a working
                  platform.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Product strategy",
                    "User journeys",
                    "Product requirements",
                    "Prioritisation",
                    "UI/UX",
                    "Technical direction",
                    "Team coordination",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-border
                        bg-muted/50
                        px-3
                        py-1.5
                        text-sm
                        text-muted-foreground
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

         

          <div className="border-t border-border px-7 py-12 md:px-9 lg:px-11 lg:py-14">
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-primary/15
                bg-primary/[0.045]
                p-7
                md:p-9
              "
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  A key product principle
                </p>

                <h4 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
                  The assessment should not be the destination.
                </h4>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  It should give the farmer enough clarity to understand their
                  current position and make a more informed decision about what
                  comes next.
                </p>
              </div>
            </div>
          </div>

          

          {/* =======================================================
              CASE STUDY FOOTER
          ======================================================= */}

          <footer className="border-t border-border px-7 py-8 md:px-9 lg:px-11">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-lg font-semibold">
                  What this project has taught me about product management.
                </p>

                <p className="mt-2 text-md leading-relaxed text-muted-foreground md:text-base">
                  Good product management is not only about defining features.
                  It is about understanding the problem, creating clarity,
                  making thoughtful trade-offs and helping a team move from an
                  idea toward something that creates real value.
                </p>
              </div>

              <a
                href="https://app.futurefarms.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-primary/30
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-primary
                  transition-all
                  hover:bg-primary
                  hover:text-primary-foreground
                "
              >
                Explore FFF
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}