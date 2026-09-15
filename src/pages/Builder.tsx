import React, { useState } from 'react';
import {
  Category,
  PromptMode,
  PromptSections,
  QualityScoreData,
  SavedPrompt,
  Suggestion,
} from '../types/prompt';
import { PromptInput } from '../components/PromptInput';
import { CategorySelector } from '../components/CategorySelector';
import { ExampleCard } from '../components/ExampleCard';
import { PromptResult } from '../components/PromptResult';
import { PromptEditor } from '../components/PromptEditor';
import { EXAMPLE_IDEAS } from '../data/examples';
import {
  generateStructuredPrompt,
  generateSuggestions,
} from '../lib/promptEngine';
import { calculateQualityScore } from '../lib/qualityEngine';
import { generatePromptTitle } from '../lib/formatPrompt';
import { saveHistory, updateHistoryItem, savePrompt } from '../lib/storage';
import { Sparkles, ArrowDown } from 'lucide-react';

interface BuilderProps {
  initialIdea?: string;
  initialCategory?: Category | null;
  initialMode?: PromptMode;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onPromptSaved: () => void;
  onHistoryUpdated?: () => void;
  loadedPrompt?: SavedPrompt | null;
  onClearLoadedPrompt?: () => void;
}

export const Builder: React.FC<BuilderProps> = ({
  initialIdea = '',
  initialCategory = null,
  initialMode = 'builder',
  onToast,
  onPromptSaved,
  onHistoryUpdated,
  loadedPrompt = null,
  onClearLoadedPrompt,
}) => {
  const [idea, setIdea] = useState(initialIdea);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(initialCategory);
  const [mode, setMode] = useState<PromptMode>(initialMode);
  const [isStructuring, setIsStructuring] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Result state
  const [hasResult, setHasResult] = useState(false);
  const [sections, setSections] = useState<PromptSections | null>(null);
  const [qualityScore, setQualityScore] = useState<QualityScoreData | null>(null);
  const [detectedCategory, setDetectedCategory] = useState<Category>('Website');
  const [promptTitle, setPromptTitle] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [appliedSuggestionIds, setAppliedSuggestionIds] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [currentPromptId, setCurrentPromptId] = useState<string>('');
  const [viewMode, setViewMode] = useState<'sections' | 'document'>('sections');

  // If a prompt was loaded from Saved or History
  React.useEffect(() => {
    if (loadedPrompt) {
      setIdea(loadedPrompt.originalIdea);
      setSelectedCategory(loadedPrompt.category);
      setDetectedCategory(loadedPrompt.category);
      setMode(loadedPrompt.mode);
      setSections(loadedPrompt.sections);
      setQualityScore(loadedPrompt.quality);
      setPromptTitle(loadedPrompt.title);
      setCurrentPromptId(loadedPrompt.id);
      setSuggestions(
        generateSuggestions(
          loadedPrompt.originalIdea,
          loadedPrompt.sections,
          loadedPrompt.category
        )
      );
      setAppliedSuggestionIds([]);
      setIsSaved(true);
      setHasResult(true);
    }
  }, [loadedPrompt]);

  const handleStructure = (overrideIdea?: string, overrideCat?: Category | null) => {
    const rawText = (overrideIdea !== undefined ? overrideIdea : idea).trim();

    if (!rawText) {
      setError('Please describe your idea before structuring.');
      return;
    }

    if (rawText.length < 5) {
      setError('Add a little more detail so PromptCanvas can structure your idea.');
      return;
    }

    setError(null);
    setIsStructuring(true);

    // Brief deterministic delay for smooth UX transition
    setTimeout(() => {
      try {
        const cat = overrideCat !== undefined ? overrideCat : selectedCategory;
        const {
          sections: generatedSections,
          detectedCategory: detectedCat,
        } = generateStructuredPrompt(rawText, mode, cat || undefined);

        const quality = calculateQualityScore(rawText, generatedSections);
        const title = generatePromptTitle(rawText, detectedCat);
        const generatedSuggestions = generateSuggestions(
          rawText,
          generatedSections,
          detectedCat
        );

        const promptId = `prompt-${Date.now()}`;
        setCurrentPromptId(promptId);
        setSections(generatedSections);
        setQualityScore(quality);
        setDetectedCategory(detectedCat);
        setPromptTitle(title);
        setSuggestions(generatedSuggestions);
        setAppliedSuggestionIds([]);
        setIsSaved(false);
        setHasResult(true);

        // Record in history automatically
        saveHistory({
          id: promptId,
          title,
          originalIdea: rawText,
          category: detectedCat,
          mode,
          sections: generatedSections,
          quality,
          generatedAt: new Date().toISOString(),
        });

        // Immediately notify parent components so history updates without requiring a page reload
        if (onHistoryUpdated) {
          onHistoryUpdated();
        } else if (onPromptSaved) {
          onPromptSaved();
        }

        onToast('Prompt structured and recorded in History!');
      } catch (err) {
        console.error('Failed to structure prompt:', err);
        setError('An unexpected error occurred while structuring your prompt.');
      } finally {
        setIsStructuring(false);
      }
    }, 280);
  };

  const handleModeChange = (newMode: PromptMode) => {
    setMode(newMode);
    if (hasResult && idea.trim()) {
      // Regenerate while preserving customized sections if desired
      const { sections: newSections, detectedCategory: newCat } =
        generateStructuredPrompt(idea, newMode, selectedCategory || undefined);
      
      // Preserve any custom edited content if user made edits
      if (sections) {
        (Object.keys(sections) as Array<keyof PromptSections>).forEach((k) => {
          if (sections[k].isCustomized) {
            newSections[k] = sections[k];
          }
        });
      }

      const quality = calculateQualityScore(idea, newSections);
      setSections(newSections);
      setQualityScore(quality);

      if (currentPromptId) {
        updateHistoryItem(currentPromptId, {
          mode: newMode,
          sections: newSections,
          quality,
        });
        onHistoryUpdated?.();
      }

      onToast(`Regenerated in ${newMode.toUpperCase()} mode.`);
    }
  };

  const handleUpdateSection = (key: keyof PromptSections, newContent: string) => {
    if (!sections) return;
    const updated: PromptSections = {
      ...sections,
      [key]: {
        ...sections[key],
        content: newContent,
        isCustomized: true,
      },
    };
    setSections(updated);
    const newQuality = calculateQualityScore(idea, updated);
    setQualityScore(newQuality);
    setIsSaved(false);

    if (currentPromptId) {
      updateHistoryItem(currentPromptId, {
        sections: updated,
        quality: newQuality,
      });
      onHistoryUpdated?.();
    }
  };

  const handleApplySuggestion = (sug: Suggestion) => {
    if (!sections) return;
    const target = sections[sug.targetSection];
    const updatedContent = `${target.content.trim()}\n${sug.additionText.trim()}`;
    handleUpdateSection(sug.targetSection, updatedContent);
    setAppliedSuggestionIds((prev) => [...prev, sug.id]);
    onToast(`Added: "${sug.title}"`);
  };

  const handleSavePrompt = () => {
    if (!sections || !qualityScore) return;
    const promptObj: SavedPrompt = {
      id: currentPromptId || `saved-${Date.now()}`,
      title: promptTitle,
      originalIdea: idea,
      category: detectedCategory,
      mode,
      sections,
      quality: qualityScore,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const ok = savePrompt(promptObj);
    if (ok) {
      setIsSaved(true);
      onPromptSaved();
      onToast('Prompt saved to your library!');
    } else {
      onToast('Could not save prompt to browser storage.', 'error');
    }
  };

  const handleNewPrompt = () => {
    setIdea('');
    setSelectedCategory(null);
    setHasResult(false);
    setSections(null);
    setQualityScore(null);
    setSuggestions([]);
    setAppliedSuggestionIds([]);
    setIsSaved(false);
    setCurrentPromptId('');
    if (onClearLoadedPrompt) onClearLoadedPrompt();
  };

  const handleExampleSelect = (exampleIdea: string, exampleCategory?: string) => {
    setIdea(exampleIdea);
    if (exampleCategory) {
      setSelectedCategory(exampleCategory as Category);
    }
    handleStructure(exampleIdea, (exampleCategory as Category) || null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 animate-in fade-in duration-200">
      {/* Hero Section */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF1F5] border border-[#EDE3E7] text-xs font-semibold text-[#B83B6D] mb-1">
          <Sparkles className="w-3.5 h-3.5 text-[#D94F83]" />
          <span>Deterministic Local Transformation Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#29232A] tracking-tight">
          Turn an idea into a better prompt.
        </h1>
        <p className="text-sm sm:text-base text-[#756B72] max-w-xl mx-auto font-medium">
          Start messy. PromptCanvas organizes the thinking into production-ready specifications.
        </p>
      </div>

      {/* Primary Input Container */}
      <div className="bg-white border border-[#EDE3E7] rounded-2xl p-6 shadow-xs space-y-5">
        <PromptInput
          value={idea}
          onChange={(val) => {
            setIdea(val);
            if (error) setError(null);
          }}
          onSubmit={() => handleStructure()}
          onClear={() => {
            setIdea('');
            setError(null);
          }}
          isStructuring={isStructuring}
          error={error}
        />

        {/* Category selector */}
        <div className="pt-2 border-t border-[#EDE3E7]/60">
          <CategorySelector
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />
        </div>

        {/* Examples Section */}
        {!hasResult && (
          <div className="pt-3 border-t border-[#EDE3E7]/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
                Or try an example idea
              </span>
              <span className="text-xs text-[#756B72]">
                Click any card to auto-populate
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {EXAMPLE_IDEAS.map((ex) => (
                <ExampleCard
                  key={ex.id}
                  example={ex}
                  onSelect={handleExampleSelect}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Generated Result Workspace */}
      {hasResult && sections && qualityScore && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Transition anchor */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#756B72]">
            <ArrowDown className="w-3.5 h-3.5 text-[#D94F83] animate-bounce" />
            <span>Structured specifications generated below</span>
          </div>

          <PromptResult
            originalIdea={idea}
            category={detectedCategory}
            mode={mode}
            quality={qualityScore}
            title={promptTitle}
            onUpdateTitle={(t) => setPromptTitle(t)}
            onModeChange={handleModeChange}
            sections={sections}
            isSaved={isSaved}
            onSave={handleSavePrompt}
            onNewPrompt={handleNewPrompt}
            onToast={onToast}
            viewMode={viewMode}
            onToggleViewMode={setViewMode}
          />

          <PromptEditor
            title={promptTitle}
            sections={sections}
            quality={qualityScore}
            suggestions={suggestions}
            appliedSuggestionIds={appliedSuggestionIds}
            onUpdateSection={handleUpdateSection}
            onApplySuggestion={handleApplySuggestion}
            onToast={onToast}
            viewMode={viewMode}
          />
        </div>
      )}
    </div>
  );
};
