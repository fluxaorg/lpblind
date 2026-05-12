"use client";

import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans">
      
      {/* Left Column: Visual/Brand */}
      <div className="hidden md:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden bg-[#050505] border-r border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,100,0,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative z-10 flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Blind Master Logo" className="h-12 w-auto cursor-pointer" />
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            O centro de comando da sua <span className="font-semibold text-orange-500">blindadora</span>.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Faça login no Blindadora CRM para acessar seu pipeline, gerenciar propostas e ter visão em tempo real da sua operação automotiva premium.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Fluxa.</span>
          <Link href="/suporte" className="hover:text-white transition-colors">Suporte</Link>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative">
        <div className="w-full max-w-sm space-y-8 relative z-10">
          
          <div className="md:hidden flex items-center justify-center mb-12">
            <Link href="/">
              <img src="/icon.png" alt="Icon" className="h-12 w-auto" />
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold tracking-tight mb-2">Bem-vindo de volta</h2>
            <p className="text-zinc-400 text-sm">Insira suas credenciais para acessar a plataforma.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300" htmlFor="email">Email corporativo</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all sm:text-sm"
                    placeholder="voce@blindadora.com.br"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="password">Senha</label>
                  <Link href="/recuperar" className="text-sm text-orange-500 hover:text-orange-400 font-medium">
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-black bg-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 focus:ring-offset-black transition-all group"
            >
              Entrar na plataforma
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-400">
              Não tem uma conta?{' '}
              <Link href="/" className="font-medium text-white hover:underline">
                Agende uma demonstração
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
