"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR").format(Math.round(value));
}

export function ROICalculator() {
  const [vehicles, setVehicles] = useState(6);
  const [ticket, setTicket] = useState(90000);
  const [hoursLost, setHoursLost] = useState(15);

  // Calculations
  const HOURLY_COST = 85; // R$/h — custo médio operacional de equipe em blindadora
  const conversionGain = vehicles * ticket * 0.47 * 12; // +47% conversion / year
  const hoursRecovered = hoursLost * 4 * 12; // total horas/ano
  const hoursSavings = hoursRecovered * HOURLY_COST; // valor monetário das horas recuperadas
  // Economia de estoque: base (5% do ticket por veículo) + redução por horas (cada hora perdida = R$120/mês em desperdício por desorganização)
  const stockSavings = (vehicles * ticket * 0.05 + hoursLost * 120) * 12;
  const totalGain = conversionGain + hoursSavings + stockSavings;

  const sliders = [
    {
      label: "Veículos blindados por mês",
      value: vehicles,
      min: 1,
      max: 30,
      step: 1,
      format: (v: number) => `${v} veículos`,
      onChange: setVehicles,
    },
    {
      label: "Ticket médio por blindagem",
      value: ticket,
      min: 30000,
      max: 300000,
      step: 5000,
      format: (v: number) => formatCurrency(v),
      onChange: setTicket,
    },
    {
      label: "Horas perdidas com burocracia / semana",
      value: hoursLost,
      min: 2,
      max: 40,
      step: 1,
      format: (v: number) => `${v}h/semana`,
      onChange: setHoursLost,
    },
  ];

  const results = [
    {
      icon: DollarSign,
      label: "Receita adicional com +47% em conversão",
      monthly: conversionGain / 12,
      yearly: conversionGain,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      icon: Clock,
      label: "Ganho em produtividade operacional",
      monthly: hoursSavings / 12,
      yearly: hoursSavings,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      extra: `${formatNumber(hoursRecovered / 12)}h recuperadas/mês`,
    },
    {
      icon: TrendingUp,
      label: "Economia com controle de estoque",
      monthly: stockSavings / 12,
      yearly: stockSavings,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  const totalMonthly = totalGain / 12;
  const SYSTEM_COST = 5000; // R$/mês
  const roi = Math.round((totalMonthly / SYSTEM_COST) * 10) / 10;

  return (
    <section className="py-28 px-6 bg-[#030303] border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-500/80 border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 rounded-full mb-6">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora de ROI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Quanto você está{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              deixando na mesa?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Ajuste os dados da sua operação e veja o impacto real que o
            BlindMaster pode ter no seu resultado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0A0A0A] border border-white/8 rounded-2xl p-10 space-y-10"
          >
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              Dados da sua operação
            </h3>
            {sliders.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-zinc-300 font-medium">{s.label}</label>
                  <span className="text-sm font-mono font-bold text-white bg-white/5 px-3 py-1 rounded-lg">
                    {s.format(s.value)}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={s.value}
                    onChange={(e) => s.onChange(Number(e.target.value))}
                    className="w-full h-1.5 appearance-none bg-white/10 rounded-full cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:h-5
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-orange-500
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(249,115,22,0.6)]
                      [&::-webkit-slider-thumb]:transition-transform
                      [&::-webkit-slider-thumb]:hover:scale-110"
                    style={{
                      background: `linear-gradient(to right, rgb(249 115 22) 0%, rgb(249 115 22) ${
                        ((s.value - s.min) / (s.max - s.min)) * 100
                      }%, rgba(255,255,255,0.1) ${
                        ((s.value - s.min) / (s.max - s.min)) * 100
                      }%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-6 mt-2 border-t border-white/5">
              <p className="text-zinc-400 text-base leading-relaxed pl-4 border-l-2 border-orange-500/50">
                <span className="text-white font-medium">Faça a conta:</span> Seu maior custo financeiro hoje não é investir em organização, é o <strong className="text-orange-400 font-medium">dinheiro vivo que você perde</strong> todos os meses tentando gerenciar o caos com planilhas e WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 flex flex-col"
          >
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  className={`bg-[#0A0A0A] border ${r.border} rounded-2xl p-6 flex items-center gap-5 flex-1`}
                >
                  <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${r.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-zinc-500 mb-1">{r.label}</p>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <p className={`text-3xl font-bold ${r.color} font-mono leading-none`}>
                        {formatCurrency(r.monthly)}
                        <span className="text-sm font-normal text-zinc-500 ml-1">/mês</span>
                      </p>
                      <span className="text-sm text-zinc-600 font-mono">
                        {formatCurrency(r.yearly)}/ano
                      </span>
                    </div>
                    {"extra" in r && r.extra && (
                      <p className="text-xs text-zinc-600 mt-1">{r.extra}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Total block — price anchoring */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-400 font-medium uppercase tracking-wider mb-2">
                    Retorno total por mês
                  </p>
                  <motion.p
                    key={totalMonthly}
                    initial={{ scale: 0.95, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="text-4xl md:text-5xl font-bold text-white font-mono"
                  >
                    {formatCurrency(totalMonthly)}
                    <span className="text-lg font-normal text-zinc-400 ml-1">/mês</span>
                  </motion.p>
                  <p className="text-sm text-zinc-500 mt-2">
                    {formatCurrency(totalGain)}/ano com o BlindMaster
                  </p>
                </div>
                <motion.div
                  key={roi}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center bg-orange-500/20 rounded-2xl px-6 py-4 flex-shrink-0"
                >
                  <span className="text-3xl font-black text-orange-400 font-mono">{roi}x</span>
                  <span className="text-xs text-orange-400/70 font-medium uppercase tracking-wider mt-1">ROI</span>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-zinc-600 mt-8"
        >
          * Estimativas baseadas em médias de clientes ativos. Resultados individuais podem variar.
        </motion.p>
      </div>
    </section>
  );
}

