"use client";

import {
  FaWindows, FaApple, FaAndroid, FaGoogle, FaChrome, FaMobileAlt, FaLaptop, FaTabletAlt, FaEdge, FaSafari, FaCloud
} from "react-icons/fa";

const iconConfigs = [
  { Icon: FaWindows, color: "#00a4ef" },
  { Icon: FaApple, color: "#ffffff" },
  { Icon: FaAndroid, color: "#3DDC84" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaChrome, color: "#4285F4" },
  { Icon: FaMobileAlt, color: "#ffffff" },
  { Icon: FaLaptop, color: "#ffffff" },
  { Icon: FaTabletAlt, color: "#ffffff" },
  { Icon: FaEdge, color: "#0078D7" },
  { Icon: FaSafari, color: "#ffffff" }, 
  { Icon: FaCloud, color: "#ffffff" }
];

export function IntegrationsSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full py-24 min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left side: Heading and Text */}
        <div className="md:w-1/2 z-10 mb-12 md:mb-0 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Acessível de <br /> qualquer lugar.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
            Nuvem pura. Você e sua equipe podem gerenciar o <strong className="text-white">Blindadora CRM</strong> através de qualquer dispositivo e plataforma. Seja no desktop do galpão de produção, no tablet ou direto do celular. Sem instalações, sem fricção.
          </p>
        </div>

        {/* Right side: Orbit animation */}
        <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center md:justify-end overflow-hidden mask-gradient">
          <div className="relative w-[40rem] h-[40rem] md:translate-x-[20%] flex items-center justify-center pointer-events-none">
            {/* Center Circle */}
            <div className="w-20 h-20 rounded-full bg-[#0A0A0A] border border-white/10 shadow-[0_0_40px_rgba(255,100,0,0.1)] flex items-center justify-center z-20">
              <img src="/icon.png" alt="Blindadora CRM" className="w-10 h-10 object-contain opacity-90" />
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${20 + orbitIdx * 10}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-[#111] border border-white/10 rounded-full p-2.5 shadow-lg flex items-center justify-center"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                            animation: `counter-spin ${20 + orbitIdx * 10}s linear infinite`,
                          }}
                        >
                          <cfg.Icon className="w-5 h-5" style={{ color: cfg.color }} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        .mask-gradient {
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}} />
    </section>
  );
}
