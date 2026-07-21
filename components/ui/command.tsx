"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Check, MagnifyingGlass, X } from "@phosphor-icons/react"
import { Dialog } from "radix-ui"

import { cn } from "@/lib/utils"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      className={cn(
        "flex size-full flex-col overflow-hidden bg-[var(--night)] text-[var(--cream)]",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-[rgba(8,9,7,.72)] backdrop-blur-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed top-[10vh] left-1/2 z-[71] w-[min(760px,calc(100%-24px))] -translate-x-1/2 overflow-hidden rounded-2xl bg-[var(--night)] shadow-[0_18px_55px_rgba(0,0,0,.42)] outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:top-[14vh]">
          <Dialog.Title className="sr-only">Command palette</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search projects, notes, navigation, and contact actions.
          </Dialog.Description>
          {children}
          <Dialog.Close
            aria-label="Close command palette"
            className="absolute top-4 right-4 grid size-8 place-items-center rounded-lg text-white/45 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={16} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center gap-3 px-5 pr-14">
      <MagnifyingGlass size={18} className="shrink-0 text-white/45" />
      <CommandPrimitive.Input
        className={cn(
          "command-search h-16 w-full bg-transparent text-[17px] tracking-[-.01em] text-white outline-none placeholder:text-white/40",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      className={cn(
        "command-scroll max-h-[min(56vh,430px)] overflow-x-hidden overflow-y-auto px-2 py-3",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty(
  props: React.ComponentProps<typeof CommandPrimitive.Empty>
) {
  return (
    <CommandPrimitive.Empty
      className="py-12 text-center text-sm text-white/50"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden py-2 text-white [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[9px] [&_[cmdk-group-heading]]:tracking-[.14em] [&_[cmdk-group-heading]]:text-white/40 [&_[cmdk-group-heading]]:uppercase",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator(
  props: React.ComponentProps<typeof CommandPrimitive.Separator>
) {
  return (
    <CommandPrimitive.Separator
      className="my-2 h-px bg-white/10"
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={cn(
        "group flex min-h-12 cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm outline-none select-none transition-colors data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40 data-[selected=true]:bg-[rgba(255,90,20,.78)] data-[selected=true]:text-white data-[selected=true]:[&>svg]:text-white",
        className
      )}
      {...props}
    >
      {children}
      <Check
        size={14}
        className="ml-auto hidden text-white group-data-[selected=true]:block"
      />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto font-mono text-[9px] text-white/40 group-data-[selected=true]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
}
