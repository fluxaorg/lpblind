"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { ShieldCheck, Zap, Database, Globe } from "lucide-react";

export default function RecursosPage() {
    return (
        <StandardPageLayout
            title="Explore todos os"
            kineticWord="Recursos"
            description="Uma suíte completa de ferramentas desenvolvidas especificamente para o fluxo de trabalho de blindagem automotiva."
            primaryButtonText="Agendar uma reunião"
            primaryButtonAction={() => window.location.href = '/contato'}
        >
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap className="text-orange-500" />, title: "Pipeline Inteligente", desc: "Gestão visual de cada etapa da blindagem, do orçamento à entrega." },
                            { icon: <ShieldCheck className="text-orange-500" />, title: "Controle de Materiais", desc: "Gestão rigorosa de mantas, aços e vidros com rastreabilidade total." },
                            { icon: <Database className="text-orange-500" />, title: "Histórico Completo", desc: "Banco de dados centralizado com fotos e documentos de cada projeto." },
                            { icon: <Globe className="text-orange-500" />, title: "Portal do Cliente", desc: "Transparência total com atualizações em tempo real para o proprietário." },
                            { icon: <ShieldCheck className="text-orange-500" />, title: "Segurança 2FA", desc: "Proteção de dados com autenticação em duas etapas para toda a equipe." },
                            { icon: <Zap className="text-orange-500" />, title: "Relatórios Automáticos", desc: "Métricas de produtividade e lucratividade geradas instantaneamente." },
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-orange-500/50 transition-all group">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
