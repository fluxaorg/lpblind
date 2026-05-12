"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, LayoutDashboard, FileText, Package, Activity, Target, Shield, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import { FAQ } from "@/components/faq";
import { FlipWords } from "@/components/ui/flip-words";
import { TestimonialsColumns } from "@/components/testimonials-columns-1";
import { IntegrationsSection } from "@/components/stack-feature-section";
import { KineticText } from "@/components/ui/kinetic-text";
import { BentoFeaturesSection } from "@/components/bento-features";

// --- ANIMATION VARIANTS ---
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "propostas" | "estoque">("pipeline");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Parallax ref
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans overflow-x-hidden">
      
      {/* BACKGROUND BEAMS / GLOW (Apple Style with Parallax) */}
      <motion.div style={{ y: y1 }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/5 blur-[120px]"></div>
      </motion.div>

      {/* NAVBAR */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? "bg-black/70 backdrop-blur-xl border-white/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img src="/icon.png" alt="Blind Master Icon" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/como-funciona" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Como funciona</Link>
            <Link href="#recursos" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Recursos</Link>
            <Link href="#depoimentos" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Depoimentos</Link>
            <Link href="/sobre" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sobre Nós</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Entrar</Link>
            <button className="text-sm font-medium text-black bg-white hover:bg-zinc-200 px-5 py-2 rounded-full transition-all flex items-center gap-2">
              Agendar uma reunião
            </button>
          </div>

          <button className="md:hidden text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center text-center relative">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <img src="/icon.png" alt="Blind Master Icon" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
              O futuro da blindagem <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                sob o seu controle.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Crie fluxos operacionais, qualifique processos e aumente sua eficiência. 
              Gestão inteligente sem código, em minutos.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Agendar uma reunião <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-colors flex items-center justify-center">
                Falar com consultor
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* INTERACTIVE MOCKUP SECTION */}
        <section className="relative w-full max-w-6xl mx-auto px-4 md:px-8 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] border border-white/10 bg-black/50 backdrop-blur-2xl p-4 md:p-6 shadow-[0_0_100px_rgba(249,115,22,0.15)] ring-1 ring-white/5"
          >
            {/* Mockup Topbar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ED6A5E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
                <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
              </div>
              
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/5 backdrop-blur-md">
                <button 
                  onClick={() => setActiveTab("pipeline")}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 ${activeTab === 'pipeline' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Pipeline Visual
                </button>
                <button 
                  onClick={() => setActiveTab("propostas")}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 ${activeTab === 'propostas' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  <FileText className="w-4 h-4" />
                  Propostas
                </button>
                <button 
                  onClick={() => setActiveTab("estoque")}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 ${activeTab === 'estoque' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  <Package className="w-4 h-4" />
                  Estoque
                </button>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Mockup Content */}
            <div className="min-h-[450px] relative">
              {/* PIPELINE TAB */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'pipeline' ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-4 absolute -z-10'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                  {/* Column 1 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-zinc-300">Entrada Rápida</h3>
                      <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full">3</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { car: "Porsche 911 Carrera", client: "João Silva", status: "Aguardando Vistoria" },
                        { car: "BMW X6 M", client: "Roberto Costa", status: "Documentação" },
                      ].map((item, i) => (
                        <div key={i} className="bg-[#111] p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                          <h4 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">{item.car}</h4>
                          <p className="text-xs text-zinc-500 mt-1">{item.client}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                            <span className="text-xs text-zinc-400">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-zinc-300">Em Desmontagem</h3>
                      <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded-full">2</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { car: "Audi RSQ8", client: "Marcelo T.", status: "Remoção de forros" },
                      ].map((item, i) => (
                        <div key={i} className="bg-[#111] p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                          <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{item.car}</h4>
                          <p className="text-xs text-zinc-500 mt-1">{item.client}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs text-zinc-400">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-zinc-300">Aplicação de Manta</h3>
                      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">4</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#111] p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                        <h4 className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">Range Rover Vogue</h4>
                        <p className="text-xs text-zinc-500 mt-1">Construtora Apex</p>
                        <div className="mt-3 flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-zinc-400">Progresso</span>
                            <span className="text-xs font-medium text-white">65%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROPOSTAS TAB */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'propostas' ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-4 absolute -z-10'}`}>
                <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                  <div className="p-4 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-medium text-white">Propostas Recentes</h3>
                    <button className="text-xs bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-md font-medium transition-colors">
                      Nova Proposta
                    </button>
                  </div>
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
              </div>

              {/* ESTOQUE TAB */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeTab === 'estoque' ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-4 absolute -z-10'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { item: "Manta Aramida 9 Plies", qty: "45 rolos", status: "Estável" },
                    { item: "Vidros AGP B33", qty: "12 kits", status: "Baixo" },
                    { item: "Aço Balístico 3mm", qty: "80 chapas", status: "Estável" },
                    { item: "Cola PU 55", qty: "150 tubos", status: "Alto" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                      <Package className="w-5 h-5 text-orange-500 mb-3" />
                      <h4 className="text-sm font-semibold text-white">{s.item}</h4>
                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <p className="text-xs text-zinc-500 mb-1">Quantidade</p>
                          <p className="text-xl font-bold text-white">{s.qty}</p>
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${s.status === 'Baixo' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                          {s.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* FLIP WORDS SECTION */}
        <section className="py-24 px-6 bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col justify-center min-h-[30vh]">
            <div className="text-left max-w-4xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Gestão de blindagem <br />
                <span className="text-white">mais</span>
                <FlipWords 
                  words={["rápida.", "inteligente.", "transparente.", "lucrativa."]} 
                  className="text-orange-500" 
                />
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                O Blindadora CRM redefine o controle da sua fábrica. 
                Deixe as pranchetas no passado e entregue uma experiência premium do início ao fim.
              </p>
            </div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="py-24 border-y border-white/5 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">+47%</span>
                <span className="text-sm text-zinc-500 font-medium">Conversão de propostas</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">3x</span>
                <span className="text-sm text-zinc-500 font-medium">Mais produtividade na gestão</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">0</span>
                <span className="text-sm text-zinc-500 font-medium">Perda de informações no fluxo</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">100%</span>
                <span className="text-sm text-zinc-500 font-medium">Transparência pro cliente final</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES (Apple-like Bento) */}
        <section id="recursos" className="py-32 px-6 bg-[#050505] border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Tudo que você precisa. <br className="hidden md:block" />
                <span className="text-white">Nada que não precisa.</span>
              </h2>
            </div>

            <BentoFeaturesSection />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div id="depoimentos">
          <TestimonialsColumns />
        </div>

        {/* INTEGRATIONS */}
        <IntegrationsSection />

        {/* FAQ SECTION */}
        <FAQ />

        {/* CTA BOTTOM */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-black">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-full bg-orange-600/10 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight text-white mb-6 flex flex-col items-center justify-center gap-2">
              <span>Pronto para evoluir a sua</span>
              <KineticText as="span" text="blindadora?" className="font-bold text-orange-500" />
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Junte-se às oficinas mais eficientes do país. Comece a gerenciar seu fluxo com tecnologia de ponta hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:scale-105 transition-transform">
                Agendar uma reunião agora
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-base hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Tirar dúvidas no WhatsApp <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center mb-6">
                <Link href="/">
                  <img src="/logo.png" alt="Blind Master Logo" className="h-10 w-auto" />
                </Link>
              </div>
              <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                O software definitivo para gestão de blindadoras automotivas. Controle fluxo, materiais e clientes num só lugar.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Produto</h4>
              <ul className="space-y-3">
                <li><Link href="/recursos" className="text-sm text-zinc-500 hover:text-white transition-colors">Recursos</Link></li>
                <li><Link href="/precos" className="text-sm text-zinc-500 hover:text-white transition-colors">Preços</Link></li>
                <li><Link href="/clientes" className="text-sm text-zinc-500 hover:text-white transition-colors">Clientes</Link></li>
                <li><Link href="/atualizacoes" className="text-sm text-zinc-500 hover:text-white transition-colors">Atualizações</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li><Link href="/sobre" className="text-sm text-zinc-500 hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="/contato" className="text-sm text-zinc-500 hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/parceiros" className="text-sm text-zinc-500 hover:text-white transition-colors">Parceiros</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacidade" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacidade</Link></li>
                <li><Link href="/termos" className="text-sm text-zinc-500 hover:text-white transition-colors">Termos</Link></li>
                <li><Link href="/seguranca" className="text-sm text-zinc-500 hover:text-white transition-colors">Segurança</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">
              © 2026 Blindadora CRM. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-600 font-medium">By Group WKS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
