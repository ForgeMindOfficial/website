import { motion } from "motion/react";
import { Smartphone, ArrowUpRight } from "lucide-react";

const screens = [
  {
    id: "dashboard",
    label: "01 / DASHBOARD",
    title: "Everything in one place.",
    description:
      "A centralized mobile experience connecting employees with their daily tools and information.",
    image: "/images/projects/staff-app/dashboard.png",
  },
  {
    id: "calendar",
    label: "02 / CALENDAR",
    title: "Plan your workday.",
    description:
      "A calendar experience for viewing schedules, shifts and important events.",
    image: "/images/projects/staff-app/calendar.png",
  },
  {
    id: "academy",
    label: "03 / ACADEMY",
    title: "Knowledge at your fingertips.",
    description:
      "An internal learning platform for training materials, service standards and product knowledge.",
    image: "/images/projects/staff-app/academy.png",
  },
  {
    id: "administration",
    label: "04 / ADMINISTRATION",
    title: "Manage everything in one place.",
    description:
      "Administrative tools for employee management, branch configuration and calendar integrations.",
    image: "/images/projects/staff-app/administration.png",
  },
];

function PhoneMockup({ screen }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
className="relative mx-auto w-full max-w-[220px] sm:max-w-[235px] xl:max-w-[245px]"
    >
      {/* DEVICE FRAME */}

      <div className="relative overflow-hidden rounded-[2.8rem] border-[7px] border-[#2C3545] bg-[#080D15] p-[3px] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">

        {/* SCREEN */}

<div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-[#111827]">

  {/* BLURRED BACKGROUND */}

  <img
    src={screen.image}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl opacity-30"
    loading="lazy"
  />

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-[#111827]/40" />

  {/* COMPLETE SCREENSHOT */}

  <img
    src={screen.image}
    alt={`${screen.title} — Barber House Staff App`}
    className="relative z-10 h-full w-full object-contain object-center"
    loading="lazy"
  />

  {/* CAMERA ISLAND */}

  <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#080D15]" />

</div>

      </div>

      {/* DEVICE SHADOW */}

      <div className="pointer-events-none absolute -bottom-5 left-1/2 h-10 w-4/5 -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />

    </motion.div>
  );
}

export default function StaffAppShowcase() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#111827] px-6 py-16 md:px-10 md:py-20">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <div className="mb-12">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            THE APPLICATION
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Designed for the people who use it.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A mobile-first experience that brings employee tools,
            information and communication together.
          </p>

        </div>

        {/* PHONES */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">

          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >

             <PhoneMockup screen={screen} />

              {/* DESCRIPTION */}

              <div className="mt-10 w-full max-w-[300px]">

                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                  {screen.label}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {screen.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {screen.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}