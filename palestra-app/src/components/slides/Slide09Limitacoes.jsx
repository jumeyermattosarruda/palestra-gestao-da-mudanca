import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const LIMITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="#D4845A" strokeWidth="2"/>
        <path d="M14 8v7" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="19" r="1.5" fill="#D4845A"/>
      </svg>
    ),
    title: 'Alucinações',
    desc: 'A IA inventa fatos com muita confiança. Sempre valide informações críticas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#D4845A" strokeWidth="2"/>
        <path d="M8 14h12M14 8v12" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Janela de Contexto',
    desc: 'A IA não lembra conversas antigas. Cada sessão começa do zero sem contexto persistente.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L14 6l10 14H4z" stroke="#D4845A" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 12v4" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="18" r="1" fill="#D4845A"/>
      </svg>
    ),
    title: 'Viés e Preconceito',
    desc: 'Modelos refletem vieses dos dados de treinamento. Output pode perpetuar estereótipos.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="#D4845A" strokeWidth="2"/>
        <path d="M10 10l8 8M18 10l-8 8" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Raciocínio Complexo',
    desc: 'Multi-step reasoning ainda falha em problemas que exigem senso comum ou julgamento humano.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="8" width="8" height="12" rx="2" stroke="#D4845A" strokeWidth="2"/>
        <rect x="15" y="8" width="8" height="12" rx="2" stroke="#D4845A" strokeWidth="2"/>
        <path d="M8 14h12" stroke="#D4845A" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    title: 'Homogeneização do pensamento',
    desc: 'Quando todo mundo usa os mesmos prompts e modelos, as respostas começam a se parecer. Diversidade de raciocínio é um ativo — não delegue seu ponto de vista.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22V10a2 2 0 012-2h12a2 2 0 012 2v12" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 22h24" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="14" width="8" height="8" rx="1" stroke="#D4845A" strokeWidth="2"/>
      </svg>
    ),
    title: 'Dados Atuais',
    desc: 'O knowledge cutoff impede acesso a eventos recentes. Para dados em tempo real, use tools específicas.',
  },
];

export default function Slide09Limitacoes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-16" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-3xl px-6">
        <motion.h2
          className="font-serif text-center mb-8"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Onde a IA Tropeça
        </motion.h2>

        <div className="flex flex-col gap-5">
          {LIMITS.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
            >
              <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <p
                  className="font-sans font-semibold mb-0.5"
                  style={{ color: '#F0E6D6', fontSize: '1rem' }}
                >
                  {item.title}
                </p>
                <p className="font-sans text-sm" style={{ color: '#C4A882', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <NextArrow nextId="slide-17" />
    </section>
  );
}
