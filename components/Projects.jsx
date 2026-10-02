// "use client";

// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const projects = [
//   {
//     title: "Smart Water Solutions Landing Page",
//     description:
//       "A responsive company website for showcasing smart water ATMs and metering solutions. Designed with Next.js, React, and Tailwind CSS to deliver a modern, fast, and engaging digital experience.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     github: "https://github.com/khayanga/Ubuntu",
//     live: "https://waterhub.africa/",
//   },

//   {
//     title: "Untitled Gallery - Modern Art Storefront",
//     description:
//       "A clean and immersive frontend for an art e-commerce platform where users can explore and purchase artworks. Developed with Next.js, React, and Tailwind CSS, the site integrates REST APIs for real-time data and a smooth shopping experience.",
//     tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
//     github: "https://github.com/khayanga/Untitled-gallery",
//     live: "#",
//   },

// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 px-6 bg-muted/30">
//       <div className="mx-auto max-w-6xl">
//         <div className="space-y-12 animate-fade-in-up">
//           {/* Section Header */}
//           <div className="space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
//             <div className="h-1 w-20 bg-primary rounded-full" />
//             <p className="text-lg text-muted-foreground max-w-2xl">
//               A selection of projects showcasing my expertise in building scalable,
//               production-ready applications.
//             </p>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0.1_0.02_240_/_0.5)] hover:-translate-y-1"
//               >
//                 <div className="space-y-4">
//                   <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>

//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 text-md rounded-full bg-primary/10 text-primary border border-primary/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   <div className="flex gap-3 pt-2">
//                     <Button variant="outline" size="sm" asChild>
//                       <a href={project.github} target="_blank" rel="noopener noreferrer" >
//                         <Github className="h-4 w-4 mr-2" />
//                         Code
//                       </a>
//                     </Button>

//                     <Button variant="ghost" size="sm" asChild>
//                       <a href={project.live} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "Future Farms Framework",
    
//     featured: true,
//     tagline: "Helping farms move from where they are to where they want to be.",
//     description:
//       "A digital platform that helps farms assess their current capabilities, identify opportunities, and discover practical pathways toward becoming future-ready.",
//     contribution:
//       "Product direction, UI/UX, platform development, technical direction, and team coordination.",
//     tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
//     live: "https://app.futurefarms.africa/",
//   },

//   {
//     title: "Future Farms Initiative",
    
//     description:
//       "A digital experience communicating a vision for transforming agriculture through technology, data, and future-ready farm systems.",
//     contribution:
//       "Website development, UI implementation, responsive design, and digital experience.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     live: "https://www.futurefarms.africa/",
//   },

//   {
//     title: "Arbarne Agriculture Group",
//     category: "Corporate Website",
//     description:
//       "A modern digital platform bringing together work across agriculture, sustainability, technology, and impact.",
//     contribution:
//       "Frontend development, interface implementation, responsive experience, and website structure.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     live: "https://www.arbarnegroup.com/",
//   },

//   {
//     title: "Smart Water Solutions",
//     category: "UI/UX · Digital Experience",
//     description:
//       "A digital experience making smart water ATMs and metering solutions easier for customers and partners to understand.",
//     contribution:
//       "UI/UX, frontend development, responsive design, and digital experience.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     github: "https://github.com/khayanga/Ubuntu",
//     live: "https://waterhub.africa/",
//   },

//   {
//     title: "Dryland Soils",
    
//     description:
//       "A focused digital platform communicating work around dryland soil health and sustainable land management.",
//     contribution:
//       "Website development, UI implementation, responsive design, and content structure.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     live: "https://drylandsoils.vercel.app/",
//   },

//   {
//     title: "AyshaKiu Maji Safi",
    
//     description:
//       "A clear and engaging online presence designed to make the organisation's work and services more accessible to its audience.",
//     contribution:
//       "UI implementation, frontend development, responsive design, and digital experience.",
//     tech: ["Next.js", "React", "Tailwind CSS"],
//     live: "https://www.ayshakiumajisafi.co.ke/",
//   },

//   {
//     title: "Untitled Gallery",
    
//     description:
//       "A modern art storefront built around discovery, visual storytelling, and a simple path from exploring artwork to purchase.",
//     contribution:
//       "Frontend development, UI/UX implementation, API integration, and responsive experience.",
//     tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
//     github: "https://github.com/khayanga/Untitled-gallery",
//   },
// ];

// export default function Projects() {
//   const featuredProject = projects.find((project) => project.featured);
//   const otherProjects = projects.filter((project) => !project.featured);

//   return (
//     <section id="projects" className="py-24 md:py-28 px-6 bg-muted/30">
//       <div className="mx-auto max-w-6xl">
//         {/* =========================
//             SECTION HEADER
//         ========================== */}
//         <div className="max-w-3xl animate-fade-in-up">
          

//           <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//             My Work.
//           </h2>

//           <div className="h-1 w-16 bg-primary rounded-full mt-6" />

//           <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
//             A selection of products and digital experiences I’ve helped bring
//             from{" "}
//             <span className="text-foreground font-medium">
//               idea to reality.
//             </span>
//           </p>
//         </div>

//         {/* =========================
//             FEATURED PROJECT
//         ========================== */}
//         {featuredProject && (
//           <article
//             className="
//       mt-16
//       overflow-hidden
//       rounded-2xl
//       border
//       border-border
//       bg-card
//       transition-all
//       duration-300
//       hover:border-primary/40
//     "
//           >
//             <div className="grid lg:grid-cols-[1fr_1fr]">
//               {/* =========================================================
//           LEFT — CASE STUDY STORY
//       ========================================================= */}

//               <div className="p-7 md:p-9 lg:p-11">
//                 {/* Project label */}

//                 <div className="flex items-center gap-3">
//                   <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
//                     Featured Case Study
//                   </span>

//                   <span className="h-px w-8 bg-primary/30" />
//                 </div>

//                 {/* Project title */}

//                 <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
//                   {featuredProject.title}
//                 </h3>

//                 {/* Category */}

//                 <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-primary">
//                   {featuredProject.category}
//                 </p>

//                 {/* Main story hook */}

//                 <p className="mt-6 max-w-2xl text-xl font-medium leading-snug md:text-2xl">
//                   {featuredProject.tagline}
//                 </p>

//                 {/* =======================================================
//             01 — THE PROBLEM
//         ======================================================= */}

//                 <div className="mt-9">
//                   <div className="flex items-center gap-3">
//                     <span className="font-mono text-sm text-primary">01</span>

//                     <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
//                       The problem
//                     </p>
//                   </div>

//                   <p className="mt-3 max-w-2xl text-md leading-relaxed text-muted-foreground md:text-base">
//                     Farms do not all start from the same place. Some have strong
//                     systems in one area and significant gaps in another. The
//                     challenge was to create a way for farmers to understand
//                     where they currently stand — and make that understanding
//                     useful.
//                   </p>
//                 </div>

//                 {/* =======================================================
//             02 — THE PRODUCT IDEA
//         ======================================================= */}

//                 <div className="mt-7">
//                   <div className="flex items-center gap-3">
//                     <span className="font-mono text-sm text-primary">02</span>

//                     <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
//                       The product idea
//                     </p>
//                   </div>

//                   <p className="mt-3 max-w-2xl text-md leading-relaxed text-muted-foreground md:text-base">
//                     Future Farms Framework turns the broader Future Farms vision
//                     into a practical digital journey. A farmer can assess their
//                     farm across eight areas, see where they currently stand,
//                     identify opportunities for improvement, and move from
//                     assessment into action.
//                   </p>
//                 </div>

//                 {/* =======================================================
//             03 — FROM FRAMEWORK TO EXPERIENCE
//         ======================================================= */}

//                 <div className="mt-7">
//                   <div className="flex items-center gap-3">
//                     <span className="font-mono text-sm text-primary">03</span>

//                     <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
//                       From framework to experience
//                     </p>
//                   </div>

//                   <p className="mt-3 max-w-2xl text-md leading-relaxed text-muted-foreground md:text-base">
//                     Instead of presenting the framework as a static set of
//                     principles, the product uses it as a structure for
//                     decision-making. The assessment becomes the starting point
//                     for relevant learning, recommendations, opportunities and
//                     services.
//                   </p>
//                 </div>

//                 {/* =======================================================
//             04 — MY ROLE
//         ======================================================= */}

//                 <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5">
//                   <div className="flex items-center gap-3">
//                     <span className="font-mono text-sm text-primary">04</span>

//                     <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
//                       My role
//                     </p>
//                   </div>

//                   <p className="mt-3 text-md leading-relaxed text-foreground/80 md:text-base">
//                     I worked across product direction, UX/UI, platform
//                     development, technical direction and team coordination —
//                     helping translate the framework into a digital product
//                     experience.
//                   </p>
//                 </div>

//                 {/* =======================================================
//             TECHNOLOGY
//         ======================================================= */}

//                 <div className="mt-7">
//                   <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
//                     Built with
//                   </p>

//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {featuredProject.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="
//                   rounded-full
//                   bg-muted
//                   px-3
//                   py-1.5
//                   text-sm
//                   text-muted-foreground
//                 "
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* =======================================================
//             CTA
//         ======================================================= */}

//                 <div className="mt-8">
//                   <a
//                     href={featuredProject.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//               inline-flex
//               items-center
//               gap-2
//               text-md
//               font-semibold
//               text-primary
//               transition-all
//               hover:gap-3
//             "
//                   >
//                     Explore project
//                     <ArrowUpRight className="h-4 w-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* =========================================================
//           RIGHT — PRODUCT STORY / FRAMEWORK
//       ========================================================= */}

//               <div
//                 className="
//           relative
//           overflow-hidden
//           border-t
//           border-border
//           bg-primary/[0.035]
//           lg:border-l
//           lg:border-t-0
//         "
//               >
//                 {/* Background grid */}

//                 <div
//                   className="
//             absolute
//             inset-0
//             opacity-[0.18]
//             bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
//             bg-[size:32px_32px]
//           "
//                 />

//                 {/* Soft glow */}

//                 <div
//                   className="
//             absolute
//             -right-24
//             -top-24
//             h-72
//             w-72
//             rounded-full
//             bg-primary/10
//             blur-3xl
//           "
//                 />

//                 <div className="relative z-10 p-7 md:p-9 lg:p-10">
//                   {/* =====================================================
//               PRODUCT STORY HEADER
//           ===================================================== */}

//                   <div>
//                     <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
//                       The product journey
//                     </p>

//                     <h4 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
//                       Know where you are. Know what comes next.
//                     </h4>

//                     <p className="mt-2 max-w-md text-md leading-relaxed text-muted-foreground">
//                       The Future Farms Framework becomes a practical pathway for
//                       understanding a farm and identifying its next
//                       opportunities for growth.
//                     </p>
//                   </div>

//                   {/* =====================================================
//               STEP 01 — ASSESS
//           ===================================================== */}

//                   <div className="mt-8">
//                     <div className="flex items-start gap-3">
//                       <div
//                         className="
//                   flex
//                   h-8
//                   w-8
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-primary
//                   text-sm
//                   font-semibold
//                   text-primary-foreground
//                 "
//                       >
//                         01
//                       </div>

//                       <div>
//                         <p className="text-md font-semibold">Assess the farm</p>

//                         <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
//                           Farmers assess themselves across the eight positions
//                           of the Future Farms Framework.
//                         </p>
//                       </div>
//                     </div>

//                     {/* =================================================
//                 EIGHT POSITIONS
//             ================================================= */}

//                     <div className="mt-4 grid grid-cols-2 gap-2 pl-11">
//                       {[
//                         {
//                           number: "01",
//                           title: "Digital Transformation",
//                         },
//                         {
//                           number: "02",
//                           title: "Clean Energy",
//                         },
//                         {
//                           number: "03",
//                           title: "Standards & Compliance",
//                         },
//                         {
//                           number: "04",
//                           title: "Heritage & Innovation",
//                         },
//                         {
//                           number: "05",
//                           title: "Farm Economics",
//                         },
//                         {
//                           number: "06",
//                           title: "Workforce Development",
//                         },
//                         {
//                           number: "07",
//                           title: "Market Access",
//                         },
//                         {
//                           number: "08",
//                           title: "Sector Reimagination",
//                         },
//                       ].map((position) => (
//                         <div
//                           key={position.number}
//                           className="
//                     rounded-lg
//                     border
//                     border-border
//                     bg-card/80
//                     px-3
//                     py-2.5
//                   "
//                         >
//                           <div className="flex items-start gap-2">
//                             <span className="mt-0.5 font-mono text-[10px] text-primary/70">
//                               {position.number}
//                             </span>

//                             <span className="text-[10px] font-medium leading-snug text-muted-foreground">
//                               {position.title}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Connector */}

//                   <div className="ml-[15px] h-7 w-px bg-primary/20" />

//                   {/* =====================================================
//               STEP 02 — UNDERSTAND POSITION
//           ===================================================== */}

//                   <div className="flex items-start gap-3">
//                     <div
//                       className="
//                 flex
//                 h-8
//                 w-8
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-primary/30
//                 bg-card
//                 text-sm
//                 font-semibold
//                 text-primary
//               "
//                     >
//                       02
//                     </div>

//                     <div className="flex-1">
//                       <p className="text-md font-semibold">
//                         Understand where the farm stands
//                       </p>

//                       <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
//                         The assessment creates a clearer picture of the farm’s
//                         current capabilities, strengths and areas that need
//                         attention.
//                       </p>

//                       {/* Position indicator */}

//                       <div
//                         className="
//                   mt-4
//                   rounded-xl
//                   border
//                   border-border
//                   bg-card
//                   p-4
//                 "
//                       >
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
//                               Farm profile
//                             </p>

//                             <p className="mt-1 text-sm font-semibold">
//                               Current position
//                             </p>
//                           </div>

//                           <span
//                             className="
//                       rounded-full
//                       bg-primary/10
//                       px-2.5
//                       py-1
//                       text-[10px]
//                       font-medium
//                       text-primary
//                     "
//                           >
//                             Assessment
//                           </span>
//                         </div>

//                         {/* Example capability line */}

//                         <div className="mt-4 space-y-2">
//                           <div className="flex items-center justify-between">
//                             <span className="text-[10px] text-muted-foreground">
//                               Current capability
//                             </span>

//                             <span className="text-[10px] font-medium text-foreground">
//                               Starting point
//                             </span>
//                           </div>

//                           <div className="h-1.5 overflow-hidden rounded-full bg-muted">
//                             <div
//                               className="
//                         h-full
//                         w-[58%]
//                         rounded-full
//                         bg-primary
//                       "
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Connector */}

//                   <div className="ml-[15px] h-7 w-px bg-primary/20" />

//                   {/* =====================================================
//               STEP 03 — PATHWAY
//           ===================================================== */}

//                   <div className="flex items-start gap-3">
//                     <div
//                       className="
//                 flex
//                 h-8
//                 w-8
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-primary/30
//                 bg-card
//                 text-sm
//                 font-semibold
//                 text-primary
//               "
//                     >
//                       03
//                     </div>

//                     <div className="flex-1">
//                       <p className="text-md font-semibold">
//                         Turn insight into a pathway
//                       </p>

//                       <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
//                         Where a farmer lies across the framework helps shape
//                         what they can learn, explore and act on next.
//                       </p>

//                       {/* =================================================
//                   FOUR PRODUCT OUTCOMES
//               ================================================= */}

//                       <div className="mt-4 grid grid-cols-2 gap-2">
//                         {/* Learning */}

//                         <div
//                           className="
//                     rounded-lg
//                     border
//                     border-border
//                     bg-card
//                     p-3
//                     transition-colors
//                     hover:border-primary/30
//                   "
//                         >
//                           <p className="text-sm font-semibold">Learn</p>

//                           <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
//                             Relevant knowledge and practical resources.
//                           </p>
//                         </div>

//                         {/* Recommendations */}

//                         <div
//                           className="
//                     rounded-lg
//                     border
//                     border-border
//                     bg-card
//                     p-3
//                     transition-colors
//                     hover:border-primary/30
//                   "
//                         >
//                           <p className="text-sm font-semibold">
//                             Recommendations
//                           </p>

//                           <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
//                             Practical next steps based on identified needs.
//                           </p>
//                         </div>

//                         {/* Opportunities */}

//                         <div
//                           className="
//                     rounded-lg
//                     border
//                     border-border
//                     bg-card
//                     p-3
//                     transition-colors
//                     hover:border-primary/30
//                   "
//                         >
//                           <p className="text-sm font-semibold">Opportunities</p>

//                           <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
//                             Relevant opportunities connected to the farm’s
//                             direction.
//                           </p>
//                         </div>

//                         {/* Services */}

//                         <div
//                           className="
//                     rounded-lg
//                     border
//                     border-border
//                     bg-card
//                     p-3
//                     transition-colors
//                     hover:border-primary/30
//                   "
//                         >
//                           <p className="text-sm font-semibold">Services</p>

//                           <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
//                             Access services that can help turn plans into
//                             action.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Connector */}

//                   <div className="ml-[15px] h-7 w-px bg-primary/20" />

//                   {/* =====================================================
//               STEP 04 — PROGRESS
//           ===================================================== */}

//                   <div className="flex items-start gap-3">
//                     <div
//                       className="
//                 flex
//                 h-8
//                 w-8
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-foreground
//                 text-sm
//                 font-semibold
//                 text-background
//               "
//                     >
//                       04
//                     </div>

//                     <div>
//                       <p className="text-md font-semibold">
//                         Act, verify & advance
//                       </p>

//                       <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
//                         The goal is not simply to complete an assessment. It is
//                         to help farms move from understanding their position to
//                         taking practical steps forward.
//                       </p>
//                     </div>
//                   </div>

//                   {/* =====================================================
//               PRODUCT PRINCIPLE
//           ===================================================== */}

//                   <div className="mt-8 border-t border-border pt-5">
//                     <p className="text-sm leading-relaxed text-muted-foreground">
//                       <span className="font-medium text-foreground">
//                         The assessment is the starting point.
//                       </span>{" "}
//                       The product connects that insight to the knowledge,
//                       recommendations, opportunities and services a farm can use
//                       to keep moving forward.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         )}
//         {/* =========================
//             OTHER WORK
//         ========================== */}
//         <div className="mt-20">
//           <div className="flex items-end justify-between gap-6 mb-8">
//             <div>
//               <p className="text-md font-medium uppercase tracking-[0.2em] text-primary">
//                 More Work
//               </p>

//               <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
//                 Other things I’ve built.
//               </h3>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-5">
//             {otherProjects.map((project, index) => (
//               <article
//                 key={project.title}
//                 className="
//                   group
//                   flex
//                   flex-col
//                   p-6
//                   md:p-7
//                   rounded-2xl
//                   border
//                   border-border
//                   bg-card
//                   hover:border-primary/40
//                   hover:-translate-y-1
//                   transition-all
//                   duration-300
//                 "
//               >
                
//                 {/* title */}
//                 <h3 className="mt-2 text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>

                

//                 {/* description */}
//                 <p className="mt-4 text-md md:text-base text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* bottom */}
//                 <div className="mt-7">
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="
//                           rounded-full
//                           bg-muted
//                           px-3
//                           py-1
//                           text-sm
//                           text-muted-foreground
//                         "
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center gap-5 mt-6">
//                     {project.live && (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="
//                           inline-flex
//                           items-center
//                           gap-2
//                           text-md
//                           font-medium
//                           hover:text-primary
//                           transition-colors
//                         "
//                       >
//                         View project
//                         <ExternalLink className="h-3.5 w-3.5" />
//                       </a>
//                     )}

//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="
//                           inline-flex
//                           items-center
//                           gap-2
//                           text-md
//                           text-muted-foreground
//                           hover:text-foreground
//                           transition-colors
//                         "
//                       >
//                         <Github className="h-4 w-4" />
//                         Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* =========================
//             CLOSING
//         ========================== */}
//         <div className="mt-20 pt-12 border-t border-border">
//           <p className="text-lg md:text-xl text-muted-foreground">
//             Good products start with good questions.
//           </p>

//           <p className="mt-2 text-xl md:text-2xl font-semibold">
//             I’m always looking for the next{" "}
//             <span className="text-primary">idea worth building.</span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Compass,
  Lightbulb,
  Users,
  RefreshCw,
} from "lucide-react";

const projects = [
  
  {
    title: "Future Farms",
    category: "Web Experience",
    description:
      "A digital experience communicating Future Farms' vision for transforming agriculture through technology, data, and future-ready farm systems.",
    contribution:
      "Website development, UI implementation, responsive design, and digital experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.futurefarms.africa/",
  },

  {
    title: "Arbarne Group",
    category: "Corporate Digital Experience",
    description:
      "A modern digital platform bringing together work across agriculture, sustainability, technology, and impact.",
    contribution:
      "Frontend development, interface implementation, responsive experience, and website structure.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.arbarnegroup.com/",
  },

  {
    title: "Smart Water Solutions",
    category: "Digital Experience",
    description:
      "A digital experience making smart water ATMs and metering solutions easier for customers and partners to understand.",
    contribution:
      "UI/UX, frontend development, responsive design, and digital experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/khayanga/Ubuntu",
    live: "https://waterhub.africa/",
  },

  {
    title: "Dryland Soils",
    category: "Web Experience",
    description:
      "A focused digital platform communicating work around dryland soil health and sustainable land management.",
    contribution:
      "Website development, UI implementation, responsive design, and content structure.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://drylandsoils.vercel.app/",
  },

  {
    title: "Aysha Kiuma Jisafi",
    category: "Digital Experience",
    description:
      "A clear and engaging online presence designed to make the organisation's work and services more accessible to its audience.",
    contribution:
      "UI implementation, frontend development, responsive design, and digital experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.ayshakiumajisafi.co.ke/",
  },

  {
    title: "Untitled Gallery",
    category: "Digital Product · E-commerce",
    description:
      "A modern art storefront built around discovery, visual storytelling, and a simple path from exploring artwork to purchase.",
    contribution:
      "Frontend development, UI/UX implementation, API integration, and responsive experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/khayanga/Untitled-gallery",
  },
];

export default function Projects() {
  
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden  px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================================================
            SECTION INTRO
        ========================================================= */}

        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Building products,
            <span className="text-primary"> not just features.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-primary" />

          <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A selection of products and digital experiences where I have
            worked across{" "}
            <span className="font-medium text-foreground">
              product thinking, user experience, technology, and execution.
            </span>
          </p>
        </div>

        

        


        <div className="mt-24">

         

          <div className="grid gap-5 md:grid-cols-2">

            {otherProjects.map((project, index) => (
              <article
                key={project.title}
                className="
                  group
                  flex
                  min-h-[300px]
                  flex-col
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-7
                  m-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                "
              >

                

                <h3 className="mt-2 text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                

                <div className="mt-3 ">

                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="mt-6 flex items-center gap-5">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
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
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}

                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="mt-24 overflow-hidden rounded-2xl border border-border bg-card">

          <div className="relative px-7 py-12 md:px-10 md:py-14">

            {/* subtle glow */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What's next
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Have a problem worth solving?
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I'm interested in working on products where understanding the
                problem, shaping the experience, and building the solution all
                matter.
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
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition-colors
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