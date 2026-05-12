"use client";

import { Activity, FileText, Package, Shield, CheckCircle2 } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

// Background for Pipeline Visual (Kanban moving right)
const PipelineBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex items-center justify-start gap-4 px-4 mask-gradient-x">
    <div className="flex gap-4 animate-[slide-right_20s_linear_infinite]">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="w-32 h-20 rounded-xl bg-zinc-800 border border-zinc-700 flex flex-col gap-2 p-3">
          <div className="w-1/2 h-2 bg-zinc-600 rounded-full" />
          <div className="w-3/4 h-2 bg-zinc-700 rounded-full" />
          <div className="mt-auto w-1/4 h-2 bg-orange-500 rounded-full" />
        </div>
      ))}
    </div>
    <style jsx>{`
      .mask-gradient-x {
        mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
      }
      @keyframes slide-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
      }
    `}</style>
  </div>
);

// Background for Gestão de Propostas (Animated Notifications)
interface NotificationProps {
  name: string;
  description: string;
  time: string;
  color: string;
}

const Notification = ({ name, description, time, color }: NotificationProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/5 border border-white/10",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const PropostasBackground = () => {
  const notifications = [
    { name: "Proposta Aprovada", description: "Cliente João Silva aprovou BRL 45.000", time: "15m ago", color: "#F97316" },
    { name: "Nova Proposta", description: "Orçamento gerado para BMW X1", time: "1h ago", color: "#3B82F6" },
    { name: "Pagamento Confirmado", description: "Sinal de 50% recebido", time: "2h ago", color: "#22C55E" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-40 mask-gradient-y">
      <div className="w-full max-w-sm scale-75 origin-center">
        <AnimatedList delay={2000}>
          {notifications.map((n, idx) => (
            <Notification key={idx} {...n} />
          ))}
        </AnimatedList>
      </div>
      <style jsx>{`
        .mask-gradient-y {
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </div>
  );
};

// Background for Controle de Estoque
const EstoqueBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex flex-col gap-2 p-8 mask-gradient-xy">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex gap-2">
        {[...Array(5)].map((_, j) => (
          <div key={j} className="h-8 flex-1 bg-zinc-800 rounded-md border border-zinc-700 animate-pulse" style={{ animationDelay: `${(i + j) * 0.2}s` }} />
        ))}
      </div>
    ))}
    <style jsx>{`
      .mask-gradient-xy {
        mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
      }
    `}</style>
  </div>
);

// Background for Portal do Cliente
const PortalBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none flex items-center justify-center mask-gradient-xy">
    <div className="w-3/4 h-3/4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[float_6s_ease-in-out_infinite]">
      <div className="h-8 bg-zinc-800/50 border-b border-zinc-700/50 flex items-center px-4 gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div className="w-1/3 h-4 bg-zinc-800 rounded-full" />
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-zinc-800 rounded-xl" />
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-3 bg-zinc-800 rounded-full" />
            <div className="w-3/4 h-3 bg-zinc-800 rounded-full" />
            <div className="w-1/2 h-3 bg-zinc-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .mask-gradient-xy {
        mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
      }
    `}</style>
  </div>
);

const features = [
  {
    Icon: Activity,
    name: "Pipeline Visual (Kanban)",
    description: "Mova os veículos entre as etapas da blindagem. Visão clara do que está acontecendo na oficina em tempo real.",
    className: "col-span-3 lg:col-span-2",
    background: <PipelineBackground />,
  },
  {
    Icon: FileText,
    name: "Gestão de Propostas",
    description: "Crie orçamentos complexos e gerencie aprovações de forma simplificada.",
    className: "col-span-3 lg:col-span-1",
    background: <PropostasBackground />,
  },
  {
    Icon: Package,
    name: "Controle de Estoque",
    description: "Aramidas, vidros, aço. Tudo mapeado e conectado aos veículos da oficina.",
    className: "col-span-3 lg:col-span-1",
    background: <EstoqueBackground />,
  },
  {
    Icon: Shield,
    name: "Portal do Cliente",
    description: "Envie links exclusivos para que seu cliente acompanhe fotos, status e documentos da blindagem de forma totalmente premium.",
    className: "col-span-3 lg:col-span-2",
    background: <PortalBackground />,
  },
];

export function BentoFeaturesSection() {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
