"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadCapturePage() {
  const [formData, setFormData] = useState({
    nome: "",
    blindadora: "",
    faturamento: "",
    cargo: "",
    whatsapp: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // FORMATE SUA MENSAGEM AQUI
    const message = `Olá! Gostaria de agendar uma reunião.%0A%0A` +
      `*Dados do Lead:*%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Blindadora:* ${formData.blindadora}%0A` +
      `*Faturamento:* ${formData.faturamento}%0A` +
      `*Cargo:* ${formData.cargo}%0A` +
      `*WhatsApp:* ${formData.whatsapp}`;

    // COLOQUE SEU NÚMERO AQUI (Apenas números, com DDD)
    const SEU_NUMERO = "5547992793347"; 
    
    window.open(`https://wa.me/${SEU_NUMERO}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans selection:bg-red-500/30">
      
      {/* Left Column: Information */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-20 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.1)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Agendar Reunião</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Vamos falar <br />
            sobre a sua <br />
            <span className="text-red-600">blindadora.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Preencha o formulário. Em até 1 hora a gente entra em contato para agendar uma call de 45 minutos — sem compromisso, sem pitch de vendas forçado.
          </p>

          <ul className="space-y-4 pt-4">
            {[
              "Diagnóstico gratuito e sem compromisso",
              "Retorno em até 1 hora",
              "Investimento discutido apenas na call",
              "Só avançamos se fizer sentido para os dois lados"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 text-zinc-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                <span className="text-sm md:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 pt-20 flex items-center gap-4 text-xs text-zinc-600 uppercase tracking-widest font-bold">
          <span>&copy; {new Date().getFullYear()} Blind Master</span>
          <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
          <span>By Fluxa</span>
        </div>
      </div>

      {/* Right Column: Capture Form Card */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 relative bg-black">
        <div className="w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Conta um pouco sobre você</h2>
              <p className="text-zinc-500 text-sm md:text-base font-medium">Leva menos de 2 minutos.</p>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ml-1" htmlFor="nome">SEU NOME</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="block w-full px-5 py-4 border border-white/5 rounded-2xl bg-white/[0.03] text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm"
                    placeholder="Ex: João Silva"
                  />
                </div>

                {/* Blindadora */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ml-1" htmlFor="blindadora">NOME DA BLINDADORA</label>
                  <input
                    id="blindadora"
                    type="text"
                    required
                    value={formData.blindadora}
                    onChange={handleChange}
                    className="block w-full px-5 py-4 border border-white/5 rounded-2xl bg-white/[0.03] text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm"
                    placeholder="Ex: Blindagem Master"
                  />
                </div>

                {/* Faturamento */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ml-1" htmlFor="faturamento">FATURAMENTO MENSAL ESTIMADO</label>
                  <div className="relative">
                    <select
                      id="faturamento"
                      required
                      value={formData.faturamento}
                      onChange={handleChange}
                      className="block w-full px-5 py-4 border border-white/5 rounded-2xl bg-white/[0.03] text-white focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm appearance-none"
                    >
                      <option value="" disabled className="bg-black">Selecione</option>
                      <option value="Até R$ 200k" className="bg-black">Até R$ 200.000</option>
                      <option value="R$ 200k - R$ 500k" className="bg-black">R$ 200.000 - R$ 500.000</option>
                      <option value="R$ 500k - R$ 1M" className="bg-black">R$ 500.000 - R$ 1.000.000</option>
                      <option value="R$ 1M - R$ 3M" className="bg-black">R$ 1.000.000 - R$ 3.000.000</option>
                      <option value="Acima de R$ 3M" className="bg-black">Acima de R$ 3.000.000</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-zinc-600 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Cargo */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ml-1" htmlFor="cargo">SEU CARGO</label>
                  <div className="relative">
                    <select
                      id="cargo"
                      required
                      value={formData.cargo}
                      onChange={handleChange}
                      className="block w-full px-5 py-4 border border-white/5 rounded-2xl bg-white/[0.03] text-white focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm appearance-none"
                    >
                      <option value="" disabled className="bg-black">Selecione</option>
                      <option value="Donos" className="bg-black">Donos</option>
                      <option value="Diretor" className="bg-black">Diretor</option>
                      <option value="Gerente" className="bg-black">Gerente</option>
                      <option value="Outro" className="bg-black">Outro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-zinc-600 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ml-1" htmlFor="whatsapp">WHATSAPP</label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="block w-full px-5 py-4 border border-white/5 rounded-2xl bg-white/[0.03] text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all text-sm"
                  placeholder="(00) 0 0000-0000"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-5 px-4 border border-transparent rounded-2xl shadow-xl text-base font-bold text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-black transition-all group mt-4"
              >
                Vamos falar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-zinc-600 text-center mt-6 uppercase tracking-widest font-bold">
                Sem spam. Seus dados não são compartilhados.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
