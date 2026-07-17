# Portfolio feature tracker

This document tracks meaningful portfolio features before implementation. Keep each feature tied to a visitor outcome rather than adding interaction for decoration.

## Planned

### Accessibility spotlight mode

- Status: Planned
- Priority: High
- Purpose: Let visitors inspect the accessibility decisions already built into the portfolio instead of presenting accessibility as a list of claims
- Entry points:
  - A small, clearly labelled accessibility trigger in the persistent interface
  - An `Accessibility spotlight` action inside the command palette
  - A direct URL state so the experience can be shared and reopened
- Visitor flow:
  1. The visitor activates Spotlight Mode
  2. A compact index opens with the available accessibility annotations
  3. Choosing an annotation scrolls to the real component
  4. The component receives a temporary, non-obscuring highlight
  5. A nearby annotation explains the behavior, implementation, and user benefit
  6. Previous and next controls allow a guided accessibility tour
- Initial annotations:
  - Project carousel: tab semantics, arrow-key navigation, focus-aware rotation pausing, visibility-aware autoplay, and announced panel changes
  - Navigation: skip link, landmarks, sticky-header offset, mobile menu semantics, and visible focus treatment
  - Hero media: poster fallback, persisted day/night preference, reduced-motion handling, and decorative-video treatment
  - Content structure: logical heading order, section landmarks, descriptive alternative text, and meaningful link labels
  - Responsive interaction: minimum touch targets, mobile stacking, no horizontal overflow, and zoom-safe content
  - Motion system: motion communicates state, pauses when appropriate, and has a reduced-motion alternative
- Annotation content model:
  - Title: the inspected component or behavior
  - What happens: a concise description of the interaction
  - Why it matters: the accessibility or usability benefit
  - Implementation: the relevant semantic pattern or browser behavior
  - Standard: WCAG success criterion where the mapping is accurate
  - Verification: keyboard, screen reader, reduced-motion, or responsive test used
- Interaction requirements:
  - Fully operable by keyboard and screen reader
  - Opening the index moves focus predictably; closing restores focus to the trigger
  - Escape closes the active annotation or the entire mode
  - Highlighting cannot change layout, obscure content, or rely on color alone
  - Annotations remain readable at 200% zoom and narrow mobile widths
  - Scroll behavior respects reduced-motion preferences
  - Spotlight Mode never changes the underlying component semantics
  - Current annotation and tour progress are announced accessibly
- Visual direction:
  - Use the existing orange accent sparingly for the active target
  - Prefer a precise outline, locator mark, and compact annotation over modal overlays
  - Keep the page visible and interactive so visitors inspect the real experience
  - Avoid gamification, badges, scoring, or a fake automated audit
- URL and state:
  - Suggested query format: `?spotlight=carousel`
  - Back and forward navigation should restore the selected annotation
  - Opening Spotlight Mode without a target shows the annotation index
  - Invalid targets fall back safely to the index
- Phase 1 scope:
  - Spotlight index
  - Five or six annotations
  - Scroll-to-target and temporary highlight
  - Keyboard navigation, focus restoration, Escape behavior, and reduced motion
  - Command-palette integration point
- Later opportunities:
  - Link annotations to relevant Field Notes
  - Add verified assistive-technology test notes
  - Provide a share action for a specific annotation
  - Reuse the annotation system in project case studies
- Definition of done:
  - Every annotation targets a real, shipped behavior
  - Every technical claim is verified against the implementation
  - Keyboard-only visitors can complete the full tour
  - Screen-reader announcements are concise and non-repetitive
  - No layout shift or horizontal overflow at supported breakpoints
  - No console errors and no regression in automated accessibility checks

### Responsive X-Ray mode

- Status: Planned
- Priority: High
- Purpose: Demonstrate that responsive behavior is a series of intentional product decisions, not simply a desktop layout stacked on mobile
- Core interaction:
  - Present one real portfolio or product component inside a resizable content viewport
  - Let visitors drag a horizontal handle to change the available content width
  - Snap gently to meaningful layout thresholds without preventing free resizing
  - Update annotations only when an actual layout decision changes
  - Keep the component live and keyboard operable at every supported width
- Suggested demonstration component:
  - Start with a product onboarding or eligibility interface because it contains navigation, form controls, supporting content, hierarchy, and meaningful mobile reordering
  - Reuse a real project pattern where possible instead of inventing a generic dashboard
  - Keep the first version focused on one excellent component
- Width states and decisions:
  - Wide: primary task and supporting explanation share the available space
  - Compact desktop: supporting content narrows while the primary task retains priority
  - Tablet: spacing and type scale compress before structural stacking occurs
  - Mobile: content order becomes task-first and secondary explanation follows
  - Narrow mobile: controls remain usable, copy wraps naturally, and no content requires horizontal scrolling
- Live measurements:
  - Current viewport width in pixels
  - Active layout state name rather than framework breakpoint terminology
  - Current column count and content order
  - Minimum interactive target size
  - Longest text line or readable measure
  - Overflow status
- Annotation examples:
  - `Supporting context moves below the task so completion remains the first action`
  - `Navigation becomes touch-first at this width`
  - `Type scales fluidly here; no abrupt breakpoint change`
  - `Controls retain a minimum 44px interaction target`
  - `The secondary panel is repositioned, not hidden`
- Visitor flow:
  1. The visitor opens X-Ray Mode from its trigger or the command palette
  2. The component loads at a representative desktop width
  3. The visitor drags the resize handle or uses keyboard controls
  4. A width marker and layout label update continuously
  5. A decision annotation changes only when a structural threshold is crossed
  6. Optional preset markers let the visitor compare key states quickly
- Keyboard behavior:
  - Resize handle uses slider semantics with an accessible name, value, minimum, and maximum
  - Arrow keys change width in small increments
  - Shift plus arrow changes width in larger increments
  - Home and End jump to minimum and maximum supported widths
  - Preset markers are buttons with descriptive state names
  - Focus remains visible throughout the interaction
- Motion behavior:
  - Use direct manipulation while dragging; avoid delayed or elastic movement
  - Allow a short, restrained snap transition when the handle is released near a meaningful threshold
  - Annotation transitions explain state changes rather than decorating every resize frame
  - Reduced-motion mode updates instantly without animated interpolation
- Visual direction:
  - Treat the resizable area as a measured design surface, not a fake phone or browser mockup
  - Use a restrained ruler, width marker, and active threshold label
  - Keep annotations outside the component so they do not distort the layout being demonstrated
  - Avoid decorative grid backgrounds and excessive breakpoint lines
  - Use the orange accent only for the active handle, current threshold, and changed decision
- Technical approach:
  - Use CSS container queries inside the demonstration so behavior responds to component width rather than the browser viewport
  - Use `ResizeObserver` to report measurements and active decisions
  - Keep drag updates local and lightweight; avoid rerendering the full portfolio on every pointer movement
  - Clamp the preview width to tested minimum and maximum values
  - Prefer native pointer events and slider semantics over a heavy drag dependency
  - Pause any unrelated autoplay while the visitor is interacting with X-Ray Mode
- Performance requirements:
  - Maintain smooth direct manipulation on mid-range mobile and desktop devices
  - Avoid layout reads and writes in the same repeated frame when possible
  - Do not load the interactive implementation until the feature is opened or near the viewport
  - Keep annotations derived from a small set of known layout states
  - No canvas, WebGL, or charting library is required
- Accessibility requirements:
  - All functionality available without pointer dragging
  - Component semantics remain real and testable inside the preview
  - Measurements and state changes announced without excessive live-region chatter
  - Color is not the only indication of the active layout state
  - Usable at 200% page zoom
  - No keyboard trap inside the demonstration
- Integration points:
  - Add `Responsive X-Ray` to the command palette
  - Link relevant annotations to Responsive Interfaces in Capabilities
  - Publish a Field Note explaining the component-query architecture and product decisions
  - Reuse X-Ray Mode later inside detailed project case studies
- Phase 1 scope:
  - One real component
  - Drag and keyboard resizing
  - Four or five meaningful layout states
  - Width, layout label, target-size, and overflow measurements
  - One decision annotation per layout state
  - Reduced-motion support and mobile fallback
- Mobile fallback:
  - If the device cannot provide enough horizontal room for free dragging, show a full-width preview with named state presets
  - Preserve the same annotations and keyboard-accessible comparison flow
  - Do not squeeze the desktop resizer into an unusable mobile control
- Definition of done:
  - Every threshold corresponds to a real visible layout decision
  - Dragging and keyboard resizing both work across the tested range
  - The component has no horizontal overflow at its minimum supported width
  - Touch targets remain at least 44px where applicable
  - State announcements are useful and not noisy
  - Interaction remains smooth and free of console errors
  - Reduced-motion mode remains complete and understandable
  - Desktop, tablet, mobile, 200% zoom, and keyboard-only verification pass

### Performance budget console

- Status: Planned
- Priority: High
- Purpose: Make the portfolio's performance engineering visible through measured budgets, loading decisions, and constrained-device behavior rather than unsupported speed claims
- Core experience:
  - Open a compact performance console from the command palette or a clearly labelled page trigger
  - Show the current portfolio route's measured asset and runtime budgets
  - Let visitors compare the normal experience with a constrained-network profile
  - Connect each budget to the implementation decision that protects it
  - Keep the page usable while the console is open so visitors can observe real loading behavior
- Initial budgets:
  - Route JavaScript transferred and parsed
  - Client component boundary count and purpose
  - Hero video strategy, poster fallback, and preload behavior
  - Responsive image sizes and lazy-loading behavior
  - Font requests and fallback behavior
  - Largest contentful element
  - Layout-shift budget
  - Animation work paused by visibility or reduced-motion preferences
  - Server weather-cache lifetime and network fallback
- Budget presentation:
  - Budget name
  - Target
  - Current measured value
  - Status: within budget, near limit, or over budget
  - Why the budget matters to visitors
  - Implementation decision responsible for the result
  - Last measured timestamp and measurement environment
- Example entry:
  - Budget: Hero media startup
  - Target: Meaningful poster visible immediately; video enhancement must not block the heading
  - Decision: Poster-first rendering, metadata preload, muted inline playback, and reduced-motion opt-out
  - Verification: Slow-network and disabled-video tests
- Network profiles:
  - Normal: Present the page's default loading behavior
  - Constrained: Demonstrate the content-first fallback using a deterministic local simulation
  - Offline-safe explanation: Show which content remains available and which live data uses fallback values
  - Do not claim to change the visitor's actual browser connection unless genuine browser APIs support it
- Visitor flow:
  1. Visitor opens the console
  2. The summary shows whether the route is within its defined budgets
  3. Visitor selects a budget to see its user impact and implementation
  4. Visitor can activate the constrained demonstration
  5. Relevant page elements are identified without obscuring them
  6. Console provides links to related Field Notes or source-code locations where appropriate
- Measurement integrity:
  - Use real build output, browser performance entries, and automated checks
  - Never display invented Lighthouse scores or fabricated percentage improvements
  - Clearly label development, local production, and deployed measurements
  - Store repeatable build-time budgets in a checked-in data file
  - Treat runtime values as device-specific observations, not universal facts
  - Show `Not measured` when reliable data is unavailable
- Technical approach:
  - Generate static asset-budget data after the production build
  - Use Performance APIs only for supported, low-cost runtime observations
  - Keep the console itself lazy-loaded so it does not undermine the budget it describes
  - Separate server-provided build facts from client-observed runtime facts
  - Add CI checks for hard budgets once stable baselines exist
  - Avoid adding a large analytics or visualization dependency
- Accessibility requirements:
  - Budget status cannot rely on red, amber, and green alone
  - Table or list relationships remain understandable to screen readers
  - All console controls are keyboard accessible
  - Opening and closing restores focus predictably
  - Runtime updates do not create noisy live-region announcements
  - Constrained demonstrations respect reduced motion
- Visual direction:
  - Use a compact engineering-instrument treatment rather than a dashboard of oversized metrics
  - Prioritize status, target, and decision over decorative charts
  - Use small linear gauges only when they clarify distance from a defined budget
  - Keep timestamps and environment labels visible so measurements have context
  - Avoid fake terminal styling and animated numbers without meaning
- Integration points:
  - Add `Performance budget` to the command palette
  - Link relevant entries to Stack and Capabilities
  - Publish Field Notes about media loading, server/client boundaries, and performance tradeoffs
  - Reuse budget entries in project case studies when real measurements exist
- Phase 1 scope:
  - Production-build asset summary
  - Five to eight defined budgets
  - Detail view explaining each implementation decision
  - Normal and constrained demonstration states
  - Development-versus-production environment labelling
  - Keyboard, reduced-motion, and mobile support
- Later opportunities:
  - CI budget regression checks
  - Deployment-to-deployment comparisons
  - Public Web Vitals from a privacy-conscious source
  - Per-case-study performance budgets
- Definition of done:
  - Every displayed number comes from a documented measurement source
  - The console adds minimal initial JavaScript and is lazy-loaded
  - Budgets remain understandable without charts or color
  - Constrained mode has a deterministic fallback and does not pretend to throttle the real network
  - Mobile, keyboard-only, reduced-motion, and 200% zoom verification pass
  - Production build and budget-generation checks run successfully

### AI accessibility interpreter

- Status: Planned
- Priority: High
- Purpose: Help visitors understand how different users may experience a real interface while demonstrating responsible AI integration, accessibility knowledge, and human review
- Product position:
  - The interpreter provides evidence-based observations and questions
  - It does not certify WCAG compliance
  - It does not replace testing with disabled people or assistive technology
  - It clearly separates directly observed implementation facts from AI inference
  - Human judgment remains the final layer
- Initial user perspectives:
  - Keyboard-only navigation
  - Screen-reader navigation
  - Low vision and text zoom
  - Reduced-motion preference
  - Cognitive load and comprehension
- Core interaction:
  - Visitor selects a public portfolio component from a controlled list
  - Visitor chooses one user perspective
  - The interface sends only approved structured component evidence to the model
  - The model returns a validated structured interpretation
  - Relevant component areas are connected to the interpretation through stable annotation targets
  - Visitor can compare the AI interpretation with verified implementation notes
- Suggested components:
  - Project carousel
  - Sticky navigation and mobile menu
  - Hero media and day/night control
  - Field Notes filters
  - Contact links and footer navigation
  - Future command palette
- Evidence supplied to the model:
  - Component purpose
  - Relevant rendered text
  - Semantic roles, labels, states, and relationships
  - Keyboard behavior documented by the implementation
  - Focus-order summary
  - Reduced-motion behavior
  - Responsive behavior at tested widths
  - Known manual and automated test results
  - Optional screenshot from a controlled public component state
- Evidence never supplied:
  - Private product data
  - Authentication information
  - Visitor-entered personal information
  - Full browsing history or unrelated page content
  - Unfiltered DOM dumps
  - Proprietary source code without explicit approval
- Structured response model:
  - Perspective
  - Observed behavior
  - Evidence
  - Potential user impact
  - Question or suggested verification
  - Relevant WCAG criterion when the mapping is accurate
  - Confidence: high, medium, or low
  - Evidence type: implementation fact, automated check, manual check, or inference
  - Limitation
- Example interpretation:
  - Perspective: Keyboard-only user
  - Observed behavior: Focusing the project carousel pauses automatic rotation
  - Evidence: Focus inside the carousel sets the paused state; arrow keys change the active tab
  - User impact: The active project remains stable while the user navigates controls
  - Suggested verification: Complete a full carousel cycle using Tab, Shift+Tab, Left Arrow, and Right Arrow
  - Standard: WCAG 2.2.2 Pause, Stop, Hide
  - Confidence: High
  - Evidence type: Implementation fact
  - Limitation: This does not confirm behavior in every browser and assistive-technology combination
- Visitor flow:
  1. Open the interpreter from the command palette or Accessibility Spotlight
  2. Select a component
  3. Select a user perspective
  4. Review exactly what evidence will be analyzed
  5. Run the interpretation
  6. Explore structured observations linked to the real component
  7. Compare AI inference with verified implementation notes
  8. Optionally open the relevant Spotlight annotation or Field Note
- Transparency requirements:
  - Display the selected evidence before submission
  - Label AI-generated content prominently
  - Show model limitations beside the result
  - Display confidence and evidence type for every observation
  - Mark verified claims separately from inferred concerns
  - Never use language such as `accessible`, `compliant`, or `passed` as a global conclusion
  - Include the model and interpretation timestamp where appropriate
- Guardrails:
  - Use a strict system instruction limited to accessibility interpretation
  - Submit structured evidence rather than arbitrary visitor prompts in phase one
  - Validate responses against a typed schema
  - Reject unsupported WCAG references
  - Limit output length and number of observations
  - Sanitize rendered model content
  - Rate-limit server requests
  - Add request timeouts and cancellation
  - Do not allow model output to execute code, navigate, or mutate the page
- Failure handling:
  - Provide a deterministic, clearly labelled example interpretation when AI is unavailable
  - Distinguish timeout, rate limit, validation failure, and network failure
  - Preserve the visitor's selected component and perspective after failure
  - Offer a retry without duplicating requests automatically
  - Never replace a failed result with unlabeled canned content
- Accessibility requirements:
  - The interpreter itself must be fully keyboard and screen-reader operable
  - Loading and completion states are announced concisely
  - Generated observations use headings and structured lists
  - Annotation links have descriptive names
  - Focus remains predictable when results appear
  - Results remain readable at 200% zoom
  - No observation relies on color alone
  - Reduced-motion behavior applies to result and annotation transitions
- Privacy requirements:
  - Analyze only predefined public component evidence in phase one
  - Do not retain visitor data
  - Log operational metadata without storing submitted content unless necessary
  - Document the AI provider and data-handling behavior
  - Avoid cookies or identity requirements for the feature
- Technical approach:
  - Server-side AI request route
  - Typed evidence and response schemas
  - Allowlisted component evidence registry
  - Structured model output with runtime validation
  - Stable annotation IDs shared with Accessibility Spotlight
  - Abortable requests and deterministic fallback data
  - Keep provider credentials server-only
  - Lazy-load client UI after the feature is opened
- Integration points:
  - Accessibility Spotlight provides verified annotations and stable targets
  - Command palette opens the interpreter directly
  - Field Notes explain responsible AI and accessibility methodology
  - Responsive X-Ray contributes verified responsive evidence
  - Performance Budget Console tracks the interpreter's loading cost
- Phase 1 scope:
  - Three public components
  - Three user perspectives
  - Controlled evidence with no free-form visitor prompt
  - Structured response validation
  - Evidence, confidence, limitation, and WCAG fields
  - Timeout, rate-limit, validation-error, and deterministic fallback states
  - Links into Accessibility Spotlight
- Later opportunities:
  - Additional components and perspectives
  - Compare interpretations across two component versions
  - Add carefully constrained follow-up questions
  - Include verified screen-reader test notes
  - Export a shareable public interpretation link without personal data
- Definition of done:
  - No output implies automated compliance certification
  - Every observation includes evidence type, confidence, and limitation
  - WCAG references are validated and contextually accurate
  - Only allowlisted public evidence reaches the AI provider
  - Schema-invalid output never reaches the visitor
  - Failure states are complete and clearly labelled
  - Keyboard-only, screen-reader, reduced-motion, mobile, and 200% zoom verification pass
  - Provider secrets remain server-side
  - No console errors and no accessibility regressions

## Candidates

### Project decision explorer — passed

- Status: Passed for now
- Priority: High
- Purpose: Show the reasoning and tradeoffs behind shipped frontend work
- Proposed constraints: Accessibility, performance, responsive behavior, complex state, and API reliability
- Dependency: Needs accurate project decisions and outcomes from Yeabsira before publishing

## Shipped

- Command palette (phase 1): `⌘K`/`Ctrl+K` and a visible header trigger; grouped, searchable navigation for sections, projects, Field Notes, and contact actions; keyboard looping, empty state, mobile dialog, focus trapping/restoration, and live copy-email feedback. Résumé action remains disabled until a public résumé asset is added.
- Responsive project carousel with keyboard navigation and visibility-aware rotation
- Outcome-led capabilities with project evidence
- Filterable Field Notes homepage section
- Day/night hero treatment with reduced-motion behavior
- Server-rendered weather with cached fallback data
