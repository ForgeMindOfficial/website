import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  BrainCircuit,
  Code2,
  Workflow,
  Menu,
} from "lucide-react";
import SolutionNetwork from "./components/SolutionNetwork";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import { Routes, Route } from "react-router-dom";
import NewsGlowCaseStudy from "./pages/NewsGlowCaseStudy";
import StaffAppCaseStudy from "./pages/StaffAppCaseStudy";
import BusinessAutomationCaseStudy from "./pages/BusinessAutomationCaseStudy";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";

<div className="space-y-12">

  {/* FEATURED PROJECTS */}

  <div className="grid gap-6 lg:grid-cols-2">
    {projects
      .filter((project) => project.featured)
      .map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
  </div>

  {/* OTHER PROJECTS */}

  <div>
    <div className="mb-7 flex items-center gap-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        More Projects
      </h3>

      <div className="h-px flex-1 bg-white/10" />
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {projects
        .filter((project) => !project.featured)
        .map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  </div>

</div>

const expertise = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI Integration",
    description:
      "Turning artificial intelligence into useful features and practical digital experiences.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Software Development",
    description:
      "Building modern applications designed around real-world needs.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Intelligent Automation",
    description:
      "Connecting tools, data and processes to eliminate repetitive work.",
  },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-14">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
        {label}
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111827] pt-20 text-white">

      <SEO
        title="ForgeMind — Digital Solutions by Daniel Pieropan"
        description="ForgeMind creates practical digital solutions through AI automation, web and mobile development. Explore projects, technical case studies and real-world problem solving."
        path="/"
      />

      <StructuredData />  

      {/* NAVIGATION */}

       <Navbar />

      {/* HERO */}

      <section className="forgemind-hero relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-10">

        <SolutionNetwork />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium tracking-widest text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              INDEPENDENT DIGITAL SOLUTIONS STUDIO
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl xl:max-w-3xl">
              Every problem
              <br />
              deserves a
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                smart solution.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Transforming complex challenges into practical digital solutions
              through software, automation and artificial intelligence.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">

              <a
                href="#work"
                className="flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#approach"
                className="flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium transition hover:border-white/50"
              >
                My Approach <ArrowRight size={18} />
              </a>

            </div>

            <p className="mt-20 text-xs uppercase tracking-[0.3em] text-slate-500">
              Digital Solutions by Daniel Pieropan
            </p>

          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}

      <section id="expertise" className="fm-section-alt border-t border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            label="WHAT I DO"
            title="Technology with purpose."
            description="The right technology is the one that solves the problem. Every solution starts with understanding what actually matters."
          />

          <div className="grid gap-5 md:grid-cols-3">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-[#1E2D43] p-9 transition hover:border-blue-400/30"
                >
                  <div className="mb-16 flex items-center justify-between">
                    <Icon size={30} className="text-blue-400" />
                    <span className="text-sm text-slate-600">{item.number}</span>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* PROJECTS */}

{/* PROJECTS */}

<section
  id="work"
  className="fm-section px-6 py-28 md:px-10"
>
  <div className="mx-auto max-w-7xl">

    <SectionTitle
      label="SELECTED WORK"
      title="Real problems. Real solutions."
      description="A selection of projects exploring how software, automation and AI can make everyday processes smarter."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>

  </div>
</section>

      {/* APPROACH */}

      <section id="approach" className="fm-section-soft border-y border-white/10 px-6 py-28 md:px-10">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            label="THE FORGEMIND APPROACH"
            title="Think. Create. Build. Improve."
            description="A structured approach that combines analytical thinking with creative problem-solving."
          />

          <div className="grid gap-10 md:grid-cols-4">

            {[
              ["01", "Understand", "Identify the real problem before choosing a technology."],
              ["02", "Create", "Explore ideas and design a practical solution."],
              ["03", "Build", "Turn the concept into working software and connected systems."],
              ["04", "Improve", "Test, learn and continuously refine the result."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-blue-400/40 pt-7">

                <span className="text-sm font-semibold text-blue-400">
                  {number}
                </span>

                <h3 className="mb-4 mt-9 text-2xl font-semibold">
                  {title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="fm-section px-6 py-28 md:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              BEHIND FORGEMIND
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              A creative mind.
              <br />
              A practical approach.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-400">

            <p>
              I'm Daniel Pieropan, the developer and creative mind behind ForgeMind.
            </p>

            <p>
              My background in business operations gives me a practical
              perspective on technology: understanding the challenge comes
              before building the solution.
            </p>

            <p>
              ForgeMind is where analytical thinking, creativity and
              technology come together to create useful digital products.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="fm-section px-6 pb-24 pt-20 md:px-10">

        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#203858] to-[#1A2940] p-10 md:p-20">

          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            HAVE AN IDEA?
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Let's turn it into something real.
          </h2>

          <a
            href="mailto:info@forgemind.eu"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#090D14] transition hover:bg-blue-100"
          >
            Get in Touch <ArrowUpRight size={18} />
          </a>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-lg font-black">
              FORGE<span className="text-blue-400">MIND</span>.
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Digital Solutions by Daniel Pieropan
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="/impressum/" className="hover:text-white">Impressum</a>
            <a href="/privacy/" className="hover:text-white">Privacy</a>
            <a href="/terms/" className="hover:text-white">Terms</a>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ForgeMind
          </p>

        </div>
      </footer>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageTransition> <HomePage /> </PageTransition>}/>
      <Route path="/projects/newsglow" element={<PageTransition> <NewsGlowCaseStudy /> </PageTransition>} />
      <Route path="/projects/staff-app" element={<PageTransition> <StaffAppCaseStudy /> </PageTransition>} />
      <Route path="/projects/business-automation" element={<PageTransition> <BusinessAutomationCaseStudy /> </PageTransition>} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;