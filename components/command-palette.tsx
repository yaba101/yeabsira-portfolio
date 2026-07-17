"use client"

import { useEffect, useState } from "react"
import {
  ArrowSquareOut,
  Copy,
  EnvelopeSimple,
  FileText,
  FolderOpen,
  GithubLogo,
  LinkedinLogo,
  ListMagnifyingGlass,
  Note,
  TerminalWindow,
} from "@phosphor-icons/react"

import { Kbd } from "@/components/ui/kbd"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { FIELD_NOTES, NAV_LINKS, PROFILE, PROJECTS } from "@/lib/content"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("Navigate with ↑↓ · Select with Enter")

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const run = (action: () => void) => {
    setOpen(false)
    window.setTimeout(action, 0)
  }
  const go = (href: string) =>
    run(() => {
      window.location.href = href
    })
  const copyEmail = () =>
    run(async () => {
      try {
        await navigator.clipboard.writeText(PROFILE.email)
        setMessage("Email copied to clipboard")
      } catch {
        setMessage(`Copy unavailable · ${PROFILE.email}`)
      }
      window.setTimeout(
        () => setMessage("Navigate with ↑↓ · Select with Enter"),
        2500
      )
    })

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs opacity-70 transition-[background-color,opacity] hover:bg-current/5 hover:opacity-100"
      >
        <ListMagnifyingGlass size={17} />
        <Kbd className="hidden bg-current/10 text-[10px] text-current sm:inline-flex">
          ⌘K
        </Kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command loop label="Portfolio commands">
          <CommandInput
            autoFocus
            placeholder="Search projects, notes, or actions…"
          />
          <CommandList>
            <CommandEmpty>No matching command found.</CommandEmpty>
            <CommandGroup heading="Navigate">
              {NAV_LINKS.map((link) => (
                <CommandItem
                  key={link.href}
                  value={`navigate ${link.label}`}
                  onSelect={() => go(link.href)}
                >
                  <TerminalWindow size={17} className="text-[var(--orange)]" />
                  <span>{link.label}</span>
                  <CommandShortcut>{link.href}</CommandShortcut>
                </CommandItem>
              ))}
              <CommandItem
                value="navigate about profile experience"
                onSelect={() => go("#about")}
              >
                <TerminalWindow size={17} className="text-[var(--orange)]" />
                <span>About & experience</span>
                <CommandShortcut>#about</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="navigate contact email talk"
                onSelect={() => go("#contact")}
              >
                <EnvelopeSimple size={17} className="text-[var(--orange)]" />
                <span>Contact</span>
                <CommandShortcut>#contact</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Projects">
              {PROJECTS.map((project) => (
                <CommandItem
                  key={project.title}
                  value={`project ${project.title} ${project.tags.join(" ")}`}
                  onSelect={() => go("#work")}
                >
                  <FolderOpen size={17} />
                  <span className="min-w-0 flex-1 truncate">
                    {project.title}
                  </span>
                  <CommandShortcut>{project.index}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Field notes">
              {FIELD_NOTES.map((note) => (
                <CommandItem
                  key={note.title}
                  value={`note ${note.type} ${note.title} ${note.tags.join(" ")}`}
                  onSelect={() => go("#notes")}
                >
                  <Note size={17} />
                  <span className="min-w-0 flex-1 truncate">{note.title}</span>
                  <CommandShortcut>{note.type}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Connect">
              <CommandItem
                value="github code profile"
                onSelect={() => go(PROFILE.github)}
              >
                <GithubLogo size={17} />
                <span>Open GitHub</span>
                <ArrowSquareOut
                  size={14}
                  className="ml-auto text-[var(--muted)]"
                />
              </CommandItem>
              <CommandItem
                value="linkedin profile connect"
                onSelect={() => go(PROFILE.linkedin)}
              >
                <LinkedinLogo size={17} />
                <span>Open LinkedIn</span>
                <ArrowSquareOut
                  size={14}
                  className="ml-auto text-[var(--muted)]"
                />
              </CommandItem>
              <CommandItem
                value="email copy address contact"
                onSelect={copyEmail}
              >
                <Copy size={17} />
                <span>Copy email address</span>
                <CommandShortcut>{PROFILE.email}</CommandShortcut>
              </CommandItem>
              <CommandItem
                value="email send message contact"
                onSelect={() => go(`mailto:${PROFILE.email}`)}
              >
                <EnvelopeSimple size={17} />
                <span>Send an email</span>
              </CommandItem>
              <CommandItem disabled value="resume cv download">
                <FileText size={17} />
                <span>Résumé</span>
                <CommandShortcut>Coming soon</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <div
            aria-live="polite"
            className="flex items-center justify-between border-t border-[var(--line)] px-4 py-3 font-mono text-[9px] text-[var(--muted)]"
          >
            <span>{message}</span>
            <span>Esc to close</span>
          </div>
        </Command>
      </CommandDialog>
    </>
  )
}
