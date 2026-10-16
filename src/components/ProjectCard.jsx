import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  BrainCircuit,
  Smartphone,
  Workflow,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const projectIcons = {
  newsglow: BrainCircuit,
  "staff-app": Smartphone,
  "business-automation": Workflow,
  cartverdict: ShoppingCart,
};

const projectVisuals = {
  newsglow: {
    label: "AI EDITORIAL SYSTEM",
    detail: "Discover → Verify → Publish",
  },
  "staff-app": {
    label: "MOBILE APPLICATION",
    detail: "React → Supabase → Capacitor",
  },
  "business-automation": {
    label: "WORKFLOW AUTOMATION",
    detail: "Collect → Process → Report",
  },
  cartverdict: {
    label: "AI PRODUCT EXPERIENCE",
    detail: "Research → Compare → Decide",
  },
};

export default function ProjectCard({ project }) {
  const Icon = projectIcons[project.id] || BrainCircuit;
  const visual = projectVisuals[project.id];

  const availableCaseStudies = [
  "newsglow",
  "staff-app",
  "business-automation",
];
  const hasCaseStudy = availableCaseStudies.includes(project.id);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1B2940] transition-colors hover:border-blue-400/30"
    >
      {/* VISUAL HEADER */}

      <div
        className="relative flex h-52 flex-col justify-between overflow-hidden border-b border-white/10 p-8"
        style={{
          background: `linear-gradient(135deg, #1E2D43 0%, ${project.color}18 100%)`,
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
            {visual.label}
          </span>

          <span
            className="text-sm font-semibold"
            style={{ color: project.color }}
          >
            {project.number}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border"
            style={{
              borderColor: `${project.color}50`,
              backgroundColor: `${project.color}12`,
            }}
          >
            <Icon
              size={36}
              strokeWidth={1.4}
              style={{ color: project.color }}
            />
          </div>

          <p className="text-lg font-medium tracking-tight text-slate-200 md:text-xl">
            {visual.detail}
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-8 md:p-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
          {project.category}
        </p>

        <h3 className="text-3xl font-semibold tracking-tight">
          {project.name}
        </h3>

        <p
          className="mt-3 text-sm font-medium"
          style={{ color: project.color }}
        >
          {project.tagline}
        </p>

        <p className="mt-6 min-h-20 leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* PROBLEM → SOLUTION */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#172337] p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            The Challenge
          </p>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {project.problem}
          </p>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px w-8 bg-blue-400/50" />
            <ArrowRight size={16} className="text-blue-400" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            The Solution
          </p>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {project.solution}
          </p>
        </div>

        {/* TECHNOLOGIES */}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* LINK */}

        <div className="mt-9 border-t border-white/10 pt-7">
          {hasCaseStudy ? (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
            >
              Explore Case Study
              <ArrowUpRight size={17} />
            </Link>
          ) : (
            <span className="text-sm text-slate-500">
              Case Study Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}