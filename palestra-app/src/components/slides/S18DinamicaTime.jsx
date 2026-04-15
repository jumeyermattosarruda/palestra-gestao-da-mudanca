import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const STEPS = [
  'Receba o cartão com: empresa + setor + desafio',
  'Decida quais IAs usaria, para qual função, como coordenaria',
  'Apresente em 1 minuto para a turma',
];

const CHALLENGES = [
  'Startup de RH — escalar onboarding sem contratar',
  'Consultoria — entregar relatórios 3× mais rápido',
  'ONG — criar conteúdo de captação sem equipe criativa',
  'E-commerce — personalizar comunicação com clientes',
];

export default function S18DinamicaTime() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-18" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-4xl px-6">
        <motion.h2
          className="font-serif"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F0E6D6', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Monte seu time de IA
        </motion.h2>

        <motion.p
          className="font-sans"
          style={{ fontSize: '14px', color: '#C4A882', marginBottom: '1rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Grupos de 4–5 · 15 minutos
        </motion.p>

        <motion.div
          style={{ width: '60px', height: '2px', background: '#D4845A', marginBottom: '1.5rem' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
        />

        {/* Timer */}
        <motion.p
          className="font-serif"
          style={{ fontSize: '3rem', fontWeight: 700, color: '#D4845A', marginBottom: '1.5rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          15:00
        </motion.p>

        {/* Steps */}
        <div className="flex flex-col gap-3 mb-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
            >
              <span
                className="font-sans"
                style={{ color: '#D4845A', fontSize: '14px', fontWeight: 600, minWidth: '1.2rem', marginTop: '1px' }}
              >
                {i + 1}.
              </span>
              <p className="font-sans" style={{ fontSize: '14px', color: '#F0E6D6', lineHeight: 1.5 }}>
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-2 gap-4">
          {CHALLENGES.map((challenge, i) => (
            <motion.div
              key={i}
              className="rounded-lg"
              style={{
                border: '0.5px solid #555',
                padding: '1rem',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <p className="font-sans" style={{ fontSize: '13px', color: '#C4A882', lineHeight: 1.5 }}>
                {challenge}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <NextArrow nextId="slide-19" />
    </section>
  );
}
