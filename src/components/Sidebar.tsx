import React from 'react';
import {
  Wand2,
  LayoutTemplate,
  Bookmark,
  History,
  Settings as SettingsIcon,
  Sparkles,
  ShieldCheck,
  Home,
  LogIn,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import { ActivePage, User } from '../types/prompt';

interface SidebarProps {
  activePage: ActivePage;
  onSelectPage: (page: ActivePage) => void;
  savedCount: number;
  historyCount?: number;
  currentUser?: User | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

interface NavItem {
  id: ActivePage;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onSelectPage,
  savedCount,
  historyCount = 0,
  currentUser,
  onOpenAuthModal,
  onLogout,
}) => {
  const mainNav: NavItem[] = [
    { id: 'landing', label: 'Landing Page', icon: Home },
    { id: 'builder', label: 'Builder', icon: Wand2 },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate },
    { id: 'saved', label: 'Saved', icon: Bookmark, badge: savedCount > 0 ? savedCount : undefined },
    { id: 'history', label: 'History', icon: History, badge: historyCount > 0 ? historyCount : undefined },
  ];

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const handleNavClick = (page: ActivePage) => {
    if (page === 'builder' && !currentUser && onOpenAuthModal) {
      // User is trying to go to builder while not logged in: ask login!
      onOpenAuthModal();
      return;
    }
    onSelectPage(page);
  };

  return (
    <aside className="w-64 bg-white border-r border-[#EDE3E7] flex flex-col justify-between h-screen sticky top-0 shrink-0 select-none">
      <div>
        {/* Brand header */}
        <div className="p-6 border-b border-[#EDE3E7]">
          <button
            onClick={() => onSelectPage('landing')}
            className="flex items-center gap-3 text-left group focus:outline-hidden cursor-pointer"
            title="Go to Landing Page"
          >
            <div className="w-9 h-9 rounded-lg bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83] group-hover:bg-[#F8DCE7] transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-[#29232A] tracking-tight">
                  PromptCanvas
                </span>
              </div>
              <p className="text-xs text-[#756B72] truncate max-w-[150px]">
                Turn rough ideas into prompts
              </p>
            </div>
          </button>
        </div>

        {/* Navigation list */}
        <nav className="p-4 space-y-1.5">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#F8DCE7] text-[#29232A]'
                    : 'text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[#D94F83]' : 'text-[#756B72]'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white text-[#B83B6D] font-semibold'
                        : 'bg-[#FDF1F5] text-[#756B72]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 pb-1">
            <hr className="border-[#EDE3E7]" />
          </div>

          <button
            id="nav-settings"
            onClick={() => onSelectPage('settings')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'settings'
                ? 'bg-[#F8DCE7] text-[#29232A]'
                : 'text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5]/60'
            }`}
          >
            <SettingsIcon
              className={`w-4 h-4 ${
                activePage === 'settings' ? 'text-[#D94F83]' : 'text-[#756B72]'
              }`}
            />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Footer user profile & privacy badge */}
      <div className="p-4 border-t border-[#EDE3E7] space-y-3">
        <div className="flex items-center gap-2 text-[11px] text-[#756B72] bg-[#FBF7F2] p-2 rounded-md border border-[#EDE3E7]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#4F9D78] shrink-0" />
          <span>Local prompt engine • Client-side</span>
        </div>

        {currentUser ? (
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FDF1F5]/60 border border-[#EDE3E7]">
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
              onClick={onLogout}
              title="Log Out"
              className="p-1.5 text-[#756B72] hover:text-[#D94F83] hover:bg-white rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="p-2.5 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] space-y-2">
            <p className="text-[11px] text-[#756B72] leading-tight">
              Sign in to save and sync your structured prompts.
            </p>
            <button
              type="button"
              onClick={onOpenAuthModal}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In to Build</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
