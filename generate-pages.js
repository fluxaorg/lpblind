const fs = require('fs');
const path = require('path');

const baseLayout = (title, subtitle) => `
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
            ${title}
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            ${subtitle}
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
`;

const sobreLayout = `
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SobrePage() {
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
            Sobre a Empresa
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Conheça as raízes da tecnologia que está revolucionando a gestão de blindadoras no Brasil.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">O Grupo WKS e Fluxa</h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
              O Blindadora CRM foi desenvolvido a partir das necessidades reais das maiores blindadoras do Brasil. Nós percebemos que softwares genéricos não atendiam as particularidades de um mercado tão complexo e focado em detalhes e segurança.
            </p>
            <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl leading-relaxed">
              Desenvolvido em uma collab exclusiva entre o Grupo WKS e Fluxa.
            </p>
          </div>

          <div className="p-8 md:p-12 border-l-2 border-orange-500 bg-gradient-to-r from-orange-500/5 to-transparent my-12 rounded-r-3xl max-w-3xl">
            <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed">
              "A união entre a expertise operacional do Grupo WKS e a engenharia de software de elite da Fluxa resultou na plataforma definitiva para o mercado de blindagem."
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">Nosso Propósito</h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
              Nosso objetivo nunca foi apenas criar um sistema, mas estabelecer um novo padrão de operação. Acreditamos que oficinas que operam de forma transparente, com rastreabilidade absoluta das peças e comunicação ágil com o cliente final, dominam o mercado.
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Estamos aqui para garantir que a sua operação seja tão impenetrável e segura quanto os veículos que você entrega.
            </p>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
`;

const pages = [
  { slug: 'recursos', title: 'Recursos', subtitle: 'Descubra todas as ferramentas e módulos que compõem o Blindadora CRM.' },
  { slug: 'precos', title: 'Preços', subtitle: 'Transparência desde o início. Conheça nossos planos e escalas de investimento.' },
  { slug: 'clientes', title: 'Clientes', subtitle: 'As blindadoras que confiam na nossa tecnologia para crescer exponencialmente.' },
  { slug: 'atualizacoes', title: 'Atualizações', subtitle: 'Acompanhe as últimas inovações e changelog do nosso ecossistema.' },
  { slug: 'blog', title: 'Blog', subtitle: 'Insights profundos sobre gestão, vendas e o mercado automobilístico de luxo.' },
  { slug: 'contato', title: 'Contato', subtitle: 'Estamos prontos para atender você. Fale com um de nossos executivos.' },
  { slug: 'parceiros', title: 'Parceiros', subtitle: 'Ecossistema de empresas que conectam e fortalecem o Blindadora CRM.' },
  { slug: 'privacidade', title: 'Política de Privacidade', subtitle: 'Como protegemos e tratamos os dados da sua operação.' },
  { slug: 'termos', title: 'Termos de Serviço', subtitle: 'As bases do nosso compromisso e acordo de prestação de serviço.' },
  { slug: 'seguranca', title: 'Segurança', subtitle: 'Conformidade, criptografia e estabilidade: os pilares da nossa infraestrutura.' },
];

pages.forEach(p => {
  const dirPath = path.join(__dirname, 'src', 'app', p.slug);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), baseLayout(p.title, p.subtitle));
});

const sobreDir = path.join(__dirname, 'src', 'app', 'sobre');
if (!fs.existsSync(sobreDir)) fs.mkdirSync(sobreDir, { recursive: true });
fs.writeFileSync(path.join(sobreDir, 'page.tsx'), sobreLayout);

console.log("All pages updated successfully!");
