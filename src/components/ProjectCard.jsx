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

const availableCaseStudies = [
  "newsglow",
  "staff-app",
  "business-automation",
];

export default function ProjectCard({ project }) {
  const Icon = projectIcons[project.id] || BrainCircuit;

  const visual = projectVisuals[project.id] || {
    label: "DIGITAL PROJECT",
    detail: "Explore → Build → Improve",
  };

  const hasCaseStudy = availableCaseStudies.includes(project.id);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1B2940] transition-colors hover:border-blue-400/30"
    >
      {/* VISUAL HEADER */}

      <div
        className="relative flex h-40 flex-col justify-between overflow-hidden border-b border-white/10 p-6 md:h-44 md:p-7"
        style={{
          background: `linear-gradient(135deg, #1E2D43 0%, ${project.color}18 100%)`,
        }}
      >
        {/* HEADER LABEL */}

        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            {visual.label}
          </span>

          <span
            className="text-xs font-semibold"
            style={{ color: project.color }}
          >
            {project.number}
          </span>
        </div>

        {/* VISUAL CONTENT */}

        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border md:h-16 md:w-16"
            style={{
              borderColor: `${project.color}50`,
              backgroundColor: `${project.color}12`,
            }}
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              style={{ color: project.color }}
            />
          </div>

          <p className="min-w-0 text-base font-medium leading-snug tracking-tight text-slate-200 md:text-lg">
            {visual.detail}
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-6 md:p-8">

        {/* PROJECT CATEGORY */}

        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {project.category}
        </p>

        {/* PROJECT NAME */}

        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[28px]">
          {project.name}
        </h3>

        {/* TAGLINE */}

        <p
          className="mt-2 text-sm font-medium leading-relaxed"
          style={{ color: project.color }}
        >
          {project.tagline}
        </p>

        {/* DESCRIPTION */}

        <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-[15px]">
          {project.description}
        </p>

        {/* PROBLEM → SOLUTION */}

        <div className="mt-6 rounded-xl border border-white/10 bg-[#172337] p-4 md:p-5">

          {/* CHALLENGE */}

          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            The Challenge
          </p>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {project.problem}
          </p>

          {/* TRANSITION */}

          <div className="my-3 flex items-center gap-2">
            <div className="h-px w-6 bg-blue-400/40" />
            <ArrowRight size={15} className="text-blue-400" />
          </div>

          {/* SOLUTION */}

          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
            The Solution
          </p>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {project.solution}
          </p>
        </div>

        {/* TECHNOLOGIES */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* LINK */}

        <div className="mt-auto pt-6">

          <div className="border-t border-white/10 pt-5">
            {hasCaseStudy ? (
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
              >
                Explore Case Study

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ) : (
              <span className="text-sm text-slate-500">
                Case Study Coming Soon
              </span>
            )}
          </div>

        </div>

      </div>
    </motion.article>
  );
}