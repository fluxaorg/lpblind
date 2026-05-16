"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const comparisons = [
  {
    pain: "Processo de blindagem controlado em planilha, caderno ou no WhatsApp",
    fix: "Pipeline visual por etapa, com foto e status em tempo real",
  },
  {
    pain: "Estoque gerido no olhômetro — materiais somem sem rastreio",
    fix: "Cada parafuso vinculado ao veículo e ao custo real da OS",
  },
  {
    pain: "Cliente liga todo dia perguntando o status do carro",
    fix: "Portal do cliente com galeria de fotos e progresso atualizado",
  },
  {
    pain: "Proposta feita no Word, no braço, sem padrão nem agilidade",
    fix: "Proposta e contrato gerados com 2 cliques, prontos para assinar",
  },
  {
    pain: "Você sabe o faturamento, mas não sabe a margem real por veículo",
    fix: "Painel financeiro com margem automática, sem planilha",
  },
  {
    pain: "Ninguém sabe exatamente onde cada carro está na produção",
    fix: "Dashboard executivo com cronograma e previsão de entrega",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-28 px-6 bg-[#030303] border-y border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full mb-6">
            O cenário atual vs O Futuro
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Chega de operar no improviso.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A maioria das blindadoras no Brasil perde dinheiro e clientes por falta de controle. 
            Veja a diferença de ter uma operação profissionalizada.
          </p>
        </motion.div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          
          {/* Mobile VS Badge (visible only on small screens) */}
          <div className="lg:hidden flex justify-center py-4 relative z-20">
             <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white font-black text-xl shadow-2xl">
               VS
             </div>
          </div>

          {/* VS Badge (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 items-center justify-center text-white font-black text-2xl z-20 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            VS
          </div>

          {/* Left Column: Without BlindMaster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#110A0A] to-[#0A0505] border border-red-500/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden"
          >
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-red-900/50" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sem BlindMaster</h3>
                <p className="text-red-400/80 text-sm mt-1">O caos operacional diário</p>
              </div>
            </div>

            <div className="space-y-8">
              {comparisons.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <XCircle className="w-5 h-5 text-red-500/70 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {item.pain}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: With BlindMaster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-full"
          >
            <HoverBorderGradient
              containerClassName="rounded-3xl w-full h-full"
              className="bg-gradient-to-b from-[#1A1005] to-[#0A0702] p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-start"
              duration={1.5}
            >
              {/* Top orange accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-10" />
              
              {/* Logo Highlight Watermark */}
              <div className="absolute -bottom-10 -right-10 lg:-bottom-16 lg:-right-16 opacity-5 pointer-events-none z-0">
                <img src="/favicon-transparent.png" alt="BlindMaster" className="w-64 h-64 lg:w-[300px] lg:h-[300px] object-contain" />
              </div>
              
              <div className="flex items-center gap-0 mb-8 relative z-20 w-full">
                <div className="shrink-0 flex items-center justify-center">
                  <img src="/favicon-transparent.png" alt="BlindMaster" className="w-16 h-16 lg:w-24 lg:h-24 object-contain" />
                </div>
                <div className="flex-1 text-left -ml-1.5 lg:-ml-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Com BlindMaster</h3>
                  <p className="text-orange-400/80 text-sm lg:text-base mt-1">Controle total e previsibilidade</p>
                </div>
              </div>

              <div className="space-y-8 relative z-20 w-full">
                {comparisons.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start w-full text-left">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white font-medium text-base leading-relaxed flex-1">
                      {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </HoverBorderGradient>
          </motion.div>

        </div>

        {/* Bottom hook */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-zinc-500 mt-16 text-base"
        >
          Não deixe sua margem de lucro escorrer pelos dedos.{" "}
          <span className="text-white font-medium">
            Assuma o controle da sua blindadora.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
