import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiReact as SiReactNative,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiGraphql,
  SiRedis,
  SiElasticsearch,
  SiFigma,
  SiJest,
  SiCypress,
  SiSocketdotio,
  SiAuth0,
  SiThealgorithms,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiGithub,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Cpu } from "lucide-react";

const skills = [
  {
    category: "Languages",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Frameworks & Databases",
    gradient: "from-green-500 to-emerald-500",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#00599C" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "Tools & Cloud",
    gradient: "from-purple-500 to-pink-500",
    items: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Aiven Cloud", icon: SiPostgresql, color: "#E85B6D" }, // closest visual match
    ],
  },
  {
    category: "DevOps",
    gradient: "from-orange-500 to-red-500",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ],
  },
];

const additionalSkills = [
  {
    name: "Data Structures & Algorithms",
    icon: SiThealgorithms,
    color: "#E15093",
  },
  { name: "Operating Systems", icon: SiRedis, color: "#DC382D" },
  {
    name: "Object-Oriented Programming",
    icon: SiElasticsearch,
    color: "#005571",
  },
  { name: "Database management system", icon: SiFigma, color: "#F24E1E" },
  { name: "Computer Networks", icon: SiJest, color: "#C21325" },
  { name: "Software Engineering", icon: SiCypress, color: "#17202C" },
  { name: "Artificial Intelligence", icon: SiSocketdotio, color: "#010101" },
  { name: "Wireless Network", icon: SiAuth0, color: "#EB5424" },
  { name: "Network Security", icon: SiAuth0, color: "#EB5424" },
  { name: "Cloud Computing", icon: SiAuth0, color: "#EB5424" },
  { name: "Cloud Security", icon: SiAuth0, color: "#EB5424" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-2"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10 bg-secondary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/0 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Cpu size={14} className="text-accent" />
            <span className="text-xs font-mono text-muted-foreground">
              TECH STACK
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to build better
            solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group p-6 bg-card border rounded-br-none rounded-tl-none rounded-tr-[10%] rounded-bl-[10%]  transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground ">
                    {category.category}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {category.items.length} items
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 bg-secondary/50 rounded-3xl border border-border/50 hover:border-accent/50 hover:bg-secondary transition-all cursor-default"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <div
                      className="p-2 rounded-full bg-background border border-border"
                      style={{ color: skill.color }}
                    >
                      <skill.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-6 font-mono">
            // Relevant Courses I Took
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full hover:border-accent/50 hover:bg-secondary/50 transition-all cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
