import { TechBadge } from "./TechBadge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Databases",
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "PostgreSQL", "TensorFlow", "Keras"],
  },
  {
    title: "Tools & Cloud",
    skills: ["VS Code", "Postman", "Aiven Cloud", "Git"],
  },
  {
    title: "Relevant Courses",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Object-Oriented Programming"],
  },
];

export const Skills = () => {
  return (
    <section className="py-16 border-t border-border">
      <h2 className="font-mono font-bold text-2xl md:text-3xl mb-8">
        Technical Skills
      </h2>
      
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-mono text-sm font-semibold text-muted-foreground mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
