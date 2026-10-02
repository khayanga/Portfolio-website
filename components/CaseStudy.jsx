
// "use client";

// import {
//   ArrowUpRight,
//   CheckCircle2,
//   Compass,
//   Lightbulb,
//   Target,
//   Users,
//   Workflow,
//   RefreshCw,
//   BookOpen,
//   Sparkles,
//   BriefcaseBusiness,
// } from "lucide-react";

// const pillars = [
//   {
//     number: "01",
//     title: "Smart Farming",
//     description: "Technology, data and smarter farm systems.",
//   },
//   {
//     number: "02",
//     title: "Renewable Energy",
//     description: "Using energy as a productive farm asset.",
//   },
//   {
//     number: "03",
//     title: "Food Safety",
//     description: "Safe, traceable and compliant production.",
//   },
//   {
//     number: "04",
//     title: "Knowledge & Resilience",
//     description: "Knowledge, climate resilience and adaptation.",
//   },
//   {
//     number: "05",
//     title: "Farm Business",
//     description: "Business performance, viability and growth.",
//   },
//   {
//     number: "06",
//     title: "Human Capital",
//     description: "People, leadership and farm operations.",
//   },
//   {
//     number: "07",
//     title: "Market Access",
//     description: "Customers, markets and competitiveness.",
//   },
//   {
//     number: "08",
//     title: "Investment Readiness",
//     description: "Enterprise development and responsible capital.",
//   },
// ];

// const journey = [
//   {
//     number: "01",
//     title: "Assess",
//     description:
//       "The farmer starts by assessing the capabilities of their farm across the eight Future Farms Framework pillars.",
//     icon: Target,
//   },
//   {
//     number: "02",
//     title: "Diagnose",
//     description:
//       "The results create a clearer picture of strengths, gaps and the farm's current stage of development.",
//     icon: Compass,
//   },
//   {
//     number: "03",
//     title: "Prioritise",
//     description:
//       "Instead of overwhelming the farmer with everything at once, the platform helps surface what matters most next.",
//     icon: Sparkles,
//   },
//   {
//     number: "04",
//     title: "Learn & act",
//     description:
//       "The assessment becomes a pathway to relevant learning, recommendations, opportunities and services.",
//     icon: Lightbulb,
//   },
//   {
//     number: "05",
//     title: "Measure & advance",
//     description:
//       "Farmers can return, reassess their capabilities and understand how their farm is progressing over time.",
//     icon: RefreshCw,
//   },
// ];

// const outcomes = [
//   {
//     title: "Learning",
//     description:
//       "Relevant knowledge and practical resources connected to identified needs.",
//     icon: BookOpen,
//   },
//   {
//     title: "Recommendations",
//     description:
//       "Clear next steps that help turn assessment findings into action.",
//     icon: Lightbulb,
//   },
//   {
//     title: "Opportunities",
//     description:
//       "Relevant funding, markets, programmes and other opportunities.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Services",
//     description:
//       "Support and providers that can help farmers act on their priorities.",
//     icon: Workflow,
//   },
// ];

// export default function CaseStudy() {
//   return (
//     <section
//       id="case-study"
//       className="relative overflow-hidden bg-muted/30 py-24 px-6 md:py-28"
//     >
//       <div className="mx-auto max-w-6xl">

//         {/* =========================================================
//             CASE STUDY HEADER
//         ========================================================= */}

//         <div className="border border-border bg-card rounded-2xl overflow-hidden">

//           <div className="flex flex-col gap-6 border-b border-border px-7 py-6 md:flex-row md:items-center md:justify-between md:px-9 lg:px-11">

//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
//                   Featured Case Study
//                 </span>

//                 <span className="h-px w-8 bg-primary/30" />
//               </div>

//               <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
//                 Future Farms Framework
//               </h3>

//               <p className="mt-2 text-base text-muted-foreground">
//                 Product strategy · Product management · UX · Technology
//               </p>
//             </div>

//             <a
//               href="https://app.futurefarms.africa/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 inline-flex
//                 w-fit
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-primary
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-semibold
//                 text-primary-foreground
//                 transition-all
//                 hover:gap-3
//                 hover:opacity-90
//               "
//             >
//               View product
//               <ArrowUpRight className="h-4 w-4" />
//             </a>
//           </div>

//           {/* =========================================================
//               MAIN CASE STUDY
//           ========================================================= */}

//           <div className="grid lg:grid-cols-[1fr_1fr]">

//             {/* =======================================================
//                 LEFT — PRODUCT STORY
//             ======================================================= */}

//             <div className="p-7 md:p-9 lg:p-11">

//               {/* Product problem */}

//               <div className="max-w-xl">

//                 <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                   The product problem
//                 </p>

//                 <h4 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
//                   How do you turn a complex framework into a product a
//                   farmer can actually use?
//                 </h4>

//                 <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
//                   The Future Farms Framework defines what a future-ready
//                   farm needs to develop across multiple dimensions. The
//                   product challenge was to translate that framework into
//                   a simple digital journey that helps farmers understand
//                   where they are, identify what needs attention, and know
//                   what they can do next.
//                 </p>

//               </div>


//               {/* Product thinking */}

//               <div className="mt-10 grid gap-4 md:grid-cols-2">

//                 <div className="rounded-xl border border-border bg-background/50 p-5">

//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
//                     <Users className="h-4 w-4 text-primary" />
//                   </div>

//                   <p className="mt-4 text-base font-semibold">
//                     Start with the farmer
//                   </p>

//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                     I approached the product around the farmer's decisions:
//                     what do I need to understand about my farm, what should
//                     I focus on next, and where can I find support?
//                   </p>

//                 </div>


//                 <div className="rounded-xl border border-border bg-background/50 p-5">

//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
//                     <Compass className="h-4 w-4 text-primary" />
//                   </div>

//                   <p className="mt-4 text-base font-semibold">
//                     Turn insight into action
//                   </p>

//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                     The assessment is designed as a starting point rather
//                     than an endpoint — connecting farm insights to learning,
//                     recommendations, opportunities and services.
//                   </p>

//                 </div>

//               </div>


//               {/* My role */}

//               <div className="mt-10 border-t border-border pt-8">

//                 <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                   My role in the product
//                 </p>

//                 <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
//                   I work across the product lifecycle — helping shape the
//                   product direction, translate the framework into user
//                   journeys and requirements, think through the experience,
//                   and work with the development team to turn those decisions
//                   into a working platform.
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2">

//                   {[
//                     "Product strategy",
//                     "User journeys",
//                     "Product requirements",
//                     "Prioritisation",
//                     "UI/UX",
//                     "Technical direction",
//                     "Team coordination",
//                   ].map((item) => (
//                     <span
//                       key={item}
//                       className="
//                         rounded-full
//                         bg-muted
//                         px-3
//                         py-1.5
//                         text-sm
//                         text-muted-foreground
//                       "
//                     >
//                       {item}
//                     </span>
//                   ))}

//                 </div>

//               </div>


//               {/* Product decision */}

//               <div
//                 className="
//                   mt-10
//                   rounded-xl
//                   border
//                   border-primary/15
//                   bg-primary/[0.035]
//                   p-6
//                 "
//               >

//                 <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                   A key product principle
//                 </p>

//                 <p className="mt-3 text-lg font-medium leading-relaxed md:text-xl">
//                   The assessment should not be the destination.
//                   <span className="text-primary">
//                     {" "}It should help a farmer decide what comes next.
//                   </span>
//                 </p>

//               </div>


//               {/* Product impact / what I learned */}

//               <div className="mt-10">

//                 <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                   What this shaped
//                 </p>

//                 <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
//                   Working on FFF has pushed me beyond building individual
//                   screens and features. It has required thinking about how
//                   a framework, data model, assessment logic and user needs
//                   come together to create a product that can support a
//                   farmer's journey over time.
//                 </p>

//               </div>

//             </div>


//             {/* =======================================================
//                 RIGHT — PRODUCT EXPERIENCE
//             ======================================================= */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 border-t
//                 border-border
//                 bg-primary/[0.025]
//                 lg:border-l
//                 lg:border-t-0
//               "
//             >

//               {/* Background grid */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   opacity-[0.15]
//                   bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
//                   bg-[size:32px_32px]
//                 "
//               />

//               {/* Glow */}

//               <div
//                 className="
//                   absolute
//                   -right-28
//                   -top-28
//                   h-72
//                   w-72
//                   rounded-full
//                   bg-primary/10
//                   blur-3xl
//                 "
//               />

//               <div className="relative z-10 p-7 md:p-9 lg:p-11">

//                 {/* Right heading */}

//                 <div>

//                   <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                     Inside the product
//                   </p>

//                   <h4 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
//                     From knowing where you are
//                     <br />
//                     to knowing what comes next.
//                   </h4>

//                   <p className="mt-3 text-base leading-relaxed text-muted-foreground">
//                     The experience turns the Future Farms Framework into a
//                     practical pathway for continuous farm development.
//                   </p>

//                 </div>


//                 {/* =================================================
//                     8 PILLARS
//                 ================================================= */}

//                 <div className="mt-8 rounded-xl border border-border bg-card/80 p-5">

//                   <div className="flex items-start justify-between gap-4">

//                     <div>
//                       <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
//                         Step 01
//                       </p>

//                       <p className="mt-1 text-lg font-semibold">
//                         Assess the farm
//                       </p>
//                     </div>

//                     <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
//                       8 pillars
//                     </span>

//                   </div>

//                   <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                     Farmers assess the capabilities of their farm across
//                     eight dimensions of future-readiness.
//                   </p>


//                   <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">

//                     {pillars.map((pillar) => (
//                       <div
//                         key={pillar.number}
//                         className="
//                           rounded-lg
//                           border
//                           border-border
//                           bg-background/60
//                           p-3
//                           transition-colors
//                           hover:border-primary/30
//                         "
//                       >

//                         <div className="flex items-center gap-2">

//                           <span className="font-mono text-xs text-primary/60">
//                             {pillar.number}
//                           </span>

//                           <span className="text-sm font-medium text-foreground">
//                             {pillar.title}
//                           </span>

//                         </div>

//                         <p className="mt-1 pl-6 text-xs leading-relaxed text-muted-foreground">
//                           {pillar.description}
//                         </p>

//                       </div>
//                     ))}

//                   </div>

//                 </div>


//                 {/* Connector */}

//                 <div className="ml-4 h-6 w-px bg-primary/20" />


//                 {/* =================================================
//                     STEP 02 — DIAGNOSE
//                 ================================================= */}

//                 <div className="flex gap-4">

//                   <div
//                     className="
//                       flex
//                       h-8
//                       w-8
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-primary/30
//                       bg-card
//                       text-primary
//                     "
//                   >
//                     <Compass className="h-4 w-4" />
//                   </div>

//                   <div className="min-w-0">

//                     <p className="text-sm font-semibold">
//                       Step 02 · Understand the current position
//                     </p>

//                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                       Assessment results create a farm-level picture of
//                       capability, strengths, gaps and development priorities.
//                       The goal is not simply to produce a score, but to make
//                       the result useful for decision-making.
//                     </p>

//                   </div>

//                 </div>


//                 {/* Connector */}

//                 <div className="ml-4 h-6 w-px bg-primary/20" />


//                 {/* =================================================
//                     STEP 03 — PRIORITISE
//                 ================================================= */}

//                 <div className="flex gap-4">

//                   <div
//                     className="
//                       flex
//                       h-8
//                       w-8
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-primary/30
//                       bg-card
//                       text-primary
//                     "
//                   >
//                     <Sparkles className="h-4 w-4" />
//                   </div>

//                   <div className="min-w-0">

//                     <p className="text-sm font-semibold">
//                       Step 03 · Decide what matters next
//                     </p>

//                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                       Instead of presenting every possible intervention at
//                       once, the product can help surface practical priorities
//                       based on the farmer's current needs.
//                     </p>

//                     <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">

//                       <div className="rounded-lg border border-border bg-card p-3">
//                         <p className="text-sm font-semibold">
//                           Quick wins
//                         </p>
//                         <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
//                           Actions that can create immediate progress.
//                         </p>
//                       </div>

//                       <div className="rounded-lg border border-border bg-card p-3">
//                         <p className="text-sm font-semibold">
//                           Medium term
//                         </p>
//                         <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
//                           Improvements requiring planning and development.
//                         </p>
//                       </div>

//                       <div className="rounded-lg border border-border bg-card p-3">
//                         <p className="text-sm font-semibold">
//                           Strategic
//                         </p>
//                         <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
//                           Longer-term changes that transform the farm.
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                 </div>


//                 {/* Connector */}

//                 <div className="ml-4 h-6 w-px bg-primary/20" />


//                 {/* =================================================
//                     STEP 04 — LEARN / ACT
//                 ================================================= */}

//                 <div className="flex gap-4">

//                   <div
//                     className="
//                       flex
//                       h-8
//                       w-8
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-primary
//                       text-primary-foreground
//                     "
//                   >
//                     <Workflow className="h-4 w-4" />
//                   </div>

//                   <div className="min-w-0 flex-1">

//                     <p className="text-sm font-semibold">
//                       Step 04 · Learn, access support & act
//                     </p>

//                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                       This is where the assessment becomes useful beyond the
//                       dashboard. The farmer can discover the knowledge,
//                       recommendations, opportunities and services that relate
//                       to their development priorities.
//                     </p>


//                     {/* Outcomes */}

//                     <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">

//                       {outcomes.map((outcome) => {
//                         const Icon = outcome.icon;

//                         return (
//                           <div
//                             key={outcome.title}
//                             className="
//                               rounded-lg
//                               border
//                               border-border
//                               bg-card
//                               p-3
//                               transition-colors
//                               hover:border-primary/30
//                             "
//                           >

//                             <div className="flex items-center gap-2">

//                               <Icon className="h-4 w-4 text-primary" />

//                               <p className="text-sm font-semibold">
//                                 {outcome.title}
//                               </p>

//                             </div>

//                             <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
//                               {outcome.description}
//                             </p>

//                           </div>
//                         );
//                       })}

//                     </div>

//                   </div>

//                 </div>


//                 {/* Connector */}

//                 <div className="ml-4 h-6 w-px bg-primary/20" />


//                 {/* =================================================
//                     STEP 05 — REASSESS
//                 ================================================= */}

//                 <div
//                   className="
//                     flex
//                     gap-4
//                     rounded-xl
//                     border
//                     border-primary/15
//                     bg-primary/[0.04]
//                     p-4
//                   "
//                 >

//                   <div
//                     className="
//                       flex
//                       h-8
//                       w-8
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-primary/10
//                     "
//                   >
//                     <CheckCircle2 className="h-4 w-4 text-primary" />
//                   </div>

//                   <div>

//                     <p className="text-sm font-semibold">
//                       Step 05 · Reassess and advance
//                     </p>

//                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                       The journey does not end after the first assessment.
//                       Farmers can reassess every three months, compare where
//                       they are now with where they started, and identify the
//                       next areas to work on.
//                     </p>

//                   </div>

//                 </div>


//                 {/* =================================================
//                     JOURNEY STATEMENT
//                 ================================================= */}

//                 <div className="mt-8 border-t border-border pt-6">

//                   <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
//                     The product loop
//                   </p>

//                   <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">

//                     {[
//                       "Assess",
//                       "Diagnose",
//                       "Prioritise",
//                       "Learn",
//                       "Implement",
//                       "Measure",
//                       "Advance",
//                       "Reassess",
//                     ].map((step, index, items) => (
//                       <div
//                         key={step}
//                         className="flex items-center gap-2"
//                       >

//                         <span
//                           className={
//                             index === 0
//                               ? "font-semibold text-primary"
//                               : index === items.length - 1
//                               ? "font-semibold text-foreground"
//                               : "text-muted-foreground"
//                           }
//                         >
//                           {step}
//                         </span>

//                         {index < items.length - 1 && (
//                           <span className="text-border">→</span>
//                         )}

//                       </div>
//                     ))}

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* =========================================================
//               CASE STUDY FOOTER
//           ========================================================= */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-6
//               border-t
//               border-border
//               bg-muted/20
//               px-7
//               py-7
//               md:flex-row
//               md:items-center
//               md:justify-between
//               md:px-9
//               lg:px-11
//             "
//           >

//             <div className="max-w-2xl">

//               <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
//                 What I’m building toward
//               </p>

//               <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
//                 A product where farm assessment is not a standalone report,
//                 but the beginning of a continuous journey toward stronger,
//                 more resilient and future-ready farm systems.
//               </p>

//             </div>

//             <a
//               href="https://app.futurefarms.africa/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 inline-flex
//                 shrink-0
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-full
//                 bg-primary
//                 px-6
//                 py-3
//                 text-sm
//                 font-semibold
//                 text-primary-foreground
//                 transition-all
//                 hover:gap-3
//                 hover:opacity-90
//               "
//             >
//               Explore the product
//               <ArrowUpRight className="h-4 w-4" />
//             </a>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



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

                  <span className="h-px w-8 bg-primary/30" />
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
                  question:
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