import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { AlertCircle, BrainCircuit, CheckCircle2 } from "lucide-react";

const nodes = [
  {
    id: "problem",
    label: "PROBLEM",
    subtitle: "Identify",
    x: 105,
    y: 300,
    color: "#FB7185",
    icon: AlertCircle,
  },
  {
    id: "analysis",
    label: "ANALYSIS",
    subtitle: "Understand",
    x: 270,
    y: 120,
    color: "#38BDF8",
    icon: BrainCircuit,
  },
  {
    id: "solution",
    label: "SOLUTION",
    subtitle: "Create",
    x: 445,
    y: 280,
    color: "#4ADE80",
    icon: CheckCircle2,
  },
];

const paths = [
  "M 105 300 L 270 120",
  "M 270 120 L 445 280",
];

export default function SolutionNetwork() {
  const reduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 3);
    }, 2200);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div
      aria-label="ForgeMind process: Problem, Analysis, Solution"
      role="img"
      className="forgemind-network pointer-events-none absolute right-[3%] top-[24%] hidden h-[440px] w-[540px] xl:block"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-[100px]" />

      {/* CONNECTIONS */}

      <svg
        viewBox="0 0 540 440"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="lineOne" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <linearGradient id="lineTwo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>

          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {paths.map((path, index) => (
          <g key={index}>
            {/* Soft glow behind the connection */}

            <path
              d={path}
              stroke={index === 0 ? "#38BDF8" : "#4ADE80"}
              strokeWidth="8"
              strokeOpacity="0.12"
              fill="none"
            />

            {/* Main connection */}

            <path
              d={path}
              stroke={`url(#line${index === 0 ? "One" : "Two"})`}
              strokeWidth="2"
              strokeOpacity="0.75"
              fill="none"
            />

            {/* Animated particle */}

            {!reduceMotion && (
              <motion.circle
                r="5"
                fill={index === 0 ? "#38BDF8" : "#4ADE80"}
                style={{
                  offsetPath: `path("${path}")`,
                }}
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  delay: index * 2.2,
                  repeat: Infinity,
                  repeatDelay: 4.4,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* NODES */}

      {nodes.map((node, index) => {
        const Icon = node.icon;
        const isActive = reduceMotion || activeNode === index;

        return (
          <motion.div
            key={node.id}
            className="absolute flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full border bg-[#1B2940]/95 backdrop-blur-xl"
            style={{
              left: node.x,
              top: node.y,
              x: "-50%",
              y: "-50%",
              borderColor: `${node.color}55`,
            }}
            animate={{
              scale: isActive ? 1.08 : 1,
              boxShadow: isActive
              ? `0 0 30px ${node.color}20`
              : `0 0 12px ${node.color}08`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            {/* Animated outer ring */}

            <motion.div
              className="absolute -inset-2 rounded-full border"
              style={{
                borderColor: node.color,
              }}
              animate={{
                opacity: isActive ? 0.4 : 0,
                scale: isActive ? 1.12 : 1,
              }}
              transition={{ duration: 0.7 }}
            />

            <Icon
              size={26}
              strokeWidth={1.7}
              style={{ color: node.color }}
              className="mb-3"
            />

            <span className="text-[11px] font-bold tracking-[0.15em] text-white">
              {node.label}
            </span>

            <span className="mt-1 text-[10px] text-slate-400">
              {node.subtitle}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}