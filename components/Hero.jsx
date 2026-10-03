// "use client";

// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

// const Hero = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}

//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
//           {/* Grid */}
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
//               backgroundSize: "50px 50px",
//               animation: "grid-move 30s linear infinite",
//             }}
//           />

//           {/* Glow accents */}
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

//           <div
//             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
//             style={{ animationDelay: "1s" }}
//           />
//         </div>
//       </div>

//       <div className="container relative z-10 px-6 py-32 mx-auto animate-fade-in">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
//             {" "}
//             Ideas Worth{" "}
//             <span className="block text-primary"> Building. </span>{" "}
//           </h1>

          
//           {/* Hook */}
//           <p className="mt-8 text-2xl md:text-3xl font-medium tracking-tight">
//             I turn real problems into digital products.
//           </p>

//           {/* Supporting copy */}
//           <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             I’m{" "}
//             <span className="text-foreground font-medium">
//               Virgil Khayanga
//             </span>
//             , a Product & Technology professional with a background in
//             software development and UI/UX bringing ideas from{" "}
//             <span className="text-foreground">
//               concept to experience to execution.
//             </span>
//           </p>

//           {/* CTA */}
//           <div className="flex flex-wrap gap-4 justify-center mt-10 mb-20">
//             <Button
//               variant="hero"
//               size="lg"
//               href="#projects"
//               onClick={() => scrollToSection("projects")}
//               className="px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
//             >
//               Explore My Work
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               href="#contact"
//               onClick={() => scrollToSection("contact")}
//               className="px-6 py-3 rounded-lg"
//             >
//               Let’s Talk
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-3 justify-center mt-10">
//             <a
//               href="https://github.com/khayanga"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
//             >
//               <Github className="h-5 w-5" />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/virgil-khayanga-113b18262/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>

//             <a
//               href="mailto:devkhayanga@gmail.com"
//               aria-label="Email"
//               className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Gradient overlay at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
//     </section>
//   );
// };

// export default Hero;



"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
          {/* Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "grid-move 30s linear infinite",
            }}
          />

          {/* Glow accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      <div className="container relative z-10 px-6 py-32 mx-auto animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Ideas Worth{" "}
            <span className="block text-primary"> Building. </span>
          </h1>

          {/* Hook */}
          <p className="mt-8 text-2xl md:text-3xl font-medium tracking-tight">
            I turn real problems into digital products.
          </p>

          {/* Supporting copy */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I’m{" "}
            <span className="text-foreground font-medium">
              Virgil Khayanga
            </span>
            , a Product & Technology professional with a background in
            software development and UI/UX bringing ideas from{" "}
            <span className="text-foreground">
              concept to experience to execution.
            </span>
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center mt-10 mb-20">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <a href="/virgil-khayanga-cv.pdf" download="Virgil_Khayanga_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center mt-10">
            <a
              href="https://github.com/khayanga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/virgil-khayanga-113b18262/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=devkhayanga@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;