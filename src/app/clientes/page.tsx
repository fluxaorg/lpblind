
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger: any = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <nav className="w-full py-8 px-6 md:px-12 lg:px-24 max-w-full mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar para a Home</span>
        </Link>
        <img src="/icon.png" alt="Blindadora" className="h-8 w-auto opacity-80" />
      </nav>

      <motion.main 
        initial="hidden" 
        animate="visible" 
        variants={stagger}
        className="w-full max-w-full mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Clientes
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            As blindadoras que confiam na nossa tecnologia para crescer exponencialmente.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">Uma Nova Perspectiva</h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
              Nossa abordagem redefine o que significa ter controle total sobre o mercado. Através de metodologias validadas e infraestrutura robusta, entregamos uma experiência premium que minimiza atritos e eleva a performance.
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Ao focar nos detalhes que importam, conseguimos garantir escalabilidade sem perder a essência do luxo e da confiabilidade que nossos clientes exigem.
            </p>
          </div>

          <div className="p-8 md:p-12 border-l-2 border-orange-500 bg-gradient-to-r from-orange-500/5 to-transparent my-12 rounded-r-3xl max-w-3xl">
            <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed">
              "A inovação não está apenas em fazer mais rápido, mas em criar um ecossistema onde a qualidade é inegociável e a segurança é absoluta em cada processo."
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">Compromisso com a Excelência</h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
              Acreditamos que a transparência é o maior ativo na construção de relações duradouras. Nossa comunicação e processos ocorrem de maneira orgânica e proativa.
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Simplificamos a complexidade para que você possa focar no que realmente importa: crescer e entregar a melhor experiência ao seu cliente final.
            </p>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
