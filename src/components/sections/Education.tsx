
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educations = [
    {
      degree: "MSc in Embedded Systems",
      institution: "University of Ioannina",
      period: "In Progress - Expected 2025",
      description: "Focusing on advanced embedded systems design, real-time operating systems, and hardware-software integration.",
    },
    {
      degree: "BSc in Computer Science and Telecommunications",
      institution: "University of Ioannina",
      period: "Expected February 2025",
      description: "Core studies in computer systems architecture, software development, networking, and data structures.",
    },
  ];

  const certifications = [
    {
      name: "RWPC™ – Remote Work Professional",
      issuer: "CERTIPROF",
    },
    {
      name: "SFPC – Scrum Foundation",
      issuer: "CERTIPROF",
    },
    {
      name: "CAPC™ – Cybersecurity Awareness",
      issuer: "CERTIPROF",
    },
    {
      name: "TOEIC – English Communication",
      issuer: "ETS",
    },
    {
      name: "Generative AI",
      issuer: "LinkedIn Learning",
    },
  ];

  return (
    <section id="education" className="bg-secondary/30 py-20">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {educations.map((edu) => (
                <div key={edu.degree} className="bg-card p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2" />
              Certifications
            </h3>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="pb-4 border-b last:border-0 last:pb-0">
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
