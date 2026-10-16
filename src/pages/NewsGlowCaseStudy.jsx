import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
  Share2,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const technologies = [
  "n8n",
  "Supabase",
  "JavaScript",
  "Node.js",
  "Docker",
  "REST APIs",
  "AI Integration",
];

const workflow = [
  {
    number: "01",
    title: "News Discovery",
    description:
      "Collecting potential stories from multiple news sources using automated RSS feeds.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "AI Editorial Selection",
    description:
      "Evaluating relevance, positivity, impact and uniqueness to identify promising stories.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Source Verification",
    description:
      "Checking source consistency, extracting article content and reducing duplicate coverage.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Content Management",
    description:
      "Storing editorial information, verification results and generated assets in Supabase.",
    icon: Database,
  },
  {
    number: "05",
    title: "Content Creation",
    description:
      "Preparing structured content and visual assets for social media publication.",
    icon: Lightbulb,
  },
  {
    number: "06",
    title: "Publishing",
    description:
      "Connecting approved content to social media publishing workflows.",
    icon: Share2,
  },
];

export default function NewsGlowCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111827] pt-20 text-white">
      <SEO
  title="NewsGlow — AI & Media Automation | ForgeMind"
  description="Discover how NewsGlow combines AI editorial selection, source verification, Supabase and automated workflows to produce positive news content."
  path="/projects/newsglow"
/>

      {/* NAVIGATION */}

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#172337] px-6 py-28 md:px-10">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              CASE STUDY 01 / AI & MEDIA AUTOMATION
            </p>

            <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
              NewsGlow<span className="text-amber-400">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-2xl text-slate-300 md:text-3xl">
              Finding the brighter side of the news.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
              An AI-powered editorial automation platform designed to discover,
              evaluate, verify and prepare positive news for social media.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

        </div>
      </section>

      {/* PROBLEM & SOLUTION */}

      <section className="px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              THE CHALLENGE
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Good news exists.
              <br />
              Finding it takes work.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-[#1B2940] p-10">

              <p className="mb-7 text-xs font-semibold uppercase tracking-widest text-slate-400">
                01 / The Problem
              </p>

              <h3 className="mb-6 text-2xl font-semibold">
                A fragmented editorial process.
              </h3>

              <p className="leading-relaxed text-slate-300">
                Discovering meaningful positive news requires searching
                multiple sources, identifying duplicate coverage, verifying
                information and preparing content for publication.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                Repeating this process every day makes consistent content
                production time-consuming and difficult to scale.
              </p>

            </div>

            <div className="rounded-3xl border border-amber-400/20 bg-[#1B2940] p-10">

              <p className="mb-7 text-xs font-semibold uppercase tracking-widest text-amber-400">
                02 / The Solution
              </p>

              <h3 className="mb-6 text-2xl font-semibold">
                An intelligent editorial pipeline.
              </h3>

              <p className="leading-relaxed text-slate-300">
                NewsGlow combines automated news collection, AI-assisted
                editorial selection, source verification and content
                preparation into a connected workflow.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                The architecture is designed to support repeatable daily
                production and future expansion into additional markets.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ARCHITECTURE */}

      <section className="bg-[#172337] px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            BEHIND THE BUILD
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-6xl">
            How NewsGlow works.
          </h2>

          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-slate-400">
            A modular workflow connects discovery, editorial intelligence,
            verification, data management and content production.
          </p>

          <div className="grid gap-5 md:grid-cols-3">

            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-[#1E2D43] p-8"
                >

                  <div className="mb-12 flex items-center justify-between">
                    <Icon size={27} className="text-amber-400" />

                    <span className="text-sm text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* TECHNICAL CHALLENGES */}

      <section className="px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            ENGINEERING DECISIONS
          </p>

          <h2 className="mb-14 text-4xl font-semibold tracking-tight md:text-6xl">
            Beyond the happy path.
          </h2>

          <div className="grid gap-10 md:grid-cols-2">

            <div className="border-t border-white/10 pt-8">

              <h3 className="mb-4 text-2xl font-semibold">
                Duplicate News Detection
              </h3>

              <p className="leading-relaxed text-slate-400">
                Multiple publishers often cover the same event.
                Event-based identifiers and source normalization help
                reduce duplicate stories before publication.
              </p>

            </div>

            <div className="border-t border-white/10 pt-8">

              <h3 className="mb-4 text-2xl font-semibold">
                Source Verification
              </h3>

              <p className="leading-relaxed text-slate-400">
                Automated extraction and source matching provide additional
                checks before content is accepted into the editorial pipeline.
              </p>

            </div>

            <div className="border-t border-white/10 pt-8">

              <h3 className="mb-4 text-2xl font-semibold">
                Workflow Reliability
              </h3>

              <p className="leading-relaxed text-slate-400">
                The system must handle incomplete results, missing sources
                and situations where fewer than the required number of
                stories pass verification.
              </p>

            </div>

            <div className="border-t border-white/10 pt-8">

              <h3 className="mb-4 text-2xl font-semibold">
                Scalable Architecture
              </h3>

              <p className="leading-relaxed text-slate-400">
                Reusable workflows, structured data and modular rendering
                components provide a foundation for future language and
                country-specific editions.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* RESULT */}

      <section className="bg-[#172337] px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            THE OUTCOME
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            From an idea to a working system.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            NewsGlow demonstrates how AI, automation, data management and
            external APIs can work together in a practical editorial
            application.
          </p>

          <p className="mt-5 max-w-3xl leading-relaxed text-slate-400">
            The project continues to evolve, with a focus on improving
            verification reliability, publishing workflows and scalability.
          </p>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">

          <a href="/" className="text-lg font-black">
            FORGE<span className="text-blue-400">MIND</span>.
          </a>

          <a
            href="/#work"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
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