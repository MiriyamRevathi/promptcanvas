import React, { useEffect } from 'react';
import {
  Wand2,
  LayoutTemplate,
  Bookmark,
  History,
  Settings as SettingsIcon,
  Sparkles,
  X,
  ShieldCheck,
  Home,
  LogIn,
  LogOut,
} from 'lucide-react';
import { ActivePage, User } from '../types/prompt';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: ActivePage;
  onSelectPage: (page: ActivePage) => void;
  savedCount: number;
  historyCount?: number;
  currentUser?: User | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activePage,
  onSelectPage,
  savedCount,
  historyCount = 0,
  currentUser,
  onOpenAuthModal,
  onLogout,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNav = (page: ActivePage) => {
    if (page === 'builder' && !currentUser && onOpenAuthModal) {
      onClose();
      onOpenAuthModal();
      return;
    }
    onSelectPage(page);
    onClose();
  };

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex md:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#29232A]/40 backdrop-blur-xs animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-xs bg-white h-full flex flex-col justify-between shadow-2xl border-r border-[#EDE3E7] p-6 animate-in slide-in-from-left duration-200">
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[#EDE3E7]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-[#29232A]">
                PromptCanvas
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#756B72] hover:text-[#29232A] rounded-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 space-y-1.5">
            <button
              onClick={() => handleNav('landing')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'landing'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <Home className={`w-4 h-4 ${activePage === 'landing' ? 'text-[#D94F83]' : ''}`} />
              <span>Landing Page</span>
            </button>

            <button
              onClick={() => handleNav('builder')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'builder'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <Wand2 className={`w-4 h-4 ${activePage === 'builder' ? 'text-[#D94F83]' : ''}`} />
              <span>Builder</span>
            </button>

            <button
              onClick={() => handleNav('templates')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'templates'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <LayoutTemplate className={`w-4 h-4 ${activePage === 'templates' ? 'text-[#D94F83]' : ''}`} />
              <span>Templates</span>
            </button>

            <button
              onClick={() => handleNav('saved')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'saved'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bookmark className={`w-4 h-4 ${activePage === 'saved' ? 'text-[#D94F83]' : ''}`} />
                <span>Saved</span>
              </div>
              {savedCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FDF1F5] text-[#B83B6D] font-medium">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNav('history')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'history'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <div className="flex items-center gap-3">
                <History className={`w-4 h-4 ${activePage === 'history' ? 'text-[#D94F83]' : ''}`} />
                <span>History</span>
              </div>
              {historyCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FDF1F5] text-[#B83B6D] font-medium">
                  {historyCount}
                </span>
              )}
            </button>

            <div className="pt-2 pb-1">
              <hr className="border-[#EDE3E7]" />
            </div>

            <button
              onClick={() => handleNav('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                activePage === 'settings'
                  ? 'bg-[#F8DCE7] text-[#29232A]'
                  : 'text-[#756B72] hover:bg-[#FDF1F5]'
              }`}
            >
              <SettingsIcon className={`w-4 h-4 ${activePage === 'settings' ? 'text-[#D94F83]' : ''}`} />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        <div className="border-t border-[#EDE3E7] pt-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#756B72] bg-[#FBF7F2] p-2.5 rounded-lg border border-[#EDE3E7]">
            <ShieldCheck className="w-4 h-4 text-[#4F9D78] shrink-0" />
            <span>Local prompt engine • Client-side</span>
          </div>
          {currentUser ? (
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDF1F5]/60 border border-[#EDE3E7]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center font-bold text-xs text-[#B83B6D] shrink-0">
                  {getInitials(currentUser.name)}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#29232A] truncate">
                    {currentUser.name}
                  </p>
                  <p className="text-[10px] text-[#756B72] truncate">
                    {currentUser.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLogout?.();
                }}
                className="p-1.5 text-[#756B72] hover:text-[#D94F83] rounded-md transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenAuthModal?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl transition-all shadow-2xs"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to Build</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
