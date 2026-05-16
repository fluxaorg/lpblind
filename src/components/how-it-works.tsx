"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Database, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Cadastre sua blindadora",
    description:
      "Configure seu perfil, equipe e fluxo de etapas em minutos. O sistema já vem com o processo padrão de blindagem automotiva pré-configurado.",
    duration: "15 min",
  },
  {
    number: "02",
    icon: Database,
    title: "Importe seus dados",
    description:
      "Importe clientes, veículos em andamento e estoque atual. Nossa equipe migra tudo para você sem perder nenhuma informação.",
    duration: "Dia 1",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Treine sua equipe",
    description:
      "Onboarding guiado com nossa equipe. Interface intuitiva — a maioria dos colaboradores opera com fluidez após 1 hora de uso.",
    duration: "1 dia",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Opere no controle total",
    description:
      "Pipeline rodando, estoque rastreado, propostas automáticas, cliente acompanhando tudo. Sua blindadora no nível das melhores do Brasil.",
    duration: "Dia 2",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500/80 border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 rounded-full mb-6">
            Implementação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Do zero ao controle total{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              em menos de 48 horas
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Nossa equipe cuida da implantação. Você só precisa começar a usar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col"
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-black text-[10px] font-black flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    {/* Duration badge */}
                    <span className="text-xs font-mono text-orange-400/70 border border-orange-500/20 bg-orange-500/5 px-2.5 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 p-8 rounded-2xl bg-[#0A0A0A] border border-orange-500/20 text-center"
        >
          <p className="text-zinc-300 text-base">
            Nossa equipe de sucesso do cliente acompanha sua implantação{" "}
            <span className="text-white font-semibold">do início ao fim</span>. Se precisar de
            suporte, estamos a um clique.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
