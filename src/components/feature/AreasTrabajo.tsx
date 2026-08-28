import { useState, useEffect } from "react";
import { areasTrabajo } from "@/mocks/homeData";

export default function AreasTrabajo() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  const total = areasTrabajo.areas.length;

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));

  // Distancia más corta (con wrap-around) entre una tarjeta y la activa
  const getDiff = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="impacto" className="relative py-10 md:py-14 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 transition-all duration-700">
        <img
          alt="Educación Infantil"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Peruvian%20children%20in%20a%20rural%20school%20classroom%2C%20smiling%20and%20learning%2C%20colorful%20notebooks%2C%20Andean%20village%20setting%2C%20warm%20natural%20light%2C%20hopeful%20atmosphere&width=900&height=600&seq=area-educacion-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            {areasTrabajo.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-['Times_New_Roman',_serif]">{areasTrabajo.title}</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">{areasTrabajo.subtitle}</p>
        </div>

        <div style={{ position: "relative", minHeight: screenWidth < 640 ? 510 : screenWidth < 1024 ? 480 : 480 }}>
          {areasTrabajo.areas.map((area, idx) => {
            const diff = getDiff(idx);
            const absDiff = Math.abs(diff);
            const isActive = diff === 0;

            // Visibilidad responsive calculada en JS
            let show = true;
            if (absDiff === 1 && screenWidth < 640) show = false;
            if (absDiff === 2 && screenWidth < 1024) show = false;
            if (absDiff >= 3) show = false;

            const cardWidth = isActive ? Math.min(448, screenWidth - 32) : 224;
            const imgHeight = isActive ? 224 : 160;
            const scale = isActive ? 1 : absDiff === 1 ? 0.9 : 0.75;
            const opacity = !show ? 0 : isActive ? 1 : absDiff === 1 ? 0.7 : 0.4;
            const zIndex = 20 - absDiff;

            return (
              <button
                key={area.id}
                onClick={() => setActiveIndex(idx)}
                className="rounded-2xl overflow-hidden border cursor-pointer text-left"
                type="button"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: cardWidth,
                  borderColor: isActive ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.1)",
                  background: isActive ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  transform: `translateX(calc(-50% + ${diff * 230}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: show ? "auto" : "none",
                  transition: "transform 500ms ease, opacity 500ms ease, width 500ms ease",
                }}
              >
                <div style={{ overflow: "hidden", height: imgHeight }}>
                  <img
                    alt={area.title}
                    className="w-full h-full object-cover object-top"
                    src={area.image}
                  />
                </div>
                <div style={{ padding: isActive ? 24 : 16 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg">
                      <i className={`${area.icon} text-amber-400 text-sm`} />
                    </div>
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      {area.category}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-white/40 text-xs">
                        {activeIndex + 1} / {total}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-bold text-white mb-2"
                    style={{ fontSize: isActive ? "1.25rem" : "0.875rem" }}
                  >
                    {area.title}
                  </p>
                  {isActive && area.description && (
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{area.description}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-amber-400 text-sm" />
                    <span
                      className="text-amber-300 font-bold"
                      style={{ fontSize: isActive ? "1.5rem" : "1rem" }}
                    >
                      {area.count}
                    </span>
                    {isActive && area.countLabel && (
                      <span className="text-white/50 text-xs">{area.countLabel}</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-4 md:mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            type="button"
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <div className="flex gap-2">
            {areasTrabajo.areas.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-full transition-all cursor-pointer ${idx === activeIndex ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
                type="button"
                aria-label={`Ir a área ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            type="button"
            aria-label="Siguiente"
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}