import { Award, Code, Medal, Users } from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";

const achievements = [
  {
    icon: Medal,
    title: "JEE Main AIR 4891",
    description: "99.46 percentile in JEE Main examination",
  },
  {
    icon: Award,
    title: "Oracle Cloud AI Certified",
    description: "OCI 2025 Certified AI Foundations Associate",
  },
  {
    icon: Code,
    title: "400+ Problems Solved",
    description: "Across multiple competitive programming platforms",
  },
  {
    icon: Medal,
    title: "SOF Gold Medal",
    description: "Gold Medal of Excellence in National Science Olympiad",
  },
];

export const Achievements = () => {
  return (
    <section className="py-16 border-t border-border">
      <h2 className="font-mono font-bold text-2xl md:text-3xl mb-8">
        Achievements
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <CardSpotlight
              key={achievement.title}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="p-2 rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-semibold text-sm">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </CardSpotlight>
          );
        })}
      </div>

      <CardSpotlight className="mt-8 p-6 rounded-lg border border-border bg-card">
        <div className="flex items-start gap-4 relative z-50">
          <div className="p-2 rounded-md bg-accent/20">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="font-mono font-semibold mb-2">
              TEDx NITK Surathkal – Executive Member
            </h3>
            <p className="text-sm text-muted-foreground">
              Designed event posters and visual content, contributed to media strategies, 
              and mentored 15+ students under a Summer Mentorship Program on Canva, 
              Adobe Express, and illustration tools.
            </p>
          </div>
        </div>
        
      </CardSpotlight>
    </section>
  );
};
