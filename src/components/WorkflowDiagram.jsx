import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Database,
  Workflow,
  Code2,
  FileSpreadsheet,
  Mail,
  Cloud,
  CalendarDays,
  MonitorCog,
} from "lucide-react";

const icons = {
  database: Database,
  workflow: Workflow,
  code: Code2,
  spreadsheet: FileSpreadsheet,
  mail: Mail,
  cloud: Cloud,
  calendar: CalendarDays,
  browser: MonitorCog,
};

function WorkflowNode({ node, index, accent }) {
  const Icon = icons[node.icon] || Workflow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#1E2D43] p-5"
    >
      <div className="mb-6 flex items-center justify-between">
        <Icon
          size={24}
          strokeWidth={1.6}
          style={{ color: accent }}
        />

        <span className="text-xs text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-base font-semibold text-white">
        {node.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {node.description}
      </p>
    </motion.div>
  );
}

export default function WorkflowDiagram({
  steps = [],
  accent = "#8B5CF6",
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
        {steps.map((step, index) => (
          <div
            key={`${step.title}-${index}`}
            className="flex min-w-0 flex-1 flex-col items-stretch gap-3 lg:flex-row lg:items-center"
          >
            <WorkflowNode
              node={step}
              index={index}
              accent={accent}
            />

            {index < steps.length - 1 && (
              <div className="flex shrink-0 items-center justify-center text-slate-500">
                <ArrowDown
                  size={18}
                  className="lg:hidden"
                />

                <ArrowRight
                  size={18}
                  className="hidden lg:block"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}