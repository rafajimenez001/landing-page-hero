"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ALLOWED_PATHS = ["/", "/contact"];

export function HealthDisclaimerModal() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const accepted = sessionStorage.getItem("health_disclaimer_accepted");
      if (!accepted) {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  const handleYes = () => {
    try {
      sessionStorage.setItem("health_disclaimer_accepted", "yes");
    } catch {}
    setShow(false);
  };

  const handleNo = () => {
    setShow(false);
    const isAllowed = ALLOWED_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );
    if (!isAllowed) {
      router.replace("/");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#18181b] rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header stripe */}
        <div className="h-1.5 bg-[#064194]" />

        <div className="px-8 py-8 flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#064194]/10 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#064194"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
              <path d="m18 15-2-2" />
              <path d="m15 18-2-2" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-foreground leading-snug">
              ¿Eres un profesional de la salud?
            </h2>
            <p className="text-sm font-medium text-default-500">
              Are you a healthcare professional?
            </p>
            <p className="text-xs text-default-400 mt-1 leading-relaxed">
              Este sitio está dirigido a profesionales del área de la salud.
              <br />
              This site is intended for healthcare professionals.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full mt-2">
            <button
              onClick={handleNo}
              className="flex-1 py-2.5 rounded-xl border border-default-200 text-sm font-semibold text-default-600 hover:bg-default-100 transition-colors duration-150"
            >
              No
            </button>
            <button
              onClick={handleYes}
              className="flex-1 py-2.5 rounded-xl bg-[#064194] text-sm font-semibold text-white hover:bg-[#0a56c0] active:scale-[0.98] transition-all duration-150"
            >
              Sí / Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
