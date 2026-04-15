import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const STEPS = [
  'Escreva seu prompt usando o framework do Raio-X (3 min)',
  '3–4 prompts são projetados anonimamente — turma vota no melhor',
  'Prompt vencedor é testado ao vivo na frente de todos',
];

const BADGES = [
  { label: 'Persona',    color: '#7B5EA7' },
  { label: 'Contexto',   color: '#4A90D9' },
  { label: 'Tarefa',     color: '#4A9D6F' },
  { label: 'Restrições', color: '#D4845A' },
  { label: 'Formato',    color: '#C4607A' },
  { label: 'Exemplos',   color: '#4A9D9D' },
];

export default function S19DinamicaPrompt() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-19" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-4xl px-6">
        <motion.h2
          className="font-serif"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F0E6D6', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Batalha de Prompt
        </motion.h2>

        <motion.p
          className="font-sans"
          style={{ fontSize: '14px', color: '#C4A882', marginBottom: '1rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Individual → turma · 8 minutos
        </motion.p>

        <motion.div
          style={{ width: '60px', height: '2px', background: '#D4845A', marginBottom: '1.5rem' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
        />

        {/* Challenge box */}
        <motion.div
          style={{
            borderLeft: '3px solid #D4845A',
            background: 'rgba(255,255,255,0.05)',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            borderRadius: '0 6px 6px 0',
          }}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <p
            className="font-sans"
            style={{ fontSize: '15px', color: '#F0E6D6', fontStyle: 'italic', lineHeight: 1.6 }}
          >
            Peça pra uma IA criar um plano de onboarding para um novo funcionário numa empresa de varejo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-3 mb-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.12, duration: 0.4 }}
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

        {/* Framework badges */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {BADGES.map((badge, i) => (
            <span
              key={i}
              className="font-sans"
              style={{
                background: `${badge.color}22`,
                color: badge.color,
                border: `1px solid ${badge.color}55`,
                borderRadius: '99px',
                padding: '3px 10px',
                fontSize: '12px',
              }}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
