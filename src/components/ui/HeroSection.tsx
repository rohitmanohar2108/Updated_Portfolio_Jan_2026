import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serviceLabels = [
  { text: "WEB & APP\nDEVELOPMENT", position: "left-top" },
  { text: "CUSTOM AI SOLUTIONS\n& INTEGRATION", position: "right-top" },
  { text: "SYSTEM\nINTEGRATION & CLOUD", position: "left-bottom" },
  { text: "MAINTENANCE\n& SECURITY", position: "right-bottom" },
];

export function HeroSection() {
  return (
    <section id="home" className="hidden sm:block min-h-screen font-mono flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 dotted-bg opacity-30" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Service Labels - Desktop Only */}
        <div className="hidden lg:block">
          {/* Top Left */}
          <motion.div
            className="absolute left-0 top-32 text-xs font-mono text-muted-foreground whitespace-pre-line text-right"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            WEB & APP{"\n"}DEVELOPMENT
          </motion.div>
          
          {/* Top Right */}
          <motion.div
            className="absolute right-0 top-24 text-xs font-mono text-muted-foreground whitespace-pre-line"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            CUSTOM AI SOLUTIONS{"\n"}& INTEGRATION
          </motion.div>
          
          {/* Bottom Left */}
          <motion.div
            className="absolute left-0 bottom-32 text-xs font-mono text-muted-foreground whitespace-pre-line text-right"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            SYSTEM{"\n"}INTEGRATION & CLOUD
          </motion.div>
          
          {/* Bottom Right */}
          <motion.div
            className="absolute right-0 bottom-40 text-xs font-mono text-muted-foreground whitespace-pre-line"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            MAINTENANCE{"\n"}& SECURITY
          </motion.div>
        </div>

        {/* Main Typography */}
        <div className="text-center">
          {/* Line 1: TRANS ★ FORMING */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-muted-foreground/40 tracking-tight">
              TRANS
            </span>
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent flex items-center justify-center"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl text-accent-foreground">✳</span>
            </motion.div>
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-muted-foreground/40 tracking-tight">
              FORMING
            </span>
          </motion.div>

          {/* Line 2: IDEAS ◆ INTO */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-accent tracking-tight">
              IDEAS
            </span>
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-full" />
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-full" />
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-full" />
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-full" />
              </div>
            </motion.div>
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-muted-foreground/40 tracking-tight">
              INTO
            </span>
            
            {/* CTA Button - Desktop */}
            <motion.a
              href="#contact"
              className="hidden lg:flex ml-8 px-6 py-3 bg-primary text-primary-foreground rounded-full items-center gap-3 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Work with me
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Line 3: EXPERIENCES with arrow icon */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-accent tracking-tight">
              EXPERI
            </span>
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-foreground" />
            </motion.div>
            <span className="text-4xl sm:text-6xl lg:text-8xl font-bold text-muted-foreground/40 tracking-tight">
              ENCES
            </span>
          </motion.div>

          {/* Mobile CTA */}
          <motion.a
            href="#contact"
            className="lg:hidden inline-flex mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full items-center gap-3 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Work with me
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
