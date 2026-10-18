import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Workflow,
  ShieldCheck,
  Clock3,
  RefreshCw,
  Cloud,
  Mail,
  Code2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import AutomationShowcase from "../components/AutomationShowcase";

const technologies = [
  "n8n",
  "Playwright",
  "Node.js",
  "JavaScript",
  "Docker",
  "Excel",
  "Google Drive",
  "Gmail",
];

const engineeringChallenges = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Authenticated Browser Automation",
    challenge:
      "The source systems require authenticated access and do not necessarily provide a convenient reporting API.",
    solution:
      "A Playwright-based service automates the necessary browser interactions and reporting exports.",
  },
  {
    number: "02",
    icon: FileSpreadsheet,
    title: "Consistent Data Processing",
    challenge:
      "Reporting exports need to be transformed into consistent information before they can be compared.",
    solution:
      "JavaScript processing handles exported data and prepares structured values for reporting.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Recurring Reporting",
    challenge:
      "Weekly and monthly reporting must run repeatedly while using the correct reporting periods.",
    solution:
      "Dedicated workflows and service endpoints support weekly and monthly execution.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Workflow Reliability",
    challenge:
      "Browser sessions, exports and external integrations can fail independently.",
    solution:
      "The architecture separates browser automation from workflow orchestration, making individual components easier to test and troubleshoot.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function BusinessAutomationCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111827] pt-20 text-white">
      <SEO
        title="Business Automation — Workflow Orchestration & Browser Automation | ForgeMind"
        description="Discover how a combination of n8n, Playwright and Node.js automates recurring business reporting workflows, connecting existing tools and simplifying operational tasks."
        path="/projects/business-automation"
      />  

      {/* NAVIGATION */}

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#172337] px-6 py-16 md:px-10 md:py-20">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              CASE STUDY 03 / WORKFLOW AUTOMATION
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Business
              <br />
              <span className="text-violet-400">
                Automation.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-2xl text-slate-300 md:text-3xl">
              Less repetitive work.
              <br />
              More useful information.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
              An automated reporting system that connects business
              software, browser automation, data processing and
              workflow orchestration to simplify recurring
              operational reporting.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-violet-400" />

              <span className="text-xs font-medium text-violet-300">
                Working Reporting Workflows
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTERACTIVE WORKFLOW SHOWCASE */}

<AutomationShowcase />

      {/* THE CHALLENGE */}

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="THE CHALLENGE"
            title={
              <>
                Valuable information.
                <br />
                Too many manual steps.
              </>
            }
            description="Business reporting often involves collecting information from different tools, preparing data and repeating the same process every reporting period."
          />

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-[#1B2940] p-8 md:p-10">
              <p className="mb-7 text-xs font-semibold uppercase tracking-widest text-slate-400">
                01 / The Problem
              </p>

              <h3 className="mb-6 text-2xl font-semibold">
                Repetitive reporting across multiple systems.
              </h3>

              <p className="leading-relaxed text-slate-300">
                Preparing recurring business reports requires
                collecting sales information, processing exports,
                comparing reporting periods and combining
                information from different sources.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                Repeating these steps manually creates unnecessary
                administrative work and increases the opportunity
                for inconsistencies.
              </p>
            </div>

            <div className="rounded-3xl border border-violet-400/20 bg-[#1B2940] p-8 md:p-10">
              <p className="mb-7 text-xs font-semibold uppercase tracking-widest text-violet-400">
                02 / The Solution
              </p>

              <h3 className="mb-6 text-2xl font-semibold">
                A connected reporting workflow.
              </h3>

              <p className="leading-relaxed text-slate-300">
                A combination of Playwright, Node.js and n8n
                automates data retrieval, processing and
                report preparation.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                The system supports recurring weekly and monthly
                reporting, with integrations for storing and
                delivering the resulting reports.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}


      {/* IMPLEMENTATION */}

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="TECHNICAL IMPLEMENTATION"
            title="Connecting the pieces."
            description="Each technology has a specific responsibility within the reporting system."
          />

          <div className="grid gap-5 md:grid-cols-2">

            {[
              {
                icon: Workflow,
                title: "n8n",
                subtitle: "Workflow Orchestration",
                description:
                  "Coordinates execution, connects services and manages the reporting process.",
              },
              {
                icon: Code2,
                title: "Playwright + Node.js",
                subtitle: "Browser Automation",
                description:
                  "Automates interactions with reporting systems and handles data export operations.",
              },
              {
                icon: FileSpreadsheet,
                title: "JavaScript + Excel",
                subtitle: "Data Processing",
                description:
                  "Transforms reporting exports into structured information for comparisons and summaries.",
              },
              {
                icon: Cloud,
                title: "Google Integrations",
                subtitle: "Storage & Delivery",
                description:
                  "Connects reporting workflows with Google Drive and email delivery.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#1B2940] p-8"
                >
                  <Icon
                    size={28}
                    className="mb-10 text-violet-400"
                  />

                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {item.subtitle}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ENGINEERING CHALLENGES */}

      <section className="bg-[#172337] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="ENGINEERING DECISIONS"
            title="Making automation dependable."
            description="The challenge is not simply automating a click. It's building a workflow that can be executed, tested and maintained."
          />

          <div className="grid gap-10 md:grid-cols-2">

            {engineeringChallenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="border-t border-white/10 pt-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Icon
                      size={27}
                      className="text-violet-400"
                    />

                    <span className="text-sm text-slate-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mb-7 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Challenge
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.challenge}
                  </p>

                  <p className="mb-2 mt-7 text-xs font-semibold uppercase tracking-widest text-violet-400">
                    Solution
                  </p>

                  <p className="leading-relaxed text-slate-300">
                    {item.solution}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* RESULT */}

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="THE OUTCOME"
            title={
              <>
                From manual reporting
                <br />
                to repeatable workflows.
              </>
            }
          />

          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            The system has successfully executed weekly and
            monthly reporting workflows, demonstrating how
            browser automation, data processing and workflow
            orchestration can simplify recurring business tasks.
          </p>

          <p className="mt-6 max-w-3xl leading-relaxed text-slate-400">
            By connecting existing business tools rather than
            replacing them, the solution provides a practical
            foundation for reducing repetitive reporting work.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {[
              {
                title: "Weekly Reporting",
                description: "Recurring weekly report execution.",
              },
              {
                title: "Monthly Reporting",
                description: "Monthly reporting and period comparison.",
              },
              {
                title: "Connected Delivery",
                description: "Integration with Drive and email.",
              },
            ].map((result) => (
              <div
                key={result.title}
                className="rounded-2xl border border-white/10 bg-[#1B2940] p-7"
              >
                <CheckCircle2
                  size={23}
                  className="mb-6 text-emerald-400"
                />

                <h3 className="mb-3 text-lg font-semibold">
                  {result.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {result.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#152238] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">

          <Link
            to="/"
            className="text-lg font-black"
          >
            FORGE<span className="text-blue-400">MIND</span>.
          </Link>

          <a
            href="/#work"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </a>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ForgeMind
          </p>

        </div>
      </footer>

    </div>
  );
}