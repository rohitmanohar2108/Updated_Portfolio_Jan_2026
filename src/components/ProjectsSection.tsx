import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Folder } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AirWise – Airline Reservation System",
    description: "A scalable full-stack airline reservation system enabling secure flight search, booking management, and transaction history tracking. Features 3NF MySQL database, JWT authentication with bcrypt password hashing.",
    tags: ["MySQL", "React.js", "Node.js", "Express", "Aiven Cloud"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/rohitmanohar2108/Airline_Reservation_System",
    live: "#",
    featured: true,
  },
  {
    title: "Imagery - Image Super Resolution",
    description: "Web application using Flask with integrated pipeline for low-light image enhancement and super-resolution. Built CNN-based self-supervised model using Zero-DCE and GANs.",
    tags: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/rohitmanohar2108/image-resolution",
    live: "#",
    featured: true,
  },
  {
    title: "Scalable - Real-Time Chat Application",
    description: "Scalable real-time chat app with Node.js, TypeScript, and Next.js using Socket.IO in a Turborepo monorepo. Achieved sub-100ms message latency with Redis Pub/Sub and PostgreSQL on Aiven Cloud.",
    tags: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "Next.js"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "https://github.com/rohitmanohar2108/Real_Time_Chat_Application",
    live: "#",
    featured: false,
  },
  {
    title: "Real-Time Crypto Execution Cost Simulator",
    description: "Low-latency execution cost simulator consuming OKX L2 orderbook streams at 5–20K msgs/sec with ~1ms latency. Modeled slippage using Quantile Regression and Almgren–Chriss model.",
    tags: ["Python", "WebSockets", "Asyncio", "scikit-learn"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/rohitmanohar2108/Crypto-Trade-Simulator",
    live: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10 bg-secondary" />
     
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16 max-w-2xl"
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
            <Folder size={14} className="text-accent" />
            <span className="text-xs font-mono text-muted-foreground">FEATURED WORK</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Projects I've
            <span className="block text-accent">Built</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects that showcase my expertise in building scalable, user-centric applications.
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative border rounded-br-none rounded-tl-none rounded-tr-[10%] rounded-bl-[10%] bg-card overflow-hidden ${
                project.featured ? 'lg:row-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Floating Action Buttons */}
                <motion.div 
                  className="absolute top-4 right-4 flex gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.github}
                    className="p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </motion.div>

                {/* Project Number */}
                <div className="absolute top-4 left-4">
                  <span className="text-6xl font-bold text-foreground/10 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    className="p-2 rounded-full bg-secondary"
                    animate={{
                      rotate: hoveredIndex === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={16} className="text-muted-foreground" />
                  </motion.div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono bg-secondary/80 hover:bg-secondary transition text-secondary-foreground rounded-lg border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-border rounded-full text-sm font-medium hover:border-accent hover:bg-accent/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects</span>
            <div className="p-1.5 rounded-full bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-colors group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
