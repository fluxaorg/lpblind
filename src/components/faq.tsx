"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function AccordionItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 text-left flex justify-between items-center group focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-orange-500 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-zinc-400 text-base leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para implementar o sistema?",
      answer: "A implementação é extremamente rápida. Como o sistema não exige código, conseguimos parametrizar as etapas do seu processo produtivo (Kanban), cadastrar seus materiais e equipe em até 5 minutos. Após o setup inicial, basta fazer o login e começar a usar."
    },
    {
      question: "Consigo usar no celular ou tablet na oficina?",
      answer: "Sim! O Blindadora CRM é totalmente responsivo e roda na nuvem. Sua equipe de chão de fábrica pode atualizar o status dos veículos, tirar fotos e fazer check-lists diretamente pelo celular ou tablet, com acesso à internet."
    },
    {
      question: "O Portal do Cliente é personalizável com a minha marca?",
      answer: "Absolutamente. O link enviado ao seu cliente pode conter o logotipo da sua blindadora. Isso garante que a experiência dele, ao consultar o andamento da blindagem e as fotos, reforce a identidade e o profissionalismo do seu negócio."
    },
    {
      question: "Como funciona a cobrança?",
      answer: "Trabalhamos com planos mensais e anuais sem taxa de implantação para planos superiores. Não retemos seus dados: você pode cancelar ou exportar as informações da sua blindadora a qualquer momento sem burocracia."
    },
    {
      question: "E se eu precisar de um fluxo de aprovação específico?",
      answer: "O Kanban visual é 100% customizável. Você pode criar, renomear e excluir etapas de acordo com o fluxo exato da sua fábrica. Desde o orçamento até o polimento final e entrega técnica."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#020202] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col">
        {/* Top: Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-zinc-400 text-lg">
            Tudo o que você precisa saber sobre o Blindadora CRM e como ele pode transformar sua operação.
          </p>
        </div>

        {/* Bottom: Accordions */}
        <div className="w-full border-t border-white/10">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
