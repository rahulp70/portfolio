import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "C++", "SQL"],
    "Web Technologies": [
      "React",
      "Angular",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Bootstrap",
    ],
    "Frameworks & Libraries": [
      "Spring Boot",
      "Flask",
      "Laravel",
      "Flutter",
      "JSP",
      "Servlets",
    ],
    Databases: ["MySQL", "MongoDB", "Oracle", "PostgreSQL", "Firebase"],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "Postman",
      "GitHub Actions",
      "Google Cloud",
      "XAMPP",
      "MySQL Workbench",
    ],
    "Concepts & Methodologies": [
      "Microservices",
      "API Development",
      "RESTful APIs",
      "JDBC",
      "JPA",
      "JWT Authentication",
    ],
  };

  const experience = [
    {
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      period: "Feb 2025 - Present",
      description:
        "Developed a full-stack Parcel Management System using Spring Boot, Angular, and JPA, reducing manual tracking efforts by 35% and improving delivery accuracy by 28%. Optimized logistics operations with analytics-driven route planning and role-based dashboard, cutting high-priority delivery times by 22%.",
    },
    {
      title: "Software Developer Intern",
      company: "NZ Solutions",
      period: "Nov 2024 - Feb 2025",
      description:
        "Developed 3 full-stack projects: Built a PHP/MySQL web app with Bootstrap/Tailwind, a React & Spring Boot application with secure authentication, and a Flutter/Dart mobile app with API integration and state management. Enhanced functionality and UX across all projects by implementing CRUD operations, modular components, responsive design, and smooth navigation flows.",
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate full-stack engineer with experience in creating
                digital solutions that make a difference. Currently working as
                Assistant System Engineer at Tata Consultancy Services, I
                specialize in modern web technologies and love turning complex
                problems into simple, elegant solutions.
              </p>
              <div className="flex flex-col space-y-4 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>B.Tech Computer Science, IIIT Pune (CGPA: 7.3)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Assistant System Engineer at TCS</span>
                </div>
              </div>
            </div>
            <div className="lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F5d61a548d29d44df8064b37cb5b11341%2Fd670e19f86e748fdb7a616ab3f7b673d?format=webp&width=800"
                      alt="Rahul Padole"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
              to build modern, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through different roles and companies, each
              contributing to my growth as a developer.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Beyond Code
            </h2>
            <p className="text-xl text-muted-foreground">
              When I'm not coding, here's what I enjoy doing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Hackathons & Competitions
                </h3>
                <p className="text-muted-foreground text-sm">
                  Participated in 5+ hackathons and coding competitions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Developer Communities
                </h3>
                <p className="text-muted-foreground text-sm">
                  Active member of Developer Student Clubs and tech communities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Always exploring new technologies and earning certifications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'd love to hear about your project or just have a chat about
            technology and development. Feel free to reach out!
          </p>
          <Button size="lg" asChild>
            <a href="../#contact">Get In Touch</a>
          </Button>
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
