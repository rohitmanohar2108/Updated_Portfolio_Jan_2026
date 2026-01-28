import { ArrowRight } from "lucide-react";

const Footer3D = () => {
  const socialLinks = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Youtube", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="hidden dark:block relative overflow-hidden bg-background">
      {/* Subtle gradient overlay */}

      {/* 3D Circuit Scene */}
      <div className="relative h-[420px] flex items-center justify-center">
        {/* Circuit Board SVG - Professional Design */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          viewBox="0 0 1400 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="lineGradientH"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#333" stopOpacity="0" />
              <stop offset="50%" stopColor="#2a2a2a" stopOpacity="1" />
              <stop offset="100%" stopColor="#333" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main horizontal lines - left side */}
          <path d="M0 210 H490" stroke="#1f1f1f" strokeWidth="1" />
          <path d="M0 185 H440 L470 155" stroke="#181818" strokeWidth="1" />
          <path d="M0 235 H420 L450 265" stroke="#181818" strokeWidth="1" />
          <path d="M0 160 H380 L400 140" stroke="#141414" strokeWidth="1" />
          <path d="M0 260 H360 L380 280" stroke="#141414" strokeWidth="1" />

          {/* Main horizontal lines - right side */}
          <path d="M910 210 H1400" stroke="#1f1f1f" strokeWidth="1" />
          <path d="M930 155 L960 185 H1400" stroke="#181818" strokeWidth="1" />
          <path d="M950 265 L980 235 H1400" stroke="#181818" strokeWidth="1" />
          <path
            d="M1000 140 L1020 160 H1400"
            stroke="#141414"
            strokeWidth="1"
          />
          <path
            d="M1020 280 L1040 260 H1400"
            stroke="#141414"
            strokeWidth="1"
          />

          {/* Vertical connector lines - top */}
          <path d="M550 50 V140" stroke="#1a1a1a" strokeWidth="1" />
          <path d="M600 30 V120" stroke="#161616" strokeWidth="1" />
          <path d="M650 60 V130" stroke="#141414" strokeWidth="1" />
          <path d="M750 60 V130" stroke="#141414" strokeWidth="1" />
          <path d="M800 30 V120" stroke="#161616" strokeWidth="1" />
          <path d="M850 50 V140" stroke="#1a1a1a" strokeWidth="1" />

          {/* Vertical connector lines - bottom */}
          <path d="M550 280 V370" stroke="#1a1a1a" strokeWidth="1" />
          <path d="M600 300 V390" stroke="#161616" strokeWidth="1" />
          <path d="M650 290 V360" stroke="#141414" strokeWidth="1" />
          <path d="M750 290 V360" stroke="#141414" strokeWidth="1" />
          <path d="M800 300 V390" stroke="#161616" strokeWidth="1" />
          <path d="M850 280 V370" stroke="#1a1a1a" strokeWidth="1" />

          {/* Corner connectors to box */}
          <path d="M490 210 L520 180 H540" stroke="#252525" strokeWidth="1" />
          <path d="M490 210 L520 240 H540" stroke="#252525" strokeWidth="1" />
          <path d="M910 210 L880 180 H860" stroke="#252525" strokeWidth="1" />
          <path d="M910 210 L880 240 H860" stroke="#252525" strokeWidth="1" />

          {/* Additional diagonal accents */}
          <path d="M540 150 L560 170" stroke="#1c1c1c" strokeWidth="1" />
          <path d="M540 270 L560 250" stroke="#1c1c1c" strokeWidth="1" />
          <path d="M860 150 L840 170" stroke="#1c1c1c" strokeWidth="1" />
          <path d="M860 270 L840 250" stroke="#1c1c1c" strokeWidth="1" />

          {/* Circuit nodes - main connection points */}
          <circle
            cx="490"
            cy="210"
            r="6"
            stroke="#2a2a2a"
            strokeWidth="1.5"
            fill="#0a0a0b"
          />
          <circle
            cx="910"
            cy="210"
            r="6"
            stroke="#2a2a2a"
            strokeWidth="1.5"
            fill="#0a0a0b"
          />

          {/* Secondary nodes */}
          <circle
            cx="440"
            cy="185"
            r="3"
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="960"
            cy="185"
            r="3"
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="420"
            cy="235"
            r="3"
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="980"
            cy="235"
            r="3"
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="380"
            cy="160"
            r="2.5"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="1020"
            cy="160"
            r="2.5"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />

          {/* Top nodes */}
          <circle
            cx="550"
            cy="50"
            r="2.5"
            stroke="#1c1c1c"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="600"
            cy="30"
            r="2"
            stroke="#181818"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="800"
            cy="30"
            r="2"
            stroke="#181818"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="850"
            cy="50"
            r="2.5"
            stroke="#1c1c1c"
            strokeWidth="1"
            fill="none"
          />

          {/* Bottom nodes */}
          <circle
            cx="550"
            cy="370"
            r="2.5"
            stroke="#1c1c1c"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="600"
            cy="390"
            r="2"
            stroke="#181818"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="800"
            cy="390"
            r="2"
            stroke="#181818"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="850"
            cy="370"
            r="2.5"
            stroke="#1c1c1c"
            strokeWidth="1"
            fill="none"
          />

          {/* Glowing accent nodes */}
          <circle
            cx="320"
            cy="235"
            r="5"
            fill="#f97316"
            filter="url(#glow)"
            className="animate-pulse"
          />
          <circle cx="320" cy="235" r="10" fill="#f97316" fillOpacity="0.15" />

          <circle
            cx="1080"
            cy="185"
            r="3.5"
            fill="#f97316"
            filter="url(#softGlow)"
            opacity="0.8"
          />
          <circle cx="1080" cy="185" r="7" fill="#f97316" fillOpacity="0.1" />

          {/* Small decorative dots */}
          <circle cx="280" cy="210" r="1.5" fill="#222" />
          <circle cx="260" cy="185" r="1" fill="#1a1a1a" />
          <circle cx="1120" cy="210" r="1.5" fill="#222" />
          <circle cx="1140" cy="235" r="1" fill="#1a1a1a" />
        </svg>

        {/* Center 3D Box Element - STRAIGHT */}
        <div className="relative z-10">
          <div
            className="relative w-48 h-48 md:w-56 md:h-56"
            style={{ animation: "cubeFloat 8s ease-in-out infinite" }}
          >
            {/* Main box face - perfectly straight */}
            <div
              className="absolute inset-0 rounded-2xl border border-[#1e1e1e] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #131313 0%, #0c0c0c 50%, #0a0a0a 100%)",
                boxShadow:
                  "0 30px 80px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03) inset",
              }}
            >
              {/* Subtle top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

              {/* Inner content area */}
              <div className="absolute inset-4 rounded-xl bg-[#0e0e0e] border border-[#191919] overflow-hidden">
                {/* Inner top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent" />

                {/* Geometric inner design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer diamond */}
                  <div className="absolute w-24 h-24 border border-[#1a1a1a] rotate-45" />

                  {/* Middle diamond */}
                  <div className="absolute w-16 h-16 border border-[#1e1e1e] rotate-45 bg-[#0c0c0c]" />

                  {/* Inner diamond with gradient */}
                  <div
                    className="absolute w-8 h-8 rotate-45 border border-[#252525]"
                    style={{
                      background:
                        "linear-gradient(135deg, #151515 0%, #0a0a0a 100%)",
                    }}
                  />

                  {/* Center dot */}
                  <div className="absolute w-2 h-2 bg-[#222] rounded-full" />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-[#1a1a1a]" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-[#1a1a1a]" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-[#1a1a1a]" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-[#1a1a1a]" />
                </div>

                {/* Glowing accent dot */}
                <div className="absolute top-5 right-5">
                  <div
                    className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                    style={{
                      boxShadow:
                        "0 0 15px #f97316, 0 0 30px rgba(249,115,22,0.4)",
                    }}
                  />
                </div>

                {/* Secondary small dot */}
                <div className="absolute bottom-5 left-5">
                  <div className="w-1.5 h-1.5 bg-[#333] rounded-full" />
                </div>

                {/* Subtle scan line effect */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
                  }}
                />
              </div>

              {/* Side edge highlight */}
              <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
            </div>

            {/* Soft shadow underneath */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-xl rounded-full" />
          </div>
        </div>

        {/* Floating decorative elements */}
        <div
          className="absolute top-20 right-[18%] w-12 h-12 border border-[#181818] rounded-xl"
          style={{ animation: "floatElement 7s ease-in-out infinite" }}
        >
          <div className="absolute inset-2 border border-[#141414] rounded-lg" />
        </div>

        <div
          className="absolute bottom-24 left-[15%] w-8 h-8 border border-[#161616] rounded-lg"
          style={{
            animation: "floatElement 6s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <div className="absolute inset-1.5 border border-[#121212] rounded" />
        </div>

        <div
          className="absolute top-28 left-[22%] w-6 h-6 border border-[#151515] rounded-full"
          style={{
            animation: "floatElement 5s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        <div
          className="absolute bottom-32 right-[22%] w-5 h-5 rotate-45 border border-[#141414]"
          style={{
            animation: "floatElement 8s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        />
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes cubeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes floatElement {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-6px);
            opacity: 0.7;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer3D;
