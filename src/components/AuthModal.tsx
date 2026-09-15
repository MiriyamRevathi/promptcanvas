import React, { useState } from 'react';
import {
  X,
  Mail,
  Lock,
  User as UserIcon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { User } from '../types/prompt';
import { saveCurrentUser } from '../lib/storage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: User) => void;
  title?: string;
  subtitle?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  title = 'Sign In to Build',
  subtitle = 'Log in or create an account to start structuring and saving your prompt specifications.',
}) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    if (tab === 'signup' && !name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const displayName =
        tab === 'signup' && name.trim()
          ? name.trim()
          : cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

      const newUser: User = {
        id: `user-${Date.now()}`,
        name: displayName,
        email: cleanEmail,
        provider: 'email',
        createdAt: new Date().toISOString(),
      };

      saveCurrentUser(newUser);
      setLoading(false);
      onSuccess(newUser);
      onClose();
    }, 400);
  };

  const handleGoogleAuth = () => {
    setError(null);
    setLoading(true);
    setTimeout(() => {
      const googleUser: User = {
        id: `google-${Date.now()}`,
        name: 'Revathi Miriyam',
        email: 'miriyamrevathi4@gmail.com',
        provider: 'google',
        createdAt: new Date().toISOString(),
      };

      saveCurrentUser(googleUser);
      setLoading(false);
      onSuccess(googleUser);
      onClose();
    }, 450);
  };

  const handleQuickDemoAuth = () => {
    setError(null);
    setLoading(true);
    setTimeout(() => {
      const demoUser: User = {
        id: 'demo-creator-1',
        name: 'Alex Morgan',
        email: 'alex.morgan@promptcanvas.dev',
        provider: 'email',
        createdAt: new Date().toISOString(),
      };

      saveCurrentUser(demoUser);
      setLoading(false);
      onSuccess(demoUser);
      onClose();
    }, 300);
  };

  const handleGuestContinue = () => {
    setError(null);
    const guestUser: User = {
      id: `guest-${Date.now().toString(36)}`,
      name: 'Guest Builder',
      email: 'guest@promptcanvas.local',
      provider: 'guest',
      createdAt: new Date().toISOString(),
    };
    saveCurrentUser(guestUser);
    onSuccess(guestUser);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29232A]/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border border-[#EDE3E7] rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="relative p-6 pb-4 border-b border-[#EDE3E7] bg-linear-to-b from-[#FDF1F5]/60 to-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-[#756B72] hover:text-[#29232A] hover:bg-[#EDE3E7]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83] shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#29232A] tracking-tight">
                {title}
              </h2>
              <p className="text-xs text-[#756B72] mt-0.5 leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex rounded-xl bg-[#FBF7F2] p-1 border border-[#EDE3E7] mt-5">
            <button
              type="button"
              onClick={() => {
                setTab('signin');
                setError(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'signin'
                  ? 'bg-white text-[#29232A] shadow-2xs'
                  : 'text-[#756B72] hover:text-[#29232A]'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('signup');
                setError(null);
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'signup'
                  ? 'bg-white text-[#29232A] shadow-2xs'
                  : 'text-[#756B72] hover:text-[#29232A]'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] flex items-start gap-2.5 text-xs text-[#B83B6D] animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-[#D94F83] shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign-in button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white hover:bg-[#FBF7F2] text-[#29232A] text-xs font-bold border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl transition-all shadow-2xs cursor-pointer disabled:opacity-60"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-[#EDE3E7]" />
            <span className="absolute bg-white px-3 text-[11px] font-medium text-[#756B72] uppercase tracking-wider">
              or with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-3.5">
            {tab === 'signup' && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#756B72] flex items-center gap-1.5">
                  <UserIcon className="w-3.5 h-3.5 text-[#D94F83]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  disabled={loading}
                  className="w-full px-3.5 py-2 text-xs bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl text-[#29232A] placeholder-[#756B72]/60 focus:outline-hidden focus:border-[#D94F83] focus:ring-2 focus:ring-[#D94F83]/15 transition-all"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#756B72] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                disabled={loading}
                className="w-full px-3.5 py-2 text-xs bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl text-[#29232A] placeholder-[#756B72]/60 focus:outline-hidden focus:border-[#D94F83] focus:ring-2 focus:ring-[#D94F83]/15 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#756B72] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loading}
                className="w-full px-3.5 py-2 text-xs bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl text-[#29232A] placeholder-[#756B72]/60 focus:outline-hidden focus:border-[#D94F83] focus:ring-2 focus:ring-[#D94F83]/15 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-60"
            >
              <span>{loading ? 'Authenticating...' : tab === 'signin' ? 'Sign In & Build' : 'Create Account & Build'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Demo Test Sign-in */}
          <div className="pt-2 border-t border-[#EDE3E7] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#756B72]">Quick 1-Click Testing:</span>
              <button
                type="button"
                onClick={handleGuestContinue}
                className="text-[11px] text-[#756B72] hover:text-[#29232A] underline cursor-pointer"
              >
                Continue as Guest
              </button>
            </div>

            <button
              type="button"
              onClick={handleQuickDemoAuth}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#B83B6D] bg-[#FDF1F5] hover:bg-[#F8DCE7] border border-[#F8DCE7] rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <Zap className="w-3.5 h-3.5 text-[#D94F83]" />
              <span>Instant Demo Sign-In (Alex Morgan)</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#FBF7F2] border-t border-[#EDE3E7] flex items-center justify-center gap-1.5 text-[11px] text-[#756B72]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#4F9D78]" />
          <span>Local secure session • Stored on this device</span>
        </div>
      </div>
    </div>
  );
};
