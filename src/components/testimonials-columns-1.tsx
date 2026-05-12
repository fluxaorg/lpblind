"use client";
import React from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { User } from "lucide-react";

export const testimonials = [
  {
    text: "O Blindadora CRM mudou a forma como enxergamos nosso negócio. A visibilidade da produção aumentou radicalmente.",
    name: "Carlos Mendes",
    role: "CEO, Stack Armor",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    text: "Em 30 dias usando o sistema, batemos o recorde de produtividade. A diferença para os processos anteriores é absurda.",
    name: "Juliana Ribeiro",
    role: "Gerente de Produção, ShieldAuto",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    text: "A plataforma mais completa do mercado. A interface é linda, o KanBan visual é sensacional, e o suporte é incrível.",
    name: "Rafael Costa",
    role: "Diretor Comercial, Elite Blindados",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    text: "Sair das planilhas para o Blindadora CRM foi a melhor decisão. Transparência total para nós e para o nosso cliente final.",
    name: "Amanda Torres",
    role: "Proprietária, Concept Shield",
    image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    text: "Tivemos um ganho imenso de organização no galpão. Hoje sei exatamente em que etapa cada veículo está.",
    name: "Diego Brandão",
    role: "CEO, Armor Prime",
    image: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  },
];

export const TestimonialsColumns = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Factor to multiply the base speed by when scrolling
  // Returns a value between 0 and 5 based on scroll speed
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [1, 5], {
    clamp: false,
  });

  return (
    <section id="testimonials" className={`py-32 bg-black ${className || ""}`}>
      <div className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Quem usa,<br/> recomenda.
          </h2>
          <p className="text-zinc-400 text-lg">
            A tecnologia mais avançada já desenvolvida para blindadoras, aprovada por líderes do setor.
          </p>
        </div>

        {/* Right Side: Columns with scrolling */}
        <div className="md:w-1/2 h-[600px] overflow-hidden relative flex gap-6"
             style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
        >
          {/* Column 1 */}
          <TestimonialColumn 
            items={testimonials.slice(0, 3)} 
            velocityFactor={velocityFactor} 
            baseDuration={25}
          />

          {/* Column 2 */}
          <TestimonialColumn 
            items={testimonials.slice(2, 5)} 
            velocityFactor={velocityFactor} 
            baseDuration={30}
            className="mt-12"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialColumn = ({ 
  items, 
  velocityFactor, 
  baseDuration,
  className 
}: { 
  items: typeof testimonials, 
  velocityFactor: any,
  baseDuration: number,
  className?: string
}) => {
  const [columnHeight, setColumnHeight] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const y = useMotionValue(0);

  React.useEffect(() => {
    if (containerRef.current) {
      setColumnHeight(containerRef.current.scrollHeight / 2);
    }
  }, [items]);

  useAnimationFrame((t, delta) => {
    if (columnHeight === 0) return;

    // Normal speed based on duration
    const pixelsPerSecond = columnHeight / baseDuration;
    const baseMove = (pixelsPerSecond * delta) / 1000;
    
    // Reactivity to scroll velocity
    const factor = velocityFactor.get();
    const moveBy = baseMove * factor;

    let nextY = y.get() - moveBy;
    if (nextY <= -columnHeight) {
      nextY = 0;
    }
    y.set(nextY);
  });

  return (
    <div className="w-full h-full overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ y }}
        className={`flex flex-col gap-6 w-full ${className || ""}`}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {items.map(({ text, name, role }, i) => (
              <div className="p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-lg w-full shrink-0" key={i}>
                <div className="text-zinc-300 text-sm leading-relaxed mb-6">{text}</div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-zinc-500" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-white tracking-tight leading-5">{name}</div>
                    <div className="text-xs text-zinc-500 tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};