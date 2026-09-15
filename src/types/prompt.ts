export type Category =
  | 'Website'
  | 'Mobile App'
  | 'SaaS'
  | 'Dashboard'
  | 'Portfolio'
  | 'E-commerce'
  | 'AI Product'
  | 'Developer Tool'
  | 'Marketing'
  | 'Other';

export type PromptMode = 'quick' | 'detailed' | 'builder';

export type SectionKey =
  | 'goal'
  | 'audience'
  | 'design'
  | 'features'
  | 'content'
  | 'ux'
  | 'technical'
  | 'constraints';

export interface PromptSection {
  key: SectionKey;
  title: string;
  content: string;
  isCustomized?: boolean;
}

export type PromptSections = Record<SectionKey, PromptSection>;

export interface QualityScoreData {
  overall: number; // 0-100
  goal: number;
  audience: number;
  features: number;
  design: number;
  technical: number;
  constraints: number;
  details?: {
    wordCount: number;
    clarityFactor: number;
  };
}

export interface Suggestion {
  id: string;
  targetSection: SectionKey;
  title: string;
  description: string;
  additionText: string;
  isApplied?: boolean;
}

export interface SavedPrompt {
  id: string;
  title: string;
  originalIdea: string;
  category: Category;
  mode: PromptMode;
  sections: PromptSections;
  quality: QualityScoreData;
  createdAt: string;
  updatedAt: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  originalIdea: string;
  category: Category;
  mode: PromptMode;
  sections: PromptSections;
  quality: QualityScoreData;
  generatedAt: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  idea: string;
  mode?: PromptMode;
  tags: string[];
}

export interface ExampleIdea {
  id: string;
  title: string;
  description: string;
  category: Category;
  idea: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider?: 'google' | 'email' | 'guest';
  createdAt: string;
}

export interface UserPreferences {
  defaultMode: PromptMode;
  defaultCategory: Category;
  autoSave: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

export type ActivePage = 'landing' | 'builder' | 'templates' | 'saved' | 'history' | 'settings';
