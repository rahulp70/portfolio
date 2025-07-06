import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Copy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    const email = "rahulpadole000@gmail.com";

    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
        return;
      }

      // Fallback to document.execCommand method
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        throw new Error("Copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Failed to copy email:", err);
      // Fallback: show an alert with the email
      alert(`Please copy this email manually: ${email}`);
    }
  };

  const skills = [
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "Spring Boot",
    "React",
    "Angular",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "RESTful API",
    "GenAI",
    "Docker",
    "Google Cloud",
  ];

  const projects = [
    {
      title: "ParcelTrack",
      description:
        "Full-stack parcel management system using Spring Boot (Microservices) and Angular that automated 35% of manual tracking processes with real-time tracking and JWT authentication.",
      tech: ["Spring Boot", "Angular", "WebSockets", "JPA"],
      github: "https://github.com/rahulp70/ParcelManagement",
      live: "#",
    },
    {
      title: "LeadTracker",
      description:
        "Real-time lead tracking platform using MERN stack that streamlined client data management for sales teams with JWT authentication and automated notifications.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/rahulp70/LeadTraker",
      live: "#",
    },
    {
      title: "MedTech",
      description:
        "Full-stack healthcare platform with role-based dashboards for doctors, pharmacies, and patients featuring real-time prescription tracking and inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github:
        "https://github.com/rahulp70/Medicine-Exchange-Transparency-Application",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-5xl font-bold text-foreground">
              Rahul Padole
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Link to="/projects">
                <Button variant="outline" size="sm">
                  All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Assistant System Engineer at TCS
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Full-Stack Engineer &
                <span className="text-primary"> Problem Solver</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Detail-oriented Fullstack Engineer with a focus on crafting
                user-friendly web applications. Strong problem-solving skills
                and a passion for creating efficient and scalable software
                solutions.
              </p>
              <div className="flex items-center space-x-4 mb-12">
                <Button size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/rahulp70"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-padole-6b9275209/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:rahulpadole000@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-primary/80 overflow-hidden flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F5d61a548d29d44df8064b37cb5b11341%2Fd670e19f86e748fdb7a616ab3f7b673d?format=webp&width=800"
                      alt="Rahul Padole"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate full-stack engineer with experience at TCS and NZ
              Solutions, building scalable web applications that solve
              real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Started my career as a Computer Science graduate from IIIT Pune
                with a passion for creating digital solutions. Currently working
                as Assistant System Engineer at Tata Consultancy Services,
                building scalable applications and optimizing user experiences.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in full-stack development with Spring Boot, React,
                Angular, and cloud technologies. Active in hackathons and
                Developer Student Clubs, I believe in writing clean,
                maintainable code and continuously learning new technologies.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Technologies I Love
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on
            interesting projects. Let's discuss how we can bring your ideas to
            life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="block h-full" onClick={copyEmail}>
              <Card className="border-border hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-6 text-center h-full flex flex-col justify-center min-h-[160px]">
                  {emailCopied ? (
                    <Copy className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  ) : (
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  )}
                  <h3 className="font-semibold text-foreground mb-2">
                    {emailCopied ? "Email Copied!" : "Email"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    rahulpadole000@gmail.com
                  </p>
                </CardContent>
              </Card>
            </div>

            <a
              href="https://www.linkedin.com/in/rahul-padole-6b9275209/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="border-border hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-6 text-center h-full flex flex-col justify-center min-h-[160px]">
                  <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    linkedin.com/in/rahul-padole-6b9275209/
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://github.com/rahulp70"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="border-border hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-6 text-center h-full flex flex-col justify-center min-h-[160px]">
                  <Github className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                  <p className="text-muted-foreground text-sm">
                    github.com/rahulp70
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* <Button size="lg" asChild>
            <a href="mailto:rahulpadole000@gmail.com">Send Me an Email</a>
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
