"use client";

import { StandardPageLayout } from "@/components/standard-page-layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContatoPage() {
    return (
        <StandardPageLayout
            title="Vamos conversar"
            kineticWord="Agora"
            description="Nossa equipe de especialistas está pronta para diagnosticar sua operação e propor a melhor solução."
            primaryButtonText="Enviar Mensagem"
            primaryButtonAction={() => {}}
        >
            <section className="py-24 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8 text-balance">Canais de atendimento direto</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                                        <MessageSquare className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">WhatsApp Business</h4>
                                        <p className="text-zinc-500">Atendimento instantâneo de segunda a sexta.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                                        <Mail className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">E-mail corporativo</h4>
                                        <p className="text-zinc-500">contato@blindmaster.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[2.5rem]">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Seu Nome</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all" placeholder="Como podemos te chamar?" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">E-mail</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all" placeholder="exemplo@empresa.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Mensagem</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all" placeholder="Como podemos ajudar sua blindadora?"></textarea>
                                </div>
                                <Button className="w-full bg-orange-600 hover:bg-orange-500 py-6 rounded-xl font-bold">Enviar Mensagem</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </StandardPageLayout>
    );
}
