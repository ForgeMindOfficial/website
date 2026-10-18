import { motion } from "motion/react";
import {
  Rss,
  BrainCircuit,
  ShieldCheck,
  Palette,
  Database,
  LayoutDashboard,
  CheckCircle2,
  GitBranch,
  Images,
  Smartphone,
  Share2,
  ArrowDown,
  ArrowRight,
  Workflow,
  LockKeyhole,
} from "lucide-react";

const editorialSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Collect potential stories from news sources.",
    icon: Rss,
  },
  {
    number: "02",
    title: "Evaluate",
    description: "AI identifies relevant, positive news.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Verify",
    description: "Check sources and eliminate duplicates.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Generate",
    description: "Prepare branded content and assets.",
    icon: Palette,
  },
];

const publishingSteps = [
  {
    title: "Carousel Publisher",
    description: "Multi-slide social media posts",
    icon: Images,
  },
  {
    title: "Story Publisher",
    description: "Vertical Instagram Stories",
    icon: Smartphone,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function Connector({ color = "amber" }) {
  const colorClass =
    color === "green" ? "text-emerald-400" : "text-amber-400";

  return (
    <div className={`flex justify-center py-5 ${colorClass}`}>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={23} />
      </motion.div>
    </div>
  );
}

function ArchitectureCard({
  icon: Icon,
  title,
  description,
  number,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="relative min-w-0 rounded-2xl border border-white/10 bg-[#1E2D43] p-6 transition-colors hover:border-amber-400/40"
    >
      <div className="mb-8 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
          <Icon className="text-amber-400" size={23} />
        </div>

        <span className="text-xs font-semibold text-slate-500">
          {number}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default function NewsGlowArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#111827] px-6 py-28 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <Workflow size={17} className="text-amber-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Behind the Automation
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Complex workflows.
            <br />
            <span className="text-slate-400">
              Simple operations.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            NewsGlow connects multiple automated workflows into one
            editorial system. AI-assisted news discovery, verification,
            content generation and publishing work together through
            a structured architecture.
          </p>
        </motion.div>

        {/* MAIN ARCHITECTURE CONTAINER */}

        <div className="rounded-[32px] border border-white/10 bg-[#172337] p-5 md:p-10">

          {/* LAYER 1 */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Layer 01
              </p>

              <h3 className="text-2xl font-semibold text-white">
                AI Editorial Engine
              </h3>
            </div>

            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-400">
              Automated Workflow
            </span>

          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="grid gap-4 md:grid-cols-4"
          >
            {editorialSteps.map((step, index) => (
              <div key={step.number} className="relative min-w-0">

                <ArchitectureCard {...step} />

                {index < editorialSteps.length - 1 && (
                  <div className="pointer-events-none absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-amber-400 md:block">
                    <ArrowRight size={20} />
                  </div>
                )}

              </div>
            ))}
          </motion.div>

          <Connector />

          {/* LAYER 2 */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Layer 02
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Data & Human Control
              </h3>
            </div>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-400">
              Connected Platform
            </span>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-blue-400/20 bg-[#1E2D43] p-8"
            >
              <Database className="mb-8 text-blue-400" size={30} />

              <h4 className="mb-3 text-xl font-semibold text-white">
                Supabase Database
              </h4>

              <p className="text-sm leading-relaxed text-slate-400">
                Structured storage for editorial content, source
                verification, generated assets and publication status.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-blue-400/20 bg-[#1E2D43] p-8"
            >
              <LayoutDashboard
                className="mb-8 text-blue-400"
                size={30}
              />

              <h4 className="mb-3 text-xl font-semibold text-white">
                Editorial Workspace
              </h4>

              <p className="text-sm leading-relaxed text-slate-400">
                A custom-built React interface for reviewing stories,
                managing content and controlling publication.
              </p>

            </motion.div>

          </div>

          {/* HUMAN APPROVAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center"
          >

            <div className="mb-4 flex justify-center">
              <CheckCircle2
                size={31}
                className="text-emerald-400"
              />
            </div>

            <h4 className="mb-2 text-lg font-semibold text-white">
              Human-in-the-Loop Approval
            </h4>

            <p className="text-sm leading-relaxed text-slate-400">
              Content is reviewed before publication.
              Automation handles repetitive work while editorial
              decisions remain under human control.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-emerald-400">
              <LockKeyhole size={14} />
              Controlled Publishing
            </div>

          </motion.div>

          <Connector color="green" />

          {/* LAYER 3 */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Layer 03
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Publishing Engine
              </h3>
            </div>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-400">
              Dedicated Workflows
            </span>

          </div>

          {/* DISPATCHER */}

          <div className="mx-auto max-w-lg rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6 text-center">

            <GitBranch
              className="mx-auto mb-4 text-blue-400"
              size={28}
            />

            <h4 className="mb-2 text-lg font-semibold text-white">
              Publishing Dispatcher
            </h4>

            <p className="text-sm text-slate-400">
              Routes approved content to the appropriate
              publishing workflow.
            </p>

          </div>

          <Connector />

          {/* PUBLISHERS */}

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">

            {publishingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-[#1E2D43] p-8 text-center"
                >

                  <Icon
                    className="mx-auto mb-5 text-blue-400"
                    size={29}
                  />

                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {step.title}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

          <Connector />

          {/* OUTPUT */}

          <div className="mx-auto flex max-w-lg items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#1E2D43] p-6">

            <Share2 size={27} className="text-amber-400" />

            <div>
              <h4 className="font-semibold text-white">
                Social Media Distribution
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                Branded content delivered to connected channels.
              </p>
            </div>

          </div>

        </div>

        {/* FOOTNOTE */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            Simplified architecture overview — implementation details
            intentionally omitted.
          </p>

          <div className="flex items-center gap-2 text-sm text-amber-400">
            <Workflow size={16} />
            Powered by n8n
          </div>

        </div>

      </div>
    </section>
  );
}