"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";


export default function Contact() {
  const { toast } = useToast();
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL , {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out! Your message has been recorded.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Apps Script error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or reach me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let&apos;s connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-medium">Find me on</h4>
                <div className="space-y-3">
                  <a
                     href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=devkhayanga@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      devkhayanga@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://github.com/khayanga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/virgil-khayanga-113b18262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
