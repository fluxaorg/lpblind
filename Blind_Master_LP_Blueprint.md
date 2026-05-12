# Blueprint: Landing Page - Blind Master CRM

Este documento é o guia definitivo de estrutura, copy e design visual para replicar a Landing Page de alta conversão do **Blind Master CRM** (ou Blindadora CRM). Siga este mapa para implementar a página em qualquer outra pasta ou framework.

---

## 🎨 1. Estilo Visual e Direção de Arte

A identidade visual mistura o minimalismo sofisticado de startups como **Linear.app** e **Flux Sales** com o universo de alto luxo e autoridade das blindadoras automotivas.

*   **Tema:** Dark Mode Premium.
*   **Fundo Principal:** Preto profundo (`#050505` ou puro `#000000`).
*   **Tipografia:** 
    *   **Títulos Principais (Headers):** Fonte Geométrica sem serifa (ex: *Inter*, *Geist* ou *SF Pro*), estilo grosso/bold para impacto.
    *   **Detalhes de Charme:** Fonte Serifada Itálica (ex: *Playfair Display* ou *Instrument Serif*) usada sutilmente em mini-títulos ou palavras de destaque.
    *   **Textos (Body):** Fonte sem serifa em cinza médio (`#A1A1AA` ou `zinc-400`) para leitura limpa.
*   **Feixe de Luz (The Glow):** Um feixe de luz azul (`#2563EB` fundido com ciano) altamente desfocado (`blur-[120px]`) posicionado exclusivamente atrás da imagem principal do carro.
*   **A Imagem Central:** Uma Porsche 911 (Carrera T) branca, de perfil, sem fundo (PNG transparente). Ela não deve ter caixas brancas ao redor; deve flutuar sobre o feixe azul escuro.
*   **Cards (Bento Grid):** Fundo cinza ultrassombreado (`#0A0A0A`), bordas muito finas (`1px solid #1F1F1F`) e cantos super arredondados.

---

## 🏗️ 2. Estrutura da Página e Copywriting

Abaixo está o conteúdo exato de cada seção, em ordem de rolagem.

### Seção 1: Navbar (Cabeçalho)
*   **Visual:** Fundo translúcido (efeito *glassmorphism* / *backdrop-blur*).
*   **Logo (Esquerda):** Ícone de escudo (Shield) + "Blindadora CRM".
*   **Links (Centro):** Home, Serviços, Features, Blog, Preços.
*   **CTA (Direita):** Botão sutil "TESTE GRÁTIS ->".

### Seção 2: Hero Section (A Primeira Impressão)
*A seção mais importante da página. Layout centralizado, focado num único botão CTA de alto contraste.*

*   **Badge (Opcional no topo):** [Lançamento Blindadora CRM 2.0]
*   **Mini-título (Serifado, Itálico, Cinza claro):** 
    > *"O Padrão Ouro em Gestão Automotiva."*
*   **Título Principal (Gigante, Bold, Branco):** 
    > *"A Blindagem do Futuro é Transparente"*
*   **Subtítulo (Cinza, tamanho médio, max-w estreito):** 
    > *"O primeiro CRM especializado que conecta sua oficina ao seu cliente. Gestão de pipeline, estoque e documentos com segurança de nível militar — sem a sobrecarga operacional."*
*   **Single CTA (Botão Único, Grande, Branco com texto Preto):** 
    > `[ SOLICITAR DEMONSTRAÇÃO -> ]`

### Seção 3: O Mockup / Showcase
*   **Estrutura:** Logo abaixo do CTA.
*   **Visual:** O fundo preto ganha uma explosão de luz azul esfumaçada no centro. Por cima dessa luz, a foto em PNG da Porsche Branca de perfil. 
*   **Efeito:** O carro parece estar estacionado sobre o site, criando profundidade 3D.

### Seção 4: Trust Signals (Faixa de Logotipos)
*   **Visual:** Uma faixa sutil dividindo a página.
*   **Copy:** 
    > *"A ESCOLHA DAS BLINDADORAS MAIS PREMIUM DO MERCADO"*
*   **Conteúdo:** Logotipos (ou nomes) de blindadoras em cinza bem apagado (opacity 40%), como *BLINDART, AERO SHIELD, TITANIUM, CARBON*.

### Seção 5: Features (A Solução / Grid Bento)
*   **Cabeçalho da Seção (Alinhado à esquerda):**
    > Título: **Projetado para Ajudar Você a Fazer Mais**  
    > Texto Complementar na mesma frase (Serifado Itálico): ***Com Menos Esforço***
*   **Parágrafo ao lado direito (Descrição curta):**
    > *"Nosso sistema foi construído para blindadoras modernas que querem se manter organizadas, focadas e no controle total da produção."*

*   **Grid de 3 Colunas (Cards minimalistas com ícones):**
    1.  **Card 1 (Ícone: Gráfico/Atividade):**
        *   **Título:** Pipeline Visual (Kanban)
        *   **Texto:** "Crie, categorize e priorize cada veículo com uma interface drag-and-drop que se adapta instantaneamente ao seu fluxo de trabalho (Desmontagem, Aramida, Montagem)."
    2.  **Card 2 (Ícone: Escudo/Calendário):**
        *   **Título:** Prazos & Documentação
        *   **Texto:** "Fique à frente da sua agenda com um calendário integrado que sincroniza prazos do Exército e o lembra de renovações (SICOVAB) antes que elas expirem."
    3.  **Card 3 (Ícone: Celular):**
        *   **Título:** Portal do Cliente VIP
        *   **Texto:** "Elimine as distrações e ligações diárias. O dono do veículo acessa um portal com fotos em tempo real e status da blindagem — rápido e transparente."

### Seção 6: Footer (Rodapé Clean)
*   **Visual:** Fundo ainda mais escuro (puro preto), com separações em colunas simples, texto pequeno e acinzentado.
*   **Copy / Links:**
    *   **Coluna 1:** Logo + Slogan ("A blindagem do futuro é transparente.").
    *   **Coluna 2 (Produto):** Funcionalidades, Portal do Cliente, Segurança.
    *   **Coluna 3 (Empresa):** Sobre, Contato.
    *   **Bottom Bar:** Copyright © 2026 Blindadora CRM | "Status: Operacional" (Com um pontinho verde simulando servidor online).

---

## 🛠️ Resumo Técnico para Replicação (Tailwind)
Se for recriar usando Tailwind CSS em outro local, certifique-se de configurar:
*   Fundo preto principal: `bg-[#050505]`
*   Glow Azul da Porsche: `bg-blue-600 blur-[120px]`
*   Fonte Sans: `Inter` ou nativa do sistema.
*   Fonte Serif (Itálica): `Playfair Display`.
