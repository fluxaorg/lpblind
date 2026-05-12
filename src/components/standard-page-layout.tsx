"use client";

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { KineticText } from '@/components/ui/kinetic-text'

interface PageLayoutProps {
    title: string;
    kineticWord: string;
    description: string;
    children?: React.ReactNode;
    primaryButtonText?: string;
    primaryButtonAction?: () => void;
}

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

export function StandardPageLayout({
    title,
    kineticWord,
    description,
    children,
    primaryButtonText = "Visualizar Demo",
    primaryButtonAction
}: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden">
            <nav className="w-full py-8 px-6 md:px-12 lg:px-24 max-w-full mx-auto flex items-center justify-between relative z-50">
              <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Voltar para a Home</span>
              </Link>
              <img src="/icon.png" alt="Blindadora" className="h-8 w-auto opacity-80" />
            </nav>

            <main className="relative">
                <div
                    aria-hidden
                    className="z-[0] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(249,115,22,0.12)_0,rgba(249,115,22,0.02)_50%,transparent_80%)]" />
                </div>
                
                {/* Hero Section - Fullscreen */}
                <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center items-center pb-20">
                    <div className="absolute inset-x-0 top-1/4 -z-10 hidden lg:block w-full h-[60vh] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px]" />
                    
                    <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
                        <div className="text-center sm:mx-auto lg:mt-0 flex flex-col items-center">
                            <AnimatedGroup variants={transitionVariants} className="flex flex-col items-center">
                                <Link href="/" className="mb-4 block hover:scale-110 transition-transform duration-500 cursor-pointer group">
                                    <img 
                                        src="/favicon-transparent.png" 
                                        alt="BlindMaster Favicon" 
                                        className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(251,146,60,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all"
                                    />
                                </Link>
                    
                                <h1 className="mt-4 max-w-5xl mx-auto text-balance text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                                    {title} <KineticText text={kineticWord} as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#c2410c] inline-flex" />
                                </h1>
                                <p
                                    className="mx-auto mt-6 max-w-2xl text-balance text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                                    {description}
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
                                <Button
                                    size="lg"
                                    onClick={primaryButtonAction}
                                    className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-zinc-200 cursor-pointer transition-all hover:scale-105 active:scale-95"
                                >
                                    <span className="text-nowrap">{primaryButtonText}</span>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="rounded-full px-8 py-6 text-lg font-medium text-white border border-white/20 hover:bg-white/5 transition-all"
                                >
                                    <Link href="/contato">
                                        <span className="text-nowrap">Falar com Consultor</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

                {children}
            </main>
        </div>
    )
}
