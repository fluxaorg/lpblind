"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { Check } from "lucide-react";

export default function PrecosPage() {
    return (
        <StandardPageLayout
            title="Investimento e"
            kineticWord="Planos"
            description="Escolha a configuração ideal para o tamanho da sua operação. Sem taxas ocultas, apenas escala."
            primaryButtonText="Agendar uma reunião"
            primaryButtonAction={() => window.location.href = '/contato'}
        >
            <section className="py-24 bg-black">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Plan 1 */}
                        <div className="p-8 rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] relative overflow-hidden group">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                                <p className="text-zinc-500">Para blindadoras em crescimento.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-white">Sob consulta</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {["Até 50 projetos/ano", "Pipeline Visual", "Gestão de Estoque", "Suporte Prioritário"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check className="w-5 h-5 text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Plan 2 */}
                        <div className="p-8 rounded-[2.5rem] border border-orange-500/50 bg-[#0A0A0A] relative overflow-hidden group shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                            <div className="absolute top-4 right-8 bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Popular</div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                <p className="text-zinc-500">Para operações de grande escala.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-white">Customizado</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {["Projetos Ilimitados", "Múltiplas Unidades", "Integrações Customizadas", "Gerente de Conta"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check className="w-5 h-5 text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
