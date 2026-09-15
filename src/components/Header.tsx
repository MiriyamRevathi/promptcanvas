import React, { useState, useRef, useEffect } from 'react';
import { Menu, HelpCircle, Bell, Sparkles, Home, LogIn, LogOut, User as UserIcon, Check } from 'lucide-react';
import { ActivePage, User } from '../types/prompt';

interface HeaderProps {
  activePage: ActivePage;
  onOpenMobileMenu: () => void;
  onOpenHelp: () => void;
  onOpenNotifications: () => void;
  unreadCount?: number;
  onNavigate?: (page: ActivePage) => void;
  currentUser?: User | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

const PAGE_TITLES: Record<ActivePage, { title: string; subtitle: string }> = {
  landing: {
    title: 'PromptCanvas',
    subtitle: 'Turn rough ideas into structured, ready-to-use prompts',
  },
  builder: {
    title: 'Prompt Builder',
    subtitle: 'Transform rough ideas into structured, high-impact prompts',
  },
  templates: {
    title: 'Template Catalog',
    subtitle: 'Curated prompt blueprints across categories',
  },
  saved: {
    title: 'Saved Prompts',
    subtitle: 'Your personal library of structured prompt specifications',
  },
  history: {
    title: 'Recent History',
    subtitle: 'Quick access to your 10 most recent generated prompts',
  },
  settings: {
    title: 'Settings & Preferences',
    subtitle: 'Manage local storage, default modes, and data controls',
  },
};

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onOpenMobileMenu,
  onOpenHelp,
  onOpenNotifications,
  unreadCount = 0,
  onNavigate,
  currentUser,
  onOpenAuthModal,
  onLogout,
}) => {
  const current = PAGE_TITLES[activePage];
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <header className="h-16 bg-white border-b border-[#EDE3E7] px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left side: Mobile menu toggle + page title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 rounded-lg text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile brand mark if small */}
        <div className="md:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83]">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <div>
          <h1 className="text-base font-semibold text-[#29232A] tracking-tight">
            {current.title}
          </h1>
          <p className="text-xs text-[#756B72] hidden sm:block">
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* Right side controls: Help, Notifications, User avatar / Login */}
      <div className="flex items-center gap-2">
        {onNavigate && activePage !== 'landing' && (
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] transition-colors border border-[#EDE3E7]"
            title="Return to Landing Page"
          >
            <Home className="w-3.5 h-3.5 text-[#D94F83]" />
            <span>Landing Page</span>
          </button>
        )}

        <button
          type="button"
          onClick={onOpenHelp}
          className="p-2 rounded-lg text-[#756B72] hover:text-[#29232A] hover:bg-[#FBF7F2] transition-colors relative"
          title="About PromptCanvas methodology"
          aria-label="Help & Guide"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onOpenNotifications}
          className="p-2 rounded-lg text-[#756B72] hover:text-[#29232A] hover:bg-[#FBF7F2] transition-colors relative"
          title="Notifications"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D94F83]" />
          )}
        </button>

        <div className="h-4 w-px bg-[#EDE3E7] mx-1" />

        {currentUser ? (
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#D94F83]/20 transition-all cursor-pointer focus:outline-hidden"
              title={`${currentUser.name} (${currentUser.email})`}
            >
              <div className="w-8 h-8 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center font-bold text-xs text-[#B83B6D]">
                {getInitials(currentUser.name)}
              </div>
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-[#EDE3E7] rounded-xl shadow-lg py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-2.5 border-b border-[#EDE3E7]">
                  <p className="text-xs font-bold text-[#29232A] truncate">
                    {currentUser.name}
                  </p>
                  <p className="text-[11px] text-[#756B72] truncate">
                    {currentUser.email}
                  </p>
                  {currentUser.provider && (
                    <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FDF1F5] text-[#B83B6D] border border-[#F8DCE7]">
                      {currentUser.provider} Account
                    </span>
                  )}
                </div>

                <div className="py-1">
                  {onNavigate && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          onNavigate('saved');
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-[#756B72] hover:text-[#29232A] hover:bg-[#FBF7F2] transition-colors"
                      >
                        Saved Prompts
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          onNavigate('settings');
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-[#756B72] hover:text-[#29232A] hover:bg-[#FBF7F2] transition-colors"
                      >
                        Settings
                      </button>
                    </>
                  )}
                </div>

                <div className="pt-1 border-t border-[#EDE3E7]">
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      onLogout?.();
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#B83B6D] hover:bg-[#FDF1F5] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 text-[#D94F83]" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={onOpenAuthModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#D94F83] hover:text-white bg-[#FDF1F5] hover:bg-[#D94F83] border border-[#F8DCE7] rounded-lg transition-all cursor-pointer shadow-2xs"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
};
