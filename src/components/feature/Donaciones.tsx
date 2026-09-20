import { useState } from "react";
import { donacionesData } from "@/mocks/homeData";

export default function Donaciones() {
  const [activeTab, setActiveTab] = useState<"persona" | "empresa">("persona");
  const [selectedAmount, setSelectedAmount] = useState(30);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = donacionesData.montos;
  const impact = donacionesData.impactos as Record<number, string>;

  const currentImpact =
    impact[customAmount ? parseInt(customAmount) || 0 : selectedAmount] ||
    impact[selectedAmount] ||
    "Tu donación ayuda a las comunidades";

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <section id="donaciones" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Fondo donaciones"
          className="w-full h-full object-cover object-top"
          src="/PachaEsperanza/images/fondos.jpg"
        />
      </div>
      <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top"
                poster="/PachaEsperanza/images/donacion.png"
              >
                <source
                  src="https://videos.pexels.com/video-files/3209219/3209219-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl md:text-2xl font-bold leading-tight mb-2">
                Tu donación no compra una cifra.
              </p>
              <p className="text-amber-400 text-lg md:text-xl font-bold italic">Compra un futuro.</p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 md:p-8">
            <div className="flex bg-stone-100 rounded-full p-1 mb-6 md:mb-8 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("persona")}
                className={`px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === "persona" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
              >
                Persona
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("empresa")}
                className={`px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === "empresa" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
              >
                Empresa
              </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">{donacionesData.title}</h2>
            <p className="text-stone-500 mb-6 md:mb-8 text-sm md:text-base">{donacionesData.subtitle}</p>

            {/* Reemplazo temporal de montos por imagen */}
            <div className="rounded-2xl overflow-hidden h-[260px] md:h-[300px] mb-4 relative group">
              <img
                alt="Niños de comunidades rurales del Perú recibiendo apoyo"
                className="w-full h-full object-cover object-top"
                src="/PachaEsperanza/images/fondooo.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-lg md:text-xl font-bold leading-tight mb-1">Tu donación transforma vidas</p>
                <p className="text-emerald-200 text-sm">Cada aporte llega directo a las comunidades de Piura, Huánuco y Puno.</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="w-full block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 md:py-4 rounded-xl text-center text-base transition-colors cursor-pointer whitespace-nowrap"
            >
              Quiero donar
            </a>
            <p className="text-xs text-stone-400 text-center mt-3">
              <i className="ri-shield-check-line mr-1" />
              Donación segura · Recibo de donación disponible · 100% va a las comunidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}