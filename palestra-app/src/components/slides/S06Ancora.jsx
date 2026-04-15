import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const AFFIRMATIONS = [
  'Não ter medo do desconhecido',
  'Focar no que eu quero aprender',
  'Que ambiente vai me proporcionar o que valorizo?',
];

export default function S06Ancora() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-06" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-3xl px-8 flex flex-col">
        {/* Top label */}
        <motion.p
          className="font-sans uppercase"
          style={{
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: '#888',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          O QUE ME ANCORA
        </motion.p>

        {/* Affirmations */}
        {AFFIRMATIONS.map((text, i) => (
          <motion.div
            key={i}
            style={{ marginBottom: i < AFFIRMATIONS.length - 1 ? '2.5rem' : 0 }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.3, duration: 0.6 }}
          >
            <p
              className="font-serif"
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#F0E6D6',
                lineHeight: 1.35,
              }}
            >
              {text}
            </p>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: '#D4845A',
                marginTop: '12px',
              }}
            />
          </motion.div>
        ))}
      </div>

      <NextArrow nextId="slide-06b" />
    </section>
  );
}
