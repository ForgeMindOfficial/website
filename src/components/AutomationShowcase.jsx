import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Database,
  FileSpreadsheet,
  Gift,
  Globe,
  Workflow,
  Code2,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const workflows = [
  {
    id: "reporting",
    number: "01",
    tab: "Business Reporting",
    eyebrow: "AUTOMATED BUSINESS INTELLIGENCE",
    title: "From scattered data to structured reports.",
    description:
      "A recurring reporting workflow that collects operational information, processes exported data and prepares consistent weekly and monthly reports.",
    status: "Working Automation",
    icon: FileSpreadsheet,
    steps: [
      {
        icon: Database,
        title: "Business Systems",
        subtitle: "TiM.POS + MitDenkt",
        description:
          "Sales information and operational data originate from existing business tools.",
      },
      {
        icon: Globe,
        title: "Data Extraction",
        subtitle: "Playwright",
        description:
          "Authenticated browser automation retrieves reporting exports.",
      },
      {
        icon: Code2,
        title: "Data Processing",
        subtitle: "Node.js + JavaScript",
        description:
          "Exported data is transformed into structured reporting values.",
      },
      {
        icon: Workflow,
        title: "Orchestration",
        subtitle: "n8n",
        description:
          "Scheduled workflows coordinate reporting periods, execution and downstream integrations.",
      },
      {
        icon: FileSpreadsheet,
        title: "Reports",
        subtitle: "Weekly + Monthly",
        description:
          "Prepared reporting information supports recurring business analysis.",
      },
    ],
    highlights: [
      "Weekly and monthly reporting",
      "Historical period comparisons",
      "Automated data extraction",
      "Custom processing services",
    ],
  },
  {
    id: "vouchers",
    number: "02",
    tab: "Gift Card Synchronization",
    eyebrow: "CROSS-PLATFORM AUTOMATION",
    title: "Connecting online purchases with in-store systems.",
    description:
      "An integration workflow designed to transfer online gift-card purchases into the existing point-of-sale voucher system.",
    status: "Integration Workflow",
    icon: Gift,
    steps: [
      {
        icon: Globe,
        title: "Online Purchase",
        subtitle: "Wix",
        description:
          "Customers purchase gift cards through the online store.",
      },
      {
        icon: Clock3,
        title: "Scheduled Check",
        subtitle: "n8n",
        description:
          "The workflow checks for newly purchased gift cards at regular intervals.",
      },
      {
        icon: Code2,
        title: "Voucher Processing",
        subtitle: "JavaScript",
        description:
          "Relevant voucher information is prepared for synchronization.",
      },
      {
        icon: Globe,
        title: "POS Integration",
        subtitle: "Playwright",
        description:
          "Authenticated browser automation interacts with the existing voucher interface.",
      },
      {
        icon: CheckCircle2,
        title: "Voucher Registration",
        subtitle: "TiM.POS",
        description:
          "Voucher details are entered into the point-of-sale system.",
      },
    ],
    highlights: [
      "Scheduled purchase checks",
      "Online-to-POS integration",
      "Authenticated browser automation",
      "Existing system compatibility",
    ],
  },
];

function WorkflowStep({ step, index, isLast }) {
  const Icon = step.icon;

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
        className="w-full rounded-2xl border border-white/10 bg-[#1B2940] p-4 md:p-5"
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-400">
            <Icon size={20} />
          </div>

          <span className="text-xs text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400">
          {step.subtitle}
        </p>

        <h4 className="text-sm font-semibold text-white">
          {step.title}
        </h4>

        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          {step.description}
        </p>
      </motion.div>

      {!isLast && (
        <div className="flex items-center justify-center py-3 text-violet-400 md:hidden">
          <ArrowRight size={18} className="rotate-90" />
        </div>
      )}
    </div>
  );
}

export default function AutomationShowcase() {
  const [activeId, setActiveId] = useState("reporting");

  const active = workflows.find(
    (workflow) => workflow.id === activeId
  );

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#172337] px-6 py-16 md:px-10 md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            REAL AUTOMATIONS
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built to solve operational problems.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Two practical automation systems connecting existing
            business software without requiring a complete
            replacement of the underlying tools.
          </p>
        </div>

        {/* TABS */}

        <div className="mb-8 flex flex-wrap gap-3">
          {workflows.map((workflow) => {
            const Icon = workflow.icon;
            const selected = activeId === workflow.id;

            return (
              <button
                key={workflow.id}
                type="button"
                onClick={() => setActiveId(workflow.id)}
                aria-pressed={selected}
                className={`inline-flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-medium transition ${
                  selected
                    ? "border-violet-400/40 bg-violet-400/15 text-white"
                    : "border-white/10 bg-[#1B2940] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon size={17} />
                {workflow.tab}
              </button>
            );
          })}
        </div>

        {/* ACTIVE WORKFLOW */}

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-white/10 bg-[#111827] p-5 md:p-8"
          >
            <div className="mb-9 flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                  {active.eyebrow}
                </p>

                <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
                  {active.title}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
                  {active.description}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs font-medium text-violet-300">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                {active.status}
              </span>
            </div>

            {/* WORKFLOW DIAGRAM */}

            <div className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-3">
              {active.steps.map((step, index) => (
                <div
                  key={`${active.id}-${index}`}
                  className="flex min-w-0 flex-1 items-center"
                >
                  <WorkflowStep
                    step={step}
                    index={index}
                    isLast={index === active.steps.length - 1}
                  />

                  {index < active.steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="ml-3 hidden shrink-0 text-violet-400 md:block"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* HIGHLIGHTS */}

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                KEY CAPABILITIES
              </p>

              <div className="flex flex-wrap gap-2">
                {active.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}