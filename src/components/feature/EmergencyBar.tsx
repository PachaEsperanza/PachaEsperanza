import { useState } from "react";
import { emergencyBanner } from "@/mocks/homeData";

export default function EmergencyBar() {
  const [visible, setVisible] = useState(true);
  const alerts = emergencyBanner.alerts;

  // Duplicate alerts for seamless infinite loop
  const allAlerts = [...alerts, ...alerts];

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[100] overflow-hidden">
      {/* Shine sweep overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 shine-sweep" />

      <div className="bg-gradient-to-r from-[#9a1a1a] via-[#b91c1c] to-[#9a1a1a] animate-banner-flash text-white relative py-2 sm:py-2.5">
        {/* Pulsating border glow */}
        <div className="absolute inset-0 border-y-2 border-red-400/60 animate-pulse" />

        <div className="relative z-20 px-3 md:px-6 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
          {/* Fila superior en móvil: ícono + título + cerrar. En desktop: todo en una fila */}
          <div className="flex items-center justify-between sm:justify-start sm:flex-shrink-0 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full animate-ping-slow shadow-red-500/50 shadow-lg">
                <i className="ri-alarm-warning-line text-lg text-white animate-siren" />
              </span>

              <span className="font-extrabold text-white flex-shrink-0 whitespace-nowrap animate-pulse hidden sm:inline drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                style={{ textShadow: '0 0 10px rgba(251,191,36,0.8), 0 0 20px rgba(251,191,36,0.5)' }}
              >
                {emergencyBanner.title}
              </span>
              <span className="font-extrabold text-white flex-shrink-0 whitespace-nowrap animate-pulse sm:hidden drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                style={{ textShadow: '0 0 10px rgba(251,191,36,0.8), 0 0 20px rgba(251,191,36,0.5)' }}
              >
                {emergencyBanner.mobileTitle}
              </span>
            </div>

            {/* Botón cerrar: visible junto al título solo en móvil */}
            <button
              onClick={() => setVisible(false)}
              className="sm:hidden text-white/70 hover:text-white transition-colors cursor-pointer w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 flex-shrink-0"
              aria-label="Cerrar"
              type="button"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          {/* Infinite scrolling marquee tape: fila propia y a todo el ancho en móvil */}
          <div className="flex-1 min-w-0 overflow-hidden relative h-6">
            <div className="flex whitespace-nowrap animate-marquee">
              {allAlerts.map((alert, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-xs md:text-sm font-bold mx-8"
                >
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 flex-shrink-0" />
                  {alert}
                </span>
              ))}
            </div>
          </div>

          {/* Botón DONA AHORA: fila propia en móvil, junto al resto en desktop */}
          <div className="flex items-center justify-center sm:justify-start gap-3 flex-shrink-0">
            <a
              href="#donaciones"
              className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:via-yellow-200 hover:to-amber-300 font-extrabold transition-all cursor-pointer whitespace-nowrap text-xs md:text-sm px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)] hover:shadow-[0_0_25px_rgba(245,158,11,0.9)] hover:scale-105 animate-pulse-fast"
              style={{ color: '#5C1422' }}
            >
              <span className="shine-sweep absolute inset-0 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-1" style={{ color: '#5C1422' }}>
                <i className="ri-arrow-right-line" />
                DONA AHORA
              </span>
            </a>
            {/* Botón cerrar: visible junto al CTA solo en desktop */}
            <button
              onClick={() => setVisible(false)}
              className="hidden sm:flex text-white/70 hover:text-white transition-colors cursor-pointer w-6 h-6 items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Cerrar"
              type="button"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}