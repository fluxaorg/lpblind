"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { Handshake, Building2, Globe, ShieldCheck } from "lucide-react";

export default function ParceirosPage() {
    return (
        <StandardPageLayout
            title="Nossa rede de"
            kineticWord="Parceiros"
            description="Colaboramos com os melhores fornecedores e prestadores de serviço para garantir a excelência do ecossistema BlindMaster."
            primaryButtonText="Seja um Parceiro"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Building2 className="text-orange-500" />, title: "Fabricantes de Vidros", desc: "Integração direta com catálogos AGP, Pilkington e outros líderes." },
                            { icon: <Handshake className="text-orange-500" />, title: "Corretoras", desc: "Fluxo agilizado para vistorias e aprovações de seguradoras." },
                            { icon: <Globe className="text-orange-500" />, title: "Logística", desc: "Parceria com transportadoras especializadas em veículos premium." },
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-orange-500/20 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
