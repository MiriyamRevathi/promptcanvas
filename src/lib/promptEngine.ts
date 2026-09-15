import {
  Category,
  PromptMode,
  PromptSection,
  PromptSections,
  SectionKey,
  Suggestion,
} from '../types/prompt';

export interface DomainProfile {
  domain: string;
  category: Category;
  defaultAudience: string[];
  designKeywords: string[];
  coreFeatureTemplates: string[];
  contentRequirements: string[];
  uxHighlights: string[];
  techStackDefaults: string[];
  constraintsDefault: string[];
}

const DOMAIN_PROFILES: Record<string, DomainProfile> = {
  hospitality: {
    domain: 'Hospitality & Dining',
    category: 'Website',
    defaultAudience: [
      'Local neighborhood patrons and coffee connoisseurs',
      'Remote workers seeking cozy workspace with Wi-Fi',
      'Event organizers and casual brunch groups',
    ],
    designKeywords: [
      'Warm earth tones (terracotta, espresso, cream)',
      'Editorial serif typography paired with clean modern sans',
      'Generous whitespace with artisanal photography aesthetic',
      'Tactile paper textures and organic rounded card surfaces',
    ],
    coreFeatureTemplates: [
      'Interactive digital menu with seasonal roast tags and dietary filters',
      'Store hours indicator with real-time "Open Now / Closing Soon" status',
      'Interactive map with parking notes and transit directions',
      'Mobile order-ahead or table reservation widget',
      'Community bulletin board and bean origin spotlight stories',
    ],
    contentRequirements: [
      'High-resolution imagery of signature brews and cozy seating',
      'Origin notes for ethically sourced single-origin coffee beans',
      'Clear allergen table and specialty milk alternatives list',
      'Barista team bios and neighborhood loyalty program details',
    ],
    uxHighlights: [
      '1-tap access to address, directions, and current operating hours',
      'Zero-friction mobile menu browsing with quick price lookups',
      'Subtle ambient micro-interactions on seasonal drink highlights',
    ],
    techStackDefaults: [
      'Responsive mobile-first semantic HTML5 with microdata for local SEO',
      'Accessible menu navigation with keyboard and screen reader support',
      'Fast-loading lightweight assets (<1.5s mobile LCP performance)',
    ],
    constraintsDefault: [
      'Must load instantly on weak cellular data near venue entrance',
      'No complex login required just to view beverage prices and hours',
      'WCAG AA contrast compliance across all text and pricing tags',
    ],
  },
  ecommerce: {
    domain: 'E-commerce & Retail',
    category: 'E-commerce',
    defaultAudience: [
      'Discerning online shoppers valuing craftsmanship and durability',
      'Gift buyers looking for curated packages and bespoke wrapping',
      'Returning brand loyalists using quick repeat checkout',
    ],
    designKeywords: [
      'Minimalist boutique atmosphere with warm neutral backdrop',
      'Crisp product photography grids with 1:1 and 4:5 aspect ratios',
      'Subtle micro-elevation on hovered cards without heavy drop-shadows',
      'Refined typography hierarchy with clear monetary scannability',
    ],
    coreFeatureTemplates: [
      'Product catalog with faceted category, price, and in-stock filtering',
      'Quick-view modal with variant selection (size, color, finish)',
      'Persistent slide-out shopping cart drawer with free-shipping meter',
      'One-page streamlined checkout with guest purchase path',
      'Customer verified reviews with photo uploads and ratings breakdown',
    ],
    contentRequirements: [
      'Dimension tables, materials composition, and sustainable origin notes',
      'Transparent shipping timeline and hassle-free returns policy breakdown',
      'Customer care FAQ and live chat trigger for order inquiries',
    ],
    uxHighlights: [
      'Instant sticky "Add to Cart" button on mobile viewports',
      'Visual stock urgency markers ("Only 3 left in batch")',
      'Seamless multi-image swipe gallery with double-tap zoom',
    ],
    techStackDefaults: [
      'Robust client-side state machine for cart and discount codes',
      'Optimized WebP/AVIF responsive images with layout shift guards',
      'Secure payment tokenization standards (Stripe/Apple Pay readiness)',
    ],
    constraintsDefault: [
      'Maximum 3-step checkout flow from cart to confirmation',
      'Never lose cart state upon accidental browser refresh',
      'Full PCI compliance and clear SSL security badges at checkout',
    ],
  },
  portfolio: {
    domain: 'Creative & Professional Portfolio',
    category: 'Portfolio',
    defaultAudience: [
      'Design directors, engineering managers, and hiring leads',
      'Prospective freelance clients evaluating craft and velocity',
      'Industry peers and conference organizers looking for speakers',
    ],
    designKeywords: [
      'Bespoke typography-forward editorial layout',
      'Restrained color palette allowing project work to shine',
      'Smooth layout transitions and subtle cursor hover interactions',
      'High-contrast case study reading mode with sticky progress bar',
    ],
    coreFeatureTemplates: [
      'Curated case study showcases with problem, role, process, and outcome',
      'Interactive live demo links and GitHub repository badges',
      'Downloadable PDF resume and direct calendar booking link',
      'Skills matrix categorized by depth of production experience',
      'Direct copy-to-clipboard contact email button with instant feedback',
    ],
    contentRequirements: [
      'Succinct value proposition above the fold without clichés',
      'Measurable metrics (e.g., "Reduced latency by 42%") in case studies',
      'Testimonials from engineering leads and cross-functional partners',
    ],
    uxHighlights: [
      'Fast scannability: readers can digest key credentials in under 30 seconds',
      'Keyboard navigable project cards (Arrow keys / Tab)',
      'Clean print stylesheet for recruiters printing the resume/profile',
    ],
    techStackDefaults: [
      'Ultra-fast static generation with zero unnecessary client JS bundles',
      'Accessible semantic landmarks (<header>, <main>, <article>, <aside>)',
      'OpenGraph and Twitter card metadata for high-engagement link previews',
    ],
    constraintsDefault: [
      'Must load completely in under 800ms without layout jump',
      'Work samples must remain legible without external third-party embeds',
      'Respect reduced-motion preferences (`prefers-reduced-motion: reduce`)',
    ],
  },
  saas: {
    domain: 'B2B / B2C SaaS',
    category: 'SaaS',
    defaultAudience: [
      'Team leads, product managers, and knowledge workers',
      'Budget decision-makers evaluating ROI and security compliance',
      'Daily active users seeking frictionless workflow automation',
    ],
    designKeywords: [
      'Crisp high-density layout with deliberate white-and-slate contrast',
      'Interactive product UI previews showing actual software workflows',
      'Clear pill badges for status tags, plan tiers, and features',
      'Refined geometric sans font with high tabular-numeric readability',
    ],
    coreFeatureTemplates: [
      'Interactive interactive product demo or sandbox walkthrough',
      'Transparent tiered pricing table with monthly/annual toggle discount',
      'Self-service onboarding flow with interactive setup checklist',
      'Role-based access management (Admin, Member, Viewer permissions)',
      'Real-time activity audit log and webhook notification dispatch',
    ],
    contentRequirements: [
      'Clear before-and-after workflow comparison diagrams',
      'SOC2 Type II, GDPR, and data residency compliance disclosures',
      'Customer success stories with quantified productivity improvements',
    ],
    uxHighlights: [
      'Frictionless "Start Free Trial" without mandatory credit card',
      'Interactive cost calculator based on active seats or API calls',
      'Sticky contextual help widget with keyboard shortcut cheat sheet',
    ],
    techStackDefaults: [
      'Single-page architecture with optimized code splitting',
      'Client-side optimistic UI updates for instantaneous feeling',
      'Comprehensive REST/GraphQL error handling with retry states',
    ],
    constraintsDefault: [
      'Strict tenant data isolation and end-to-end HTTPS encryption',
      'Sub-100ms response time on all primary interactive controls',
      'Zero downtime deployment compatibility with graceful fallback',
    ],
  },
  dashboard: {
    domain: 'Analytics & Management Dashboard',
    category: 'Dashboard',
    defaultAudience: [
      'Operations managers and C-suite executives tracking real-time KPIs',
      'Data analysts querying multi-dimensional datasets',
      'Frontline support agents managing customer tickets and SLA timers',
    ],
    designKeywords: [
      'High information density with balanced visual hierarchy',
      'Muted background cards with subtle 1px borders and no heavy shadows',
      'Accessible color-coded status badges (green, amber, crimson)',
      'Tabular figures with monospaced alignment for numbers',
    ],
    coreFeatureTemplates: [
      'Modular widget grid with drag-and-drop customizable layout',
      'Time-range selector (Last 24h, 7d, 30d, Custom Range) with comparison delta',
      'Faceted multi-column data table with sort, pagination, and bulk actions',
      'One-click data export to CSV, JSON, and formatted PDF summary',
      'Notification center with alert rules and threshold triggers',
    ],
    contentRequirements: [
      'Summary metric cards featuring current value, trend arrow, and sparkline',
      'Clear definition tooltips explaining calculation methodology',
      'Audit log tracking user modifications and automated background syncs',
    ],
    uxHighlights: [
      'Global keyboard command palette (Cmd+K) for rapid navigation',
      'Zero layout shifts when polling for live data updates',
      'Inline cell editing with visual confirmation and undo shortcut',
    ],
    techStackDefaults: [
      'Virtualized list rendering for tables exceeding 1,000 rows',
      'Modular chart visualizations using SVG or Canvas with resize observers',
      'Robust local caching to retain filter selections across page reloads',
    ],
    constraintsDefault: [
      'Must maintain 60fps scrolling performance during live data feeds',
      'Support viewport resizing down to 1024px without data truncation',
      'Strict role permissions: read-only users cannot access mutating actions',
    ],
  },
  ai: {
    domain: 'AI Product & Intelligence Tool',
    category: 'AI Product',
    defaultAudience: [
      'Modern creators, researchers, and engineers leveraging LLMs',
      'Non-technical specialists automating repetitive text/data tasks',
      'Enterprise teams requiring strict privacy and auditability',
    ],
    designKeywords: [
      'Subtle pearlescent or soft tinted surfaces signaling intelligence',
      'Clean typography with generous line-height for generated reading',
      'Refined sparkle/canvas accents without childish glowing gradients',
      'Distinction between user inputs and generated system responses',
    ],
    coreFeatureTemplates: [
      'Multi-turn prompt workspace with adjustable temperature/creativity slider',
      'Deterministic output inspection with side-by-side version comparison',
      'One-click action buttons: Copy, Regenerate, Format, and Export',
      'Token/credit usage counter and prompt history archive',
      'Prompt template library with variable insertion placeholders',
    ],
    contentRequirements: [
      'Transparent disclosure of model capabilities and boundary constraints',
      'Strict data privacy pledge: "Inputs are never used for model training"',
      'Curated prompt starters for immediate onboarding inspiration',
    ],
    uxHighlights: [
      'Smooth streaming text appearance or fast skeleton loading indicator',
      'Instant keyboard trigger (Cmd+Enter) to execute the transformation',
      'Granular undo/redo stack for fine-tuning prompt parameters',
    ],
    techStackDefaults: [
      'Defensive error boundaries handling rate limits and network drops',
      'Clipboard API integration with fallback for restricted environments',
      'Local storage caching with quota management and JSON validation',
    ],
    constraintsDefault: [
      '100% transparent latency and status feedback at all times',
      'Never silently fail on empty, invalid, or oversized inputs',
      'Preserve user prompt drafts automatically across unexpected tab closures',
    ],
  },
  fitness: {
    domain: 'Fitness, Health & Wellness',
    category: 'Mobile App',
    defaultAudience: [
      'Active athletes and gym-goers tracking workouts and personal records',
      'Beginners building sustainable daily movement habits',
      'Personal trainers assigning client programs and monitoring adherence',
    ],
    designKeywords: [
      'Dynamic, motivating aesthetic with high-contrast typography',
      'Clear circular progress rings and milestone celebration badges',
      'Clean card-based exercise logs with clear rest-timer countdowns',
      'Soft soothing accents for recovery and meditation sections',
    ],
    coreFeatureTemplates: [
      'Workout log with set, rep, weight, and RPE entry counters',
      'Rest timer with haptic audio chime and floating background widget',
      'Weekly streak tracker with calendar view and consistency score',
      'Exercise video library with form cues and target muscle highlights',
      'Wearable synchronization for heart rate and step metrics',
    ],
    contentRequirements: [
      'Clear safety guidelines and injury prevention disclaimers',
      'Step-by-step equipment alternative guides for home workouts',
      'Personal best celebratory milestone badges and recovery tips',
    ],
    uxHighlights: [
      'Large thumb-friendly buttons designed for sweaty gym hands',
      'Lock-screen or persistent top banner for active workout timers',
      'Offline-first capability allowing logging in basement gym basements',
    ],
    techStackDefaults: [
      'Local-first SQLite or IndexedDB storage with background cloud sync',
      'Vibration / Haptic Feedback API for set completions',
      'Responsive touch gestures (swipe to complete, long-press to reorder)',
    ],
    constraintsDefault: [
      'Zero dependency on continuous internet during active workout sessions',
      'Maximum 2 taps to log a completed set or advance rest timer',
      'Battery-efficient background execution during GPS run tracking',
    ],
  },
  education: {
    domain: 'Education & Learning Platform',
    category: 'Website',
    defaultAudience: [
      'Self-paced learners acquiring new career and technical skills',
      'Instructors designing modular curriculums and interactive quizzes',
      'Organizations tracking employee compliance and skill certifications',
    ],
    designKeywords: [
      'Warm scholarly aesthetic with distraction-free reading typography',
      'Progressive disclosure showing syllabus modules and milestones',
      'Calm pastel indicator badges for lesson completion status',
      'Spacious split-screen layout for video playback alongside lecture notes',
    ],
    coreFeatureTemplates: [
      'Modular curriculum viewer with video chapters and resource downloads',
      'Interactive quiz engine with immediate rationale explanations',
      'Personalized learning pathway with estimated completion hours',
      'Note-taking drawer synchronized with video timestamps',
      'Verifiable digital certificate generator upon course completion',
    ],
    contentRequirements: [
      'Comprehensive syllabus prerequisites and target outcome outlines',
      'Instructor credentials, industry experience, and student reviews',
      'Downloadable cheat sheets, starter repositories, and transcripts',
    ],
    uxHighlights: [
      'Auto-resume playback exactly where learner left off across devices',
      'Speed toggle (0.75x to 2x) with pitch-corrected audio',
      'Distraction-free focus mode hiding sidebars and comments during study',
    ],
    techStackDefaults: [
      'Accessible media players with closed captions (VTT) and transcripts',
      'Progress state persistence with optimistic sync to prevent lost work',
      'Keyboard shortcuts for 5-second rewind, play/pause, and bookmarking',
    ],
    constraintsDefault: [
      'Completely accessible for screen-reader users (WCAG AAA for text)',
      'Subtitles and transcriptions must be available offline for saved lessons',
      'No loss of in-progress quiz answers during intermittent network drops',
    ],
  },
  developer: {
    domain: 'Developer Tools & Technical Platforms',
    category: 'Developer Tool',
    defaultAudience: [
      'Full-stack and frontend developers seeking streamlined velocity',
      'DevOps and site reliability engineers automating deployment pipelines',
      'Open-source maintainers reviewing API specs and pull requests',
    ],
    designKeywords: [
      'Terminal-inspired crisp precision with monospaced code blocks',
      'High-contrast syntax highlighting with copyable snippet buttons',
      'Keyboard-centric layout optimized for power users and shortcuts',
      'Compact information hierarchy with collapsible tree views',
    ],
    coreFeatureTemplates: [
      'Interactive API playground with request builder and live cURL exports',
      'Config file generator with instantaneous YAML/JSON validation',
      'CLI tool integration with one-line install command snippets',
      'Comprehensive error code index with reproducible code solutions',
      'Dark/light syntax theme switcher matching developer environment',
    ],
    contentRequirements: [
      'Quickstart guide taking developer from zero to "Hello World" in 3 mins',
      'Strict API reference with parameter types, defaults, and response schemas',
      'Changelog documenting breaking changes, deprecations, and migrations',
    ],
    uxHighlights: [
      'Global shortcut (/) to jump directly to search or API endpoints',
      'Instant 1-click snippet copying with visual "Copied!" notification',
      'Collapsible parameter blocks and nested response trees',
    ],
    techStackDefaults: [
      'Native Clipboard API integration with fallback execution',
      'Lightweight syntax highlighter without heavy client runtime penalty',
      'Strict TypeScript typings and JSON Schema validation engine',
    ],
    constraintsDefault: [
      'Documentation and code examples must remain 100% copy-pasteable without edits',
      'Zero tracking or telemetry on confidential code snippets',
      'Sub-50ms fuzzy search across thousands of documentation pages',
    ],
  },
  general: {
    domain: 'Digital Product & Web Experience',
    category: 'Website',
    defaultAudience: [
      'Target prospective users looking for a reliable, modern digital service',
      'Returning customers wanting intuitive access to their core tasks',
      'Stakeholders evaluating credibility, performance, and aesthetic quality',
    ],
    designKeywords: [
      'Clean modern layout utilizing generous negative space',
      'Warm neutral surfaces framed by high-contrast typography',
      'Deliberate visual hierarchy directing eye to the primary call-to-action',
      'Polished interactive states with subtle transitions and border highlights',
    ],
    coreFeatureTemplates: [
      'Hero section with value proposition and prominent primary CTA',
      'Core feature grid highlighting key benefits with contextual descriptions',
      'Interactive demo or visual walkthrough illustrating primary workflow',
      'Trust badges, customer testimonials, or verified reviews',
      'Responsive footer with navigation hierarchy, privacy notes, and contact',
    ],
    contentRequirements: [
      'Clear, jargon-free copy emphasizing tangible user benefits',
      'Structured FAQs addressing common user questions and onboarding concerns',
      'Direct contact or support channels with explicit response timeframe',
    ],
    uxHighlights: [
      'Intuitive navigation structure with maximum 3-click depth',
      'Immediate visual feedback on all interactive inputs and buttons',
      'Accessible color contrast and clear focus rings for all interactive elements',
    ],
    techStackDefaults: [
      'Modern responsive framework (React + Vite) with semantic HTML5',
      'Tailwind CSS design token system ensuring spatial and visual consistency',
      'Performance-tuned asset loading targeting Google Lighthouse 95+ score',
    ],
    constraintsDefault: [
      'Fully responsive across mobile (320px+), tablet, and desktop viewports',
      'Zero dead buttons or unhandled edge states throughout all flows',
      'Graceful degradation when network connectivity is intermittent',
    ],
  },
};

/**
 * Detects domain and category from user's raw idea text
 */
export function detectDomainAndCategory(
  rawInput: string,
  overrideCategory?: Category
): { domainKey: string; profile: DomainProfile; detectedCategory: Category } {
  const lower = rawInput.toLowerCase();

  // If user explicitly chose an override category, prioritize matching that
  if (overrideCategory) {
    if (overrideCategory === 'E-commerce') {
      return { domainKey: 'ecommerce', profile: DOMAIN_PROFILES.ecommerce, detectedCategory: 'E-commerce' };
    }
    if (overrideCategory === 'Portfolio') {
      return { domainKey: 'portfolio', profile: DOMAIN_PROFILES.portfolio, detectedCategory: 'Portfolio' };
    }
    if (overrideCategory === 'SaaS') {
      return { domainKey: 'saas', profile: DOMAIN_PROFILES.saas, detectedCategory: 'SaaS' };
    }
    if (overrideCategory === 'Dashboard') {
      return { domainKey: 'dashboard', profile: DOMAIN_PROFILES.dashboard, detectedCategory: 'Dashboard' };
    }
    if (overrideCategory === 'AI Product') {
      return { domainKey: 'ai', profile: DOMAIN_PROFILES.ai, detectedCategory: 'AI Product' };
    }
    if (overrideCategory === 'Developer Tool') {
      return { domainKey: 'developer', profile: DOMAIN_PROFILES.developer, detectedCategory: 'Developer Tool' };
    }
    if (overrideCategory === 'Mobile App') {
      return { domainKey: 'fitness', profile: DOMAIN_PROFILES.fitness, detectedCategory: 'Mobile App' };
    }
  }

  // Keyword rules
  if (
    /coffee|cafe|restaurant|bakery|bar|bistro|brewery|dining|food|brunch|hospitality|kitchen/i.test(
      lower
    )
  ) {
    return { domainKey: 'hospitality', profile: DOMAIN_PROFILES.hospitality, detectedCategory: 'Website' };
  }

  if (
    /store|shop|cart|checkout|e-commerce|ecommerce|product|stationery|apparel|clothing|merch|buy|sell|retail/i.test(
      lower
    )
  ) {
    return { domainKey: 'ecommerce', profile: DOMAIN_PROFILES.ecommerce, detectedCategory: 'E-commerce' };
  }

  if (
    /portfolio|designer|photographer|resume|cv|personal site|showcase|architect|freelance|artist|hiring/i.test(
      lower
    )
  ) {
    return { domainKey: 'portfolio', profile: DOMAIN_PROFILES.portfolio, detectedCategory: 'Portfolio' };
  }

  if (
    /ai|assistant|llm|gpt|gemini|machine learning|prompt|generative|copilot|bot|intelligence/i.test(
      lower
    )
  ) {
    return { domainKey: 'ai', profile: DOMAIN_PROFILES.ai, detectedCategory: 'AI Product' };
  }

  if (
    /dashboard|analytics|metrics|admin|crm|report|kpi|telemetry|chart|monitoring|data viz/i.test(
      lower
    )
  ) {
    return { domainKey: 'dashboard', profile: DOMAIN_PROFILES.dashboard, detectedCategory: 'Dashboard' };
  }

  if (
    /fitness|workout|gym|exercise|running|health|diet|wellness|habit|trainer|calories/i.test(
      lower
    )
  ) {
    return { domainKey: 'fitness', profile: DOMAIN_PROFILES.fitness, detectedCategory: 'Mobile App' };
  }

  if (
    /course|learn|education|school|student|teach|lms|study|tutoring|university|quiz/i.test(
      lower
    )
  ) {
    return { domainKey: 'education', profile: DOMAIN_PROFILES.education, detectedCategory: 'Website' };
  }

  if (
    /cli|api|developer|devtools|sdk|library|git|compiler|docker|terminal|backend|endpoint/i.test(
      lower
    )
  ) {
    return { domainKey: 'developer', profile: DOMAIN_PROFILES.developer, detectedCategory: 'Developer Tool' };
  }

  if (
    /saas|b2b|subscription|pricing|workflow|automation|team tool|workspace|collaboration/i.test(
      lower
    )
  ) {
    return { domainKey: 'saas', profile: DOMAIN_PROFILES.saas, detectedCategory: 'SaaS' };
  }

  if (/mobile|app|ios|android|native/i.test(lower)) {
    return { domainKey: 'general', profile: DOMAIN_PROFILES.general, detectedCategory: 'Mobile App' };
  }

  return {
    domainKey: 'general',
    profile: DOMAIN_PROFILES.general,
    detectedCategory: overrideCategory || 'Website',
  };
}

/**
 * Clean and summarize the core subject from the raw text
 */
export function extractSubject(rawInput: string): string {
  let cleaned = rawInput.trim();
  cleaned = cleaned.replace(/^(make|build|create|design|develop|generate|code)\s+((an|a|the)\s+)?/i, '');
  cleaned = cleaned.replace(/^(website for|app for|platform for|tool for|dashboard for|system for)\s+/i, '');
  if (!cleaned) return 'custom digital product';
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/**
 * Generates structured prompt sections deterministically
 */
export function generateStructuredPrompt(
  rawInput: string,
  mode: PromptMode = 'builder',
  categoryOverride?: Category
): {
  sections: PromptSections;
  detectedCategory: Category;
  profile: DomainProfile;
} {
  const cleanInput = rawInput.trim();
  const { profile, detectedCategory } = detectDomainAndCategory(cleanInput, categoryOverride);
  const subject = extractSubject(cleanInput);

  // Mode variations:
  // - Quick: concise, bullet-pointed, immediate high-level summary
  // - Detailed: comprehensive, deep explanations, expanded scopes
  // - Builder: actionable, code-generation/engineering-focused with specifications and edge cases

  const goalText =
    mode === 'quick'
      ? `Create a modern, high-performing ${detectedCategory.toLowerCase()} focused on ${subject}. Ensure direct value delivery and a clean user journey.`
      : mode === 'detailed'
      ? `Design and develop a comprehensive ${detectedCategory.toLowerCase()} for "${cleanInput}". The primary business objective is to establish an authoritative digital presence for ${subject}, converting visitors into active users through intuitive workflows, credible presentation, and seamless responsiveness across all screen sizes.`
      : `Engineer a production-ready, fully responsive ${detectedCategory.toLowerCase()} specifically tailored for "${cleanInput}". The implementation must deliver an end-to-end working experience with clean state management, modular component architecture, robust input validation, and zero unhandled interactive edge states.`;

  const audienceText =
    mode === 'quick'
      ? profile.defaultAudience.map((a) => `- ${a}`).join('\n')
      : mode === 'detailed'
      ? `Primary Demographics:\n${profile.defaultAudience
          .map((a, i) => `${i + 1}. ${a}`)
          .join('\n')}\n\nUser Motivations:\nVisitors need immediate answers, reliable product information, transparent pricing, and effortless navigation without intrusive barriers.`
      : `Target Persona Breakdown:\n${profile.defaultAudience
          .map((a, i) => `• Persona ${i + 1}: ${a}`)
          .join(
            '\n'
          )}\n\nInteraction Context: Users access this service on desktop and mobile viewports with varying network speeds. Every workflow must be optimized for fast task completion, clear status confirmation, and accessible touch targets.`;

  const designText =
    mode === 'quick'
      ? `Aesthetic & Styling:\n${profile.designKeywords.map((k) => `- ${k}`).join('\n')}`
      : mode === 'detailed'
      ? `Visual Identity & Palette:\n${profile.designKeywords
          .map((k) => `• ${k}`)
          .join(
            '\n'
          )}\n\nSpatial System: Strict 8pt spatial grid, generous whitespace around key visual assets, and high-contrast typographic pairing to guarantee effortless readability.`
      : `Design System Specifications:\n• Palette & Atmosphere: ${profile.designKeywords.join(
          ', '
        )}.\n• Layout Architecture: Responsive single/multi-column grid with fluid containers (max-w-7xl), consistent outer padding (min 16px-24px), and mathematically nested corner radii.\n• Typographic Hierarchy: High contrast scale with clear baseline rhythm; tabular figures for numbers; strict WCAG AA contrast (4.5:1 minimum).`;

  const featuresText =
    mode === 'quick'
      ? profile.coreFeatureTemplates.slice(0, 4).map((f) => `• ${f}`).join('\n')
      : mode === 'detailed'
      ? `Core Functional Capabilities:\n${profile.coreFeatureTemplates
          .map((f, i) => `${i + 1}. ${f}`)
          .join(
            '\n'
          )}\n\nState & Interactions: Dynamic feedback on user interactions, persistent client preferences, and clean empty/loading states.`
      : `Functional Requirements & Module Checklist:\n${profile.coreFeatureTemplates
          .map((f, i) => `[F-${i + 1}] ${f}`)
          .join(
            '\n'
          )}\n\nEdge Cases to Handle:\n- Empty state when no data exists\n- Real-time search and filter with instant zero-state messaging\n- Rapid input debouncing and disabled state during submission\n- Touch-friendly action bars on small viewports.`;

  const contentText =
    mode === 'quick'
      ? profile.contentRequirements.map((c) => `- ${c}`).join('\n')
      : mode === 'detailed'
      ? `Information Architecture & Copywriting:\n${profile.contentRequirements
          .map((c, i) => `${i + 1}. ${c}`)
          .join(
            '\n'
          )}\n\nTone of Voice: Professional, warm, and transparent; avoid empty marketing buzzwords; prioritize concrete specs and immediate utility.`
      : `Structured Content Model:\n${profile.contentRequirements
          .map((c) => `• ${c}`)
          .join(
            '\n'
          )}\n\nMicrocopy Guidelines:\n- Clear button labels stating exact actions ("Browse Menu", "Confirm Order")\n- Concise error messages indicating immediate resolution steps\n- Unambiguous privacy and local storage assurances.`;

  const uxText =
    mode === 'quick'
      ? profile.uxHighlights.map((u) => `- ${u}`).join('\n')
      : mode === 'detailed'
      ? `User Experience & Flow:\n${profile.uxHighlights
          .map((u, i) => `${i + 1}. ${u}`)
          .join(
            '\n'
          )}\n\nInteraction Details: Frictionless navigation depth (maximum 2-3 clicks to primary action), persistent contextual navigation, and keyboard accessibility.`
      : `UX Architecture & Accessibility Standards:\n${profile.uxHighlights
          .map((u) => `• ${u}`)
          .join(
            '\n'
          )}\n\nErgonomic Rules:\n- Minimum 44x44px touch targets on mobile viewports\n- Full keyboard navigation (Tab order, Escape to close modals, Enter to submit)\n- Subtle enter/exit animations capped at 200ms with \`prefers-reduced-motion\` support.`;

  const techText =
    mode === 'quick'
      ? profile.techStackDefaults.map((t) => `- ${t}`).join('\n')
      : mode === 'detailed'
      ? `Technical Architecture:\n${profile.techStackDefaults
          .map((t, i) => `${i + 1}. ${t}`)
          .join(
            '\n'
          )}\n\nData Layer: Client-side storage (localStorage) with robust schema validation, error boundaries, and defensive fallbacks.`
      : `Engineering & Implementation Stack:\n${profile.techStackDefaults
          .map((t) => `• ${t}`)
          .join(
            '\n'
          )}\n\nCode Standards:\n- React with TypeScript (strict mode, zero 'any' types)\n- Tailwind CSS utility classes using project design tokens\n- Lucide-react for consistent lightweight iconography\n- Zero external API dependencies; 100% deterministic local state management.`;

  const constraintsText =
    mode === 'quick'
      ? profile.constraintsDefault.map((c) => `- ${c}`).join('\n')
      : mode === 'detailed'
      ? `Project Boundaries & Quality Gates:\n${profile.constraintsDefault
          .map((c, i) => `${i + 1}. ${c}`)
          .join(
            '\n'
          )}\n\nPerformance Budget: First Contentful Paint under 1.2s; zero cumulative layout shifts; offline-first reliability.`
      : `Critical Constraints & Non-Negotiables:\n${profile.constraintsDefault
          .map((c) => `[Constraint] ${c}`)
          .join(
            '\n'
          )}\n- No simulated placeholder data or unfunctional button stubs\n- Privacy guarantee: All user input stays exclusively inside the local browser\n- Accessible color contrast across light and active states.`;

  const sections: PromptSections = {
    goal: {
      key: 'goal',
      title: 'Project Goal',
      content: goalText,
    },
    audience: {
      key: 'audience',
      title: 'Target Audience',
      content: audienceText,
    },
    design: {
      key: 'design',
      title: 'Design Direction',
      content: designText,
    },
    features: {
      key: 'features',
      title: 'Core Features',
      content: featuresText,
    },
    content: {
      key: 'content',
      title: 'Content Requirements',
      content: contentText,
    },
    ux: {
      key: 'ux',
      title: 'User Experience',
      content: uxText,
    },
    technical: {
      key: 'technical',
      title: 'Technical Requirements',
      content: techText,
    },
    constraints: {
      key: 'constraints',
      title: 'Constraints & Boundaries',
      content: constraintsText,
    },
  };

  return { sections, detectedCategory, profile };
}

/**
 * Generates dynamic improvement suggestions based on prompt analysis
 */
export function generateSuggestions(
  rawInput: string,
  sections: PromptSections,
  category: Category
): Suggestion[] {
  const suggestions: Suggestion[] = [];
  const lowerInput = rawInput.toLowerCase();
  const goalContent = sections.goal.content.toLowerCase();
  const techContent = sections.technical.content.toLowerCase();
  const designContent = sections.design.content.toLowerCase();

  // 1. Target platform suggestion
  if (!lowerInput.includes('mobile') && !lowerInput.includes('desktop') && !lowerInput.includes('responsive')) {
    suggestions.push({
      id: 'sug-platform',
      targetSection: 'technical',
      title: 'Specify primary platform',
      description: 'Clarify whether desktop or mobile touch ergonomics take priority.',
      additionText: '\n• Platform Focus: Mobile-first responsive layout with adaptive sidebar on viewports ≥ 1024px.',
    });
  }

  // 2. Visual style suggestion
  if (!designContent.includes('warm') && !designContent.includes('minimal')) {
    suggestions.push({
      id: 'sug-style',
      targetSection: 'design',
      title: 'Add a distinct visual aesthetic',
      description: 'Define specific styling guidelines to avoid generic templates.',
      additionText: '\n• Visual Theme: Warm cream background (#FBF7F2), white card surfaces, soft pink accents, and crisp dark typography.',
    });
  }

  // 3. Technical constraint
  if (!techContent.includes('localstorage') && !techContent.includes('offline')) {
    suggestions.push({
      id: 'sug-offline',
      targetSection: 'technical',
      title: 'Add local data persistence',
      description: 'Ensure user state persists safely across browser reloads.',
      additionText: '\n• Persistence: Full localStorage support with defensive JSON serialization and quota protection.',
    });
  }

  // 4. Primary user action
  suggestions.push({
    id: 'sug-cta',
    targetSection: 'goal',
    title: 'Clarify primary user action',
    description: 'Define the single most important action the user takes on the screen.',
    additionText: ' Primary User Action: One-click immediate task initiation directly from the initial viewport.',
  });

  // 5. Constraints
  suggestions.push({
    id: 'sug-accessibility',
    targetSection: 'constraints',
    title: 'Enforce WCAG AA accessibility',
    description: 'Require high-contrast text, visible focus rings, and screen reader labels.',
    additionText: '\n[Constraint] Full WCAG 2.1 AA compliance with high-contrast text ratios and keyboard accessible controls.',
  });

  return suggestions;
}
