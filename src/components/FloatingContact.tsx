"use client";

import React, { useState, useEffect } from "react";
import ContactIntentModal, { ContactChannel } from "./ContactIntentModal";

const PHONE_DISPLAY = "+91 93304 90777";
const EMAIL_ADDRESS = "connect@servicedialtm.com";

export default function FloatingContact() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState<ContactChannel>("whatsapp");
  const [activeService, setActiveService] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);

    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{
        channel?: ContactChannel;
        service?: string;
      }>;
      if (customEvent?.detail?.channel) {
        setActiveChannel(customEvent.detail.channel);
      }
      if (customEvent?.detail?.service) {
        setActiveService(customEvent.detail.service);
      }
      setIsModalOpen(true);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("open_contact_modal", handleOpenModal);
      return () => window.removeEventListener("open_contact_modal", handleOpenModal);
    }
  }, []);

  // Avoid any SSR hydration mismatch
  if (!mounted) return null;

  const handleOpenChannel = (ch: ContactChannel) => {
    setActiveChannel(ch);
    setIsModalOpen(true);
  };

  const contactButtons = [
    {
      id: "mail" as ContactChannel,
      label: "Send an Email",
      tooltip: `Email ${EMAIL_ADDRESS}`,
      bgColor: "bg-[#E91E8C] hover:bg-[#c41677]",
      shadowColor: "shadow-pink-500/30 hover:shadow-pink-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: "call" as ContactChannel,
      label: "Call Us Directly",
      tooltip: `Call ${PHONE_DISPLAY}`,
      bgColor: "bg-[#2563EB] hover:bg-[#1d4ed8]",
      shadowColor: "shadow-blue-500/30 hover:shadow-blue-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "whatsapp" as ContactChannel,
      label: "Chat on WhatsApp",
      tooltip: "Chat on WhatsApp",
      bgColor: "bg-[#25D366] hover:bg-[#20ba59]",
      shadowColor: "shadow-green-500/35 hover:shadow-green-500/55",
      hasPulseBadge: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <aside
        aria-label="Direct Quick Contact Options"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none pb-[max(0.5rem,env(safe-area-inset-bottom))] pr-[max(0.25rem,env(safe-area-inset-right))]"
      >
        {contactButtons.map((btn) => (
          <div key={btn.id} className="relative flex items-center group pointer-events-auto">
            {/* Desktop Hover Tooltip */}
            <div
              role="tooltip"
              className="hidden md:flex absolute right-full mr-3.5 items-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap"
            >
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-900/95 backdrop-blur-md shadow-xl border border-white/10 tracking-tight">
                {btn.tooltip}
              </span>
              <div className="w-2 h-2 bg-slate-900/95 rotate-45 -ml-1 border-r border-t border-white/10" />
            </div>

            {/* Floating Circular Action Button */}
            <button
              type="button"
              onClick={() => handleOpenChannel(btn.id)}
              aria-label={btn.label}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer ${btn.bgColor} ${btn.shadowColor}`}
            >
              {btn.icon}

              {/* Active Status Pulse Badge for WhatsApp */}
              {btn.hasPulseBadge && (
                <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                </span>
              )}
            </button>
          </div>
        ))}
      </aside>

      {/* High-Intent Data Capture Modal */}
      <ContactIntentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialChannel={activeChannel}
        initialService={activeService}
      />
    </>
  );
}
