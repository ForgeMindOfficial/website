import { motion } from "motion/react";
import {
  ArrowLeft,
  BrainCircuit,
  LayoutDashboard,
  Send,
  Globe2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import NewsGlowArchitecture from "../components/NewsGlowArchitecture";
import NewsGlowInstagram from "../components/NewsGlowInstagram";

const technologies = [
  "n8n",
  "Supabase",
  "JavaScript",
  "Node.js",
  "React",
  "Typescript",
  "Docker",
  "REST APIs",
  "AI Integration",
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

      {/* PRODUCT HERO SHOWCASE */}

<section className="relative overflow-hidden bg-[#111827] px-6 pb-24 pt-8 md:px-10">

  <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            THE PRODUCT
          </p>

          <h2 className="text-2xl font-semibold md:text-3xl">
            NewsGlow Editorial Workspace
          </h2>
        </div>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
          ● Operational Platform
        </span>

      </div>

      {/* Browser Window */}

      <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0B1B2B] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">

        {/* Browser Header */}

        <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-[#162235] px-5">

          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />

          <div className="mx-auto hidden rounded-md border border-white/10 bg-[#0B1B2B] px-8 py-1 text-xs text-slate-400 sm:block">
            NewsGlow / Editorial Workspace
          </div>

        </div>

        {/* Real Dashboard Screenshot */}

        <img
          src="/images/projects/newsglow/dashboard.png"
          alt="NewsGlow editorial dashboard showing content management, published posts and editorial statistics"
          className="block h-auto w-full"
          loading="lazy"
        />

      </div>

      <p className="mt-6 text-center text-sm text-slate-400">
        Custom-built editorial dashboard for content review, management and publishing.
      </p>

    </motion.div>

  </div>

</section>

{/* NEWSGLOW AUTOMATION ARCHITECTURE */}

<NewsGlowArchitecture />


{/* INSTAGRAM PROFILE EXPERIENCE */}

<NewsGlowInstagram />

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

<section className="relative overflow-hidden bg-[#172337] px-6 py-28 md:px-10">

  {/* Background Glow */}

  <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-amber-400/5 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
        THE OUTCOME
      </p>

      <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
        More than automation.
        <br />
        <span className="text-slate-400">
          A connected digital product.
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
        NewsGlow brings together AI, workflow automation,
        application development and social media publishing
        into one connected platform.
      </p>

    </motion.div>

    {/* CAPABILITIES GRID */}

    <div className="grid gap-5 md:grid-cols-2">

      {/* AI Editorial Pipeline */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group rounded-3xl border border-white/10 bg-[#1E2D43] p-8 transition-colors hover:border-amber-400/30 md:p-10"
      >

        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
          <BrainCircuit size={27} className="text-amber-400" />
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          01 / AI & Automation
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          AI Editorial Pipeline
        </h3>

        <p className="leading-relaxed text-slate-400">
          Automated news discovery, AI-assisted editorial selection,
          source verification and content preparation.
        </p>

      </motion.div>

      {/* Management Platform */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5 }}
        className="group rounded-3xl border border-white/10 bg-[#1E2D43] p-8 transition-colors hover:border-blue-400/30 md:p-10"
      >

        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10">
          <LayoutDashboard size={27} className="text-blue-400" />
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          02 / Application Development
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          Custom Management Platform
        </h3>

        <p className="leading-relaxed text-slate-400">
          A React-based editorial workspace connected to Supabase
          for content review, approval and publication management.
        </p>

      </motion.div>

      {/* Publishing */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        whileHover={{ y: -5 }}
        className="group rounded-3xl border border-white/10 bg-[#1E2D43] p-8 transition-colors hover:border-emerald-400/30 md:p-10"
      >

        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10">
          <Send size={27} className="text-emerald-400" />
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          03 / API Integration
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          Automated Publishing
        </h3>

        <p className="leading-relaxed text-slate-400">
          Dedicated publishing workflows connect approved
          content to Instagram Carousels and Stories.
        </p>

      </motion.div>

      {/* Scalability */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -5 }}
        className="group rounded-3xl border border-white/10 bg-[#1E2D43] p-8 transition-colors hover:border-purple-400/30 md:p-10"
      >

        <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-400/10">
          <Globe2 size={27} className="text-purple-400" />
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
          04 / System Architecture
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          Scalable Foundation
        </h3>

        <p className="leading-relaxed text-slate-400">
          Modular workflows, structured data and reusable
          components designed to support future countries
          and languages.
        </p>

      </motion.div>

    </div>

    {/* Closing Statement */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 border-t border-white/10 pt-10"
    >

      <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
        NewsGlow is an evolving project that demonstrates how
        different technologies can be combined to solve
        real-world challenges through practical software.
      </p>

    </motion.div>

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