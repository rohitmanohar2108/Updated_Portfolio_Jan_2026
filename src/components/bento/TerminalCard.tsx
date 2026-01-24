import { motion } from "framer-motion";

export function TerminalCard() {
  return (
    <motion.div
      className="bento-card col-span-1 row-span-2 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-foreground">
        Simple and Powerful
      </h3>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        From concept to production, prototype, iterate, and deploy your projects with ease.
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        Getting started is as easy as npm install...
      </p>

      {/* Terminal Window */}
      <div className="bg-primary rounded-lg overflow-hidden mb-6 flex-shrink-0">
        <div className="terminal-header px-4 pt-3">
          <span className="terminal-dot bg-red-500" />
          <span className="terminal-dot bg-yellow-500" />
          <span className="terminal-dot bg-green-500" />
        </div>
        <div className="px-4 pb-4 font-mono text-sm text-primary-foreground">
          <span className="text-muted-foreground">&gt;</span> npm install portfolio
          <div className="w-full h-1 bg-muted/20 rounded mt-3 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>
      </div>

      {/* Code Preview */}
      <div className="font-mono text-xs text-foreground flex-1 space-y-1 bg-secondary/50 rounded-lg p-4">
        <p className="text-muted-foreground">import portfolio</p>
        <p className="mt-2">
          <span className="text-foreground">client</span> = portfolio.
          <span className="text-foreground">Client</span>()
        </p>
        <p className="mt-2">
          <span className="text-foreground">p</span> = client.
          <span className="text-foreground">create_project</span>(
          <span className="text-accent">"new"</span>)
        </p>
        <p className="mt-3 text-muted-foreground"># add projects and skills</p>
        <p>
          p.<span className="text-foreground">add</span>(...)
        </p>
        <p className="mt-3 text-muted-foreground"># get similar projects</p>
        <p>
          p.<span className="text-foreground">query</span>(...)
        </p>
      </div>
    </motion.div>
  );
}
