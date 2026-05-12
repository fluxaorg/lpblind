"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function SegurancaPage() {
    return (
        <StandardPageLayout
            title="Sua infraestrutura de"
            kineticWord="Segurança"
            description="Protocolos de nível bancário para garantir a integridade dos dados da sua blindadora e de seus clientes."
            primaryButtonText="Ver Política Completa"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-12">
                        {[
                            { icon: <Lock className="w-8 h-8 text-orange-500" />, title: "Criptografia de Ponta a Ponta", desc: "Todos os dados transmitidos entre seu navegador e nossos servidores são protegidos por criptografia SSL/TLS de 256 bits." },
                            { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: "Autenticação 2FA", desc: "Exigimos autenticação em dois fatores para todos os acessos administrativos, garantindo que apenas pessoas autorizadas entrem no sistema." },
                            { icon: <Eye className="w-8 h-8 text-orange-500" />, title: "Auditoria Completa", desc: "Cada alteração no pipeline, estoque ou financeiro é registrada com data, hora e autor, criando uma trilha de auditoria inviolável." },
                            { icon: <FileText className="w-8 h-8 text-orange-500" />, title: "Backups Redundantes", desc: "Seus dados são salvos em tempo real em múltiplos servidores em regiões geográficas diferentes para evitar qualquer perda." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 items-start p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-orange-500/20 transition-all">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
