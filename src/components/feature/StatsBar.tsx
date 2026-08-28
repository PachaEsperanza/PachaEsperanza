import { statsBar } from "@/mocks/homeData";

export default function StatsBar() {
  // Duplicamos los stats para que el desplazamiento sea infinito y sin cortes
  const allStats = [...statsBar, ...statsBar];

  return (
    <section className="py-3 md:py-4 overflow-hidden" style={{ backgroundColor: '#68AD22' }}>
      <div className="flex whitespace-nowrap animate-marquee-stats">
        {allStats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-8 flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0">
              <i className={`${stat.icon} text-amber-400 text-xl`} />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">{stat.value}</p>
              <p className="text-xs text-white/80 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}