import { heroData } from "@/mocks/homeData";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Comunidades campesinas del Perú"
          className="w-full h-full object-cover object-top"
          src={`${import.meta.env.BASE_URL}images/heros.png`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">{heroData.badge}</span>
          </div>
          <h1 className="mb-4 leading-none text-left">
            <span style={{
              display: 'block',
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: 'clamp(2.2rem,6vw,4.5rem)',
              fontWeight: 400,
              letterSpacing: '0.3em',
              lineHeight: 1,
              color: '#FFD700',
              textAlign: 'left',
            }}>PΛCHΛ</span>
            <span style={{
              display: 'block',
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: 'clamp(0.7rem,1.6vw,1.3rem)',
              fontWeight: 400,
              letterSpacing: '0.5em',
              color: '#FFD700',
              textAlign: 'left',
              textTransform: 'uppercase',
              marginTop: '0.15em',
              lineHeight: 1,
            }}>ESPERANZA</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 font-['Playfair_Display']">
            {heroData.title}
            <br />
            <span className="text-amber-400 italic">{heroData.highlight}</span>
            <br />
            {heroData.subtitle}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#donaciones"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center"
            >
              {heroData.ctaPrimary}
            </a>
            <a
              href={heroData.ctaSecondaryHref}
              className="border-2 border-white/60 hover:border-white text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center backdrop-blur-sm"
            >
              {heroData.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white min-w-[260px]">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4">Impacto 2024</p>
          <div className="space-y-4">
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-amber-500/20 rounded-lg">
                  <i className={`${stat.icon} text-amber-400 text-lg`} />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <i className="ri-arrow-down-line text-2xl" />
      </div>
    </section>
  );
}