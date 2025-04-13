
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/20 z-0" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
              Computer Science Graduate
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Michael Kagiaogloy</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              A Computer Science graduate passionate about embedded systems, software development, and cloud-based solutions.
            </h2>
            
            <p className="text-lg font-mono text-accent">
              Turning Ideas into Code | IoT, C++, Python, FastAPI
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a 
                  href="https://github.com/mKagiaogloy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a 
                  href="https://www.linkedin.com/in/michael-kagiaoglou" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/10 to-accent/20 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary to-accent opacity-80 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
