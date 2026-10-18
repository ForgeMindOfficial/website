import { motion } from "motion/react";
import {
  ArrowLeft,
  Smartphone,
  Database,
  Bell,
  ShieldCheck,
  Layers3,
  Users,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StaffAppShowcase from "../components/StaffAppShowcase";
import StaffAppArchitecture from "../components/StaffAppArchitecture";

const technologies = [
  "React",
  "Vite",
  "Capacitor",
  "Supabase",
  "Firebase",
  "JavaScript",
  "iOS",
  "Android",
];

const features = [
  {
    number: "01",
    icon: Users,
    title: "Centralized Employee Experience",
    description:
      "A single mobile application designed to bring employee information and internal functionality together.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Authentication & Access Control",
    description:
      "User authentication and database access policies help protect employee information and control access to application functionality.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Push Notifications",
    description:
      "Native push notification capabilities connect backend events with employees' mobile devices.",
  },
  {
    number: "04",
    icon: Database,
    title: "Cloud Database Integration",
    description:
      "Supabase provides the backend infrastructure for application data, authentication and database operations.",
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Cross-Platform Development",
    description:
      "A shared React application is packaged for Android and iOS using Capacitor and native development tools.",
  },
{
  number: "06",
  icon: GraduationCap,
  title: "Internal Academy",
  description:
    "A dedicated knowledge platform for training resources, barber skills, service standards and product information.",
},
];

const challenges = [
  {
    number: "01",
    title: "One Application, Multiple Platforms",
    problem:
      "Developing separate applications for Android and iOS would increase development and maintenance complexity.",
    solution:
      "Using React and Capacitor makes it possible to share the core application while integrating native functionality when required.",
  },
  {
    number: "02",
    title: "Secure Employee Data",
    problem:
      "An employee application needs to manage access to internal information and functionality.",
    solution:
      "Supabase authentication and Row Level Security policies provide a foundation for controlling access to backend data.",
  },
  {
    number: "03",
    title: "Connecting Web and Native Features",
    problem:
      "Web applications do not automatically have access to every native mobile capability.",
    solution:
      "Capacitor plugins bridge the React application with platform-specific functionality, including push notifications and system interface controls.",
  },
  {
    number: "04",
    title: "Application Build & Distribution",
    problem:
      "Turning a web application into installable mobile software requires platform-specific configuration and build processes.",
    solution:
      "Android Studio and Xcode are used alongside Capacitor to configure, build and prepare the application for mobile distribution.",
  },
];

export default function StaffAppCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111827] pt-20 text-white">
      <SEO
        title="Barber House Staff App — Cross-Platform Mobile Application | ForgeMind"
        description="Discover how the Barber House Staff App centralizes internal tools, simplifies communication and improves operational workflows for employees."
        path="/projects/staff-app"
      />  

      {/* NAVIGATION */}

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#172337] px-6 py-16 md:px-10 md:py-20">

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              CASE STUDY 02 / MOBILE APPLICATION
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Barber House
              <br />
              <span className="text-blue-400">Staff App.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-xl text-slate-300 md:text-2xl">
              Connecting people and processes.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
              A cross-platform employee application designed to centralize
              internal tools, simplify communication and improve everyday
              operational workflows.
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

            <div className="mt-12 flex flex-wrap items-center gap-4">

              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Ongoing Development
              </span>

              <span className="text-sm text-slate-400">
                Cross-platform mobile application
              </span>

            </div>

          </motion.div>

        </div>
      </section>

      {/* APP SHOWCASE */}

<StaffAppShowcase />

      {/* PROJECT OVERVIEW */}

      <section className="px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            THE CHALLENGE
          </p>

          <h2 className="mb-14 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Better internal tools.
            <br />
            Better everyday workflows.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-[#1B2940] p-6 md:p-8">

              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                01 / The Problem
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Information spread across different systems.
              </h3>

              <p className="leading-relaxed text-slate-300">
                Employees need access to different types of information,
                internal resources and operational tools.
              </p>

              <p className="mt-4 leading-relaxed text-slate-400">
                When these resources are distributed across multiple
                systems, everyday processes become less convenient and
                communication can become fragmented.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-400/20 bg-[#1B2940] p-6 md:p-8">

              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                02 / The Solution
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                One application connecting essential tools.
              </h3>

              <p className="leading-relaxed text-slate-300">
                The Barber House Staff App brings employee functionality
                together in a single mobile experience.
              </p>

              <p className="mt-4 leading-relaxed text-slate-400">
                Built with React, Capacitor and Supabase, the application
                combines a modern user interface with cloud services
                and native mobile capabilities.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-[#172337] px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            APPLICATION CAPABILITIES
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built for real-world use.
          </h2>

          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-400">
            A combination of web technologies, backend services and
            native integrations supports the employee experience.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="rounded-2xl border border-white/10 bg-[#1E2D43] p-6 md:p-7"
                >

                  <div className="mb-8 flex items-center justify-between">
                    <Icon size={28} className="text-blue-400" />

                    <span className="text-sm text-slate-500">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* TECHNICAL ARCHITECTURE */}

      <StaffAppArchitecture />

      {/* ENGINEERING CHALLENGES */}

      <section className="bg-[#172337] px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            ENGINEERING DECISIONS
          </p>

          <h2 className="mb-14 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Solving the challenges behind the app.
          </h2>

          <div className="grid gap-10 md:grid-cols-2">

            {challenges.map((challenge) => (
              <div
                key={challenge.number}
                className="border-t border-white/10 pt-8"
              >

                <span className="text-sm font-semibold text-blue-400">
                  {challenge.number}
                </span>

                <h3 className="mb-7 mt-5 text-2xl font-semibold">
                  {challenge.title}
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Challenge
                    </p>

                    <p className="leading-relaxed text-slate-300">
                      {challenge.problem}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                      Solution
                    </p>

                    <p className="leading-relaxed text-slate-300">
                      {challenge.solution}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESULT */}

      <section className="px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            THE OUTCOME
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            From a business need
            <br />
            to a working application.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            The Barber House Staff App demonstrates the development of
            a cross-platform mobile application built around practical
            operational requirements.
          </p>

<p className="mt-5 max-w-3xl leading-relaxed text-slate-400">
  The project includes a fully functional React application,
  Supabase integration, native mobile capabilities and working
  builds for both Android and iOS. The application runs on
  both platforms using a shared codebase powered by Capacitor.
</p>

          <div className="mt-12 flex flex-wrap gap-4">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1B2940] px-6 py-4">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="text-sm text-slate-200">
                React Application
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1B2940] px-6 py-4">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="text-sm text-slate-200">
                Android Build
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1B2940] px-6 py-4">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="text-sm text-slate-200">
                iOS Development
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#152238] px-6 py-10 md:px-10">

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