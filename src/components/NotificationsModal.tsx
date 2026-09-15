import React, { useEffect } from 'react';
import { X, Sparkles, Bell, Info } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearUnread: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  onClearUnread,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      onClearUnread();
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onClearUnread]);

  if (!isOpen) return null;

  const notifications = [
    {
      id: 'n-1',
      title: 'Welcome to PromptCanvas v1.0',
      description: 'Your deterministic local prompt structuring tool is ready. Try typing a rough idea or picking a template.',
      time: 'Just now',
      unread: true,
    },
    {
      id: 'n-2',
      title: 'Privacy Guaranteed',
      description: 'Zero external AI API dependencies. All prompt analysis executes locally in this browser.',
      time: '1h ago',
      unread: false,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29232A]/35 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md bg-white border border-[#EDE3E7] rounded-2xl shadow-xl p-5 relative animate-in zoom-in-95 duration-150 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#EDE3E7]">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#D94F83]" />
            <h3 className="text-sm font-semibold text-[#29232A]">
              Notifications
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#756B72] hover:text-[#29232A] p-1 rounded-md"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="p-3.5 rounded-xl bg-[#FBF7F2] border border-[#EDE3E7] space-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#29232A]">{n.title}</span>
                <span className="text-[10px] text-[#756B72]">{n.time}</span>
              </div>
              <p className="text-xs text-[#756B72] leading-relaxed">
                {n.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#D94F83] hover:bg-[#B83B6D] text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
