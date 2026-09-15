import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  ChevronDown,
  LayoutTemplate,
  Layers,
  Wand2,
  Sliders,
  FileCode,
  Lock,
  Compass,
  Palette,
  Terminal,
  AlertTriangle,
  Users,
  Target,
  FileText,
  Bookmark,
  Check,
  RotateCcw,
  ExternalLink,
  Menu,
  X,
  LogIn,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import { Category, PromptMode, PromptSection, PromptSections, QualityScoreData, TemplateItem, User } from '../types/prompt';
import { TEMPLATES } from '../data/templates';
import { generateStructuredPrompt } from '../lib/promptEngine';
import { calculateQualityScore } from '../lib/qualityEngine';

interface LandingPageProps {
  onLaunchApp: () => void;
  onUseTemplate: (template: TemplateItem) => void;
  onOpenSavedPrompt?: () => void;
  onNavigate: (page: any) => void;
  savedCount: number;
  currentUser?: User | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

// Sample interactive scenarios for the "Before & After" showcase
const SHOWCASE_SCENARIOS = [
  {
    id: 'fitness',
    category: 'Mobile App' as Category,
    title: 'AI Fitness & Meal Coach',
    rawInput: 'Make an app that tracks workouts, creates diet plans, and gives voice feedback during reps with nice clean UI',
    goal: 'A personalized mobile workout & nutrition companion that dynamically adjusts reps and calorie targets via real-time audio guidance.',
    audience: 'Busy professionals and fitness enthusiasts (22–45) needing hands-free coaching without personal trainer costs.',
    design: 'High-contrast sport-tech aesthetic with deep charcoal backgrounds, energetic coral accents, clean typography, and 48px touch targets.',
    features: 'Real-time rep cadence audio pacing, dynamic macro calculation, barcode food logging, weekly recovery velocity score.',
    tech: 'React Native / Expo with offline SQLite persistence, Web Audio synthesized voice pacing, and local biometric security.',
    quality: 96,
  },
  {
    id: 'b2b-saas',
    category: 'SaaS' as Category,
    title: 'Usage-Based API Billing Portal',
    rawInput: 'Need a dashboard where enterprise customers can see their API consumption, invoices, payment methods and usage limits',
    goal: 'A self-service enterprise telemetry and invoice management portal with instant threshold alert triggers and multi-currency billing.',
    audience: 'Engineering leads, FinOps analysts, and procurement directors auditing monthly compute and LLM API spend.',
    design: 'Dense, clean tabular interface with warm neutral grays, subtle divider lines, monospace tabular numerics, and zero decorative fluff.',
    features: 'Real-time consumption time-series charts, automated invoice PDF generation, webhook subscription management, tiered seat controls.',
    tech: 'React 19 + TypeScript, Tailwind CSS, Recharts for time-series charts, Stripe integration, webhook payload validation.',
    quality: 94,
  },
  {
    id: 'portfolio',
    category: 'Portfolio' as Category,
    title: 'Minimalist Architecture Portfolio',
    rawInput: 'Portfolio website for an architectural studio showing recent projects, blueprints, philosophy and contact inquiry form',
    goal: 'An editorial digital monograph showcasing architectural projects with high-resolution imagery, material details, and client inquiry flows.',
    audience: 'Private residential clients, commercial developers, and design curators evaluating spatial expertise.',
    design: 'Warm cream canvas (#FAF7F2), generous negative space, refined serif display headings, 16:9 media viewports, and quiet transitions.',
    features: 'Full-screen project case studies with drawing overlays, interactive material palette explorer, studio monograph archive, client consultation inquiry.',
    tech: 'Vite + React, Tailwind CSS, fluid CSS Grid layout, lazy-loaded responsive imagery, accessible keyboard navigation.',
    quality: 98,
  },
];

export const LandingPage: React.FC<LandingPageProps> = ({
  onLaunchApp,
  onUseTemplate,
  onNavigate,
  savedCount,
  currentUser,
  onOpenAuthModal,
  onLogout,
}) => {
  // Mobile nav toggle
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Showcase state
  const [activeScenarioId, setActiveScenarioId] = useState('fitness');
  const activeScenario = SHOWCASE_SCENARIOS.find((s) => s.id === activeScenarioId) || SHOWCASE_SCENARIOS[0];

  // Interactive Mini Sandbox State
  const [sandboxIdea, setSandboxIdea] = useState('An automated client onboarding portal with contract e-signatures and milestone timeline');
  const [sandboxCategory, setSandboxCategory] = useState<Category>('SaaS');
  const [sandboxResult, setSandboxResult] = useState<{
    sections: PromptSections;
    quality: QualityScoreData;
  } | null>(null);
  const [isSandboxRunning, setIsSandboxRunning] = useState(false);
  const [sandboxCopied, setSandboxCopied] = useState(false);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Run initial sandbox demo
  React.useEffect(() => {
    handleRunSandbox(sandboxIdea, sandboxCategory);
  }, []);

  const handleRunSandbox = (rawText: string, cat?: Category) => {
    setIsSandboxRunning(true);
    setTimeout(() => {
      const { sections } = generateStructuredPrompt(rawText, 'builder', cat || sandboxCategory);
      const quality = calculateQualityScore(rawText, sections);
      setSandboxResult({ sections, quality });
      setIsSandboxRunning(false);
    }, 150);
  };

  const handleCopySandboxOutput = async () => {
    if (!sandboxResult) return;
    const text = (Object.values(sandboxResult.sections) as PromptSection[])
      .map((s) => `### ${s.title}\n${s.content}`)
      .join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
      setSandboxCopied(true);
      setTimeout(() => setSandboxCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  // Centralized gate: if not logged in, ask to log in before building!
  const handleStartBuilding = () => {
    if (!currentUser && onOpenAuthModal) {
      onOpenAuthModal();
      return;
    }
    onLaunchApp();
  };

  const handleSelectBlueprint = (template: TemplateItem) => {
    if (!currentUser && onOpenAuthModal) {
      onOpenAuthModal();
      return;
    }
    onUseTemplate(template);
  };

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const scrollToSection = (id: string) => {
    setMobileNavOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF7F2] text-[#29232A] overflow-x-hidden p-0 m-0">
      {/* 1. STICKY TOP NAVBAR (Edge-to-edge, zero side padding gaps) */}
      <nav className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-2.5 text-left group focus:outline-hidden"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83] group-hover:scale-105 transition-transform shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#29232A] tracking-tight font-display">
                  PromptCanvas
                </span>
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FDF1F5] text-[#B83B6D] border border-[#F8DCE7] hidden sm:inline-block">
                  v1.0 Local
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#756B72]">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-[#29232A] transition-colors cursor-pointer"
            >
              8-Section Architecture
            </button>
            <button
              onClick={() => scrollToSection('interactive-demo')}
              className="hover:text-[#29232A] transition-colors cursor-pointer"
            >
              Live Playground
            </button>
            <button
              onClick={() => scrollToSection('blueprints')}
              className="hover:text-[#29232A] transition-colors cursor-pointer"
            >
              Blueprints
            </button>
            <button
              onClick={() => scrollToSection('modes')}
              className="hover:text-[#29232A] transition-colors cursor-pointer"
            >
              Detail Modes
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#29232A] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {savedCount > 0 && (
              <button
                type="button"
                onClick={() => onNavigate('saved')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#756B72] hover:text-[#29232A] bg-[#FBF7F2] hover:bg-[#FDF1F5] border border-[#EDE3E7] rounded-lg transition-colors cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Saved Library</span>
                <span className="px-1.5 py-0.2 rounded-full bg-[#D94F83] text-white text-[10px]">
                  {savedCount}
                </span>
              </button>
            )}

            {currentUser ? (
              <div className="flex items-center gap-2 pl-1 border-l border-[#EDE3E7]">
                <div
                  className="w-8 h-8 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center font-bold text-xs text-[#B83B6D]"
                  title={`${currentUser.name} (${currentUser.email})`}
                >
                  {getInitials(currentUser.name)}
                </div>
                <button
                  type="button"
                  onClick={onLogout}
                  className="p-1.5 text-[#756B72] hover:text-[#D94F83] rounded-lg transition-colors cursor-pointer"
                  title="Log Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] rounded-xl transition-all cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Sign In</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleStartBuilding}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Launch Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            {!currentUser && (
              <button
                type="button"
                onClick={onOpenAuthModal}
                className="px-2.5 py-1.5 text-xs font-bold text-[#D94F83] bg-[#FDF1F5] rounded-lg border border-[#F8DCE7]"
              >
                Sign In
              </button>
            )}
            <button
              type="button"
              onClick={handleStartBuilding}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#D94F83] rounded-lg shadow-2xs"
            >
              Studio
            </button>
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 text-[#756B72] hover:text-[#29232A] rounded-lg border border-[#EDE3E7]"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileNavOpen && (
          <div className="sm:hidden border-t border-[#EDE3E7] bg-white px-4 py-4 space-y-2 animate-in slide-in-from-top-2">
            {currentUser && (
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EDE3E7]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center font-bold text-xs text-[#B83B6D]">
                    {getInitials(currentUser.name)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#29232A]">{currentUser.name}</p>
                    <p className="text-[10px] text-[#756B72]">{currentUser.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileNavOpen(false);
                    onLogout?.();
                  }}
                  className="text-xs text-[#B83B6D] font-semibold"
                >
                  Log Out
                </button>
              </div>
            )}
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-2 text-xs font-semibold text-[#756B72] hover:text-[#29232A]"
            >
              8-Section Architecture
            </button>
            <button
              onClick={() => scrollToSection('interactive-demo')}
              className="block w-full text-left py-2 text-xs font-semibold text-[#756B72] hover:text-[#29232A]"
            >
              Live Playground
            </button>
            <button
              onClick={() => scrollToSection('blueprints')}
              className="block w-full text-left py-2 text-xs font-semibold text-[#756B72] hover:text-[#29232A]"
            >
              Blueprints
            </button>
            <button
              onClick={() => scrollToSection('modes')}
              className="block w-full text-left py-2 text-xs font-semibold text-[#756B72] hover:text-[#29232A]"
            >
              Detail Modes
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-xs font-semibold text-[#756B72] hover:text-[#29232A]"
            >
              FAQ
            </button>
            <div className="pt-2 border-t border-[#EDE3E7]">
              <button
                type="button"
                onClick={() => {
                  setMobileNavOpen(false);
                  handleStartBuilding();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#D94F83] rounded-lg"
              >
                Launch Prompt Studio
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION (Edge-to-Edge, fits screen with zero margin gaps) */}
      <section id="top" className="w-full pt-12 pb-16 md:pt-20 md:pb-24 bg-linear-to-b from-white via-[#FBF7F2] to-[#FBF7F2] border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] text-xs font-semibold text-[#B83B6D] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D94F83]" />
              <span>100% Deterministic Local Architecture Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#29232A] tracking-tight leading-[1.1] font-display">
              Turn messy thoughts into <br className="hidden sm:inline" />
              <span className="text-[#D94F83]">production-ready</span> prompts.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#756B72] max-w-2xl mx-auto font-normal leading-relaxed">
              Start with a single rough sentence. PromptCanvas deterministically derives goals, audience personas, design tokens, feature specifications, UX flows, and technical boundaries — zero hallucinations, zero API fees.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleStartBuilding}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Launch Prompt Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('interactive-demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#29232A] bg-white hover:bg-[#FDF1F5] border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-[#D94F83]" />
                <span>Try Live Playground</span>
              </button>
            </div>

            {/* Micro badges bar */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#756B72]">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Instant &lt;10ms execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4F9D78]" />
                <span>100% On-Device Privacy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-[#B83B6D]" />
                <span>Ready for Claude, Cursor, ChatGPT</span>
              </div>
            </div>
          </div>

          {/* 3. HERO SHOWCASE CARD: Interactive Before & After Transformation */}
          <div className="mt-12 max-w-5xl mx-auto bg-white border border-[#EDE3E7] rounded-2xl shadow-md p-5 sm:p-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EDE3E7]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D94F83]">
                  Interactive Demonstration
                </span>
                <h3 className="text-base font-bold text-[#29232A]">
                  Watch a rough idea become an 8-section specification
                </h3>
              </div>

              {/* Scenario selector tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto bg-[#FBF7F2] p-1 rounded-xl border border-[#EDE3E7]">
                {SHOWCASE_SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveScenarioId(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      activeScenarioId === s.id
                        ? 'bg-white text-[#29232A] font-bold shadow-2xs border border-[#EDE3E7]'
                        : 'text-[#756B72] hover:text-[#29232A]'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Dual comparison grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Left: Raw input */}
              <div className="lg:col-span-4 bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#756B72]">
                      1. Raw Casual Thought
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#EDE3E7] text-[#29232A] font-medium">
                      {activeScenario.category}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border border-[#EDE3E7] rounded-lg text-xs text-[#29232A] italic leading-relaxed font-mono">
                    "{activeScenario.rawInput}"
                  </div>
                </div>

                <div className="p-3 bg-[#FDF1F5] rounded-lg border border-[#F8DCE7] text-[11px] text-[#B83B6D] space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#D94F83]" />
                    <span>Without PromptCanvas:</span>
                  </div>
                  <p className="text-[11px] text-[#756B72] leading-tight">
                    LLMs guess the architecture, skip edge cases, choose arbitrary styling, and produce generic boilerplate.
                  </p>
                </div>
              </div>

              {/* Right: PromptCanvas output */}
              <div className="lg:col-span-8 bg-white border border-[#EDE3E7] rounded-xl p-5 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#EDE3E7]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F9D78] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#29232A]">
                      PromptCanvas 8-Section Output
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-[#756B72]">Structure Completeness:</span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-[#EBF7F0] text-[#4F9D78] border border-[#D1EBDD]">
                      {activeScenario.quality}%
                    </span>
                  </div>
                </div>

                {/* 4 key sample modules */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#FBF7F2] border border-[#EDE3E7] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#29232A]">
                      <Target className="w-3.5 h-3.5 text-[#D94F83]" />
                      <span>Project Goal & Scope</span>
                    </div>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {activeScenario.goal}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FBF7F2] border border-[#EDE3E7] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#29232A]">
                      <Users className="w-3.5 h-3.5 text-[#D94F83]" />
                      <span>Target Audience</span>
                    </div>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {activeScenario.audience}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FBF7F2] border border-[#EDE3E7] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#29232A]">
                      <Palette className="w-3.5 h-3.5 text-[#D94F83]" />
                      <span>Design System & Theme</span>
                    </div>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {activeScenario.design}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FBF7F2] border border-[#EDE3E7] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#29232A]">
                      <Terminal className="w-3.5 h-3.5 text-[#D94F83]" />
                      <span>Technical Architecture</span>
                    </div>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {activeScenario.tech}
                    </p>
                  </div>
                </div>

                {/* Bottom card CTA */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#756B72] hidden sm:inline">
                    + 4 additional sections (Features, Content, UX Flows, Constraints)
                  </span>
                  <button
                    type="button"
                    onClick={onLaunchApp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-lg transition-colors ml-auto cursor-pointer"
                  >
                    <span>Open in Studio to Customize</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 8 ARCHITECTURAL PILLARS (Edge-to-edge, full screen width) */}
      <section id="features" className="w-full py-16 md:py-24 bg-white border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
              The Structural Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
              8 essential sections in every prompt
            </h2>
            <p className="text-sm sm:text-base text-[#756B72]">
              Standardize your engineering briefs. Every generated prompt follows a complete multi-perspective blueprint that LLMs execute with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Target,
                title: '1. Project Goal',
                desc: 'Unambiguous core purpose, mission statement, and primary success criteria.',
              },
              {
                icon: Users,
                title: '2. Target Audience',
                desc: 'Key personas, domain expertise level, mental models, and critical pain points.',
              },
              {
                icon: Palette,
                title: '3. Design Direction',
                desc: 'Color palette tokens, typographic scale, density, border radius, and layout rules.',
              },
              {
                icon: Layers,
                title: '4. Core Features',
                desc: 'Prioritized feature list, interaction models, validation states, and deliverables.',
              },
              {
                icon: FileText,
                title: '5. Content & Copy',
                desc: 'Tone of voice, key headings, microcopy guidelines, and dynamic state text.',
              },
              {
                icon: Compass,
                title: '6. User Experience',
                desc: 'Step-by-step user journey, feedback loops, zero-data empty states, and error handling.',
              },
              {
                icon: Terminal,
                title: '7. Technical Stack',
                desc: 'Framework choice, state management, storage strategy, and library constraints.',
              },
              {
                icon: AlertTriangle,
                title: '8. Constraints & Boundaries',
                desc: 'Strict anti-patterns, non-negotiables, scope boundaries, and disallowed dependencies.',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#FBF7F2] border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl p-5 space-y-3 transition-all duration-200 group shadow-2xs hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#EDE3E7] flex items-center justify-center text-[#D94F83] group-hover:bg-[#FDF1F5] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#29232A] group-hover:text-[#D94F83] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#756B72] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE LIVE PLAYGROUND / SANDBOX ON LANDING PAGE */}
      <section id="interactive-demo" className="w-full py-16 md:py-24 bg-[#FBF7F2] border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
              Live Playground
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
              Test the engine right here
            </h2>
            <p className="text-sm text-[#756B72]">
              Type any project idea below or click a quick suggestion. Watch the local heuristics transform it instantly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-[#EDE3E7] rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
            {/* Input and category bar */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#756B72]">
                Your Raw Idea
              </label>
              <div className="relative">
                <textarea
                  value={sandboxIdea}
                  onChange={(e) => setSandboxIdea(e.target.value)}
                  rows={3}
                  placeholder="e.g., A minimalist Markdown journal with offline sync and tagging..."
                  className="w-full p-4 text-sm text-[#29232A] bg-[#FBF7F2] border border-[#EDE3E7] focus:border-[#D94F83] focus:ring-2 focus:ring-[#D94F83]/15 rounded-xl focus:outline-hidden transition-all resize-none leading-relaxed font-normal"
                />
              </div>

              {/* Quick sample chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] font-semibold text-[#756B72]">Quick Try:</span>
                {[
                  { text: 'SaaS Customer Onboarding Portal', cat: 'SaaS' as Category },
                  { text: 'Minimalist Coffee Roaster E-Commerce', cat: 'E-commerce' as Category },
                  { text: 'Real-time Markdown Docs with Offline Sync', cat: 'Developer Tool' as Category },
                  { text: 'Personal Finance & Budgeting Tracker', cat: 'Mobile App' as Category },
                ].map((sample) => (
                  <button
                    key={sample.text}
                    type="button"
                    onClick={() => {
                      setSandboxIdea(sample.text);
                      setSandboxCategory(sample.cat);
                      handleRunSandbox(sample.text, sample.cat);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#FBF7F2] hover:bg-[#FDF1F5] text-[#29232A] hover:text-[#D94F83] border border-[#EDE3E7] transition-colors cursor-pointer"
                  >
                    {sample.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#EDE3E7]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#756B72]">Category:</span>
                <select
                  value={sandboxCategory}
                  onChange={(e) => {
                    const cat = e.target.value as Category;
                    setSandboxCategory(cat);
                    handleRunSandbox(sandboxIdea, cat);
                  }}
                  className="text-xs bg-[#FBF7F2] border border-[#EDE3E7] text-[#29232A] font-medium py-1.5 px-3 rounded-lg focus:outline-hidden focus:border-[#D94F83]"
                >
                  {['SaaS', 'Website', 'Mobile App', 'Dashboard', 'E-commerce', 'Portfolio', 'AI Product', 'Developer Tool'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleRunSandbox(sandboxIdea, sandboxCategory)}
                  disabled={isSandboxRunning || !sandboxIdea.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl shadow-2xs transition-all cursor-pointer disabled:opacity-50"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>{isSandboxRunning ? 'Structuring...' : 'Structure My Idea'}</span>
                </button>
              </div>
            </div>

            {/* Sandbox Live Result Preview */}
            {sandboxResult && (
              <div className="pt-4 border-t border-[#EDE3E7] space-y-4 animate-in fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FDF1F5]/60 p-3 rounded-xl border border-[#F8DCE7]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4F9D78]" />
                    <span className="text-xs font-bold text-[#29232A]">
                      Structure Completeness: {sandboxResult.quality.overall}%
                    </span>
                    <span className="text-[11px] text-[#756B72] hidden sm:inline">
                      (Goal: {sandboxResult.quality.goal}% • Design: {sandboxResult.quality.design}% • Features: {sandboxResult.quality.features}%)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopySandboxOutput}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white text-[#29232A] border border-[#EDE3E7] rounded-md hover:bg-[#FBF7F2]"
                    >
                      {sandboxCopied ? <Check className="w-3 h-3 text-[#4F9D78]" /> : <Copy className="w-3 h-3" />}
                      <span>{sandboxCopied ? 'Copied' : 'Copy Output'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleStartBuilding}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-[#D94F83] text-white rounded-md hover:bg-[#B83B6D] shadow-2xs cursor-pointer"
                    >
                      <span>Open in Full Studio →</span>
                    </button>
                  </div>
                </div>

                {/* Section previews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FBF7F2] rounded-lg border border-[#EDE3E7] space-y-1">
                    <span className="font-bold text-[#29232A]">Goal & Scope</span>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {sandboxResult.sections.goal.content}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FBF7F2] rounded-lg border border-[#EDE3E7] space-y-1">
                    <span className="font-bold text-[#29232A]">Target Audience</span>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {sandboxResult.sections.audience.content}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FBF7F2] rounded-lg border border-[#EDE3E7] space-y-1">
                    <span className="font-bold text-[#29232A]">Design Direction</span>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {sandboxResult.sections.design.content}
                    </p>
                  </div>
                  <div className="p-3 bg-[#FBF7F2] rounded-lg border border-[#EDE3E7] space-y-1">
                    <span className="font-bold text-[#29232A]">Technical Architecture</span>
                    <p className="text-[#756B72] text-[11px] leading-relaxed">
                      {sandboxResult.sections.technical.content}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. DETAIL MODES COMPARISON (Quick, Detailed, Builder) */}
      <section id="modes" className="w-full py-16 md:py-24 bg-white border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
              Flexible Density
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
              Three modes for every workflow
            </h2>
            <p className="text-sm text-[#756B72]">
              Whether you need rapid brainstorm bullets or strict engineering tickets, PromptCanvas adapts its density dynamically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Mode */}
            <div className="bg-[#FBF7F2] border border-[#EDE3E7] rounded-2xl p-6 space-y-4 hover:border-[#D94F83]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#29232A] border border-[#EDE3E7]">
                    QUICK MODE
                  </span>
                  <Zap className="w-4 h-4 text-[#D94F83]" />
                </div>
                <h3 className="text-lg font-bold text-[#29232A]">
                  Rapid Concept Framing
                </h3>
                <p className="text-xs text-[#756B72] leading-relaxed">
                  Concise bullet points focused on rapid clarity. Perfect for team brainstorming, early Slack discussions, and quick generative prototypes.
                </p>
                <div className="p-3 bg-white border border-[#EDE3E7] rounded-lg font-mono text-[11px] text-[#756B72] space-y-1">
                  <div className="font-semibold text-[#29232A]">• Core Goal: Quick MVP validation</div>
                  <div>• Audience: 18-35 early adopters</div>
                  <div>• Output: Snappy 1-page summary</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE3E7] text-[11px] text-[#756B72]">
                Best for: Fast ideation & PRD drafts
              </div>
            </div>

            {/* Detailed Mode */}
            <div className="bg-white border-2 border-[#D94F83]/40 rounded-2xl p-6 space-y-4 shadow-sm flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-[#D94F83] text-white text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FDF1F5] text-[#B83B6D] border border-[#F8DCE7]">
                    DETAILED MODE
                  </span>
                  <FileText className="w-4 h-4 text-[#D94F83]" />
                </div>
                <h3 className="text-lg font-bold text-[#29232A]">
                  Comprehensive Product Brief
                </h3>
                <p className="text-xs text-[#756B72] leading-relaxed">
                  Deep context with rationale, target demographics, complete content hierarchies, and user journey edge cases.
                </p>
                <div className="p-3 bg-[#FBF7F2] border border-[#EDE3E7] rounded-lg font-mono text-[11px] text-[#756B72] space-y-1">
                  <div className="font-semibold text-[#29232A]">### Detailed Specifications</div>
                  <div>- User journey edge states</div>
                  <div>- Clear messaging hierarchy</div>
                  <div>- Complete visual design tokens</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE3E7] text-[11px] text-[#D94F83] font-semibold">
                Best for: Product Managers & Designers
              </div>
            </div>

            {/* Builder Mode */}
            <div className="bg-[#FBF7F2] border border-[#EDE3E7] rounded-2xl p-6 space-y-4 hover:border-[#D94F83]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#29232A] border border-[#EDE3E7]">
                    BUILDER MODE
                  </span>
                  <Terminal className="w-4 h-4 text-[#D94F83]" />
                </div>
                <h3 className="text-lg font-bold text-[#29232A]">
                  Engineering Implementation
                </h3>
                <p className="text-xs text-[#756B72] leading-relaxed">
                  Code-generation ready. Enforces strict TypeScript structures, state machines, library constraints, and anti-slop rules for LLM coding agents.
                </p>
                <div className="p-3 bg-white border border-[#EDE3E7] rounded-lg font-mono text-[11px] text-[#756B72] space-y-1">
                  <div className="font-semibold text-[#29232A]">// Implementation Checklist</div>
                  <div>- Explicit state schemas</div>
                  <div>- Strict anti-pattern boundaries</div>
                  <div>- Tailored for Cursor & Claude Code</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE3E7] text-[11px] text-[#756B72]">
                Best for: Full-stack developers & AI coders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CURATED BLUEPRINTS SHOWCASE (Edge-to-edge) */}
      <section id="blueprints" className="w-full py-16 md:py-24 bg-[#FBF7F2] border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
                Ready-To-Use Blueprints
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
                Jumpstart from proven templates
              </h2>
              <p className="text-sm text-[#756B72] max-w-xl">
                Pre-formulated blueprints across software categories. Click any blueprint to load it straight into the Prompt Builder.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('templates')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#29232A] bg-white hover:bg-[#FDF1F5] border border-[#EDE3E7] rounded-xl transition-colors self-start sm:self-auto shadow-2xs"
            >
              <span>View All 11 Blueprints</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMPLATES.slice(0, 6).map((tpl) => (
              <div
                key={tpl.id}
                className="bg-white border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FDF1F5] text-[#B83B6D] border border-[#F8DCE7]">
                      {tpl.category}
                    </span>
                    <span className="text-[10px] text-[#756B72] uppercase font-mono">
                      {tpl.mode || 'builder'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#29232A] group-hover:text-[#D94F83] transition-colors">
                      {tpl.title}
                    </h3>
                    <p className="text-xs text-[#756B72] mt-1 line-clamp-2 leading-relaxed">
                      {tpl.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {tpl.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#FBF7F2] text-[#756B72] border border-[#EDE3E7]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EDE3E7]">
                  <button
                    type="button"
                    onClick={() => handleSelectBlueprint(tpl)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg bg-[#FDF1F5] hover:bg-[#D94F83] text-[#B83B6D] hover:text-white transition-all cursor-pointer shadow-2xs"
                  >
                    <span>Use Blueprint in Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPARISON MATRIX: Deterministic vs Raw LLM Chat (Edge-to-edge) */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-[#EDE3E7]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
              Why PromptCanvas
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
              Deterministic architecture vs. raw LLM prompting
            </h2>
            <p className="text-sm text-[#756B72]">
              Why structuring locally before sending to LLMs produces 10x superior engineering results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FBF7F2] border border-[#EDE3E7] rounded-2xl overflow-hidden shadow-2xs">
            <div className="grid grid-cols-12 bg-white border-b border-[#EDE3E7] p-4 text-xs font-bold uppercase tracking-wider text-[#756B72]">
              <div className="col-span-4 sm:col-span-5">Dimension</div>
              <div className="col-span-4 sm:col-span-4 text-[#D94F83]">PromptCanvas Engine</div>
              <div className="col-span-4 sm:col-span-3 text-[#756B72]">Raw AI Chatbox</div>
            </div>

            {[
              {
                dimension: 'Latency',
                canvas: 'Instant (<10ms local)',
                raw: '5–15 seconds streaming wait',
              },
              {
                dimension: 'API Cost & Tokens',
                canvas: '$0.00 forever (Zero API calls)',
                raw: 'Tokens billed per generation',
              },
              {
                dimension: 'Data Privacy',
                canvas: '100% on-device (Zero data sent)',
                raw: 'Logged on 3rd party AI servers',
              },
              {
                dimension: 'Consistency',
                canvas: 'Strict 8-pillar schema every time',
                raw: 'Hallucinates & omits key sections',
              },
              {
                dimension: 'Quality Scoring',
                canvas: 'Deterministic 6-axis 0-100 metric',
                raw: 'No quality measurement',
              },
              {
                dimension: 'Anti-Slop Boundaries',
                canvas: 'Enforced constraints & anti-patterns',
                raw: 'Produces generic purple/glow clichés',
              },
            ].map((row, idx) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-12 p-4 text-xs items-center ${
                  idx % 2 === 1 ? 'bg-white/60' : ''
                }`}
              >
                <div className="col-span-4 sm:col-span-5 font-semibold text-[#29232A]">
                  {row.dimension}
                </div>
                <div className="col-span-4 sm:col-span-4 font-bold text-[#D94F83] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#4F9D78] shrink-0" />
                  <span>{row.canvas}</span>
                </div>
                <div className="col-span-4 sm:col-span-3 text-[#756B72]">
                  {row.raw}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (Edge-to-edge) */}
      <section id="faq" className="w-full py-16 md:py-24 bg-[#FBF7F2] border-b border-[#EDE3E7]">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D94F83]">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How does PromptCanvas work without an external AI API key?',
                a: 'PromptCanvas runs a deterministic TypeScript transformation engine directly inside your browser. It uses domain heuristics, syntactic keyword analysis, and complete architectural schemas to expand your ideas into 8 production-grade sections instantly with zero server roundtrips.',
              },
              {
                q: 'Are my prompts and project ideas private?',
                a: 'Yes, 100%. Everything you type stays entirely within your local browser sandbox. PromptCanvas does not transmit any of your prompt text, ideas, or specifications to any external servers or telemetry systems.',
              },
              {
                q: 'Can I copy the prompt and paste it into Claude, Cursor, or ChatGPT?',
                a: 'Absolutely. The output is formatted in universal, highly readable Markdown with explicit headers (Goal, Audience, Design, Features, UX, Technical Stack, Constraints). AI models and human developers can read and follow every requirement with maximum fidelity.',
              },
              {
                q: 'Can I edit the generated sections and save my changes?',
                a: 'Yes! Every section card features an inline "Edit" button. You can tweak the copy, add customized constraints, click "Save", and the quality score dynamically re-computes. You can also save completed prompts to your browser library.',
              },
              {
                q: 'What is the Structure Completeness score?',
                a: 'The Completeness score is an objective 0–100 metric calculated across 6 structural axes: Goal clarity, Audience specificity, Feature richness, Design direction, Technical architecture, and Boundary constraints. It highlights missing elements so you can strengthen your prompt before execution.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EDE3E7] rounded-xl overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#29232A] hover:text-[#D94F83] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#756B72] transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#D94F83]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#756B72] leading-relaxed border-t border-[#EDE3E7]/40 bg-[#FBF7F2]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM FULL-BLEED CTA BANNER (Zero side gap, edge-to-edge) */}
      <section className="w-full py-16 md:py-20 bg-linear-to-r from-[#D94F83] to-[#B83B6D] text-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
            Stop prompting in the dark. <br className="hidden sm:inline" />
            Build with clarity.
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal leading-relaxed">
            Turn your next project idea into a complete, bulletproof specification in less than 2 seconds. Free, private, and local.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleStartBuilding}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#29232A] bg-white hover:bg-[#FBF7F2] rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Open PromptCanvas Studio</span>
              <ArrowRight className="w-4 h-4 text-[#D94F83]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('templates')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl transition-all cursor-pointer"
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>Browse Blueprints</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. EDGE-TO-EDGE FOOTER (Zero side padding gaps, spans 100vw) */}
      <footer className="w-full bg-white border-t border-[#EDE3E7] py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#EDE3E7]">
            {/* Col 1: Brand */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-base text-[#29232A] tracking-tight font-display">
                  PromptCanvas
                </span>
              </div>
              <p className="text-xs text-[#756B72] leading-relaxed">
                Turn rough thoughts into structured, production-ready prompts. Deterministic, local, and private.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#4F9D78]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Client-Side Privacy</span>
              </div>
            </div>

            {/* Col 2: Studio Navigation */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29232A]">
                Studio
              </h4>
              <ul className="space-y-2 text-xs text-[#756B72]">
                <li>
                  <button
                    onClick={handleStartBuilding}
                    className="hover:text-[#D94F83] transition-colors cursor-pointer"
                  >
                    Prompt Builder
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('templates')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Blueprint Catalog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('saved')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Saved Prompts ({savedCount})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('history')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Recent History
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('settings')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Settings & Defaults
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Architecture Pillars */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29232A]">
                Framework
              </h4>
              <ul className="space-y-2 text-xs text-[#756B72]">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    8-Section Specification
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('modes')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Detail Mode Selectors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('interactive-demo')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Structure Completeness Score
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="hover:text-[#D94F83] transition-colors"
                  >
                    Anti-Slop Boundaries
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Platform & Support */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29232A]">
                Compatibility
              </h4>
              <p className="text-xs text-[#756B72] leading-relaxed">
                Compatible with all modern LLM workflows:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-medium text-[#756B72]">
                <span className="px-2 py-0.5 rounded bg-[#FBF7F2] border border-[#EDE3E7]">Claude 3.7 / 3.5</span>
                <span className="px-2 py-0.5 rounded bg-[#FBF7F2] border border-[#EDE3E7]">Cursor / Windsurf</span>
                <span className="px-2 py-0.5 rounded bg-[#FBF7F2] border border-[#EDE3E7]">ChatGPT-4o</span>
                <span className="px-2 py-0.5 rounded bg-[#FBF7F2] border border-[#EDE3E7]">Gemini 2.5</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756B72]">
            <p>© {new Date().getFullYear()} PromptCanvas. All rights reserved.</p>
            <p className="font-mono text-[11px]">Zero-API Deterministic Architecture v1.0.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
