"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { Scale } from "lucide-react";

export default function PrivacidadePage() {
    return (
        <StandardPageLayout
            title="Sua política de"
            kineticWord="Privacidade"
            description="Transparência total sobre como tratamos e protegemos suas informações e os dados da sua operação."
            primaryButtonText="Falar com DPO"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-invert prose-orange max-w-none space-y-12">
                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Scale className="w-6 h-6 text-orange-500" />
                                1. Coleta de Dados
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Coletamos apenas as informações estritamente necessárias para a operação do seu CRM, incluindo dados cadastrais da empresa e usuários autorizados. Não comercializamos dados com terceiros.
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Scale className="w-6 h-6 text-orange-500" />
                                2. Uso das Informações
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                As informações são utilizadas exclusivamente para fornecer as funcionalidades do BlindMaster, gerar relatórios de produtividade e garantir a segurança dos acessos.
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Scale className="w-6 h-6 text-orange-500" />
                                3. Seus Direitos (LGPD)
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Você tem total controle sobre seus dados, podendo solicitar acesso, correção ou exclusão definitiva a qualquer momento através dos nossos canais oficiais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
