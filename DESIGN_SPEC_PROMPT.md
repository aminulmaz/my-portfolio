# 🖋️ MASTER DESIGN SYSTEM & AI PROMPT: TACTILE LINED NOTEBOOK & CLASSROOM DESK UI

This document contains the complete visual specification, design tokens, mathematical grid rules, and a **copy-paste Master Prompt** to replicate this exact tactile lined-notebook and classroom studio aesthetic in any other project.

---

## 📋 PART 1: MASTER COPY-PASTE AI PROMPT

Copy and paste the entire block below into any AI agent (Claude, ChatGPT, Gemini, Cursor) to build an application with this exact aesthetic:

```markdown
# UI/UX & FRONTEND DESIGN PROMPT: TACTILE LINED NOTEBOOK & CLASSROOM DESK AESTHETIC

You are an expert Frontend Architect and Art Director specializing in hyper-tactile, skeumorphic, and creative web interfaces.

Your objective is to design and build a modern web application styled as an authentic Indian Ruled School Notebook Sheet resting on a Wooden Classroom Desk with a Green Chalkboard header.

================================================================
CORE VISUAL & SKEUOMORPHIC RULES
================================================================

1. 3D CLASSROOM BENCH PERSPECTIVE (BACKGROUND):
   - Background Color: Deep rich timber brown (#23160e / #142217).
   - Radial ambient lighting from the top center: radial-gradient(ellipse at 50% 5%, rgba(255, 230, 185, 0.12) 0%, transparent 60%).
   - Layered gradient transitioning from dark green classroom floor/wall to warm desk wood:
     linear-gradient(to bottom, #142217 0%, #142217 140px, #422615 140px, #2a170c 500px, #180d07 100%).

2. GREEN CLASSROOM CHALKBOARD HEADER:
   - Green blackboard texture (#1c3324) encased in a dark wooden frame border (5px solid #3b2214) with subtle box-shadow.
   - White/warm chalk typography with daily inspirational quote and institutional header text.

3. THE LINED NOTEBOOK PAPER SHEET (CENTRAL CANVAS):
   - Centered paper canvas (max-width: 680px) with rich deep drop shadows: box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6).
   - Paper Color: Warm aged cream (#faf6ea).
   - Jagged Torn Paper Edges: Ripped top and bottom edge masking using CSS radial gradients:
     - Top Edge: radial-gradient(8px at 50% -3px, #000 99%, #0000 101%) 50% 7px/14px 100% repeat-x, radial-gradient(8px at 50% 11px, #0000 99%, #000 101%) 50% -7px/14px 100% repeat-x.
     - Bottom Edge: radial-gradient(8px at 50% 11px, #000 99%, #0000 101%) 50% -3px/14px 100% repeat-x, radial-gradient(8px at 50% -3px, #0000 99%, #000 101%) 50% 7px/14px 100% repeat-x.
   - Indian Classmate Ruled Notebook Pattern:
     - Vertical Red Double-Rule Margin on the left:
       linear-gradient(90deg, transparent 48px, rgba(220, 53, 69, 0.45) 48px, rgba(220, 53, 69, 0.45) 49.5px, transparent 49.5px, transparent 52px, rgba(220, 53, 69, 0.2) 52px, rgba(220, 53, 69, 0.2) 53px, transparent 53px)
     - Horizontal Blue Ruled Lines (32px vertical rhythm):
       linear-gradient(rgba(43, 91, 168, 0.16) 1px, transparent 1px) with background-size: 100% 32px.

4. COLOR PALETTE (INKS & ACCENTS):
   - Ballpoint Blue Ink (Primary Text & Borders): #153e90
   - Dark Fountain Blue Ink (Headings & Body): #092257
   - Red Marking Ink (Accents, Errors, Marks): #c92a2a
   - Pencil Grey (Secondary Meta & Subtext): #525f73
   - Distressed Rubber Stamp Red: #d6332a

5. TYPOGRAPHY SYSTEM:
   - Handwriting / Sketch Titles: 'Patrick Hand', 'Caveat', cursive
   - Handwritten Notes & Subheadings: 'Kalam', 'Caveat', cursive
   - Readable Body & UI: 'Plus Jakarta Sans', -apple-system, sans-serif
   - Technical & Code Blocks: 'JetBrains Mono', monospace

6. TACTILE UI COMPONENTS:
   - Double-Border Exam Boxes: 2px solid #153e90 with an inner ::before border (inset: 2.5px; border: 1px solid #153e90).
   - 3-Step Hatched Sketch Podium:
     - 3 podium blocks (Rank 2 left, Rank 1 center tall, Rank 3 right).
     - Repeating diagonal hatched sketch lines (repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(21, 62, 144, 0.09) 5px, rgba(21, 62, 144, 0.09) 7px)).
     - Center rank 1 highlighted in red hatched lines (#c92a2a).
   - Red Rubber Stamp Badges: Distressed border, bold uppercase text, slight tilt (transform: rotate(-3deg)).
   - Hand-Drawn Red Highlighter Circle: Irregular rounded border (border-radius: 255px 15px 225px 15px/15px 225px 15px 255px; border: 2.2px solid #c92a2a; transform: rotate(-0.6deg)).
   - Tactile Buttons: Double-bordered rectangular exam buttons with 2px solid drop-shadow (#153e90) that depress by 1px on hover/active.

7. RESPONSIVENESS & ACCESSIBILITY:
   - Fully responsive from 320px mobile screens to widescreen displays.
   - Adjust left margin indent on mobile screens (<500px: 24px margin line; >500px: 48px; >680px: 60px).
   - Scrollable tab navigation bar without scrollbars.
   - Semantic HTML5 structure (header, nav, section, article, footer) with full Open Graph and Schema.org SEO structured data.
```

---

## 🎨 PART 2: DESIGN TOKENS & CSS SPECIFICATION

```css
:root {
  /* Classroom Desk */
  --chalkboard-green: #1c3324;
  --chalkboard-frame: #3b2214;
  --desk-wood-dark: #23160e;
  --desk-wood-mid: #382012;
  --desk-wood-light: #52311c;

  /* Ruled Notebook Paper */
  --paper-cream: #faf6ea;
  --paper-blue-line: rgba(43, 91, 168, 0.16);
  --paper-blue-line-strong: rgba(43, 91, 168, 0.32);
  --paper-red-margin: rgba(220, 53, 69, 0.45);
  --paper-red-margin-light: rgba(220, 53, 69, 0.2);

  /* Inks */
  --ink-blue: #153e90;
  --ink-blue-dark: #092257;
  --ink-blue-muted: #486699;
  --ink-red: #c92a2a;
  --ink-pencil: #525f73;
  --stamp-red: #d6332a;

  /* Fonts */
  --font-sketch: "Patrick Hand", "Caveat", cursive, sans-serif;
  --font-hand: "Kalam", "Caveat", cursive, sans-serif;
  --font-body: "Plus Jakarta Sans", -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Rhythm */
  --ruled-line-gap: 32px;
}
```

---

## 📐 PART 3: KEY SIGNATURE UI TECHNIQUES

### 1. Jagged Torn Paper Mask (Pure CSS)
```css
.torn-edge-top {
  width: 100%;
  height: 14px;
  background-color: #faf6ea;
  --mask: 
    radial-gradient(8px at 50% -3px, #000 99%, #0000 101%) 50% 7px/14px 100% repeat-x,
    radial-gradient(8px at 50% 11px, #0000 99%, #000 101%) 50% -7px/14px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  margin-top: -7px;
}
```

### 2. Double-Border Exam Question Card
```css
.exam-double-box {
  border: 2px solid #153e90;
  border-radius: 2px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  position: relative;
}

.exam-double-box::before {
  content: "";
  position: absolute;
  inset: 2.5px;
  border: 1px solid #153e90;
  pointer-events: none;
}
```

### 3. Hatched Diagonal Sketch Podium
```css
.podium-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kalam", cursive;
  font-size: 1.35rem;
  font-weight: 700;
  border: 1.5px solid #153e90;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5px,
    rgba(21, 62, 144, 0.09) 5px,
    rgba(21, 62, 144, 0.09) 7px
  );
}
```

### 4. Hand-Drawn Red Oval Highlight
```css
.red-hand-circle {
  border: 2.2px solid #c92a2a;
  padding: 4px 10px;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  transform: rotate(-0.6deg);
}
```

---

## 🚀 PART 4: HOW TO USE IN ANOTHER PROJECT

1. In your new repository, include Google Fonts: `Patrick Hand`, `Kalam`, `Caveat`, and `Plus Jakarta Sans`.
2. Apply the Master Prompt from Part 1 into your LLM coding assistant.
3. Paste the CSS tokens into your global stylesheet.
4. Build pages matching the structured tab architecture (`OVERVIEW`, `FEATURED WORK`, `ARCHIVE`, `BLOG`, `DOSSIER`, `DISPATCH`).
