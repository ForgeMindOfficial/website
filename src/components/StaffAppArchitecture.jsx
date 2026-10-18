import { motion } from "motion/react";
import {
  Smartphone,
  Code2,
  Database,
  ShieldCheck,
  Bell,
  Server,
  ArrowDown,
  ArrowRight,
  Apple,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function ArchitectureCard({
  icon: Icon,
  label,
  title,
  description,
  accent = false,
  children,
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative rounded-2xl border p-5 md:p-6 ${
        accent
          ? "border-blue-400/30 bg-blue-400/[0.07]"
          : "border-white/10 bg-[#1B2940]"
      }`}
    >
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
          accent
            ? "bg-blue-400/15 text-blue-400"
            : "bg-white/5 text-slate-300"
        }`}
      >
        <Icon size={22} strokeWidth={1.7} />
      </div>

      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
        {label}
      </p>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      {children}
    </motion.div>
  );
}

function Connector({ label }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="h-6 w-px bg-gradient-to-b from-blue-400/10 to-blue-400/60" />

      <div className="flex items-center gap-2 text-blue-400">
        <ArrowDown size={17} strokeWidth={1.7} />
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export default function StaffAppArchitecture() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            TECHNICAL ARCHITECTURE
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            One codebase.
            <br />
            Multiple platforms.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            A shared React application connects to Supabase for backend
            services, while Capacitor provides native Android and iOS
            integration.
          </p>
        </div>

        {/* ARCHITECTURE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="rounded-3xl border border-white/10 bg-[#152238] p-5 md:p-10"
        >

          {/* APPLICATION */}

          <div className="mx-auto max-w-xl">
            <ArchitectureCard
              icon={Smartphone}
              label="APPLICATION"
              title="Barber House Staff App"
              description="One employee experience built around shared application logic and reusable components."
              accent
            />
          </div>

          <Connector />

          {/* FRONTEND */}

          <div className="mx-auto max-w-xl">
            <ArchitectureCard
              icon={Code2}
              label="FRONTEND"
              title="React + Vite"
              description="Application interface, navigation, reusable components and client-side functionality."
            />
          </div>

          <Connector label="Connects to services" />

          {/* BACKEND + NATIVE */}

          <div className="grid gap-5 md:grid-cols-2">

            {/* BACKEND */}

            <div>
              <ArchitectureCard
                icon={Database}
                label="CLOUD BACKEND"
                title="Supabase"
                description="Authentication, PostgreSQL database and server-side functionality."
              />

              <Connector />

              <div className="grid gap-3 sm:grid-cols-2">

                <ArchitectureCard
                  icon={ShieldCheck}
                  label="SECURITY"
                  title="Auth + RLS"
                  description="Authentication and row-level database access policies."
                />

                <ArchitectureCard
                  icon={Server}
                  label="BACKEND LOGIC"
                  title="Edge Functions"
                  description="Server-side operations and integrations."
                />

              </div>
            </div>

            {/* NATIVE */}

            <div>
              <ArchitectureCard
                icon={MonitorSmartphone}
                label="NATIVE BRIDGE"
                title="Capacitor"
                description="Connects the React application with native device functionality."
              />

              <Connector />

              <div className="grid gap-3 sm:grid-cols-2">

                <ArchitectureCard
                  icon={Smartphone}
                  label="PLATFORM"
                  title="Android"
                  description="Native Android configuration and build generation."
                />

                <ArchitectureCard
                  icon={Apple}
                  label="PLATFORM"
                  title="iOS"
                  description="Working native iOS application built with Capacitor and Xcode."
                />

              </div>
            </div>

          </div>

          {/* NOTIFICATIONS */}

          <div className="mt-6 border-t border-white/10 pt-6">

            <div className="mb-4 flex items-center gap-3">
              <Zap size={17} className="text-blue-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                CROSS-SYSTEM INTEGRATION
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">

              <ArchitectureCard
                icon={Server}
                label="BACKEND EVENTS"
                title="Application Logic"
                description="Backend operations can initiate notification delivery."
              />

              <div className="flex items-center justify-center text-blue-400">
                <ArrowRight
                  size={22}
                  className="hidden md:block"
                />

                <ArrowDown
                  size={22}
                  className="md:hidden"
                />
              </div>

              <ArchitectureCard
                icon={Bell}
                label="PUSH DELIVERY"
                title="Firebase Cloud Messaging"
                description="Delivers push messages to registered mobile devices."
                accent
              />

            </div>

          </div>

        </motion.div>

        {/* FOOTNOTE */}

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
          Architecture overview simplified for presentation. The
          application combines shared frontend code, cloud services and
          platform-specific native integrations.
        </p>

      </div>
    </section>
  );
}