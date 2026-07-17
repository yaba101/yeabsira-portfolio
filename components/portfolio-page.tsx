"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react"
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
  ArrowRight,
  ArrowUpRight,
  CloudSun,
  Check,
  CaretLeft,
  CaretRight,
  EnvelopeSimple,
  List,
  LinkedinLogo,
  Moon,
  ShieldCheck,
  Sun,
  X,
} from "@phosphor-icons/react"

import { CAPABILITY_ICONS } from "@/lib/capability-icons"
import { CommandPalette } from "@/components/command-palette"
import {
  ABOUT_META,
  CAPABILITIES,
  FIELD_NOTES,
  NAV_LINKS,
  PRACTICE_AREAS,
  PROFILE,
  PROJECTS,
  STACK_PANES,
} from "@/lib/content"
import type { WeatherDisplay } from "@/lib/weather"

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

const CAPABILITY_BRANDS = [
  [siNextdotjs, siReact, siTypescript],
  [siFigma, siReact, siD3],
  [siPosthog, siSentry, siTypescript],
] as const

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
    <div className="mb-14 grid gap-8 pt-5 md:mb-24 md:grid-cols-[.7fr_3fr]">
      <div className="flex gap-8 font-mono text-xs text-[var(--muted)]">
        <span className="text-[var(--orange)]">{number}</span>
        <span>{label}</span>
      </div>
      <div>
        {aside && (
          <p className="mb-5 font-mono text-xs text-[var(--muted)]">{aside}</p>
        )}
        <h2 className="max-w-[980px] text-[clamp(2.4rem,4.25vw,4rem)] leading-[1.06] font-normal tracking-[-.04em]">
          {children}
        </h2>
      </div>
    </div>
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
        <a
          href="#top"
          aria-label={`${PROFILE.name}, back to top`}
          className="group flex items-center gap-3"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-[var(--ink)] text-[11px] font-semibold tracking-[-.03em] text-[var(--cream)] shadow-[0_4px_14px_rgba(0,0,0,.14)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
            YM
            <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[var(--orange)]" />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-semibold tracking-[-.02em]">
              Yeabsira
            </span>
            <span className="mt-1 block font-mono text-[8px] tracking-[.12em] uppercase opacity-55">
              Product engineer
            </span>
          </span>
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
        <CommandPalette />
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

function Hero({ initialWeather }: { initialWeather: WeatherDisplay }) {
  const [night, setNight] = useState(false)
  const reducedMotion = useReducedMotion()
  const weather = initialWeather
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setNight(localStorage.getItem("hero-lighting") === "night")
    })
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
        aria-hidden="true"
        tabIndex={-1}
        key={night ? "night" : "day"}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
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
          <m.div
            className="relative z-0"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-7 font-mono text-xs tracking-[.16em] text-white/70 uppercase">
              Frontend Product Engineer · Next.js
            </p>
            <h1 className="hero-title display max-w-4xl text-[clamp(3.5rem,7.8vw,6rem)] font-normal text-white">
              Product interfaces,
              <br />
              thoughtfully built,
              <br />
              ready for real users.
            </h1>
            <p className="hero-body mt-7 max-w-xl text-base leading-relaxed text-white md:text-lg">
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
          </m.div>
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
  const carouselRef = useRef<HTMLFieldSetElement>(null)
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [hoverPaused, setHoverPaused] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const reduced = useReducedMotion()
  const paused = hoverPaused || focusPaused || !pageVisible || Boolean(reduced)
  const project = PROJECTS[active]
  const selectProject = (index: number) => {
    setActive(index)
    setCycle((value) => value + 1)
  }
  const move = (delta: number) =>
    selectProject((active + delta + PROJECTS.length) % PROJECTS.length)
  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % PROJECTS.length)
      setCycle((value) => value + 1)
    }, 6000)
    return () => window.clearTimeout(timer)
  }, [cycle, paused])
  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === "visible")
    document.addEventListener("visibilitychange", update)
    return () => document.removeEventListener("visibilitychange", update)
  }, [])
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const focusIn = () => setFocusPaused(true)
    const focusOut = (event: FocusEvent) => {
      if (!carousel.contains(event.relatedTarget as Node | null))
        setFocusPaused(false)
    }
    carousel.addEventListener("focusin", focusIn)
    carousel.addEventListener("focusout", focusOut)
    return () => {
      carousel.removeEventListener("focusin", focusIn)
      carousel.removeEventListener("focusout", focusOut)
    }
  }, [])
  return (
    <section id="work" className="section-pad" aria-label="Selected work">
      <div className="shell">
        <SectionHeading
          number="01"
          label="Selected work"
          aside="Product surfaces"
        >
          Frontend work shaped around complex journeys, clear interaction, and
          production quality.
        </SectionHeading>
        <fieldset
          ref={carouselRef}
          aria-label="Project carousel"
          className="grid items-stretch gap-8 lg:grid-cols-[330px_minmax(0,1fr)]"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault()
              move(1)
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault()
              move(-1)
            }
          }}
        >
          <div className="flex min-h-[540px] flex-col justify-between rounded-xl bg-[var(--soft)] p-5">
            <div role="tablist" aria-label="Project list">
              {PROJECTS.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  role="tab"
                  id={`project-tab-${index}`}
                  aria-controls={`project-panel-${index}`}
                  aria-selected={active === index}
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => {
                    setFocusPaused(true)
                    selectProject(index)
                  }}
                  className={`group flex w-full items-center gap-4 rounded-lg px-2 py-3.5 text-left text-[15px] transition-colors ${active === index ? "bg-[var(--paper)] text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-[11px]">
                    {item.index}
                    {active === index && (
                      <span
                        key={`${active}-${cycle}`}
                        className={`project-timer absolute inset-0 rounded-full ${paused ? "paused" : ""}`}
                        aria-hidden
                      />
                    )}
                  </span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-1">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => {
                  setFocusPaused(true)
                  move(-1)
                }}
                className="grid size-10 place-items-center text-[var(--muted)] transition-[color,transform] hover:-translate-x-0.5 hover:text-[var(--ink)]"
              >
                <CaretLeft size={22} weight="bold" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => {
                  setFocusPaused(true)
                  move(1)
                }}
                className="grid size-10 place-items-center text-[var(--muted)] transition-[color,transform] hover:translate-x-0.5 hover:text-[var(--ink)]"
              >
                <CaretRight size={22} weight="bold" />
              </button>
            </div>
          </div>
          <div
            id={`project-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`project-tab-${active}`}
            aria-live="polite"
            className="min-w-0"
          >
            <AnimatePresence mode="wait">
              <m.article
                key={project.title}
                initial={reduced ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -12 }}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
              </m.article>
            </AnimatePresence>
          </div>
        </fieldset>
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
        <div className="space-y-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[index]
            return (
              <article
                key={capability.title}
                className="grid gap-8 rounded-xl bg-[var(--canvas)] p-6 md:grid-cols-[90px_1fr_1.05fr] md:items-center md:p-8"
              >
                <div className="flex items-center justify-between md:block">
                  <span className="font-mono text-xs text-[var(--orange)]">
                    0{index + 1}
                  </span>
                  <div className="mt-0 size-11 text-[var(--orange)] md:mt-8">
                    <Icon />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl tracking-[-.03em] md:text-3xl">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-6 text-[var(--body)]">
                    {capability.body}
                  </p>
                  <div className="mt-5 flex gap-2">
                    {CAPABILITY_BRANDS[index].map((icon) => (
                      <span
                        key={icon.slug}
                        title={icon.title}
                        className="grid size-9 place-items-center rounded-lg bg-[var(--soft)] text-[var(--muted)]"
                      >
                        <BrandIcon icon={icon} className="size-4" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-[var(--soft)] p-5">
                  <p className="font-mono text-[9px] tracking-[.12em] text-[var(--orange)] uppercase">
                    Project evidence
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--body)]">
                    {capability.evidence}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {capability.items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-[var(--paper)] px-3 py-1.5 text-[10px] text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

type InspectorContrast = "original" | "AA" | "AAA"
const NOTE_FILTERS = ["All", "Building", "Learning", "Decision"] as const

export function InterfaceInspector() {
  const [contrast, setContrast] = useState<InspectorContrast>("AA")
  const modes = {
    original: {
      score: "3.8:1",
      status: "Fails",
      color: "#8b8880",
      surface: "#eeeeea",
      note: "Body copy is too faint on the surface.",
    },
    AA: {
      score: "5.8:1",
      status: "AA pass",
      color: "#55524c",
      surface: "#eeeee8",
      note: "Adjusted body ink reaches the 4.5:1 requirement.",
    },
    AAA: {
      score: "9.2:1",
      status: "AAA pass",
      color: "#36342f",
      surface: "#e9e8e2",
      note: "Stronger ink creates comfortable high contrast.",
    },
  } as const
  const mode = modes[contrast]

  return (
    <section
      id="inspector"
      className="section-pad overflow-hidden bg-[var(--ink)] text-[var(--cream)]"
    >
      <div className="shell">
        <SectionHeading
          number="03"
          label="Interface inspector"
          aside="Try the details"
        >
          Good interfaces should survive more than the happy path.
        </SectionHeading>

        <div className="inspector-shell mt-10 overflow-hidden rounded-2xl bg-[#181914]">
          <div className="flex flex-col gap-4 bg-white/[.035] px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-[var(--orange)] text-white">
                <ShieldCheck size={19} />
              </span>
              <div>
                <p className="text-sm font-medium">Product quality lab</p>
                <p className="font-mono text-[9px] text-white/38">
                  LIVE CONTRAST DEMONSTRATION
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label
                htmlFor="contrast-mode"
                className="font-mono text-[9px] text-white/38"
              >
                APPLY STANDARD
              </label>
              <select
                id="contrast-mode"
                value={contrast}
                onChange={(event) =>
                  setContrast(event.target.value as InspectorContrast)
                }
                className="min-w-[170px] rounded-lg bg-white/[.07] px-3 py-2.5 text-xs text-white outline-none focus:ring-2 focus:ring-[var(--orange)]"
              >
                <option value="original">Original · 3.8:1</option>
                <option value="AA">WCAG AA · 5.8:1</option>
                <option value="AAA">WCAG AAA · 9.2:1</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="relative grid min-h-[560px] place-items-center overflow-hidden bg-[#11120f] p-5 md:p-10">
              <div className="inspector-glow absolute inset-0" aria-hidden />
              <m.div
                layout
                className="relative w-full max-w-[760px] overflow-hidden rounded-xl bg-[var(--paper)] text-[var(--ink)] shadow-2xl shadow-black/30"
              >
                <div className="flex items-center justify-between bg-[var(--soft)] px-4 py-3">
                  <span className="font-mono text-[.62em] text-[var(--muted)]">
                    ELIGIBILITY CHECK
                  </span>
                  <span className="text-[.68em] text-[var(--orange)]">
                    Step 2 of 3
                  </span>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_.7fr] md:p-8">
                  <div>
                    <p className="text-[.7em] font-medium text-[var(--orange)]">
                      Family information
                    </p>
                    <h3 className="mt-2 text-[1.45em] leading-tight tracking-[-.03em]">
                      Where was your parent born?
                    </h3>
                    <p
                      className="mt-3 text-[.78em] leading-6 transition-colors duration-300"
                      style={{ color: mode.color }}
                    >
                      This helps us understand which citizenship pathway may
                      apply to you.
                    </p>
                    <label
                      className="mt-6 block text-[.72em] font-medium"
                      htmlFor="demo-country"
                    >
                      Country of birth
                    </label>
                    <select
                      id="demo-country"
                      aria-describedby="demo-help"
                      className="mt-2 w-full rounded-lg bg-[var(--canvas)] px-3 py-3 text-[.78em] ring-2 ring-transparent outline-none focus:ring-[var(--orange)]"
                    >
                      <option>Select a country</option>
                      <option>Ethiopia</option>
                    </select>
                    <p
                      id="demo-help"
                      className="mt-2 text-[.65em] transition-colors duration-300"
                      style={{ color: mode.color }}
                    >
                      Use the country shown on the birth certificate.
                    </p>
                    <button
                      type="button"
                      className="mt-6 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-4 py-3 text-[.75em] font-medium text-white"
                    >
                      Continue <ArrowRight size={15} />
                    </button>
                  </div>
                  <div
                    className="rounded-lg p-5 transition-colors duration-300"
                    style={{ backgroundColor: mode.surface }}
                  >
                    <p className="font-mono text-[.58em] text-[var(--muted)]">
                      WHY WE ASK
                    </p>
                    <p className="mt-4 text-[.8em] leading-6">
                      Citizenship rules can depend on a parent&apos;s birthplace
                      and date of birth.
                    </p>
                    <div
                      className="mt-6 space-y-3 text-[.68em] transition-colors duration-300"
                      style={{ color: mode.color }}
                    >
                      <p className="flex gap-2">
                        <Check className="mt-0.5 text-[var(--orange)]" />
                        Your answer is saved securely
                      </p>
                      <p className="flex gap-2">
                        <Check className="mt-0.5 text-[var(--orange)]" />
                        You can edit it later
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>

            <aside
              aria-label="Live quality checks"
              className="bg-black/10 p-5 md:p-7"
            >
              <p className="font-mono text-[9px] tracking-[.12em] text-white/38 uppercase">
                Live inspection
              </p>
              <div className="mt-6">
                <p className="text-5xl tracking-[-.05em] text-white">
                  {mode.score}
                </p>
                <p className="mt-1 text-xs text-white/42">
                  Text contrast ratio
                </p>
              </div>
              <div
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] ${contrast === "original" ? "bg-red-500/12 text-red-300" : "bg-emerald-400/10 text-emerald-300"}`}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {mode.status}
              </div>
              <p className="mt-6 text-xs leading-5 text-white/48">
                {mode.note}
              </p>
              <div className="mt-8 space-y-3">
                <p className="font-mono text-[9px] text-white/35">
                  WHAT CHANGED
                </p>
                <div className="rounded-lg bg-white/[.035] p-3">
                  <p className="text-[10px] text-white/35">Body text token</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="size-7 rounded-md bg-[#8b8880]" />
                    <ArrowRight size={13} className="text-white/25" />
                    <m.span
                      layout
                      className="size-7 rounded-md"
                      style={{ backgroundColor: mode.color }}
                    />
                    <span className="font-mono text-[9px] text-white/45">
                      {mode.color}
                    </span>
                  </div>
                </div>
                <div className="rounded-lg bg-white/[.035] p-3">
                  <p className="text-[10px] text-white/35">Affected elements</p>
                  <p className="mt-2 text-xs leading-5 text-white/65">
                    Description, helper text, and supporting panel copy.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
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

function FieldNotes() {
  const [filter, setFilter] = useState("All")
  const visibleNotes =
    filter === "All"
      ? FIELD_NOTES
      : FIELD_NOTES.filter((note) => note.type === filter)

  return (
    <section id="notes" className="section-pad bg-[var(--paper)]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs text-[var(--orange)]">
              FIELD NOTES
            </p>
            <h2 className="mt-7 max-w-md text-[clamp(2.8rem,5vw,5.5rem)] leading-[.94] tracking-[-.04em]">
              Currently on my desk.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-[var(--body)]">
              A living record of what I&apos;m building, learning, questioning,
              and improving. This is not a polished after-the-fact blog.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Filter field notes"
            >
              {NOTE_FILTERS.map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-xs transition-colors ${filter === item ? "bg-[var(--ink)] text-white" : "bg-[var(--soft)] text-[var(--body)] hover:text-[var(--ink)]"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="min-h-[570px]">
            <AnimatePresence mode="popLayout">
              {visibleNotes.map((note) => (
                <m.article
                  layout
                  key={note.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="group grid gap-5 py-7 first:pt-0 md:grid-cols-[110px_1fr_auto] md:items-start"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[var(--orange)]">
                      {note.date}
                    </span>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      {note.type}
                    </p>
                  </div>
                  <div>
                    <h3 className="max-w-2xl text-2xl leading-tight tracking-[-.03em] transition-colors group-hover:text-[var(--orange)] md:text-3xl">
                      {note.title}
                    </h3>
                    <p className="mt-4 max-w-2xl leading-7 text-[var(--body)]">
                      {note.summary}
                    </p>
                    <div className="mt-5 flex gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--soft)] px-3 py-1.5 font-mono text-[9px] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="grid size-10 place-items-center rounded-lg bg-[var(--soft)] text-[var(--muted)] transition-[color,transform] group-hover:-translate-y-1 group-hover:bg-[var(--orange)] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </m.article>
              ))}
            </AnimatePresence>
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
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-grid min-w-[290px] grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl bg-white/[.045] px-4 py-3 text-left transition-colors hover:bg-white/[.07]"
            >
              <span
                className="relative grid size-8 place-items-center rounded-lg bg-[rgba(239,77,8,.12)]"
                aria-hidden
              >
                <span className="size-2 rounded-full bg-[var(--orange)] shadow-[0_0_12px_rgba(239,77,8,.75)]" />
              </span>
              <span>
                <span className="block font-mono text-[9px] tracking-[.12em] text-white/35 uppercase">
                  Availability
                </span>
                <span className="mt-0.5 block text-xs text-white/72">
                  Open to product opportunities
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="text-white/25 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--orange)]"
                aria-hidden
              />
            </a>
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
            <div className="flex items-center gap-5">
              <a
                href={PROFILE.github}
                aria-label="GitHub"
                className="inline-flex p-1 text-white/55 transition-[color,transform] hover:-translate-y-0.5 hover:text-[var(--orange)]"
              >
                <BrandIcon icon={siGithub} className="size-[18px]" />
              </a>
              <a
                href={PROFILE.linkedin}
                aria-label="LinkedIn"
                className="inline-flex p-1 text-white/55 transition-[color,transform] hover:-translate-y-0.5 hover:text-[var(--orange)]"
              >
                <LinkedinLogo size={18} weight="fill" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="inline-flex p-1 text-white/55 transition-[color,transform] hover:-translate-y-0.5 hover:text-[var(--orange)]"
              >
                <EnvelopeSimple size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-wave" aria-hidden />
        <div className="flex flex-col gap-3 py-5 font-mono text-[10px] text-white/35 md:flex-row md:justify-between">
          <span>© 2026 Yeabsira Mekuria · Addis Ababa, Ethiopia</span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top <ArrowUpRight size={13} className="-rotate-45" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export function PortfolioPage({
  initialWeather,
}: {
  initialWeather: WeatherDisplay
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Hero initialWeather={initialWeather} />
          <PracticeStrip />
          <SelectedWork />
          <Capabilities />
          <Stack />
          <FieldNotes />
          <AboutContact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}
