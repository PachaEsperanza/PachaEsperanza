import { useState, useEffect } from 'react';

const areas = [
  {
    icon: 'ri-book-open-line',
    tag: 'Niños',
    title: 'Educación Infantil',
    desc: 'Garantizamos que los niños de comunidades rurales accedan a educación de calidad, con materiales, tutores y espacios seguros para aprender.',
    beneficiarios: '1,800+',
    benefLabel: 'Niños beneficiados',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20children%20in%20a%20rural%20school%20classroom%2C%20smiling%20and%20learning%2C%20colorful%20notebooks%2C%20Andean%20village%20setting%2C%20warm%20natural%20light%2C%20hopeful%20atmosphere&width=900&height=600&seq=area-educacion-01&orientation=landscape',
  },
  {
    icon: 'ri-heart-pulse-line',
    tag: 'Madres',
    title: 'Salud Materna y Familiar',
    desc: 'Acompañamos a madres gestantes y familias en zonas sin acceso a centros de salud, con brigadas médicas, nutrición y atención preventiva.',
    beneficiarios: '620+',
    benefLabel: 'Madres atendidas',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20mother%20with%20baby%20in%20rural%20Andean%20community%2C%20healthcare%20worker%20visiting%2C%20warm%20and%20caring%20atmosphere%2C%20natural%20light%2C%20documentary%20photography&width=900&height=600&seq=area-salud-01&orientation=landscape',
  },
  {
    icon: 'ri-women-line',
    tag: 'Mujeres',
    title: 'Empoderamiento Femenino',
    desc: 'Apoyamos a mujeres campesinas a desarrollar habilidades, emprender negocios propios y ejercer sus derechos con autonomía y confianza.',
    beneficiarios: '940+',
    benefLabel: 'Mujeres empoderadas',
    img: 'https://readdy.ai/api/search-image?query=Group%20of%20Peruvian%20women%20in%20traditional%20clothing%20working%20together%20in%20a%20community%20workshop%2C%20empowered%20and%20smiling%2C%20Andean%20setting%2C%20warm%20light&width=900&height=600&seq=area-mujer-01&orientation=landscape',
  },
  {
    icon: 'ri-home-heart-line',
    tag: 'Familias',
    title: 'Vivienda Digna',
    desc: 'Mejoramos las condiciones de habitabilidad de familias en situación de vulnerabilidad, con acceso a agua, saneamiento y espacios seguros.',
    beneficiarios: '380+',
    benefLabel: 'Familias con hogar digno',
    img: 'https://readdy.ai/api/search-image?query=Improved%20rural%20home%20in%20Peruvian%20Andes%2C%20family%20outside%20their%20house%2C%20clean%20and%20dignified%20living%20conditions%2C%20mountains%20background%2C%20warm%20sunlight&width=900&height=600&seq=area-vivienda-01&orientation=landscape',
  },
  {
    icon: 'ri-seedling-line',
    tag: 'Comunidades',
    title: 'Seguridad Alimentaria',
    desc: 'Promovemos huertos familiares, crianza de animales menores y técnicas de conservación de alimentos para garantizar nutrición en el hogar.',
    beneficiarios: '1,100+',
    benefLabel: 'Familias con nutrición segura',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20family%20tending%20their%20vegetable%20garden%20in%20the%20Andes%2C%20fresh%20produce%2C%20children%20helping%2C%20rural%20community%2C%20natural%20and%20vibrant%20colors&width=900&height=600&seq=area-alimento-01&orientation=landscape',
  },
  {
    icon: 'ri-palette-line',
    tag: 'Cultura',
    title: 'Identidad Cultural',
    desc: 'Preservamos las tradiciones, lenguas originarias y saberes ancestrales de las comunidades, porque la cultura es la raíz de toda transformación.',
    beneficiarios: '60+',
    benefLabel: 'Comunidades preservadas',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20indigenous%20cultural%20celebration%2C%20traditional%20dance%20and%20music%2C%20colorful%20costumes%2C%20community%20gathering%20in%20Andean%20village%2C%20joyful%20atmosphere&width=900&height=600&seq=area-cultura-01&orientation=landscape',
  },
];

export default function AreasImpacto() {
  const [active, setActive] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  const total = areas.length;

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  // Distancia más corta (con wrap-around) entre una tarjeta y la activa
  const getDiff = (idx: number) => {
    let diff = idx - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="impacto" className="relative py-24 overflow-hidden bg-stone-900">
      {/* Background image del área activa */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={areas[active].img}
          alt={areas[active].title}
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Áreas de trabajo</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            El desarrollo humano no tiene un solo camino
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Trabajamos en seis áreas clave porque las necesidades de las comunidades son diversas, complejas y profundamente humanas.
          </p>
        </div>

        {/* Carrusel fan */}
        <div style={{ position: 'relative', minHeight: 420 }}>
          {areas.map((area, areaIdx) => {
            const diff = getDiff(areaIdx);
            const absDiff = Math.abs(diff);
            const isCenter = diff === 0;

            // Visibilidad responsive calculada en JS (no depende de purge de Tailwind)
            let show = true;
            if (absDiff === 1 && screenWidth < 640) show = false;
            if (absDiff === 2 && screenWidth < 1024) show = false;
            if (absDiff >= 3) show = false;

            const cardWidth = isCenter ? Math.min(448, screenWidth - 48) : 224;
            const imgHeight = isCenter ? 224 : 160;
            const scale = isCenter ? 1 : absDiff === 1 ? 0.9 : 0.75;
            const opacity = !show ? 0 : isCenter ? 1 : absDiff === 1 ? 0.7 : 0.4;
            const zIndex = 20 - absDiff;

            return (
              <div
                key={areaIdx}
                onClick={() => setActive(areaIdx)}
                className="rounded-2xl overflow-hidden border cursor-pointer"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: cardWidth,
                  borderColor: isCenter ? 'rgba(251,191,36,0.4)' : 'rgba(255,255,255,0.1)',
                  background: isCenter ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transform: `translateX(calc(-50% + ${diff * 230}px)) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: show ? 'auto' : 'none',
                  transition: 'transform 500ms ease, opacity 500ms ease, width 500ms ease',
                }}
              >
                {/* Image */}
                <div style={{ overflow: 'hidden', height: imgHeight }}>
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: isCenter ? 24 : 16 }}>
                  {/* Tag + icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg">
                      <i className={`${area.icon} text-amber-400 text-sm`}></i>
                    </div>
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">{area.tag}</span>
                    {isCenter && (
                      <span className="ml-auto text-white/40 text-xs">{active + 1} / {areas.length}</span>
                    )}
                  </div>

                  <p
                    className="font-bold text-white mb-2"
                    style={{ fontSize: isCenter ? '1.25rem' : '0.875rem' }}
                  >
                    {area.title}
                  </p>

                  {isCenter && (
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{area.desc}</p>
                  )}

                  {/* Stat */}
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-amber-400 text-sm"></i>
                    <span
                      className="text-amber-300 font-bold"
                      style={{ fontSize: isCenter ? '1.5rem' : '1rem' }}
                    >
                      {area.beneficiarios}
                    </span>
                    {isCenter && <span className="text-white/50 text-xs">{area.benefLabel}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {areas.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === active ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
