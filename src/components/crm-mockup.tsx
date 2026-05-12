"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  MenuSquare, 
  FileText, 
  Briefcase, 
  DollarSign, 
  Wrench, 
  Package,
  Bell,
  LifeBuoy
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SimpleTextReveal } from "@/components/ui/simple-text-reveal";
import { MorphingTextControlled } from "@/components/ui/morphing-text-controlled";
import { TechTextCloud } from "@/components/tech-text-cloud";
import { ShieldCheck } from "lucide-react";
import { KineticText } from "@/components/ui/kinetic-text";

type TabId = 'dashboard' | 'pipelines' | 'propostas' | 'projetos' | 'estoque' | 'financeiro' | 'posvendas' | 'suporte';

export function CrmMockup() {
  const techItems = [
    "Supabase DB",
    "Vercel Edge",
    "Next.js 15",
    "2FA Auth",
    "2-Step Verification",
    "Security First"
  ];

  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const autoSwitchRef = useRef<NodeJS.Timeout | null>(null);

  const tabs: TabId[] = [
    'dashboard', 'pipelines', 'propostas', 'projetos', 
    'estoque', 'financeiro', 'posvendas', 'suporte'
  ];

  const startAutoSwitch = () => {
    stopAutoSwitch();
    autoSwitchRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000);
  };

  const stopAutoSwitch = () => {
    if (autoSwitchRef.current) {
      clearInterval(autoSwitchRef.current);
    }
  };

  useEffect(() => {
    startAutoSwitch();
    return () => stopAutoSwitch();
  }, []);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    startAutoSwitch(); // Reset timer on manual click
  };

  const getTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return {
          title: "Dashboards de Gestão",
          subtitle: "Seu escritório de blindagem no piloto automático",
          description: "Um resumo inteligente com os principais indicadores de vendas, veículos no pátio e alertas que precisam da sua atenção imediata hoje."
        };
      case 'pipelines':
        return {
          title: "Pipeline de Vendas",
          subtitle: "Gestão de leads e conversão",
          description: "Acompanhe seus leads desde o primeiro contato até o fechamento. Visualize o funil de vendas, identifique oportunidades 'quentes' e não perca nenhum negócio."
        };
      case 'propostas':
        return {
          title: "Gestão de Propostas",
          subtitle: "Aprovações mais rápidas e com rastreabilidade",
          description: "Crie orçamentos elegantes em minutos. Acompanhe se o cliente visualizou, negocie e receba o aceite digital integrado diretamente ao seu CRM."
        };
      case 'projetos':
        return {
          title: "Projetos de Blindagem",
          subtitle: "Status de produção e controle de margem",
          description: "Acompanhe o status real de cada veículo e a rentabilidade de cada serviço. Saiba exatamente qual sua margem de lucro em tempo real enquanto o carro avança na linha de produção."
        };
      case 'estoque':
        return {
          title: "Controle de Estoque",
          subtitle: "Peças, vidros e materiais em tempo real",
          description: "Gerencie o estoque de mantas, vidros e componentes essenciais. Evite paradas na produção por falta de materiais com alertas inteligentes de reposição."
        };
      case 'financeiro':
        return {
          title: "Gestão Financeira",
          subtitle: "Controle total de fluxo de caixa e resultados",
          description: "Visualize suas receitas, despesas e resultado líquido de forma simplificada. Tenha clareza sobre a saúde financeira da sua blindadora em poucos cliques."
        };
      case 'posvendas':
        return {
          title: "Pós-Venda e Garantia",
          subtitle: "Retenção e agendamentos de manutenção",
          description: "Programe revisões periódicas de vidros e documentação. Surpreenda o cliente avisando com antecedência que está na hora de uma manutenção preventiva."
        };
      case 'suporte':
        return {
          title: "Central de Suporte",
          subtitle: "Cuidado e atenção total ao nosso cliente",
          description: "Acesse nossa equipe técnica, manuais e recursos rápidos. Estamos aqui para garantir que sua experiência com o BlindMaster seja impecável."
        };
      default:
        return {
          title: "BlindMaster CRM",
          subtitle: "Tecnologia de ponta para blindadoras",
          description: "Explore os módulos do sistema para ver como podemos transformar a operação da sua blindadora com tecnologia de elite."
        };
    }
  };

  const currentTabInfo = getTabContent();

  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center max-w-[1600px] mx-auto py-12">
      <style dangerouslySetInnerHTML={{__html: `
        .mockup-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .mockup-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .mockup-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .mockup-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}} />
      
      {/* Mockup Container with wrapper applied */}
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 p-2 md:p-4 shadow-[0_0_100px_rgba(249,115,22,0.15)] ring-1 ring-white/5 bg-black/50 backdrop-blur-2xl order-2 xl:order-1">
        <div className="w-full h-[650px] flex rounded-2xl overflow-hidden bg-black/60 backdrop-blur-3xl text-zinc-300 border border-white/10 shadow-[0_0_100px_rgba(249,115,22,0.15)] relative font-sans">
          
          {/* Sidebar - Covers top to bottom */}
          <motion.aside 
            initial={{ width: 88 }}
            animate={{ width: sidebarExpanded ? 260 : 88 }}
            onHoverStart={() => setSidebarExpanded(true)}
            onHoverEnd={() => setSidebarExpanded(false)}
            className="bg-[#050505] h-full flex flex-col justify-between py-6 z-20 absolute md:relative border-r border-white/10 shadow-2xl"
          >
            <div>
              <div className={cn("flex items-center h-20 mb-6 overflow-hidden whitespace-nowrap transition-all", sidebarExpanded ? "px-6 justify-start" : "justify-center px-0")}>
                <AnimatePresence mode="wait">
                    {sidebarExpanded ? (
                      <motion.img 
                        key="logo"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        transition={{ duration: 0.2 }}
                        src="/logo.png" 
                        alt="BlindMaster" 
                        className="h-10 w-auto object-contain" 
                      />
                  ) : (
                    <motion.img 
                      key="icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      src="/icon.png" 
                      alt="BlindMaster" 
                      className="h-9 w-9 object-contain" 
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1 px-4">
                <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboards" active={activeTab === 'dashboard'} onClick={() => handleTabChange('dashboard')} expanded={sidebarExpanded} />
                <SidebarItem icon={<MenuSquare size={18} />} text="Pipeline" active={activeTab === 'pipelines'} onClick={() => handleTabChange('pipelines')} expanded={sidebarExpanded} />
                <SidebarItem icon={<FileText size={18} />} text="Propostas" active={activeTab === 'propostas'} onClick={() => handleTabChange('propostas')} expanded={sidebarExpanded} />
                <SidebarItem icon={<Briefcase size={18} />} text="Projetos" active={activeTab === 'projetos'} onClick={() => handleTabChange('projetos')} expanded={sidebarExpanded} />
                <SidebarItem icon={<Package size={18} />} text="Estoque" active={activeTab === 'estoque'} onClick={() => handleTabChange('estoque')} expanded={sidebarExpanded} />
                <SidebarItem icon={<DollarSign size={18} />} text="Financeiro" active={activeTab === 'financeiro'} onClick={() => handleTabChange('financeiro')} expanded={sidebarExpanded} />
                <SidebarItem icon={<Wrench size={18} />} text="Pós-Venda" active={activeTab === 'posvendas'} onClick={() => handleTabChange('posvendas')} expanded={sidebarExpanded} />
                <SidebarItem icon={<LifeBuoy size={18} />} text="Suporte" active={activeTab === 'suporte'} onClick={() => handleTabChange('suporte')} expanded={sidebarExpanded} />
              </div>
            </div>

          <div className="px-4 pb-6">
            {/* Minimal footer space to keep sidebar balanced */}
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden ml-[80px] md:ml-0 bg-transparent">
          {/* Header */}
          <header className="h-20 flex items-center justify-between px-8 bg-transparent border-b border-white/5 shrink-0">
            <div className="text-xl font-bold text-white tracking-tight">
              <KineticText text={currentTabInfo.title} className="text-white" />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white shadow-sm border border-white/5 hover:bg-white/20 transition-colors">
                <span className="text-orange-500">✨</span> Pergunte
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shadow-sm border border-white/5 hover:bg-white/10 transition-colors">
                <Bell size={18} />
              </button>
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                U
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto mockup-scrollbar p-8 relative">
            
            <AnimatePresence mode="wait">
              {activeTab === 'pipelines' && (
                <motion.div 
                  key="pipelines"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex gap-4 h-full overflow-x-auto pb-4 mockup-scrollbar pr-2 min-w-full">
                    {[
                      { title: "Inbound", count: 8, color: "bg-blue-500", items: [{ name: "João Silva", car: "Taycan S" }, { name: "Maria Oliveira", car: "G63 AMG" }] },
                      { title: "Prospecção", count: 5, color: "bg-orange-500", items: [{ name: "Carlos Eduardo", car: "X5 M" }] },
                      { title: "Orçado", count: 12, color: "bg-yellow-500", items: [{ name: "Roberto Costa", car: "Defender" }, { name: "Ana P.", car: "GLS 600" }] },
                      { title: "Fechado", count: 4, color: "bg-green-500", items: [{ name: "Fabio M.", car: "Macan Turbo" }] },
                      { title: "Perdido", count: 2, color: "bg-red-500", items: [{ name: "Marcos T.", car: "RS6 Avant" }] },
                    ].map((col, i) => (
                      <div key={i} className="min-w-[200px] flex-1 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                          <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full", col.color)}></div>
                            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{col.title}</h3>
                          </div>
                          <span className="text-[10px] font-bold text-zinc-600">{col.count}</span>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          {col.items.map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-all cursor-pointer group shadow-lg">
                              <h4 className="text-sm font-bold text-white group-hover:text-orange-500 transition-colors">{item.name}</h4>
                              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tight">{item.car}</p>
                              <div className="mt-3 flex items-center justify-between">
                                <div className="flex -space-x-1">
                                  <div className="w-4 h-4 rounded-full bg-zinc-800 border border-white/10"></div>
                                </div>
                                <span className="text-[9px] text-zinc-600 font-bold tracking-tighter">HÁ 2H</span>
                              </div>
                            </div>
                          ))}
                          <button className="w-full py-2 border border-dashed border-white/5 rounded-xl text-[10px] font-bold text-zinc-600 hover:text-zinc-400 hover:border-white/10 transition-all">
                            + NOVO LEAD
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'propostas' && (
                <motion.div 
                  key="propostas"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-xl border border-white/5 overflow-hidden"
                >
                  <div className="p-4 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-medium text-white">Propostas Recentes</h3>
                    <button className="text-xs bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-md font-medium transition-colors">
                      Nova Proposta
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-zinc-500 bg-[#111] border-b border-white/5">
                        <tr>
                          <th className="px-6 py-3 font-medium">Cliente</th>
                          <th className="px-6 py-3 font-medium">Veículo</th>
                          <th className="px-6 py-3 font-medium">Valor</th>
                          <th className="px-6 py-3 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { client: "Roberto Costa", car: "BMW X6 M", val: "R$ 115.000", status: "Aprovada", color: "text-green-400 bg-green-400/10" },
                          { client: "Marcelo T.", car: "Audi RSQ8", val: "R$ 128.000", status: "Em Análise", color: "text-yellow-400 bg-yellow-400/10" },
                          { client: "João Silva", car: "Porsche 911", val: "R$ 95.000", status: "Enviada", color: "text-blue-400 bg-blue-400/10" },
                        ].map((p, i) => (
                          <tr key={i} className="border-b border-white/5 bg-transparent hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">{p.client}</td>
                            <td className="px-6 py-4 text-zinc-400">{p.car}</td>
                            <td className="px-6 py-4 text-zinc-300 font-mono">{p.val}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${p.color}`}>
                                {p.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'financeiro' && (
                <motion.div 
                  key="financeiro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 h-full flex flex-col"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: "Receita Total", val: "R$ 540k", sub: "+12% este mês", color: "text-green-400" },
                      { label: "Despesas Totais", val: "R$ 310k", sub: "-5% vs último mês", color: "text-red-400" },
                      { label: "Resultado Líquido", val: "R$ 230k", sub: "Margem de 42.5%", color: "text-orange-500" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <h4 className={cn("text-2xl font-bold tracking-tight", stat.color)}>{stat.val}</h4>
                        <p className="text-[10px] font-medium text-zinc-600 mt-1">{stat.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fluxo de Caixa (Anual)</h3>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-md">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-[9px] font-bold text-green-500 uppercase">Receita</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 rounded-md">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-[9px] font-bold text-red-500 uppercase">Despesas</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                      {[40, 65, 45, 90, 55, 70, 85, 60, 75, 50, 65, 80].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full flex flex-col gap-0.5">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              className="w-full bg-green-500/40 rounded-t-sm"
                            />
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${h * 0.6}%` }}
                              className="w-full bg-red-500/40 rounded-b-sm"
                            />
                          </div>
                          <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">
                            {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'][i]}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'estoque' && (
                <motion.div 
                  key="estoque"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                    <h3 className="text-lg font-medium text-white mb-4">Itens com Baixo Estoque</h3>
                    <div className="space-y-4">
                      {[
                        { item: "Manta 3mm Premium", stock: "12m²", min: "50m²", status: "Crítico" },
                        { item: "Vidro Porta Dianteira G63", stock: "2 un", min: "4 un", status: "Repor" },
                        { item: "Resina Especial de Cura", stock: "5L", min: "10L", status: "Aviso" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-[#111] rounded-lg border border-white/5">
                          <div>
                            <p className="text-sm font-medium text-white">{item.item}</p>
                            <p className="text-xs text-zinc-500">Mínimo: {item.min}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-orange-500">{item.stock}</p>
                            <span className="text-[10px] uppercase font-bold text-zinc-600">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-4">
                      <Package size={32} />
                    </div>
                    <h4 className="text-white font-medium mb-1">Inventário Consolidado</h4>
                    <p className="text-xs text-zinc-500">Última atualização completa há 2 horas.</p>
                    <button className="mt-6 text-xs border border-white/10 hover:bg-white/5 text-white px-4 py-2 rounded-lg transition-colors">
                      Ver Relatório Completo
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'suporte' && (
                <motion.div 
                  key="suporte"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: <LifeBuoy size={20} />, label: "WhatsApp Direto", desc: "Fale com nossa equipe técnica instantaneamente para suporte rápido.", action: "CHAMAR NO WHATSAPP", color: "text-green-500" },
                      { icon: <LifeBuoy size={20} />, label: "Suporte por E-mail", desc: "Para questões menos urgentes ou envio de documentos e relatórios.", action: "ENVIAR E-MAIL", color: "text-blue-500" },
                      { icon: <LifeBuoy size={20} />, label: "Acesso Remoto", desc: "Se solicitado por um técnico, baixe a ferramenta de acesso remoto.", action: "BAIXAR ANYDESK", color: "text-red-500" },
                    ].map((card, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all flex flex-col h-full">
                        <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4", card.color)}>
                          {card.icon}
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{card.label}</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed mb-6 flex-1">{card.desc}</p>
                        <button className={cn("text-[10px] font-bold uppercase tracking-widest text-left", card.color)}>
                          {card.action} →
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Recursos Rápidos</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {["Manuais de Uso", "Dúvidas Frequentes", "Status do Sistema", "Segurança de Dados"].map((item, i) => (
                          <div key={i} className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-white/10 transition-all cursor-pointer group">
                            <span className="text-xs text-zinc-400 font-medium group-hover:text-white transition-colors">{item}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white mb-2">Atendimento Telefônico</h3>
                        <p className="text-xs text-zinc-500 leading-relaxed">Precisa falar agora? Nossa central está pronta para atender sua ligação.</p>
                      </div>
                      
                      <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        <span>(11) 99999-9999</span>
                      </button>

                      <div className="flex items-center gap-2 justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">SUPORTE ONLINE AGORA</span>
                      </div>
                      
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/10 blur-3xl" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'projetos' && (
                <ProjectsTabContent />
              )}

              {activeTab !== 'pipelines' && activeTab !== 'propostas' && activeTab !== 'estoque' && activeTab !== 'projetos' && activeTab !== 'financeiro' && activeTab !== 'suporte' && (
                <motion.div 
                  key="other"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full flex items-center justify-center"
                >
                  <div className="text-center max-w-md">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-zinc-500">
                      <LayoutDashboard size={32} />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">{currentTabInfo.title}</h3>
                    <p className="text-zinc-500 text-sm">Selecione uma métrica ou gráfico para analisar o desempenho de sua blindadora através dessa visualização detalhada.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </main>
        </div>
      </div>
      </div>

      {/* Dynamic Text Beside Mockup - Separated professional section */}
      <div className="relative w-full flex flex-col items-start justify-center text-left order-1 xl:order-2 px-4 xl:px-0">
        <div className="w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Recurso Exclusivo
          </div>
          
          <div className="h-16 md:h-24 lg:h-32 mb-6 text-left">
            <MorphingTextControlled 
              text={currentTabInfo.title}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight m-0 p-0 text-left justify-start"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-medium mb-6">
                {currentTabInfo.subtitle}
              </h3>
              
              <div className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light mt-4">
                <SimpleTextReveal key={activeTab}>
                  {currentTabInfo.description}
                </SimpleTextReveal>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Text-Only Tech Identification */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 w-full pt-8 border-t border-white/5"
          >
            <div className="flex items-center gap-4 mb-2">
               <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Arquitetura de Segurança</span>
            </div>
            <TechTextCloud items={techItems} className="opacity-40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active, expanded, onClick }: { icon: React.ReactNode, text: string, active?: boolean, expanded: boolean, onClick?: () => void }) {
  return (
    <button onClick={onClick} className={cn(
      "w-full flex items-center h-10 rounded-xl transition-all group overflow-hidden whitespace-nowrap",
      expanded ? "justify-start px-3" : "justify-center",
      active ? "bg-white/10 text-white shadow-sm border border-white/5" : "text-zinc-500 hover:text-white hover:bg-white/5"
    )}>
      <div className={cn("shrink-0 transition-colors", active ? "text-orange-500" : "")}>{icon}</div>
      <AnimatePresence>
        {expanded && (
          <motion.span 
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 12 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
            className="text-sm font-medium tracking-tight text-left overflow-hidden"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function ProjectsTabContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    { 
      car: "Porsche Macan", 
      stage: "Manta Balística", 
      progress: 65, 
      margin: "42%",
      profitVal: "R$ 58.800,00",
      materials: [
        { name: "Manta de Aramida (Camadas)", qty: "18m²" },
        { name: "Parafusos Inox 304", qty: "50 un" },
        { name: "Resina Especial de Cura", qty: "2.5L" }
      ]
    },
    { 
      car: "BMW X6 M", 
      stage: "Instalação de Vidros", 
      progress: 85, 
      margin: "38%", 
      profitVal: "R$ 45.600,00",
      materials: [
        { name: "Kit de Vidros AGP iB33", qty: "1 jogo" },
        { name: "Placas de Titânio (Portas)", qty: "2 un" },
        { name: "Silicone Estrutural", qty: "4 tubos" }
      ]
    },
    { 
      car: "Mercedes G63 AMG", 
      stage: "Desmontagem", 
      progress: 20, 
      margin: "45%", 
      profitVal: "R$ 72.000,00",
      materials: [
        { name: "Etiquetas de Rastreabilidade", qty: "12 un" },
        { name: "Protetores de Acabamento", qty: "1 kit" }
      ]
    },
  ];

  return (
    <motion.div 
      key="projetos"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-zinc-100">Projetos em Andamento</h3>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Rentabilidade Alta</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className={cn(
              "bg-white/5 border border-white/5 rounded-2xl transition-all group relative overflow-hidden cursor-pointer",
              expandedIndex === i ? "border-white/20 bg-white/[0.07]" : "hover:border-white/10"
            )}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
          >
            <div className="p-5 flex flex-col gap-4">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Margem de Lucro</p>
                  <p className="text-2xl font-bold text-green-400 tracking-tight">{proj.margin}</p>
                  <p className="text-xs font-bold text-green-500/50 mt-0.5">{(proj as any).profitVal}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-base font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">{proj.car}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-zinc-400 font-medium">{proj.stage}</span>
                    <span className="text-zinc-800">•</span>
                    <span className="text-xs text-zinc-500">{proj.progress}% concluído</span>
                  </div>
                </div>

                <div className="w-full max-w-md">
                  <div className="w-full bg-white/5 rounded-full h-1.2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${proj.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/5 bg-black/20"
                >
                  <div className="p-5 pt-4 space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={14} className="text-zinc-500" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Materiais em Uso (Estoque)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {proj.materials.map((mat, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl">
                          <span className="text-xs text-zinc-300 font-medium">{mat.name}</span>
                          <span className="text-xs text-orange-500 font-bold">{mat.qty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Subtle background glow for margin */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/5 blur-3xl pointer-events-none" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
