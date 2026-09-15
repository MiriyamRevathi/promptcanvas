import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivePage,
  HistoryItem,
  SavedPrompt,
  TemplateItem,
  ToastMessage,
  User,
  UserPreferences,
} from './types/prompt';
import { Wand2 } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { ToastContainer } from './components/Toast';
import { HelpModal } from './components/HelpModal';
import { NotificationsModal } from './components/NotificationsModal';
import { AuthModal } from './components/AuthModal';
import { LandingPage } from './pages/LandingPage';
import { Builder } from './pages/Builder';
import { Templates } from './pages/Templates';
import { SavedPrompts } from './pages/SavedPrompts';
import { History } from './pages/History';
import { Settings } from './pages/Settings';
import {
  getHistory,
  getPreferences,
  getSavedPrompts,
  savePrompt,
  getCurrentUser,
  clearCurrentUser,
} from './lib/storage';
import { getInitialSeedPrompts } from './data/mockPrompts';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(1);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(() => getCurrentUser());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingPostAuthAction, setPendingPostAuthAction] = useState<(() => void) | null>(null);

  // Core data states
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>(getPreferences());

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Staging for Builder when opening from Saved, History, or Templates
  const [loadedPrompt, setLoadedPrompt] = useState<SavedPrompt | null>(null);
  const [templateIdeaToLoad, setTemplateIdeaToLoad] = useState<{
    idea: string;
    category: any;
    mode: any;
  } | null>(null);

  // Initialize data on mount
  useEffect(() => {
    let saved = getSavedPrompts();
    // If first-time user and no saved prompts exist, seed one useful sample
    if (saved.length === 0) {
      const seeds = getInitialSeedPrompts();
      seeds.forEach((s) => savePrompt(s));
      saved = getSavedPrompts();
    }
    setSavedPrompts(saved);
    setHistoryItems(getHistory());
    setPreferences(getPreferences());
  }, []);

  const refreshData = useCallback(() => {
    setSavedPrompts(getSavedPrompts());
    setHistoryItems(getHistory());
    setPreferences(getPreferences());
  }, []);

  // Listen to cross-component and storage updates
  useEffect(() => {
    const handleSync = () => {
      setSavedPrompts(getSavedPrompts());
      setHistoryItems(getHistory());
      setPreferences(getPreferences());
    };
    window.addEventListener('promptcanvas_history_changed', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('promptcanvas_history_changed', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const addToast = useCallback(
    (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      setToasts((prev) => [...prev, { id, message, type }]);
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Auth Handlers
  const handleOpenAuthModal = useCallback((pendingAction?: () => void) => {
    if (pendingAction) {
      setPendingPostAuthAction(() => pendingAction);
    } else {
      setPendingPostAuthAction(null);
    }
    setIsAuthModalOpen(true);
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    addToast(`Signed in as ${user.name}. You can now use the Builder!`, 'success');
    if (pendingPostAuthAction) {
      pendingPostAuthAction();
      setPendingPostAuthAction(null);
    } else {
      setActivePage('builder');
    }
  };

  const handleLogout = () => {
    clearCurrentUser();
    setCurrentUser(null);
    addToast('Signed out successfully.', 'info');
    if (activePage === 'builder') {
      setActivePage('landing');
    }
  };

  // Safe navigation that asks to login if targeting builder
  const handleNavigate = (page: ActivePage) => {
    if (page === 'builder' && !currentUser) {
      handleOpenAuthModal(() => {
        setLoadedPrompt(null);
        setTemplateIdeaToLoad(null);
        setActivePage('builder');
      });
      return;
    }
    if (page === 'history' || page === 'saved') {
      refreshData();
    }
    setActivePage(page);
  };

  // Handler: Open from Saved Prompts
  const handleOpenSavedPrompt = (prompt: SavedPrompt) => {
    if (!currentUser) {
      handleOpenAuthModal(() => {
        setLoadedPrompt(prompt);
        setActivePage('builder');
        addToast(`Loaded "${prompt.title}" into Builder.`);
      });
      return;
    }
    setLoadedPrompt(prompt);
    setActivePage('builder');
    addToast(`Loaded "${prompt.title}" into Builder.`);
  };

  // Handler: Open from History
  const handleOpenHistoryItem = (item: HistoryItem) => {
    const asSaved: SavedPrompt = {
      id: item.id,
      title: item.title,
      originalIdea: item.originalIdea,
      category: item.category,
      mode: item.mode,
      sections: item.sections,
      quality: item.quality,
      createdAt: item.generatedAt,
      updatedAt: item.generatedAt,
    };

    if (!currentUser) {
      handleOpenAuthModal(() => {
        setLoadedPrompt(asSaved);
        setActivePage('builder');
        addToast(`Restored "${item.title}" from History.`);
      });
      return;
    }
    setLoadedPrompt(asSaved);
    setActivePage('builder');
    addToast(`Restored "${item.title}" from History.`);
  };

  // Handler: Use Template
  const handleUseTemplate = (template: TemplateItem) => {
    const loadAction = () => {
      setLoadedPrompt(null);
      setTemplateIdeaToLoad({
        idea: template.idea,
        category: template.category,
        mode: template.mode || 'builder',
      });
      setActivePage('builder');
      addToast(`Template "${template.title}" loaded.`);
    };

    if (!currentUser) {
      handleOpenAuthModal(loadAction);
      return;
    }
    loadAction();
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF7F2] text-[#29232A]">
      {activePage === 'landing' ? (
        <LandingPage
          onLaunchApp={() => {
            if (!currentUser) {
              handleOpenAuthModal(() => {
                setLoadedPrompt(null);
                setTemplateIdeaToLoad(null);
                setActivePage('builder');
              });
              return;
            }
            setLoadedPrompt(null);
            setTemplateIdeaToLoad(null);
            setActivePage('builder');
          }}
          onUseTemplate={handleUseTemplate}
          onOpenSavedPrompt={() => setActivePage('saved')}
          onNavigate={handleNavigate}
          savedCount={savedPrompts.length}
          currentUser={currentUser}
          onOpenAuthModal={() => handleOpenAuthModal()}
          onLogout={handleLogout}
        />
      ) : (
        <div className="flex min-h-screen bg-[#FBF7F2] text-[#29232A]">
          {/* Desktop Sidebar (hidden on mobile) */}
          <div className="hidden md:block">
            <Sidebar
              activePage={activePage}
              onSelectPage={handleNavigate}
              savedCount={savedPrompts.length}
              historyCount={historyItems.length}
              currentUser={currentUser}
              onOpenAuthModal={() => handleOpenAuthModal()}
              onLogout={handleLogout}
            />
          </div>

          {/* Mobile Drawer */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            activePage={activePage}
            onSelectPage={handleNavigate}
            savedCount={savedPrompts.length}
            historyCount={historyItems.length}
            currentUser={currentUser}
            onOpenAuthModal={() => handleOpenAuthModal()}
            onLogout={handleLogout}
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            <Header
              activePage={activePage}
              onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
              onOpenHelp={() => setIsHelpOpen(true)}
              onOpenNotifications={() => setIsNotificationsOpen(true)}
              unreadCount={unreadNotifications}
              onNavigate={handleNavigate}
              currentUser={currentUser}
              onOpenAuthModal={() => handleOpenAuthModal()}
              onLogout={handleLogout}
            />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              {activePage === 'builder' && (
                !currentUser ? (
                  <div className="max-w-xl mx-auto mt-12 p-8 bg-white border border-[#EDE3E7] rounded-2xl shadow-sm text-center space-y-5 animate-in fade-in">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83] mx-auto">
                      <Wand2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-[#29232A]">Authentication Required</h2>
                      <p className="text-sm text-[#756B72]">
                        Please sign in or continue as a guest to access the Prompt Builder and start structuring your prompts.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenAuthModal(() => setActivePage('builder'))}
                        className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        Sign In or Continue as Guest
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePage('landing')}
                        className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#756B72] hover:text-[#29232A] bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl cursor-pointer"
                      >
                        Back to Landing Page
                      </button>
                    </div>
                  </div>
                ) : (
                  <Builder
                    key={
                      loadedPrompt
                        ? loadedPrompt.id
                        : templateIdeaToLoad
                        ? `template-${templateIdeaToLoad.idea.slice(0, 10)}`
                        : 'new-builder'
                    }
                    initialIdea={templateIdeaToLoad?.idea || ''}
                    initialCategory={templateIdeaToLoad?.category || null}
                    initialMode={templateIdeaToLoad?.mode || preferences.defaultMode}
                    loadedPrompt={loadedPrompt}
                    onClearLoadedPrompt={() => {
                      setLoadedPrompt(null);
                      setTemplateIdeaToLoad(null);
                    }}
                    onToast={addToast}
                    onPromptSaved={refreshData}
                    onHistoryUpdated={refreshData}
                  />
                )
              )}

              {activePage === 'templates' && (
                <Templates onUseTemplate={handleUseTemplate} />
              )}

              {activePage === 'saved' && (
                <SavedPrompts
                  prompts={savedPrompts}
                  onOpenPrompt={handleOpenSavedPrompt}
                  onRefresh={refreshData}
                  onCreateNew={() => {
                    handleNavigate('builder');
                  }}
                  onToast={addToast}
                />
              )}

              {activePage === 'history' && (
                <History
                  historyItems={historyItems}
                  onOpenItem={handleOpenHistoryItem}
                  onRefresh={refreshData}
                  onToast={addToast}
                  onGoToBuilder={() => {
                    handleNavigate('builder');
                  }}
                />
              )}

              {activePage === 'settings' && (
                <Settings
                  preferences={preferences}
                  onUpdatePreferences={(pref) => setPreferences(pref)}
                  onRefreshData={refreshData}
                  onToast={addToast}
                />
              )}
            </main>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          setPendingPostAuthAction(null);
        }}
        onSuccess={handleLoginSuccess}
      />

      {/* Help Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onClearUnread={() => setUnreadNotifications(0)}
      />

      {/* Floating Toast Notification Stack */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
