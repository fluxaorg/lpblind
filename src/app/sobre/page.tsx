"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { Target, Users, Shield, Award, Zap, Database, Globe, ShieldCheck } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export default function SobrePage() {
    const stats = [
        { icon: <Target className="w-8 h-8 text-orange-500" />, title: "Precisão", desc: "Processos medidos em cada detalhe para evitar desperdício e erro operacional." },
        { icon: <Users className="w-8 h-8 text-orange-500" />, title: "Transparência", desc: "Informação fluida entre oficina, escritório e cliente final em tempo real." },
        { icon: <Shield className="w-8 h-8 text-orange-500" />, title: "Segurança", desc: "A proteção dos dados da sua empresa e clientes é nossa prioridade absoluta." },
        { icon: <Award className="w-8 h-8 text-orange-500" />, title: "Excelência", desc: "Buscamos o padrão ouro em cada linha de código e suporte técnico." },
        { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "Velocidade", desc: "Redução drástica no tempo de resposta e entrega de orçamentos." },
        { icon: <Database className="w-8 h-8 text-orange-500" />, title: "Dados", desc: "Inteligência de mercado baseada em métricas reais da sua blindadora." },
        { icon: <Globe className="w-8 h-8 text-orange-500" />, title: "Conectividade", desc: "Sua oficina conectada ao ecossistema digital de ponta a ponta." },
        { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: "Confiança", desc: "A tranquilidade de um sistema que nunca para e sempre escala." },
    ];

    return (
        <StandardPageLayout
            title="Nossa missão e"
            kineticWord="Visão"
            description="Redefinindo os padrões de gestão da indústria automotiva através de tecnologia de ponta e processos inteligentes."
            primaryButtonText="Conhecer Soluções"
            primaryButtonAction={() => window.location.href = '/recursos'}
        >
            <section className="py-24 bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* ... (collab branding remains same) */}
                    <div className="flex items-center justify-center gap-14 mb-32 group">
                        <img src="/favicon-transparent.png" alt="BlindMaster" className="h-28 w-auto grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-[0_0_40px_rgba(251,146,60,0.1)] group-hover:drop-shadow-[0_0_60px_rgba(251,146,60,0.3)]" />
                        <div className="h-20 w-[1px] bg-white/10 rotate-12"></div>
                        <img src="/fluxa-logo.png" alt="Fluxa" className="h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group/title">
                                Uma história de <span className="font-black group-hover:text-orange-500 transition-all duration-500">inovação</span> focada em resultados.
                            </h3>
                            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                                O BlindMaster nasceu da necessidade real de um setor que operava com processos manuais e fragmentados. Entendemos que a blindagem não é apenas um serviço, é uma promessa de segurança e confiança.
                            </p>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Hoje, somos a espinha dorsal tecnológica das maiores blindadoras do país, entregando controle total desde o recebimento do veículo até a entrega das chaves.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                                    <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Anos de experiência</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-1">500k+</h4>
                                    <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Projetos gerenciados</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-[#0A0A0A] group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src="/logo.png" alt="BlindMaster HQ" className="w-48 h-auto opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Marquee Cards Section */}
                    <div className="relative mb-32">
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                        
                        <Marquee pauseOnHover className="[--duration:40s] py-4">
                            {stats.map((item, i) => (
                                <div key={i} className="w-[350px] p-8 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-orange-500/50 transition-all duration-500 group/card flex flex-col gap-4">
                                    <div className="mb-2 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover/card:bg-orange-500/10 group-hover/card:border-orange-500/30 transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-normal text-white group-hover/card:font-black transition-all duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Exclusive Fluxa Section - Inverted Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 group">
                        {/* Image/Logo on the Left */}
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-[#0A0A0A] flex items-center justify-center p-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img src="/fluxa-logo.png" alt="Fluxa Tech" className="h-32 md:h-48 w-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Text on the Right */}
                        <div className="order-first lg:order-none">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tighter">
                                Tecnologia Fluxa: <br/> 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">A engenharia por trás da precisão.</span>
                            </h3>
                            <div className="space-y-6 mb-10">
                                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                    A Fluxa é uma software house de elite, especializada em transformar operações complexas em interfaces intuitivas. Com um histórico comprovado de sistemas enterprise, trazemos segurança e escalabilidade para o BlindMaster.
                                </p>
                                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                    Cada linha de código é fruto de uma engenharia obsessiva, garantindo que sua blindadora utilize o que há de mais moderno no desenvolvimento global.
                                </p>
                            </div>
                            <div className="flex items-center gap-16 border-t border-white/10 pt-8">
                                <div className="group/item">
                                    <img src="/fluxa-foods-icon.png" alt="Fluxa Foods Original" className="h-12 w-auto object-contain group-hover/item:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="group/item flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-[0.9rem] bg-black flex items-center justify-center overflow-hidden border border-white/10">
                                        <img src="/fluxa-logo.png" alt="Fluxa Sales Icon" className="h-5 w-auto" />
                                    </div>
                                    <div className="flex items-baseline gap-2 ml-1">
                                        <span className="text-white font-normal text-3xl tracking-tight">Fluxa</span>
                                        <span className="text-white font-black text-3xl tracking-tighter group-hover:text-orange-500 transition-colors duration-500">Sales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
