"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  FileText,
  Target,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    id: "crm",
    icon: LayoutDashboard,
    color: "orange",
    badge: "CRM de Produção",
    title: "Controle total de cada veículo — do primeiro parafuso à entrega",
    problem:
      "Hoje, cada etapa da blindagem vive em WhatsApp, caderno ou planilha. Nenhum gestor sabe, de cabeça, em que fase está o Range Rover do cliente. Resultado: atrasos, retrabalho e cliente insatisfeito.",
    benefits: [
      "Pipeline visual por etapa: Entrada → Vistoria → Desmontagem → Aramida → Montagem → Entrega",
      "Galeria de fotos por fase — cliente e gestor veem o progresso em tempo real",
      "Documentos e laudos (SICOVAB, contrato) anexados à OS de cada veículo",
    ],
  },
  {
    id: "estoque",
    icon: Package,
    color: "blue",
    badge: "Estoque Cirúrgico",
    title: "Saiba exatamente onde vai cada parafuso da sua fábrica",
    problem:
      "Materiais somem sem rastreio. Fim de mês chega e ninguém sabe por que o custo de manta aramida está tão alto. O gestor compra mais do que precisa e ainda assim falta na hora certa.",
    benefits: [
      "Inventário em tempo real com alertas de estoque mínimo automáticos",
      "Rastreabilidade completa: material vinculado ao veículo e à OS específica",
      "Relatório de consumo, perdas e custo real por veículo — sem planilha",
    ],
  },
  {
    id: "financeiro",
    icon: TrendingUp,
    color: "green",
    badge: "Painel Financeiro",
    title: "Você sabe o faturamento. Mas sabe a sua margem real?",
    problem:
      "Faturamento bruto todo gestor conhece. Mas custo de mão de obra + material + overhead por veículo? A maioria não tem essa resposta. E sem ela, impossível escalar com lucro.",
    benefits: [
      "Margem de lucro automática por veículo — calculada em tempo real",
      "Comparativo mensal: receita, custo de materiais e lucro líquido",
      "Previsão de caixa e controle de contas a receber e a pagar",
    ],
  },
  {
    id: "propostas",
    icon: FileText,
    color: "purple",
    badge: "Proposta & Contrato",
    title: "Proposta profissional em 2 cliques. Contrato fechado sem papel.",
    problem:
      "Proposta no Word, enviada por e-mail, impressa para assinar à mão. Cada etapa demora horas e parece amadora para um cliente que acabou de comprar um Porsche.",
    benefits: [
      "Template profissional com a logo da sua blindadora em menos de 2 minutos",
      "Preço, especificações técnicas e prazo calculados automaticamente",
      "Assinatura digital integrada — o cliente assina pelo celular, na hora",
    ],
  },
  {
    id: "pipeline",
    icon: Target,
    color: "yellow",
    badge: "Pipeline Comercial",
    title: "Controle sua carteira como um time de vendas de elite",
    problem:
      "Leads entram pelo Instagram, WhatsApp e indicação. Sem um funil organizado, você não sabe quem está pronto para fechar, quem precisa de follow-up e quem já esfriou.",
    benefits: [
      "Kanban de leads: Prospecção → Qualificação → Proposta → Fechamento",
      "Follow-up automático com lembretes e histórico de interações",
      "Ranking de conversão por vendedor e canal — saiba de onde vêm seus melhores clientes",
    ],
  },
  {
    id: "ia",
    icon: Sparkles,
    color: "orange",
    badge: "IA do Gestor",
    title: "Um analista de negócios disponível 24h, dentro do sistema",
    problem:
      "Gestores de blindadora não têm tempo para analisar dados e tirar insights. As decisões são tomadas na intuição — e intuição custa dinheiro quando erra.",
    benefits: [
      "Faça qualquer pergunta: \"Qual meu custo médio por veículo esse mês?\"",
      "Receba insights e sugestões estratégicas baseadas nos dados da sua operação",
      "Ajuda para redigir propostas, contratos e comunicações com clientes",
    ],
  },
];

const colorMap: Record<string, { border: string; icon: string; badge: string; check: string; glow: string }> = {
  orange: {
    border: "border-orange-500/30",
    icon: "text-orange-500",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    check: "text-orange-500",
    glow: "bg-orange-500/5",
  },
  blue: {
    border: "border-blue-500/30",
    icon: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    check: "text-blue-400",
    glow: "bg-blue-500/5",
  },
  green: {
    border: "border-green-500/30",
    icon: "text-green-400",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
    check: "text-green-400",
    glow: "bg-green-500/5",
  },
  purple: {
    border: "border-purple-500/30",
    icon: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    check: "text-purple-400",
    glow: "bg-purple-500/5",
  },
  yellow: {
    border: "border-yellow-500/30",
    icon: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    check: "text-yellow-400",
    glow: "bg-yellow-500/5",
  },
};

function ModuleCard({ mod, index }: { mod: (typeof modules)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const colors = colorMap[mod.color];
  const Icon = mod.icon;
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Text side */}
      <div className={isReversed ? "lg:col-start-2" : ""}>
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border px-3 py-1.5 rounded-full mb-6 ${colors.badge}`}
        >
          <Icon className={`w-3.5 h-3.5 ${colors.icon}`} />
          {mod.badge}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-5">
          {mod.title}
        </h3>

        <p className="text-zinc-500 text-base leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
          {mod.problem}
        </p>

        <ul className="space-y-4">
          {mod.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.check}`} />
              <span className="text-sm text-zinc-300 leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual side */}
      <div className={isReversed ? "lg:col-start-1 lg:row-start-1" : ""}>
        <div
          className={`relative rounded-2xl border ${colors.border} bg-[#0A0A0A] p-8 overflow-hidden min-h-[280px] flex flex-col justify-between`}
        >
          {/* Background glow */}
          <div className={`absolute inset-0 ${colors.glow} opacity-60`} />

          {/* Module icon big */}
          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6`}>
              <Icon className={`w-7 h-7 ${colors.icon}`} />
            </div>
            <p className="text-xs font-mono text-zinc-600 mb-2 uppercase tracking-wider">
              {mod.badge}
            </p>
            <p className="text-lg font-semibold text-white leading-snug max-w-xs">
              {mod.title.split("—")[0].trim()}
            </p>
          </div>

          {/* Decorative mini-stats */}
          <div className="relative z-10 flex items-center gap-4 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full flex-1 ${
                  i === 0
                    ? colors.icon.replace("text-", "bg-").replace("-500", "-500/80").replace("-400", "-400/80")
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeatureModules() {
  return (
    <section id="modulos" className="py-32 px-6 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-500/80 border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 rounded-full mb-6">
            6 Módulos. 1 Sistema.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Cada detalhe da sua operação,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              sob controle
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O BlindMaster foi construído módulo a módulo para resolver as dores
            reais das blindadoras — sem achismo, sem improviso.
          </p>
        </motion.div>

        {/* Module list */}
        <div className="space-y-28">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
