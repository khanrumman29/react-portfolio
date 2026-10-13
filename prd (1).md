# PRD: Rumman --- Motion Design, Video Editing & Visual Storytelling Portfolio

**Product type:** Personal creative portfolio website\
**Primary owner:** Rumman\
**Implementation target:** Existing React + Tailwind CSS project\
**Document version:** 1.0\
**Status:** Ready for implementation

------------------------------------------------------------------------

## 1. Product Overview

Build a polished, responsive, multi-section creative portfolio for
**Rumman**, a motion designer, video editor, and visual storyteller. The
current website already has a navbar, hero section, and an About
section. Extend the existing project rather than rebuilding it from
scratch.

The website should feel like a contemporary independent creative studio:
editorial typography, generous spacing, a warm off-white canvas,
near-black text, restrained red accents, strong video-led project
previews, and purposeful motion. The uploaded reference image is the
main visual direction.

The site must be a real, working portfolio---not just a static design.
Navigation, project cards, filters, video controls, contact links,
responsive menus, and animations must function. Use real project assets
when available and clearly marked placeholders when they are not; never
invent client names, testimonials, awards, or performance results.

## 2. Goals

1.  Turn the existing hero and About sections into a complete portfolio
    experience.
2.  Showcase video editing, motion design, cinematography, and visual
    storytelling work.
3.  Make the work easy to browse through a visual project gallery and
    individual case-study pages or overlays.
4.  Use sophisticated, smooth animation without making the website slow
    or difficult to navigate.
5.  Help prospective clients understand the services and contact Rumman
    quickly.
6.  Make the website look excellent on desktop, tablet, and mobile.
7.  Keep the code maintainable within the existing React and Tailwind
    setup.

### Success criteria

-   Every navbar link leads to a real section or page.
-   Every project card opens a relevant project detail view or project
    page.
-   The contact CTA works using configured contact details.
-   Layout has no horizontal overflow at common viewport widths.
-   Animations respect reduced-motion preferences.
-   The site remains usable with keyboard navigation and without hover.
-   The site builds successfully using the repository's existing
    scripts.

## 3. Audience

**Primary audience** - Brands and small businesses looking for video
editing or motion design. - Marketing agencies seeking an editor or
creative collaborator. - Creators and production teams needing reels,
promotional videos, or cinematic edits. - Recruiters reviewing Rumman's
creative work.

**What visitors need to learn quickly** - Who Rumman is and what he
does. - The quality and range of his work. - Which services he offers. -
How to contact or hire him.

## 4. Brand and Visual Direction

### Core identity

-   Brand name: **RUMMAN**
-   Descriptor: **Motion Design / Video Editing / Visual Storytelling**
-   Suggested hero statement: **"Ideas in motion. Stories that last."**
-   Supporting line: "I turn ideas into purposeful visual stories
    through editing, motion, and cinematic storytelling."
-   Tone: confident, creative, precise, modern, and human.

### Design system

Use the uploaded reference as the primary direction:

-   Background: warm ivory/off-white, approximately `#F2F0E8`.
-   Primary text: near-black, approximately `#111111`.
-   Accent: vivid editorial red, approximately `#F52D2D`, used
    selectively.
-   Secondary surface: muted beige, approximately `#E7E1D3`.
-   Borders: thin, low-contrast neutral lines.
-   Typography: a heavy, condensed or grotesk display font for oversized
    headings; a clean sans-serif for body text and navigation. Use
    locally available or properly loaded fonts, with sensible fallbacks.
-   Layout: strong grid, large typography, asymmetric compositions,
    deliberate whitespace, editorial labels, and oversized project
    imagery.
-   Avoid generic SaaS cards, excessive gradients, excessive rounded
    corners, and decorative effects that compete with the work.

Centralize colors, font choices, spacing conventions, and motion timings
where practical so the design remains consistent.

## 5. Information Architecture

Create the following pages or major sections. Prefer a single-page
portfolio with anchored sections for the primary experience, plus
dedicated project detail routes if routing is already available or can
be added cleanly.

1.  Home / Hero
2.  Selected Projects
3.  About
4.  Showreel
5.  Services
6.  Process / How I Work
7.  Experience or Capabilities
8.  Contact
9.  Footer

Optional dedicated routes: - `/projects/:slug` for case studies - A
custom not-found page if the project uses routing

Do not create empty pages just to increase the page count. Every section
must provide meaningful content and a clear purpose.

## 6. Detailed Functional Requirements

### 6.1 Navbar

**Requirements** - Preserve and refine the existing navbar. - Left:
RUMMAN wordmark and compact discipline labels. - Main links: About,
Projects, Showreel, Services, Contact. - Include a small
theme/status-style visual element only if it has a meaningful function;
do not make a decorative dot look like an inert control. - Desktop
navbar should use thin dividers and align with the reference image. -
Mobile navbar must collapse into an accessible menu with open/close
behavior. - Clicking a section link should scroll smoothly to the target
and account for the navbar height. - Show a visible keyboard focus
state. - Close the mobile menu after a navigation link is selected.

**Acceptance criteria** - All links work with mouse, touch, and
keyboard. - The mobile menu cannot trap the visitor or cover content
after navigation. - Reduced-motion settings disable smooth scrolling
when appropriate.

### 6.2 Hero Section

**Requirements** - Keep the oversized "RUMMAN" heading as the visual
anchor. - Retain the existing editorial layout and refine spacing for
multiple screen sizes. - Include the headline: "Ideas in motion. Stories
that last." - Include service labels: Motion Design, Video Editing,
Visual Storytelling. - Feature a strong visual element: a showreel
still, abstract motion graphic, or real work preview. - Add a small
floating note such as "Motion lives here." - Add clear CTAs: **Explore
Projects** and **Watch Showreel**. - Use subtle entrance animation:
staggered text reveal, gentle image reveal, or masked heading
animation. - Do not block the page behind a long intro animation.

**Acceptance criteria** - The main message and CTA are visible
immediately on load. - Hero remains legible on narrow mobile screens. -
No essential information depends on animation.

### 6.3 Selected Projects

Create a visually rich project gallery with a clear heading, such as
"Selected work / 2024---2026" only if the dates match the actual work.

**Each project should support** - Project title. - Category: Video
Editing, Motion Design, Brand Film, Social Reel, Cinematography, or
another accurate category. - Cover image or video thumbnail. - Short
description. - Optional year, role, tools, and client---only when
known. - Click/tap action opening a detail page, modal, or accessible
overlay. - A visual hover treatment on desktop, with an equivalent
usable interaction on touch devices.

**Gallery behavior** - Use an editorial grid with varied image
proportions where appropriate. - Include category filters if there are
enough real projects to make filtering useful. - Filters must work and
have a clear active state. - Include a graceful empty state when no
projects match a filter. - Lazy-load off-screen images and videos. -
Never autoplay sound. - Use optimized poster images for video previews.

**Suggested starter project data model**

``` js
{
  slug: "project-slug",
  title: "Project Title",
  category: "Video Editing",
  year: "2026",
  coverImage: "/images/projects/project-cover.webp",
  videoUrl: "",
  summary: "A short, factual project summary.",
  role: ["Editing", "Color Grading"],
  tools: ["Premiere Pro", "After Effects"],
  client: "",
  featured: true
}
```

Keep project data separate from presentation components so real work can
be added without rewriting the gallery.

### 6.4 Project Detail / Case Study

When a visitor selects a project, show a dedicated route or a
well-implemented modal/overlay.

**Content** - Project title and category. - Large hero still or embedded
video. - Project overview. - Rumman's role and deliverables. - Creative
approach or challenge, if details are supplied. - Additional stills or
clips. - Previous/next project navigation. - Back to projects link. -
Contact CTA.

Do not fabricate client briefs, metrics, outcomes, or production
details. If project information has not yet been provided, use editable
placeholders in the code and keep them out of the production-facing copy
until replaced.

### 6.5 Showreel

Create a dedicated showreel section with a large cinematic frame.

**Requirements** - Use an actual showreel video URL when supplied. - If
no video is available, show a designed poster with a clear "Showreel
coming soon" or editable placeholder state. - Provide accessible
play/pause controls where custom controls are used. - Do not autoplay
with sound. - If a background preview plays automatically, it must be
muted, short, non-essential, and respect reduced-motion preferences. -
Include a short caption describing the range of work without making
unsupported claims.

### 6.6 About

Preserve the existing About section and improve its hierarchy.

**Content direction** - Introduce Rumman as a video editor, motion
designer, and visual storyteller. - Explain the creative focus: shaping
raw footage and ideas into clear, engaging visual narratives. - Mention
tools only when accurate, such as Adobe Premiere Pro, After Effects, and
CapCut. - Include a portrait or behind-the-scenes image only if one is
provided. - Add a compact list of capabilities or creative principles. -
Include a CTA to view projects or make contact.

Avoid long generic biography copy. The section should feel personal,
specific, and visually connected to the rest of the website.

### 6.7 Services

Present services in a strong typographic layout, not generic pricing
cards.

Suggested service groups: 1. **Video Editing** --- reels, promotional
videos, brand content, and social-first edits. 2. **Motion Design** ---
animated typography, titles, transitions, and motion graphics. 3.
**Cinematography & Visual Storytelling** --- visual planning and footage
capture where available. 4. **Content for Social Media** ---
platform-ready edits and aspect-ratio adaptations.

These are suggested categories; only publish services Rumman actually
offers.

Each service should include: - Service name. - One or two concise
sentences. - Deliverables or suitable use cases. - Optional "Discuss a
project" CTA.

Do not show fixed prices unless the owner supplies them.

### 6.8 Process / How I Work

Build a compact four-step process section: 1. **Discover** ---
understand the goal, audience, references, and deliverables. 2. **Plan**
--- agree on direction, structure, assets, and timeline. 3. **Create**
--- edit, animate, refine, and review. 4. **Deliver** --- export
approved versions in the required formats.

Use a timeline, numbered editorial list, or scroll-linked progression.
Any scroll-linked animation must have a non-animated fallback and must
not hijack scrolling.

### 6.9 Capabilities / Tools

Create a clean typographic section for capabilities and software.

Potential tools include Premiere Pro, After Effects, and CapCut, but
display only tools the owner confirms. Do not add skill percentages or
progress bars; they imply unsupported precision.

Potential capabilities: - Editing and pacing. - Short-form
storytelling. - Motion graphics and animated typography. - Basic color
grading. - Social-media delivery formats. - Cinematic visual
composition.

### 6.10 Contact

Create a visually prominent final CTA, for example: **"Have a story to
tell?"**

**Requirements** - Include a working email link once the owner supplies
the correct email address. - Include social profile links once
confirmed. - Optional contact form with name, email, project type,
budget range, and message. - If there is no backend, do not present a
fake form that claims to send messages. Use a `mailto:` fallback or
connect a real form service. - Validate required fields and show
understandable success/error feedback if a real submission endpoint is
implemented. - Include a copy-email interaction only when an email
address is configured. - Make all contact actions keyboard accessible.

### 6.11 Footer

Include: - RUMMAN wordmark. - Short discipline line. - Working
social/contact links. - Back-to-top action. - Current year generated in
code. - Optional small design credit.

Keep it simple and consistent with the editorial aesthetic.

## 7. Motion and Animation Specification

Motion is a major part of the experience, but it must support the work
rather than distract from it.

### Desired motion language

-   Short staggered text reveals.
-   Clip-path or mask-based image reveals.
-   Subtle vertical movement and opacity transitions.
-   Gentle project-thumbnail scale on hover.
-   Smooth section entrances.
-   Small cursor or label interactions only where they improve
    usability.
-   Animated page/route transitions only if routing is already
    structured to support them cleanly.

### Implementation guidance

-   First inspect the dependencies already installed.
-   If Framer Motion or Motion is installed, reuse it.
-   If no animation library exists, use CSS keyframes and Intersection
    Observer where suitable; do not add a large dependency for minor
    effects.
-   Use transform and opacity for most animation to maintain
    performance.
-   Avoid animating layout-heavy properties continuously.
-   Avoid custom cursor effects on touch devices.
-   Avoid scroll hijacking, endless marquees, excessive parallax, and
    long blocking splash screens.

### Accessibility

-   Respect `prefers-reduced-motion: reduce`.
-   Reduced-motion mode should remove or simplify non-essential
    transitions.
-   Content must remain visible and understandable if animation fails or
    is disabled.
-   Hover effects must have focus/touch equivalents.

## 8. Responsive Design

Design mobile-first and verify at these approximate widths: - Small
mobile: 320--375 px. - Large mobile: 390--430 px. - Tablet: 768 px. -
Laptop: 1024--1440 px. - Wide desktop: 1600 px and above.

**Responsive requirements** - No horizontal page overflow. - Oversized
display typography scales fluidly using `clamp()`. - Navigation changes
to an accessible mobile menu. - Project gallery changes from
multi-column to single-column or a suitable compact grid. - Decorative
elements must not cover text or controls. - Video and image containers
preserve appropriate aspect ratios. - Touch targets should be
comfortably usable. - Do not simply shrink the desktop layout; redesign
compositions for small screens.

## 9. Technical Requirements

### Existing stack

-   React.
-   Tailwind CSS.
-   Existing project structure and build tooling.

### Rules

1.  Inspect the repository before editing.
2.  Preserve the current package manager, build scripts, and installed
    dependencies.
3.  Do not replace the existing application scaffold without a clear
    need.
4.  Reuse the current navbar, hero, and About components where
    practical.
5.  Use reusable React components and data-driven project content.
6.  Keep components small enough to maintain and test.
7.  Use semantic HTML elements and accessible names.
8.  Use Tailwind utilities consistently; avoid a mixture of arbitrary
    one-off styles when a shared token or component would be clearer.
9.  Keep global styles, design tokens, and animation utilities
    organized.
10. Do not introduce a backend unless required and configured.
11. Never expose API keys or secrets in client-side code.
12. Avoid unnecessary dependencies.
13. Do not leave dead links, non-functional buttons, or console errors.

### Suggested component structure

Adapt this to the existing repository instead of forcing an identical
structure:

``` text
src/
├── assets/
│   ├── images/
│   └── videos/
├── components/
│   ├── Navbar.jsx
│   ├── MobileMenu.jsx
│   ├── SectionHeading.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectGrid.jsx
│   ├── ProjectFilters.jsx
│   ├── Showreel.jsx
│   ├── ServiceItem.jsx
│   ├── ProcessSteps.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   └── services.js
├── hooks/
│   └── useReducedMotion.js
├── pages/
│   ├── Home.jsx
│   └── ProjectDetail.jsx
├── styles/
│   └── animations.css
├── App.jsx
├── main.jsx
└── index.css
```

This is a proposal, not a requirement to move files unnecessarily. If
the project uses TypeScript, keep `.ts` and `.tsx` conventions.

### Asset handling

-   Inspect existing public/assets folders before creating new ones.
-   Reuse the current hero artwork if it is part of the project.
-   Use the actual portfolio's media whenever possible.
-   If assets are missing, create clearly labeled placeholders and
    document where the owner should replace them.
-   Do not hotlink random copyrighted work or imply that sample images
    belong to Rumman.
-   Optimize images as WebP/AVIF when practical and provide sensible
    dimensions.
-   Set width/height or aspect ratios to reduce layout shifts.
-   Lazy-load below-the-fold media.

## 10. SEO and Sharing

-   Set a descriptive page title, such as
    `Rumman — Video Editor & Motion Designer`.
-   Add a concise meta description.
-   Add a canonical URL only when the final domain is known.
-   Configure Open Graph title, description, and preview image when
    assets are available.
-   Use descriptive image alt text; use empty alt text for purely
    decorative images.
-   Use logical heading order.
-   Add favicon assets if available.
-   Do not add fake ratings, structured business data, or unsupported
    claims.

## 11. Performance

-   Aim for a fast first render and stable layout.
-   Avoid loading every video on initial page load.
-   Use poster images and click-to-play for large videos.
-   Lazy-load below-the-fold images and project media.
-   Prefer transform/opacity animation.
-   Avoid large animation libraries unless already installed or
    justified.
-   Use font-display strategies and avoid loading unnecessary font
    weights.
-   Verify that the production build completes without errors.

## 12. Accessibility

-   Use semantic landmarks: `header`, `nav`, `main`, `section`, and
    `footer`.
-   Ensure keyboard access to all links, buttons, menus, filters, and
    media controls.
-   Include visible focus states.
-   Maintain readable contrast.
-   Do not communicate category or state by color alone.
-   Add accessible labels to icon-only controls.
-   Make dialogs/overlays dismissible with Escape and provide
    appropriate focus behavior.
-   Respect reduced motion.
-   Ensure the mobile menu and any project modal work with assistive
    technology.

## 13. Content and Configuration

Keep owner-editable content in one clear configuration/data location
where practical.

Create a simple configuration for: - Display name. - Short
role/discipline line. - Email address. - Social URLs. - Showreel URL. -
Optional availability status. - Project list. - Service list.

Use safe placeholders such as `YOUR_EMAIL_HERE` and
`YOUR_INSTAGRAM_URL_HERE` in development. Do not render placeholder
contact details as if they were real. If a field is missing, hide that
link or show a clearly editable placeholder state.

## 14. Implementation Plan for Antigravity

Work in the following phases. Do not attempt to add everything in one
unverified pass.

### Phase 1 --- Audit

-   Inspect all files, components, routes, styles, dependencies, and
    package scripts.
-   Identify the current navbar, hero, and About implementation.
-   Determine whether routing and an animation library already exist.
-   Identify available images and videos.
-   Report a short plan, then proceed with implementation unless a
    critical missing detail prevents it.

### Phase 2 --- Foundation

-   Establish consistent typography, colors, spacing, and responsive
    containers.
-   Refine the existing navbar and hero without losing the reference
    design.
-   Ensure the existing About section remains intact and improves
    visually.

### Phase 3 --- Portfolio content

-   Build the project data model and selected-work gallery.
-   Implement filters only if useful for the available project count.
-   Add project detail pages or an accessible detail overlay.
-   Add the showreel section with a proper fallback if no video exists.

### Phase 4 --- Supporting sections

-   Build Services, Process, Capabilities, Contact, and Footer.
-   Connect all navigation and CTA actions.
-   Keep copy factual and easy for the owner to replace.

### Phase 5 --- Motion

-   Add entrance, hover, and transition effects.
-   Add reduced-motion behavior.
-   Check mobile/touch behavior and performance.

### Phase 6 --- Quality assurance

-   Run the existing lint, test, and build commands where available.
-   Fix all build errors and obvious console warnings.
-   Test links, filters, mobile navigation, project details, and contact
    actions.
-   Check representative viewport sizes.
-   Confirm keyboard navigation and reduced-motion behavior.
-   Summarize what was built, which assets or contact details still need
    replacing, and which commands were run.

## 15. Definition of Done

The work is complete when:

-   [ ] Existing React + Tailwind setup is preserved.
-   [ ] Navbar and hero are polished and responsive.
-   [ ] About section is complete.
-   [ ] Selected Projects gallery works.
-   [ ] Project detail interactions work.
-   [ ] Showreel section has real media or a deliberate placeholder.
-   [ ] Services section is complete.
-   [ ] Process/capabilities section is complete.
-   [ ] Contact section contains working configured actions or an honest
    fallback.
-   [ ] Footer links work.
-   [ ] Animations are smooth, purposeful, and reduced-motion aware.
-   [ ] No horizontal overflow on mobile.
-   [ ] No fake testimonials, client names, project outcomes, or
    credentials.
-   [ ] No dead buttons or placeholder links presented as working.
-   [ ] Existing build succeeds.
-   [ ] Final implementation summary identifies any owner-supplied
    assets/details still required.

## 16. Final Instructions to the Coding Agent

Treat this PRD as the product specification and the supplied screenshot
as the visual reference. Begin by inspecting the existing repository.
Preserve the established visual identity: oversized black typography,
warm ivory background, fine dividers, editorial spacing, red visual
accents, and a cinematic focal point.

Build a cohesive creative portfolio with multiple substantial sections,
reusable components, real interactions, responsive layouts, and
restrained high-quality animation. Prioritize the real work over
decoration. Do not fabricate missing content, do not replace the stack
unnecessarily, and do not claim a feature is complete unless it has been
implemented and checked.
