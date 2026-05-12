"use client";

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { CrmMockup } from '@/components/crm-mockup'
import { LogoCloud } from '@/components/logo-cloud-3'
import { motion } from 'framer-motion'
import { KineticText } from '@/components/ui/kinetic-text'
import { ShieldCheck, Zap, Database, Globe } from 'lucide-react'

const transitionVariants: any = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
        },
    },
}

export default function ComoFuncionaPage() {
    const techLogos = [
        { src: "https://authjs.dev/img/providers/supabase.svg", alt: "Supabase" },
        { src: "https://assets.vercel.com/image/upload/v1588805177/repositories/vercel/logo.png", alt: "Vercel" },
        { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
        { src: "https://framerusercontent.com/images/48ha9Z9u9SJ69pfEr9S4SKh84Y.png", alt: "Framer Motion" },
        { src: "https://lucide.dev/logo.light.svg", alt: "Lucide" },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-hidden">
            <nav className="w-full py-8 px-6 md:px-12 lg:px-24 max-w-full mx-auto flex items-center justify-between relative z-50">
              <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Voltar para a Home</span>
              </Link>
              <img src="/icon.png" alt="Blindadora" className="h-8 w-auto opacity-80" />
            </nav>

            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(249,115,22,0.08)_0,rgba(249,115,22,0.02)_50%,transparent_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(249,115,22,0.06)_0,rgba(249,115,22,0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                </div>
                
                {/* Hero Section - Fullscreen */}
                <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center items-center pb-20">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: { transition: { delayChildren: 1 } },
                            },
                            item: {
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 2 } },
                            },
                        }}
                        className="absolute inset-0 -z-20">
                        <div className="absolute inset-x-0 top-1/3 -z-20 hidden lg:block w-full h-[50vh] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px]" />
                    </AnimatedGroup>
                    
                    <div className="mx-auto max-w-7xl px-6 w-full">
                        <div className="text-center sm:mx-auto lg:mt-0 flex flex-col items-center">
                            <AnimatedGroup variants={transitionVariants} className="flex flex-col items-center">
                                <div className="mb-4">
                                    <img 
                                        src="/favicon-transparent.png" 
                                        alt="BlindMaster Favicon" 
                                        className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]"
                                    />
                                </div>
                    
                                <h1 className="mt-4 max-w-5xl mx-auto text-balance text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                                    Como o <KineticText text="BlindMaster" className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#c2410c] inline-flex" /> funciona.
                                </h1>
                                <p
                                    className="mx-auto mt-6 max-w-2xl text-balance text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                                    Integramos todas as etapas da sua operação automotiva. Do orçamento ao pós-venda, entregue uma experiência premium com controle absoluto.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row w-full">
                                <div
                                    key={1}
                                    className="rounded-full">
                                    <Button
                                        size="lg"
                                        onClick={() => document.getElementById('crm-demo')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-zinc-200 cursor-pointer">
                                        <span className="text-nowrap">Visualizar Demo</span>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="rounded-full px-8 py-6 text-lg font-medium text-white border border-white/20 hover:bg-white/5">
                                    <Link href="#">
                                        <span className="text-nowrap">Ver Preços</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

                {/* CRM Mockup Section - Fullscreen */}
                <section id="crm-demo" className="min-h-screen flex flex-col items-center justify-center w-full bg-black py-20">
                    <div className="px-4 w-full">
                        <CrmMockup />
                    </div>
                </section>
            </main>
        </div>
    )
}
