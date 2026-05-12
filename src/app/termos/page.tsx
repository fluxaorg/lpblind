"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { FileText } from "lucide-react";

export default function TermosPage() {
    return (
        <StandardPageLayout
            title="Nossos termos de"
            kineticWord="Uso"
            description="As diretrizes que regem nossa parceria e o uso da plataforma BlindMaster CRM."
            primaryButtonText="Aceitar Termos"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="space-y-8">
                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-orange-500" />
                                Licenciamento SaaS
                            </h3>
                            <p className="text-zinc-500 leading-relaxed">
                                O BlindMaster é fornecido como Software as a Service (SaaS). A licença concede o direito de uso da plataforma conforme o plano contratado, incluindo atualizações e suporte técnico.
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-orange-500" />
                                Responsabilidade de Dados
                            </h3>
                            <p className="text-zinc-500 leading-relaxed">
                                A precisão das informações inseridas no CRM é de responsabilidade da blindadora. Nós garantimos a disponibilidade e segurança da infraestrutura.
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-orange-500" />
                                Disponibilidade (SLA)
                            </h3>
                            <p className="text-zinc-500 leading-relaxed">
                                Comprometemo-nos com um SLA de 99.9% de uptime, garantindo que sua operação nunca pare por falhas técnicas no sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
