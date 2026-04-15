import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const AGENTS = [
  {
    emoji: '🎨',
    title: 'Graphic Designer',
    desc: 'Cria layouts, edita imagens e sugere paletas visuais para apresentações e materiais.',
  },
  {
    emoji: '✉️',
    title: 'Message Intern',
    desc: 'Rascunha e-mails, respostas e comunicados com o tom certo para cada contexto.',
  },
  {
    emoji: '✍️',
    title: 'Copy Editor',
    desc: 'Revisa textos, ajusta gramática, coesão e clareza em qualquer documento.',
  },
  {
    emoji: '🔍',
    title: 'Market Researcher',
    desc: 'Levanta dados, tendências e análises de mercado de forma rápida e estruturada.',
  },
  {
    emoji: '💻',
    title: 'Developer',
    desc: 'Escreve, revisa e depura código em diversas linguagens e frameworks.',
  },
  {
    emoji: '📊',
    title: 'Data Analyst',
    desc: 'Interpreta dados, gera insights e sugere visualizações para tomada de decisão.',
  },
];

export default function Slide02bAgentes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-11" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-4xl px-6">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Agentes Especializados
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-8"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          cada IA tem um papel claro no time
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {AGENTS.map((agent, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = row * 0.15 + col * 0.1;
            return (
              <motion.div
                key={i}
                className="rounded-xl p-5 border"
                style={{
                  background: '#FAFAF8',
                  borderColor: '#E8DDD0',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(28,18,8,0.1)' }}
              >
                <div className="text-3xl mb-3">{agent.emoji}</div>
                <h3
                  className="font-sans font-semibold mb-1"
                  style={{ fontSize: '0.95rem', color: '#1C1208' }}
                >
                  {agent.title}
                </h3>
                <p
                  className="font-sans text-xs leading-relaxed"
                  style={{ color: '#888' }}
                >
                  {agent.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <NextArrow nextId="slide-12" />
    </section>
  );
}
