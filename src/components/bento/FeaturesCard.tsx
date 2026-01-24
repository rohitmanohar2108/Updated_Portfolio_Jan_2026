import { motion } from "framer-motion";

export function FeaturesCard() {
  const features = [
    "React & TypeScript",
    "Full-stack Development",
    "UI/UX Design",
    "API Integration",
  ];

  return (
    <motion.div
      className="bento-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-foreground">
        Full Featured
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Everything you need for modern development:
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={feature}
            className="text-sm text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
