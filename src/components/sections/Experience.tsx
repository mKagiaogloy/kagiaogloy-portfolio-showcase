
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Infrastructure Intern",
      company: "Drama Municipal Organization",
      location: "Drama, Greece",
      period: "2024",
      description: [
        "Assisted with Cisco network infrastructure setup and maintenance",
        "Contributed to Cisco Unified Contact Center implementation",
        "Provided technical support for 20+ workstations",
        "Documented network topology and system configurations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="timeline-item">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold">{exp.title}</h3>
              </div>
              
              <p className="text-lg text-primary mb-1">
                {exp.company} · {exp.location}
              </p>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                {exp.period}
              </div>
              
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
