import { cn } from "@/lib/utils";

interface OrangeLampProps {
  className?: string;
  width?: string;
}

const OrangeLamp = ({ className, width = "170px" }: OrangeLampProps) => {
  return (
    <div className={cn("relative flex flex-col items-center z-10", className)}>
      {/* Main lamp bar */}
      <div
        className="relative rounded-b-full z-10"
        style={{
          width,
          height: "4px",
          background: "linear-gradient(90deg, hsl(25 85% 45%) 0%, hsl(28 95% 55%) 50%, hsl(25 85% 45%) 100%)",
          boxShadow: `
           
          `,
        }}
      />

      {/* Downward glow cone */}
      <div
        className="absolute top-[1px] left-1/2 -translate-x-1/2 -z-50"
        style={{
          width: `calc(${width} + 80px)`,
          height: "90px",
          background: "radial-gradient(ellipse at top, hsl(25 90% 50% / 0.25) 0%, hsl(25 85% 50% / 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Secondary soft downward glow */}
      <div
        className="absolute -top-[2px] left-1/2 -translate-x-1/2"
        style={{
          width: `calc(${width} - 4px)`,
          height: "50px",
          background: "linear-gradient(to bottom, hsl(25 95% 55% / 0.2) 0%, transparent 100%)",
          filter: "blur(22px)",
        }}
      />
    </div>
  );
};

export default OrangeLamp;
