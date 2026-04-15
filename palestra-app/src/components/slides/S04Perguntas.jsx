import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const CARDS = [
  { pergunta: 'Como a tecnologia funciona?',   etapa: 'Estágio em Tech Writing' },
  { pergunta: 'Onde está todo mundo?',          etapa: 'Comunidade Tech Writing BR' },
  { pergunta: 'Como as outras pessoas fazem isso?', etapa: 'The Manuscript podcast' },
  { pergunta: 'Por que Product Marketing?',    etapa: 'Transição de carreira' },
];

export default function S04Perguntas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-04" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-4xl px-6">
        <motion.h2
          className="font-serif text-center mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          as perguntas que me moveram
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              style={{
                borderLeft: '2px solid #D4845A',
                padding: '1.5rem 1.5rem 1.5rem 1.25rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <p
                className="font-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  color: '#F0E6D6',
                  lineHeight: 1.3,
                }}
              >
                "{card.pergunta}"
              </p>
              <p
                className="font-sans"
                style={{ fontSize: '0.75rem', color: '#C4A882', marginTop: '8px' }}
              >
                {card.etapa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <NextArrow nextId="slide-05" />
    </section>
  );
}
