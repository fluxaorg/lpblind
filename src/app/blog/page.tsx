"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { User, Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const posts = [
        { title: "Tendências em Blindagem para 2026", date: "10 Mai, 2026", cat: "Inovação", desc: "Como a tecnologia de materiais está mudando os processos de fabricação." },
        { title: "Eficiência Operacional: O segredo das grandes", date: "05 Mai, 2026", cat: "Gestão", desc: "Por que o controle visual de pipeline é o maior diferencial competitivo atual." },
        { title: "Segurança de Dados no Setor Automotivo", date: "28 Abr, 2026", cat: "Segurança", desc: "A importância da autenticação em duas etapas na proteção de dados de clientes." },
    ];

    return (
        <StandardPageLayout
            title="Insights e"
            kineticWord="Blog"
            description="As últimas novidades sobre tecnologia, gestão e o mercado de blindagem automotiva."
            primaryButtonText="Ver Todas as Matérias"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="flex flex-col bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all group cursor-pointer">
                                <div className="aspect-video bg-zinc-900 flex items-center justify-center p-8">
                                    <span className="text-4xl font-bold text-white/10 group-hover:text-orange-500/20 transition-colors uppercase tracking-tighter">{post.cat}</span>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-xs font-semibold text-orange-500 uppercase tracking-widest mb-4">
                                        <span>{post.cat}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                        <span className="text-zinc-500">{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors leading-tight">{post.title}</h3>
                                    <p className="text-zinc-500 mb-6 line-clamp-2">{post.desc}</p>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                                        Ler matéria <ArrowRight className="w-4 h-4 text-orange-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
