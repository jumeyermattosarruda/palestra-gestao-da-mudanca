import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

export default function Slide01Abertura() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-01" className="slide slide-dark" ref={ref}>
      {/* Phrase 1 — upper left */}
      <motion.div
        className="absolute"
        style={{ top: '18%', left: '6%', maxWidth: '45%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p
          className="font-serif italic leading-tight"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#F0E6D6',
          }}
        >
          as últimas<br />2 semanas
        </p>
      </motion.div>

      {/* Small accent line */}
      <motion.div
        className="absolute"
        style={{ top: '38%', left: '6%', width: '40px', height: '2px', background: '#D4845A' }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Phrase 2 — center-right */}
      <motion.div
        className="absolute"
        style={{ top: '45%', right: '8%', maxWidth: '48%', textAlign: 'right' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p
          className="font-serif leading-snug"
          style={{
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            color: '#F0E6D6',
          }}
        >
          navegar o caos<br />de mudança
        </p>
      </motion.div>

      {/* Bottom context */}
      <motion.div
        className="absolute"
        style={{ bottom: '14%', left: '6%' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <p className="font-sans text-sm" style={{ color: '#C4A882' }}>
          o que me trouxe aqui hoje
        </p>
      </motion.div>

      <NextArrow nextId="slide-02" />
    </section>
  );
}
