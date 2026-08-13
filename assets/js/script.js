/**
 * AMINUL (MZR) — PERSONAL DIGITAL ARCHIVE ENGINE
 * Lined Notebook Tab Switcher, Leaderboards, Case Studies & Full-Page Article Reader
 */

"use strict";

const PEN_PROJECTS = [
  {
    id: "ticket-xorai",
    num: "PRJ / 001",
    rank: 4,
    points: 3890,
    title: "TicketXorai",
    category: "web",
    categoryLabel: "Event Ticketing Architecture",
    status: "VERIFIED PROD",
    year: "2024",
    image: "./assets/images/ticket-xorai.png",
    synopsis: "Premier event ticketing and seat reservation platform for Guwahati, sustained zero-latency checkouts under live concert surges.",
    highlights: [
      { label: "Matches Defended", text: "94 defences during high-concurrency ticket drops" },
      { label: "Architecture", text: "Next.js SSR, Supabase Row-Level Security, PostgreSQL, TypeScript" }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    overview: "Built to eliminate ticketing bottlenecks for major sports and entertainment events in Assam. Features real-time seat lock state machines and instant box-office QR code scanners.",
    challenge: "Preventing race conditions when thousands of users click the same VIP seats within milliseconds.",
    solution: "Atomic PostgreSQL transaction locks with Redis-like TTL expiration for active reservation windows.",
    liveUrl: "https://ticketxorai.vercel.app/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "dr-apsc",
    num: "PRJ / 002",
    rank: 5,
    points: 3210,
    title: "Dr. APSC (AspirantHub)",
    category: "web",
    categoryLabel: "EdTech & Note Digitizer",
    status: "ACTIVE HUB",
    year: "2024",
    image: "./assets/images/dr-apsc.png",
    synopsis: "Community learning ecosystem and client-side PDF document digitizer for civil service candidates across Northeast India.",
    highlights: [
      { label: "Active Aspirants", text: "500+ civil service candidates practicing daily" },
      { label: "Performance", text: "Chunked offline-first caching for tier-2/3 mobile networks" }
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "PDF.js"],
    overview: "A dedicated repository of state-specific syllabus breakdowns, daily analytical briefs, and in-browser handwritten notes OCR scanning.",
    challenge: "Handling large handwritten notes on weak mobile networks in rural Assam.",
    solution: "Lightweight client-side chunked rendering and fast keyword search across years of past questions.",
    liveUrl: "https://drapsc.vercel.app/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "prep-focus",
    num: "PRJ / 003",
    rank: 6,
    points: 3050,
    title: "CIVIS (PrepFocus)",
    category: "web",
    categoryLabel: "Cognitive Learning OS",
    status: "SCALING V2",
    year: "2024",
    image: "./assets/images/prep-focus.png",
    synopsis: "Spaced repetition study OS engineered around active recall algorithms to master dense constitutional and statutory law syllabi.",
    highlights: [
      { label: "Algorithm", text: "SuperMemo-2 adaptive retention scheduling" },
      { label: "UX Metric", text: "Sub-50ms keyboard-first review response" }
    ],
    technologies: ["React", "Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    overview: "Converts passive reading into active test prompts, automatically re-surfacing difficult legal precedents right before memory decay occurs.",
    challenge: "Balancing high-density legal tabular data with low cognitive fatigue during intense study sessions.",
    solution: "Tactile keyboard shortcuts with instantaneous local state reconciliation and recall analytics.",
    liveUrl: "https://prepfocus.vercel.app/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "nyf-cricket",
    num: "PRJ / 004",
    rank: 7,
    points: 2800,
    title: "NYF Cricket Portal",
    category: "systems",
    categoryLabel: "Real-Time Tournament Engine",
    status: "100% UPTIME",
    year: "2023",
    image: "./assets/images/nyf-cricket.png",
    synopsis: "Official real-time scoring portal for the MLA Night Cricket Tournament, streaming ball-by-ball telemetry with <500ms websocket latency.",
    highlights: [
      { label: "Tournament Duration", text: "14 consecutive night matches with zero downtime" },
      { label: "Sync Engine", text: "Optimistic local queues for unstable stadium Wi-Fi" }
    ],
    technologies: ["Next.js", "React", "Firebase Realtime DB", "Tailwind CSS"],
    overview: "Replaced manual paper scoring with a digital tournament management console, live scoreboard broadcast, and automatic NRR calculation.",
    challenge: "Handling unreliable stadium internet while scorers simultaneously log ball commentary and boundaries.",
    solution: "Constructed an optimistic local event queue that syncs conflict-free state to Firebase upon reconnection.",
    liveUrl: "https://nyfcricket.vercel.app/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "construction-cms",
    num: "PRJ / 005",
    rank: 8,
    points: 2710,
    title: "Construction Management System",
    category: "desktop",
    categoryLabel: "Offline Desktop Software",
    status: "ACTIVE BUILD",
    year: "2025",
    image: "./assets/images/project-10.png",
    synopsis: "Rugged offline-first desktop suite for site contractors, handling material ledgers, labor tracking, and GST billing without constant internet.",
    highlights: [
      { label: "Offline Storage", text: "Local SQLite database with cryptographic sync engine" },
      { label: "Audit Engine", text: "Automated GST ledger audit trails and instant BOQ sheets" }
    ],
    technologies: ["Flutter Desktop", "SQLite", "Supabase", "Dart", "Node.js"],
    overview: "Built for remote construction sites where connectivity is intermittent. Enables supervisors to record daily material logs on rugged laptops.",
    challenge: "Preventing double-entry fraud and reconciling local site databases with head office servers.",
    solution: "Cryptographic log-structured merge engine with deterministic conflict resolution.",
    liveUrl: null,
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "aus-hostels",
    num: "PRJ / 006",
    rank: 9,
    points: 2610,
    title: "Assam University Hostel & Placement System",
    category: "systems",
    categoryLabel: "Institutional ERP & Allocation",
    status: "CAMPUS ERP",
    year: "2023",
    image: "./assets/images/project-1.png",
    synopsis: "Automated merit-based hostel room allocation engine and placement coordinator for Assam University, Silchar.",
    highlights: [
      { label: "Scholars Served", text: "Hundreds of university students and administration officers" },
      { label: "Efficiency", text: "Cut manual hostel queue processing from weeks to under an hour" }
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    overview: "Spearheaded digitization of manual university paperwork into a unified campus portal handling room allocations and fees.",
    challenge: "Balancing departmental reservation caps, merit scores, and distance metrics with audit logs.",
    solution: "Automated rule-based solver with downloadable signed passes and administrative override logs.",
    liveUrl: "https://aushostelsys.vercel.app/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "mannats-lodge",
    num: "PRJ / 007",
    rank: 10,
    points: 2500,
    title: "Mannat's Residency & Lodge",
    category: "web",
    categoryLabel: "Hospitality & Direct Booking",
    status: "DEPLOYED",
    year: "2023",
    image: "./assets/images/project-4.png",
    synopsis: "Commercial hospitality web portal and direct room inquiry engine for a boutique residency in Assam.",
    highlights: [
      { label: "Conversion", text: "Direct WhatsApp and email reservation integration" },
      { label: "Speed", text: "Instant load times on 3G/4G mobile networks" }
    ],
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    overview: "Clean web portal featuring room tariffs, amenities, map coordinates, and frictionless booking inquiries.",
    challenge: "Delivering a rich aesthetic on slow mobile connections.",
    solution: "Zero-dependency layout with optimized responsive image delivery.",
    liveUrl: "https://mannatresidency.in/",
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "zenbuddy",
    num: "PRJ / 008",
    rank: 11,
    points: 2460,
    title: "ZenBuddy",
    category: "mobile",
    categoryLabel: "Productivity & Mindfulness",
    status: "PROTOTYPE",
    year: "2023",
    image: "./assets/images/project-8.jpg",
    synopsis: "Minimalist Pomodoro and deep work interval timer with custom haptics and 100% on-device SQLite storage.",
    highlights: [
      { label: "Privacy", text: "100% offline with zero cloud telemetry" },
      { label: "Haptics", text: "Tactile vibration pacing for deep focus sessions" }
    ],
    technologies: ["Flutter", "Dart", "SQLite", "Figma"],
    overview: "A personal experiment in micro-interactions and digital pacing with custom habit streaks and soothing soundscapes.",
    challenge: "Minimizing battery drain during foreground timer services.",
    solution: "Native platform channels with optimized wake-lock handlers.",
    liveUrl: null,
    githubUrl: "https://github.com/aminulmaz"
  },
  {
    id: "legaltech-saas",
    num: "PRJ / 009",
    rank: 12,
    points: 2140,
    title: "Legal Tech SaaS (LexLogic)",
    category: "legal",
    categoryLabel: "Legal Informatics & Argument Parser",
    status: "ARCHITECTING",
    year: "2025",
    image: "./assets/images/project-2.png",
    synopsis: "Deterministic statutory argument parser and precedent graph engine synthesizing criminal law provisions into formal state machines.",
    highlights: [
      { label: "Core Thesis", text: "Mapping constitutional jurisprudence to formal state machines" },
      { label: "AI & Graph", text: "LLM-assisted citation verification and precedent tree graphing" }
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "LangChain", "TypeScript"],
    overview: "Synthesizes Aminul's dual discipline as an LLM Law Scholar and software architect. Treats statutory sections as deterministic states.",
    challenge: "Eliminating hallucination risks in statutory legal research.",
    solution: "Strict knowledge graphs anchored to authoritative Indian Penal and Constitutional statutes.",
    liveUrl: null,
    githubUrl: "https://github.com/aminulmaz"
  }
];

const DEMO_BLOG_POSTS = [
  {
    id: "statutes-state-machines",
    title: "Statutes as State Machines: Mapping Indian Constitutional Jurisprudence to Backend Logic",
    category: "CONSTITUTIONAL LAW × SYSTEMS",
    date: "August 2024",
    readTime: "6 min read",
    author: "Aminul (MZR) · LLM Scholar, Assam University",
    snippet: "Exploring how parliamentary statutory drafting and penal provisions mirror deterministic state machines, condition trees, and exception handlers in software architecture.",
    content: `
      <p class="font-body" style="font-size: 0.95rem; line-height: 1.65; color: var(--ink-blue-dark); margin-bottom: 12px;">
        During my advanced research in Criminal and Constitutional Law at Assam University, a fundamental cross-disciplinary realization emerged: <strong>the intellectual mechanics of legislative statutory drafting and robust backend software engineering are virtually identical.</strong>
      </p>

      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 14px;">
        In both disciplines, we build systems that take untrusted external inputs (human actions in law; HTTP payloads in code), validate them against immutable constraints, navigate deterministic branch trees, and transition into definitive states (Guilt/Acquittal; HTTP 200/422).
      </p>
      
      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        01. THE STATUTORY STATE MACHINE ARCHITECTURE
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        Consider a cornerstone statutory provision such as Section 300 of the Indian Penal Code (or the corresponding provisions in Bharatiya Nyaya Sanhita). It begins with a base definition (Culpable Homicide), evaluates four discrete condition gates, and passes through five mutually exclusive Exception handlers:
      </p>
      
      <div class="exam-double-box" style="padding: 12px; background: rgba(21, 62, 144, 0.04); margin-bottom: 14px;">
        <code style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--ink-blue); line-height: 1.5; display: block;">
          // Formal State Machine of Indian Penal Code Section 300<br/>
          function evaluateStatutoryCulpability(act, intent, context) {<br/>
          &nbsp;&nbsp;if (!act.causesDeath) return Offence.None;<br/><br/>
          &nbsp;&nbsp;// State 1: Primary Gate Validation<br/>
          &nbsp;&nbsp;const isPrimaFacieMurder = intent.isSubjectiveBodilyInjury || act.isImminentlyDangerous;<br/>
          &nbsp;&nbsp;if (!isPrimaFacieMurder) return Offence.CulpableHomicide;<br/><br/>
          &nbsp;&nbsp;// State 2: Exception Filter Handlers (Provocation, Private Defence, etc.)<br/>
          &nbsp;&nbsp;if (context.matchesExceptions(Exceptions.P1_to_P5)) {<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return Offence.CulpableHomicideNotAmountingToMurder; // Mitigated State<br/>
          &nbsp;&nbsp;}<br/><br/>
          &nbsp;&nbsp;return Offence.Murder; // Final Deterministic State<br/>
          }
        </code>
      </div>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        02. THE PARALLEL: RUNTIME CRASHES VS. CONSTITUTIONAL CHALLENGES
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        In software engineering, ambiguous types or unhandled <code style="font-family: var(--font-mono); color: var(--ink-red);">null</code> branches cause unhandled runtime exceptions and catastrophic downtime.
      </p>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 14px;">
        In constitutional jurisprudence, vague legislative drafting that creates unfettered executive discretion violates <strong>Article 14 of the Constitution of India</strong> (the Doctrine of Manifest Arbitrariness). A statute with missing branch logic is struck down by the Supreme Court in the exact same manner a compiler rejects ambiguous syntax.
      </p>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        03. ENGINEERING LEXLOGIC (LEGAL TECH SAAS)
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        This synthesis forms the architectural bedrock of <strong>LexLogic</strong>, the legal informatics SaaS we are architecting. Instead of treating statutes as unstructured natural language tokens prone to LLM hallucinations, we parse Indian statutory frameworks into deterministic acyclic knowledge graphs.
      </p>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d;">
        By unifying the rigor of the law with the power of software systems, we build tools that provide verifiable, mathematically consistent legal analysis.
      </p>
    `,
    link: "https://medium.com/@aminulmaz"
  },
  {
    id: "ticketxorai-concurrency",
    title: "Architecting TicketXorai: Zero-Latency Checkouts Under Stadium Concurrency Surges",
    category: "FULL-STACK ARCHITECTURE",
    date: "July 2024",
    readTime: "8 min read",
    author: "Aminul (MZR) · Full-Stack Architect",
    snippet: "Engineering Guwahati's premier ticketing platform using atomic PostgreSQL row locks, Supabase edge handlers, and optimistic seat reservation queues.",
    content: `
      <p class="font-body" style="font-size: 0.95rem; line-height: 1.65; color: var(--ink-blue-dark); margin-bottom: 12px;">
        When designing <strong>TicketXorai</strong>—the premier event ticketing portal for Guwahati and Northeast India—the core technical bottleneck was simple yet unforgiving: <em>thousands of concurrent fans competing for the same 50 VIP stadium seats at the exact strike of 10:00:00 AM.</em>
      </p>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        01. THE PROBLEM WITH TRADITIONAL READ-THEN-WRITE
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        In serverless and auto-scaling architectures, naive queries like <code style="font-family: var(--font-mono); color: var(--ink-red);">SELECT status FROM seats WHERE id = 42</code> followed by an update create severe race conditions. If 200 users read "AVAILABLE" concurrently, 200 separate checkout sessions initiate for a single seat, guaranteeing double-booking disaster.
      </p>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        02. ATOMIC POSTGRESQL ROW LOCKS & TTL EXPIRATION
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        We eliminated race conditions entirely by delegating the reservation state machine to atomic database transactions:
      </p>

      <div class="exam-double-box" style="padding: 12px; background: rgba(21, 62, 144, 0.04); margin-bottom: 14px;">
        <code style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--ink-blue); line-height: 1.5; display: block;">
          -- Atomic Seat Reservation Procedure<br/>
          UPDATE seats<br/>
          SET status = 'LOCKED',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;locked_by = p_user_id,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;expires_at = NOW() + INTERVAL '7 minutes'<br/>
          WHERE id = p_seat_id<br/>
          &nbsp;&nbsp;AND (status = 'AVAILABLE' OR expires_at &lt; NOW());
        </code>
      </div>

      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d;">
        This guaranteed that only one connection could acquire the lock. If payment is not completed within 7 minutes, background cron workers instantly release the seat back to the pool with zero human intervention.
      </p>
    `,
    link: "https://medium.com/@aminulmaz"
  },
  {
    id: "offline-sync-remote",
    title: "Offline-First Data Synchronization in Remote Infrastructure Environments",
    category: "DESKTOP & STORAGE",
    date: "June 2024",
    readTime: "5 min read",
    author: "Aminul (MZR) · Systems Engineer",
    snippet: "Strategies for designing cryptographic log-structured SQLite ledgers on construction laptops with conflict-free cloud reconciliation upon rejoining networks.",
    content: `
      <p class="font-body" style="font-size: 0.95rem; line-height: 1.65; color: var(--ink-blue-dark); margin-bottom: 12px;">
        In rural civil engineering and field management across Northeast India, internet connectivity is the exception, not the rule. Building enterprise desktop software that crashes or locks up without constant internet connectivity leads to severe site downtime.
      </p>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        01. LOCAL-FIRST SQLITE AS THE SINGLE SOURCE OF TRUTH
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        For our <strong>Construction Management Desktop Suite</strong>, we treated the rugged site laptop's local SQLite database as the definitive authority for all real-time inventory entries, material logs, and contractor GST invoices.
      </p>

      <h4 class="font-sketch" style="font-size: 1.25rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px; margin-top: 18px; margin-bottom: 8px;">
        02. CRYPTOGRAPHIC JOURNAL DELTAS & DETERMINISTIC MERGE
      </h4>
      <p class="font-body" style="font-size: 0.92rem; line-height: 1.6; color: #2e384d; margin-bottom: 10px;">
        Every modification appends to an immutable journal delta signed with the site engineer's local key. When the laptop reconnects to office Wi-Fi, deltas stream to master PostgreSQL servers with automatic conflict resolution.
      </p>
    `,
    link: "https://medium.com/@aminulmaz"
  }
];

document.addEventListener("DOMContentLoaded", async () => {
  initPenTabs();
  renderPenRecords("all");
  initPenDispatchForm();
  renderDemoBlogPosts();
  handleUrlHashRouting();
});

/* --------------------------------------------------------------------------
   01. TAB CONTROLLER
   -------------------------------------------------------------------------- */
function initPenTabs() {
  const tabs = document.querySelectorAll(".notebook-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchPenTab(tabId);
    });
  });
}

function switchPenTab(tabId) {
  document.querySelectorAll(".notebook-tab-btn").forEach((t) => {
    if (t.getAttribute("data-tab") === tabId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-pane").forEach((pane) => {
    if (pane.id === `pane-${tabId}`) {
      pane.style.display = "block";
      pane.classList.add("active");
    } else {
      pane.style.display = "none";
      pane.classList.remove("active");
    }
  });

  // If leaving blog, reset view
  if (tabId !== "blog") {
    closeFullArticleView();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.switchPenTab = switchPenTab;

/* --------------------------------------------------------------------------
   02. RECORDS ARCHIVE CONTROLLER
   -------------------------------------------------------------------------- */
function renderPenRecords(category = "all") {
  const container = document.getElementById("pen-records-list");
  if (!container) return;

  const filtered = PEN_PROJECTS.filter((p) => category === "all" || p.category === category);

  container.innerHTML = filtered
    .map(
      (p) => `
    <div class="roll-call-row" onclick="openPenModal('${p.id}')">
      <div class="roll-left">
        <span class="roll-rank">${p.rank}</span>
        <span class="roll-crown">👑</span>
        <div>
          <span class="roll-title">${p.title.toUpperCase()}</span>
          <span class="font-hand" style="font-size: 0.78rem; color: var(--ink-pencil); margin-left: 4px;">[${p.categoryLabel}]</span>
        </div>
      </div>
      <span class="roll-pts">${p.points}</span>
    </div>
  `
    )
    .join("");
}

function filterPenRecords(category) {
  renderPenRecords(category);
}

window.filterPenRecords = filterPenRecords;

/* --------------------------------------------------------------------------
   03. FULL-PAGE BLOG READER CONTROLLER
   -------------------------------------------------------------------------- */
function renderDemoBlogPosts() {
  const blogList = document.getElementById("pen-blog-list");
  if (!blogList) return;

  blogList.innerHTML = DEMO_BLOG_POSTS.map(
    (post) => `
    <article class="blog-sheet-item">
      <div class="blog-meta-tag-row">
        <span class="rubber-stamp-badge" style="font-size: 0.72rem;">${post.category}</span>
        <span>${post.date} · ${post.readTime}</span>
      </div>
      <h3 class="blog-sheet-title" style="cursor: pointer;" onclick="openFullArticleView('${post.id}')">${post.title}</h3>
      <p class="blog-sheet-snippet">${post.snippet}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; margin-top: 8px;">
        <button class="notebook-btn sm" onclick="openFullArticleView('${post.id}')">
          READ FULL ESSAY →
        </button>
        <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="notebook-btn sm red">
          MEDIUM ↗
        </a>
      </div>
    </article>
  `
  ).join("");
}

function openFullArticleView(postId) {
  const post = DEMO_BLOG_POSTS.find((p) => p.id === postId);
  if (!post) return;

  const catalogView = document.getElementById("blog-catalog-view");
  const readingView = document.getElementById("blog-reading-view");

  const titleEl = document.getElementById("reading-view-title");
  const tagEl = document.getElementById("reading-view-tag");
  const dateEl = document.getElementById("reading-view-date");
  const authorEl = document.getElementById("reading-view-author");
  const bodyEl = document.getElementById("reading-view-body");
  const mediumLinkEl = document.getElementById("reading-view-medium-link");

  if (titleEl) titleEl.textContent = post.title;
  if (tagEl) tagEl.textContent = post.category;
  if (dateEl) dateEl.textContent = `${post.date} · ${post.readTime}`;
  if (authorEl) authorEl.textContent = post.author.toUpperCase();
  if (bodyEl) bodyEl.innerHTML = post.content;
  if (mediumLinkEl) mediumLinkEl.href = post.link;

  if (catalogView) catalogView.style.display = "none";
  if (readingView) readingView.style.display = "block";

  // Switch to blog tab if not currently on it
  switchPenTab("blog");

  // Update URL hash for shareability
  history.replaceState(null, "", `#blog/${postId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeFullArticleView() {
  const catalogView = document.getElementById("blog-catalog-view");
  const readingView = document.getElementById("blog-reading-view");

  if (readingView) readingView.style.display = "none";
  if (catalogView) catalogView.style.display = "block";

  history.replaceState(null, "", `#blog`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.openFullArticleView = openFullArticleView;
window.closeFullArticleView = closeFullArticleView;

function handleUrlHashRouting() {
  const hash = window.location.hash;
  if (hash.startsWith("#blog/")) {
    const postId = hash.replace("#blog/", "");
    openFullArticleView(postId);
  } else if (hash === "#blog") {
    switchPenTab("blog");
  } else if (hash === "#records") {
    switchPenTab("records");
  } else if (hash === "#champions") {
    switchPenTab("champions");
  } else if (hash === "#dossier") {
    switchPenTab("dossier");
  } else if (hash === "#dispatch") {
    switchPenTab("dispatch");
  }
}

window.addEventListener("hashchange", handleUrlHashRouting);

/* --------------------------------------------------------------------------
   04. MODAL CASE STUDY CONTROLLER
   -------------------------------------------------------------------------- */
function openPenModal(projectId) {
  const project = PEN_PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("pen-modal");
  const modalBody = document.getElementById("pen-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
      <div>
        <span class="font-hand" style="color: var(--ink-red); font-size: 0.82rem; font-weight: 700;">
          QUESTION SHEET · ${project.num}
        </span>
        <h2 class="font-sketch" style="font-size: 1.65rem; color: var(--ink-blue); text-transform: uppercase; margin-top: 2px;">
          ${project.title}
        </h2>
        <span class="rubber-stamp-badge" style="margin-top: 4px;">${project.status} · ${project.year}</span>
      </div>
    </div>

    <div class="champion-img-wrap" style="height: 150px;">
      <img src="${project.image}" alt="${project.title}" onerror="this.src='./assets/images/project-1.png';" />
    </div>

    <div style="margin-block: 10px;">
      <h3 class="font-sketch" style="font-size: 1.05rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px;">
        01. OVERVIEW & OBJECTIVE
      </h3>
      <p class="font-hand" style="font-size: 0.95rem; color: var(--ink-blue-dark); line-height: 1.45; margin-top: 3px;">
        ${project.overview}
      </p>
    </div>

    <div style="margin-block: 10px;">
      <h3 class="font-sketch" style="font-size: 1.05rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px;">
        02. CORE OPERATIONAL CHALLENGE
      </h3>
      <p class="font-hand" style="font-size: 0.95rem; color: var(--ink-red); line-height: 1.45; margin-top: 3px;">
        ${project.challenge}
      </p>
    </div>

    <div style="margin-block: 10px;">
      <h3 class="font-sketch" style="font-size: 1.05rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px;">
        03. TECHNICAL RESOLUTION
      </h3>
      <p class="font-hand" style="font-size: 0.95rem; color: var(--ink-blue-dark); line-height: 1.45; margin-top: 3px;">
        ${project.solution}
      </p>
    </div>

    <div style="margin-block: 10px;">
      <h3 class="font-sketch" style="font-size: 1.05rem; color: var(--ink-blue); border-bottom: 1.5px solid var(--ink-blue); padding-bottom: 2px;">
        04. TECHNICAL INVENTORY
      </h3>
      <div class="champion-tech-tags" style="margin-top: 5px;">
        ${project.technologies.map((t) => `<span class="pen-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; border-top: 2px solid var(--ink-blue); padding-top: 10px;">
      ${
        project.liveUrl
          ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="notebook-btn sm red">
              LAUNCH LIVE PLATFORM ↗
            </a>`
          : ""
      }
      ${
        project.githubUrl
          ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="notebook-btn sm">
              GITHUB REPO ↗
            </a>`
          : ""
      }
      <button class="notebook-btn sm" onclick="closePenModal()" style="margin-left: auto;">
        CLOSE SHEET
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePenModal() {
  const modal = document.getElementById("pen-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

window.openPenModal = openPenModal;
window.closePenModal = closePenModal;

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePenModal();
});

const modalBackdrop = document.getElementById("pen-modal");
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closePenModal();
  });
}

/* --------------------------------------------------------------------------
   05. DISPATCH FORM HANDLER
   -------------------------------------------------------------------------- */
function initPenDispatchForm() {
  const form = document.getElementById("pen-dispatch-form");
  const statusEl = document.getElementById("pen-form-status");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='fullname']")?.value.trim() || "";
    const email = form.querySelector("input[name='email']")?.value.trim() || "";
    const message = form.querySelector("textarea[name='message']")?.value.trim() || "";

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const mailtoSubject = encodeURIComponent(`Note from ${name} — Aminul (MZR) Scholar Archive`);
    const mailtoBody = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})\nAssam University Scholar Archive`);

    if (statusEl) {
      statusEl.style.display = "block";
      statusEl.textContent = "✓ Opening your email client with your prefilled note...";
    }

    window.location.href = `mailto:aminulmaz.aus@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  });
}
