
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Horse Racing Betting Game",
      description:
        "A console-based simulation game that allows users to bet on virtual horse races with fully implemented betting mechanics and race algorithms.",
      technologies: ["C++", "Game Logic", "OOP"],
      githubLink: "https://github.com/mKagiaogloy/horse-racing-game",
    },
    {
      title: "Student Management System",
      description:
        "A comprehensive application for managing student records, courses, and grades with a graphical user interface and SQLite database backend.",
      technologies: ["C++", "SQLite", "GUI"],
      githubLink: "https://github.com/mKagiaogloy/student-management",
    },
    {
      title: "Vending Machine Simulator",
      description:
        "An object-oriented simulation of a vending machine that handles product selection, payment processing, and inventory management.",
      technologies: ["C++", "OOP", "State Machines"],
      githubLink: "https://github.com/mKagiaogloy/vending-machine",
    },
    {
      title: "Social Media Content Generator",
      description:
        "Automated tool for generating and publishing social media content using FastAPI backend, video editing capabilities, and scheduling automation.",
      technologies: ["FastAPI", "MoviePy", "Python", "Automation"],
      githubLink: "https://github.com/mKagiaogloy/social-media-generator",
    },
  ];

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
