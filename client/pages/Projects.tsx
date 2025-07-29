import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "ParcelTrack",
      description:
        "Engineered a full-stack parcel management system using Spring Boot (Microservices) and Angular that automated 35% of manual tracking processes. Designed role-based dashboards with JWT authentication to secure sensitive data, while optimizing REST APIs to achieve 99.9% uptime.",
      tech: ["Spring Boot", "Angular", "WebSockets", "JPA", "JWT"],
      github: "https://github.com/rahulp70/ParcelManagement",
      live: "#",
      featured: true,
    },
    {
      title: "LeadTracker",
      description:
        "Developed a real-time lead tracking platform using MongoDB, Express, React, and Node.js that streamlined client data management for sales teams. Implemented JWT authentication and role-based dashboards, improving data security and reducing unauthorized access by 100%.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/rahulp70/LeadTraker",
      live: "#",
      featured: true,
    },
    {
      title: "MedTech",
      description:
        "Developed a full-stack healthcare platform using MongoDB, Express, React, and Node.js with JWT authentication. Implemented role-based dashboards for doctors, pharmacies, and patients with real-time prescription tracking, medicine inventory management, and patient history modules.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Mongoose"],
      github:
        "https://medtech.lovable.app",
      live: "#",
      featured: true,
    },
    {
      title: "PHP/MySQL Web Application",
      description:
        "Built a full-stack web application during internship at NZ Solutions using PHP and MySQL with Bootstrap/Tailwind for responsive design and enhanced user experience.",
      tech: ["PHP", "MySQL", "Bootstrap", "Tailwind CSS"],
      github: "client-project",
      live: "client-project",
      featured: false,
    },
    {
      title: "React & Spring Boot Application",
      description:
        "Developed a secure full-stack application with React frontend and Spring Boot backend featuring JWT authentication and comprehensive CRUD operations.",
      tech: ["React", "Spring Boot", "JWT", "MySQL"],
      github: "client-project",
      live: "client-project",
      featured: false,
    },
    {
      title: "Flutter Mobile Application",
      description:
        "Created a cross-platform mobile application using Flutter/Dart with API integration, state management, and smooth navigation flows.",
      tech: ["Flutter", "Dart", "API Integration", "State Management"],
      github: "client-project",
      live: "client-project",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-5xl font-bold text-foreground">
              Rahul Padole
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing different
            technologies and problem-solving approaches. Each project represents
            a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    {project.github === "client-project" ? (
                      <Button variant="outline" size="sm" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Client Project
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live === "client-project" ? (
                      <Button size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Confidential
                      </Button>
                    ) : (
                      <Button size="sm" >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>

                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together.
          </p>
          {/* <Button size="lg" asChild>
            <a href="mailto:rahulpadole000@gmail.com">Get In Touch</a>
          </Button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Rahul Padole. Built with React, TypeScript, and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
