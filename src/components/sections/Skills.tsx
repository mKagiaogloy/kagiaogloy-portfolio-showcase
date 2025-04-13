
const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["C", "C++", "Python", "SQL (SQLite, MongoDB)"],
    },
    {
      name: "Web & API Development",
      skills: ["FastAPI", "Cloud-based apps", "RESTful APIs"],
    },
    {
      name: "Embedded Systems & IoT",
      skills: ["Arduino", "ESP32", "Microcontroller Programming"],
    },
    {
      name: "Tools",
      skills: ["Git", "Visual Studio", "VS Code", "Docker"],
    },
    {
      name: "Soft Skills",
      skills: ["Communication", "Critical Thinking", "Teamwork", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-card p-6 rounded-lg shadow-sm card-hover">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
