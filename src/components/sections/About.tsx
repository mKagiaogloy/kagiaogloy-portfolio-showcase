
import { Code, Database, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a Computer Science graduate with a strong focus on embedded systems and software development. 
              Currently pursuing a Master's in Embedded Systems, I'm passionate about bridging the gap between 
              hardware and software, with particular interest in IoT applications, low-level programming, 
              and cloud-based solutions.
            </p>
            
            <p className="text-lg">
              My academic and project work has given me hands-on experience with C/C++, Python, and various 
              microcontrollers. I'm particularly excited about the potential of AI integration within embedded 
              systems and hardware-software optimization techniques.
            </p>
            
            <p className="text-lg">
              I thrive in environments that challenge my problem-solving skills and allow me to continuously 
              learn and grow as a developer.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm card-hover">
                <Code className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Software Development</h3>
                  <p className="text-muted-foreground">Building robust software solutions with C/C++ and Python</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm card-hover">
                <Server className="h-10 w-10 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Embedded Systems</h3>
                  <p className="text-muted-foreground">Creating efficient IoT solutions with Arduino and ESP32</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm card-hover">
                <Database className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Cloud Solutions</h3>
                  <p className="text-muted-foreground">Developing API-driven applications with FastAPI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
