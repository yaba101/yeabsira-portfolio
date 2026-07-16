"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  siFigma,
  siD3,
  siGithub,
  siJavascript,
  siNextdotjs,
  siPosthog,
  siReact,
  siResend,
  siSentry,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CloudSun,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  Moon,
  Sun,
  X,
} from "@phosphor-icons/react"

import { CAPABILITY_ICONS } from "@/lib/capability-icons"
import {
  ABOUT_META,
  APPROACH_STEPS,
  CAPABILITIES,
  NAV_LINKS,
  PRACTICE_AREAS,
  PROFILE,
  PROJECTS,
  STACK_PANES,
} from "@/lib/content"
import type { WeatherDisplay } from "@/app/api/weather/route"

function BrandIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: SimpleIcon
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  )
}

const TOOL_ICONS = [
  siNextdotjs,
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siFigma,
  siD3,
  siResend,
  siPosthog,
  siSentry,
] as const

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({
  number,
  label,
  aside,
  children,
}: {
  number: string
  label: string
  aside?: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <div className="mb-14 grid gap-8 pt-5 md:mb-24 md:grid-cols-[.7fr_3fr]">
        <div className="flex gap-8 font-mono text-xs text-[var(--muted)]">
          <span className="text-[var(--orange)]">{number}</span>
          <span>{label}</span>
        </div>
        <div>
          {aside && (
            <p className="mb-5 font-mono text-xs text-[var(--muted)]">
              {aside}
            </p>
          )}
          <h2 className="max-w-[980px] text-[clamp(2.4rem,4.25vw,4rem)] leading-[1.06] font-normal tracking-[-.04em]">
            {children}
          </h2>
        </div>
      </div>
    </Reveal>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,backdrop-filter] duration-500 ${scrolled || open ? "bg-[rgba(245,245,240,.92)] text-[var(--ink)] shadow-[0_5px_18px_rgba(66,52,39,.06)] backdrop-blur-xl" : "text-[var(--cream)]"}`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16" : "h-20"}`}
      >
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {PROFILE.name}
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-75 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-current px-5 py-2 text-sm transition-transform active:scale-[.98] md:block"
        >
          Let&apos;s talk
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 mb-3 rounded-xl border bg-[var(--paper)] p-5 text-[var(--ink)] md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--line)] py-3"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-[var(--orange)]"
          >
            Let&apos;s talk →
          </a>
        </nav>
      )}
    </header>
  )
}

function CareerCard() {
  return (
    <aside
      className="relative w-full max-w-[380px] overflow-hidden rounded-2xl bg-[rgba(17,17,14,.72)] p-2 text-white shadow-[0_8px_28px_rgba(0,0,0,.18)] backdrop-blur-lg"
      aria-label="Career snapshot"
    >
      <div
        className="profile-orbit absolute -top-20 -right-16 h-52 w-52 rounded-full"
        aria-hidden
      />
      <div className="relative grid grid-cols-2 gap-2">
        <div className="col-span-2 rounded-xl bg-[rgba(244,242,233,.075)] p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[.14em] text-white/45 uppercase">
            <span>Current chapter</span>
            <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
          </div>
          <p className="mt-8 text-2xl font-light tracking-[-.025em]">
            Frontend Product Engineer
          </p>
          <p className="mt-2 text-sm text-white/48">
            Next.js · React · Product UI
          </p>
        </div>
        <div className="rounded-xl bg-[rgba(239,77,8,.13)] p-4">
          <p className="font-mono text-[9px] tracking-wider text-white/40 uppercase">
            Experience
          </p>
          <p className="mt-5 text-3xl font-light">
            4<span className="text-[var(--orange)]">+</span>
          </p>
          <p className="mt-1 text-xs text-white/42">years shipping UI</p>
        </div>
        <div className="rounded-xl bg-[rgba(244,242,233,.06)] p-4">
          <p className="font-mono text-[9px] tracking-wider text-white/40 uppercase">
            Based in
          </p>
          <p className="mt-5 text-lg">Addis Ababa</p>
          <p className="mt-1 text-xs text-white/42">Ethiopia · Remote</p>
        </div>
        <a
          href={PROFILE.github}
          className="col-span-2 flex items-center justify-between rounded-xl bg-[var(--orange)] px-4 py-3 text-sm text-white transition-colors hover:bg-[#d94306]"
        >
          <span>Explore my code</span>
          <BrandIcon icon={siGithub} className="h-[18px] w-[18px]" />
        </a>
      </div>
    </aside>
  )
}

function Hero() {
  const [night, setNight] = useState(false)
  const [weather, setWeather] = useState<WeatherDisplay>({
    city: "Addis Ababa",
    country: "ET",
    temperature: 65,
    description: "Partly cloudy",
  })
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setNight(localStorage.getItem("hero-lighting") === "night")
    })
    fetch("/api/weather")
      .then((r) => r.json())
      .then(setWeather)
      .catch(() => undefined)
    return () => cancelAnimationFrame(frame)
  }, [])
  const toggle = () =>
    setNight((value) => {
      localStorage.setItem("hero-lighting", value ? "day" : "night")
      return !value
    })
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--night)] text-[var(--cream)]"
    >
      <video
        key={night ? "night" : "day"}
        autoPlay
        muted
        loop
        playsInline
        poster={
          night
            ? "/assets/hero-night-poster.webp"
            : "/assets/hero-day-poster.webp"
        }
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={
            night
              ? "/assets/hero-night-video.mp4"
              : "/assets/hero-background-video.mp4"
          }
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/48" />
      <div className="shell relative z-10 flex min-h-[100dvh] flex-col justify-between pt-28 pb-8">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1fr_360px]">
          <motion.div
            className="relative z-0"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-7 font-mono text-xs tracking-[.16em] text-white/70 uppercase">
              Frontend Product Engineer · Next.js
            </p>
            <h1 className="display max-w-4xl text-[clamp(3.5rem,7.8vw,6rem)] font-light">
              Product interfaces,
              <br />
              thoughtfully built,
              <br />
              ready for real users.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              I&apos;m {PROFILE.name}, a frontend product engineer building
              responsive, production-ready experiences with Next.js, React, and
              TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[var(--orange)] px-6 py-3 text-sm text-white"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[rgba(239,77,8,.42)] bg-black/15 px-6 py-3 text-sm backdrop-blur-sm transition-colors hover:bg-black/30"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
          <div className="flex flex-col items-end gap-4">
            <button
              type="button"
              onClick={toggle}
              role="switch"
              aria-checked={night}
              aria-label={`Background lighting: ${night ? "night" : "day"}. Switch to ${night ? "day" : "night"}.`}
              className="flex items-center gap-3 rounded-full border border-[rgba(239,77,8,.35)] bg-black/35 p-1.5 pr-4 text-xs backdrop-blur-md"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                {night ? <Moon size={17} /> : <Sun size={17} />}
              </span>
              {night ? "Night" : "Day"}
            </button>
            <CareerCard />
          </div>
        </div>
        <div className="hero-status grid gap-3 px-4 py-3.5 font-mono text-[10px] tracking-[.08em] text-white/85 uppercase md:grid-cols-[1fr_auto_1fr] md:items-center">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
            Open to frontend product opportunities
          </span>
          <span className="hidden items-center gap-2 text-white/55 md:flex">
            Explore <ArrowDown />
          </span>
          <span className="flex items-center gap-2 md:justify-self-end">
            <CloudSun size={16} className="text-[var(--orange)]" />
            {weather.description} · {weather.city}, {weather.country} ·{" "}
            {weather.temperature}°F
          </span>
        </div>
      </div>
    </section>
  )
}

function PracticeStrip() {
  return (
    <section aria-label="Practice areas" className="bg-[var(--paper)] py-3">
      <div className="shell grid gap-2 md:grid-cols-5">
        {PRACTICE_AREAS.map((item) => (
          <div key={item.k} className="flex gap-4 px-3 py-5 text-xs first:pl-0">
            <span className="font-mono text-[var(--muted)]">{item.k}</span>
            <span>{item.v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SelectedWork() {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)
  const project = PROJECTS[active]
  const selectProject = (index: number) => {
    setActive(index)
    setCycle((value) => value + 1)
  }
  const move = (delta: number) =>
    selectProject((active + delta + PROJECTS.length) % PROJECTS.length)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % PROJECTS.length)
      setCycle((value) => value + 1)
    }, 6000)
    return () => window.clearTimeout(timer)
  }, [cycle])
  return (
    <section id="work" className="section-pad">
      <div className="shell">
        <SectionHeading
          number="01"
          label="Selected work"
          aside="Product surfaces"
        >
          Frontend work shaped around complex journeys, clear interaction, and
          production quality.
        </SectionHeading>
        <div className="grid items-stretch gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
          <div className="flex min-h-[540px] flex-col justify-between rounded-xl bg-[var(--soft)] p-5">
            <div role="tablist" aria-label="Project list">
              {PROJECTS.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  role="tab"
                  aria-selected={active === index}
                  onClick={() => selectProject(index)}
                  className={`group flex w-full items-center gap-4 rounded-lg px-2 py-3.5 text-left text-[15px] transition-colors ${active === index ? "bg-[var(--paper)] text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-[11px]">
                    {item.index}
                    {active === index && (
                      <span
                        key={`${active}-${cycle}`}
                        className="project-timer absolute inset-0 rounded-full"
                        aria-hidden
                      />
                    )}
                  </span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--canvas)] p-3">
              <span className="font-mono text-[10px] text-[var(--muted)]">
                Auto advance · 6 sec
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => move(-1)}
                  className="grid h-12 w-12 place-items-center rounded-full border transition-colors hover:bg-[var(--ink)] hover:text-white"
                >
                  <ArrowLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => move(1)}
                  className="grid h-12 w-12 place-items-center rounded-full border transition-colors hover:bg-[var(--ink)] hover:text-white"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div aria-live="polite" className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid min-h-[540px] overflow-hidden rounded-xl border bg-[var(--paper)] md:grid-cols-2"
              >
                <div className="relative min-h-[330px] bg-neutral-200 md:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-7 md:p-9">
                  <div className="flex justify-between font-mono text-xs text-[var(--muted)]">
                    <span>/ {project.index}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="my-auto py-10">
                    <h3 className="text-[clamp(1.8rem,2.7vw,2.65rem)] leading-tight tracking-[-.035em]">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-7 text-[var(--body)]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1 font-mono text-[10px] tracking-[.1em] text-[var(--body)] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[var(--soft)] px-4 py-3">
                    <a href={project.href} className="font-medium">
                      View case study <ArrowUpRight className="inline" />
                    </a>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section id="capabilities" className="section-pad bg-[var(--paper)]">
      <div className="shell">
        <SectionHeading number="02" label="Capabilities" aside="What I bring">
          Frontend engineering that connects product intent, interface craft,
          and dependable delivery.
        </SectionHeading>
        <div className="grid gap-3 md:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[index]
            return (
              <Reveal
                key={capability.title}
                className="rounded-xl bg-[var(--canvas)] p-6"
              >
                <div className="mb-20 flex items-start justify-between">
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {capability.num}
                  </span>
                  <div className="h-12 w-12 text-[var(--orange)]">
                    <Icon />
                  </div>
                </div>
                <h3 className="text-2xl tracking-tight">{capability.title}</h3>
                <p className="mt-4 leading-relaxed text-[var(--body)]">
                  {capability.body}
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-y-2 rounded-lg bg-[var(--soft)] p-4 text-xs text-[var(--muted)]">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section
      id="process"
      className="section-pad overflow-hidden bg-[var(--ink)] text-[var(--cream)]"
    >
      <div className="shell">
        <SectionHeading number="03" label="Approach" aside="How I work">
          Four deliberate moves from a loose idea to a product that feels
          inevitable.
        </SectionHeading>
        <ol className="grid gap-px overflow-hidden rounded-xl bg-white/[.08] md:grid-cols-2">
          {APPROACH_STEPS.map((step, index) => (
            <motion.li
              key={step.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[320px] bg-[var(--ink)] p-7 md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[var(--orange)]">
                  0{index + 1}
                </span>
                <span className="font-mono text-[10px] text-white/25">
                  {index === 0
                    ? "Define"
                    : index === 1
                      ? "Reduce"
                      : index === 2
                        ? "Build"
                        : "Refine"}
                </span>
              </div>
              <div className="absolute inset-x-7 bottom-8 md:inset-x-9">
                <h3 className="max-w-sm text-2xl leading-tight tracking-[-.03em] md:text-3xl">
                  {step.t}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                  {step.d}
                </p>
              </div>
              <span className="absolute right-0 bottom-0 h-px w-0 bg-[var(--orange)] transition-[width] duration-500 group-hover:w-full" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section
      id="stack"
      className="section-pad bg-[var(--night)] text-[var(--cream)]"
    >
      <div className="shell">
        <SectionHeading number="04" label="Stack" aside="Tools I use">
          A focused frontend toolkit for building, measuring, and improving real
          product experiences.
        </SectionHeading>
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h3 className="display text-5xl font-light">
              Familiar tools,
              <br />
              used with care.
            </h3>
            <p className="mt-6 max-w-md leading-relaxed text-white/55">
              Next.js, React, and TypeScript form the foundation. Tailwind,
              TanStack Query, PostHog, and Sentry carry the experience from
              interface design through reliable production delivery.
            </p>
            <div className="mt-8 flex max-w-md flex-wrap gap-2">
              {TOOL_ICONS.map((icon) => (
                <div
                  key={icon.slug}
                  title={icon.title}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(244,242,233,.06)] text-white/55 transition-colors hover:bg-[rgba(239,77,8,.12)] hover:text-[var(--orange)]"
                >
                  <BrandIcon icon={icon} className="h-[18px] w-[18px]" />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-[rgba(239,77,8,.045)] p-2">
            <div className="flex items-center gap-2 px-4 py-3">
              <i className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <i className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <i className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-4 font-mono text-[10px] text-white/40">
                ~/yeabsira-mekuria / stack.config.ts
              </span>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {STACK_PANES.map((pane) => (
                <div
                  key={pane.title}
                  className="rounded-lg bg-[rgba(244,242,233,.045)] p-5"
                >
                  <h4 className="mb-5 font-mono text-xs text-[var(--orange)]">
                    {pane.title}
                  </h4>
                  <ul className="space-y-3">
                    {pane.items.map(([name, tag]) => (
                      <li key={name} className="flex justify-between text-sm">
                        <span>{name}</span>
                        <span className="font-mono text-[10px] text-white/35">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutContact() {
  const experience = [
    {
      role: "Lead Frontend Engineer",
      company: "adavia",
      period: "2024 — 2026",
      place: "Austin, US · Remote",
    },
    {
      role: "Frontend Developer",
      company: "Tobia.io",
      period: "2023",
      place: "Poland · Remote",
    },
    {
      role: "Junior Frontend Developer",
      company: "Mereb Technology",
      period: "2022 — 2023",
      place: "Addis Ababa",
    },
  ]
  return (
    <>
      <section id="about" className="section-pad">
        <div className="shell">
          <div className="grid gap-12 pt-6 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="font-mono text-xs text-[var(--muted)]">
                05 · Profile
              </p>
              <h2 className="mt-8 max-w-md text-[clamp(2.2rem,4vw,3.7rem)] leading-[1.04] tracking-[-.04em]">
                Frontend engineering with product ownership built in.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-[var(--body)]">
                I&apos;m Yeabsira Mekuria, a frontend developer based in Addis
                Ababa. I build Next.js and React products where complex
                workflows need to become clear, responsive interfaces. At
                adavia, I led frontend and UI/UX execution across an AI-assisted
                citizenship platform from the ground up.
              </p>
            </div>
            <div>
              <p className="mb-5 font-mono text-xs text-[var(--muted)]">
                Experience
              </p>
              <ol className="space-y-2">
                {experience.map((item) => (
                  <li
                    key={item.company}
                    className="grid gap-2 rounded-xl bg-[var(--soft)] p-5 md:grid-cols-[1.2fr_.6fr_.8fr]"
                  >
                    <div>
                      <h3 className="font-medium">{item.role}</h3>
                      <p className="mt-1 text-sm text-[var(--orange)]">
                        {item.company}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-[var(--muted)]">
                      {item.period}
                    </p>
                    <p className="text-sm text-[var(--body)] md:text-right">
                      {item.place}
                    </p>
                  </li>
                ))}
              </ol>
              <dl className="mt-10 grid gap-2 md:grid-cols-2">
                {ABOUT_META.map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-lg bg-[var(--canvas)] p-4 text-sm"
                  >
                    <dt className="mb-2 font-mono text-[10px] text-[var(--muted)]">
                      {key}
                    </dt>
                    <dd className="leading-6">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative overflow-hidden bg-[var(--orange)] py-24 text-white md:py-36"
      >
        <Image
          src="/assets/contact-cover-image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20 mix-blend-multiply"
        />
        <div className="shell relative">
          <p className="font-mono text-xs">06 · Contact</p>
          <h2 className="display mt-10 max-w-5xl text-5xl font-light md:text-7xl">
            Building a product that needs a thoughtful frontend?
          </h2>
          <p className="mt-7 max-w-xl text-white/75">
            I&apos;m interested in frontend product roles and work where
            interface quality, responsive behavior, and reliable delivery
            matter.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-white px-6 py-3 text-sm text-[var(--orange)]"
            >
              Start a conversation
            </a>
            <a
              href={PROFILE.github}
              className="rounded-full bg-black/15 px-6 py-3 text-sm backdrop-blur-sm transition-colors hover:bg-black/25"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--night-soft)] pt-20 text-[var(--cream)]">
      <div className="shell">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <p className="font-mono text-xs text-white/40">
              Have something worth building?
            </p>
            <h2 className="mt-6 max-w-3xl text-[clamp(2.6rem,5.5vw,5rem)] leading-[.98] tracking-[-.04em]">
              Let&apos;s turn the idea into something people can use.
            </h2>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--orange)] px-6 py-3 text-sm text-white transition-transform active:scale-[.98]"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="flex flex-col justify-between gap-12 lg:items-end">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--night-line)] bg-[rgba(239,77,8,.035)] px-4 py-2 text-xs text-white/65">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to frontend product opportunities
            </div>
            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55 lg:justify-end"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2">
              {[
                [GithubLogo, "GitHub", PROFILE.github],
                [LinkedinLogo, "LinkedIn", PROFILE.linkedin],
                [EnvelopeSimple, "Email", `mailto:${PROFILE.email}`],
              ].map(([Icon, label, href]) => (
                <a
                  key={label as string}
                  href={href as string}
                  aria-label={label as string}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--night-line)] bg-[rgba(239,77,8,.025)] text-white/60 transition-colors hover:border-[rgba(239,77,8,.55)] hover:bg-[rgba(239,77,8,.08)] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-wave" aria-hidden />
        <div className="flex flex-col gap-3 py-5 font-mono text-[10px] text-white/35 md:flex-row md:justify-between">
          <span>© 2026 Yeabsira Mekuria · Addis Ababa, ET</span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top <ArrowUpRight size={13} className="-rotate-45" />
          </a>
        </div>
      </div>
      <a
        href="#top"
        className="block px-4 pt-5 text-center text-[clamp(5rem,18vw,17rem)] leading-[.72] font-semibold tracking-[-.075em] text-[rgba(239,77,8,.07)] transition-colors hover:text-[rgba(239,77,8,.11)]"
        aria-label="Yeabsira Mekuria, back to top"
      >
        YEABSIRA MEKURIA
      </a>
    </footer>
  )
}

export function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeStrip />
        <SelectedWork />
        <Capabilities />
        <Approach />
        <Stack />
        <AboutContact />
      </main>
      <Footer />
    </>
  )
}
