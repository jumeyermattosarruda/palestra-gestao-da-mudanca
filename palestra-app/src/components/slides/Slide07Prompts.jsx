import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const COMPONENT_COLORS = {
  Persona: '#7B5EA7',
  Contexto: '#4A90D9',
  Tarefa: '#4A9D6F',
  Restrições: '#D4845A',
  Formato: '#C4607A',
};

const TABS = [
  {
    icon: '🥾',
    label: 'Trilhas',
    segments: [
      { label: 'Persona', text: 'Você é um guia de trilhas experiente do cerrado brasileiro, com foco em ecoturismo sustentável.' },
      { label: 'Contexto', text: 'Estou planejando uma trilha de 3 dias para um grupo de 8 pessoas, mistura de iniciantes e intermediários, saindo de Brasília.' },
      { label: 'Tarefa', text: 'Crie um roteiro detalhado com sugestões de trilhas, pontos de parada, dicas de equipamento e cuidados de segurança.' },
      { label: 'Restrições', text: 'Nada de trilhas que exijam equipamento de alpinismo. Todas as trilhas devem ser acessíveis de carro comum.' },
      { label: 'Formato', text: 'Organize por dia (Dia 1, Dia 2, Dia 3) com subtópicos: Trilha Principal, Distância, Dificuldade, Equipamentos, Dicas.' },
    ],
  },
  {
    icon: '📊',
    label: 'Dados',
    segments: [
      { label: 'Persona', text: 'Você é um analista de dados sênior especializado em visualização de dados para executivos não técnicos.' },
      { label: 'Contexto', text: 'Tenho uma planilha com resultados de NPS de 6 meses, com dados por região, produto e faixa etária do cliente.' },
      { label: 'Tarefa', text: 'Analise esses dados e identifique os 3 principais padrões e riscos que o board deveria conhecer.' },
      { label: 'Restrições', text: 'Sem jargões estatísticos. Máximo 1 página. Cada insight deve ter uma recomendação acionável.' },
      { label: 'Formato', text: 'Sumário executivo (2 linhas), seguido de 3 blocos: Insight → Evidência → Ação recomendada.' },
    ],
  },
  {
    icon: '🧴',
    label: 'Skincare',
    segments: [
      { label: 'Persona', text: 'Você é uma dermatologista com 15 anos de experiência, especializada em peles sensíveis e climas tropicais.' },
      { label: 'Contexto', text: 'Sou mulher, 32 anos, pele mista com tendência a acne hormonal. Moro em Brasília, clima muito seco no inverno.' },
      { label: 'Tarefa', text: 'Monte uma rotina de skincare manhã e noite com produtos acessíveis, priorizando marcas nacionais.' },
      { label: 'Restrições', text: 'Sem retinol por enquanto. Orçamento de até R$300 total. Sem mais de 4 passos por rotina.' },
      { label: 'Formato', text: 'Tabela com colunas: Passo / Produto sugerido / Motivo / Quando aplicar.' },
    ],
  },
  {
    icon: '💻',
    label: 'GitHub',
    segments: [
      { label: 'Persona', text: 'Você é um engenheiro de software sênior especializado em React e boas práticas de código limpo.' },
      { label: 'Contexto', text: 'Tenho um componente React de 400 linhas que mistura lógica de negócio, estado global e UI. Está difícil de testar e manter.' },
      { label: 'Tarefa', text: 'Refatore esse componente separando responsabilidades, extraindo hooks customizados e melhorando a legibilidade.' },
      { label: 'Restrições', text: 'Mantenha a mesma API externa do componente. Não mude a stack (sem adicionar bibliotecas). TypeScript opcional.' },
      { label: 'Formato', text: 'Código comentado + explicação das decisões de arquitetura em tópicos após o código.' },
    ],
  },
];

export default function Slide07Prompts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="slide-07" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-4xl px-4">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          4 Prompts na Prática
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-4"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          prompts reais que eu uso — com anatomia visível
        </motion.p>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 justify-center flex-wrap">
          {TABS.map((tab, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTab(i)}
              className="font-sans text-sm px-4 py-2 rounded-full border transition-all"
              style={{
                background: activeTab === i ? '#D4845A' : 'transparent',
                color: activeTab === i ? 'white' : '#888',
                borderColor: activeTab === i ? '#D4845A' : '#E0D8CF',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.04 }}
            >
              {tab.icon} {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Prompt content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: '#E8DDD0' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {TABS[activeTab].segments.map((seg, i) => (
              <div key={i} className="flex">
                {/* Color bar */}
                <div style={{ width: '4px', background: COMPONENT_COLORS[seg.label], flexShrink: 0 }} />
                {/* Content */}
                <div className="flex-1 px-4 py-3 border-b last:border-b-0" style={{ borderColor: '#F0EBE4' }}>
                  <span
                    className="font-sans text-xs font-semibold uppercase tracking-wide mb-1 block"
                    style={{ color: COMPONENT_COLORS[seg.label] }}
                  >
                    {seg.label}
                  </span>
                  <p className="font-mono text-xs leading-relaxed" style={{ color: '#333' }}>
                    {seg.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <NextArrow nextId="slide-08" />
    </section>
  );
}
