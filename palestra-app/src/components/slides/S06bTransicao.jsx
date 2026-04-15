import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

export default function S06bTransicao() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-06b" className="slide" ref={ref}>
      {/* GIF background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src="./assets/abstract gif.gif"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
      </div>

      {/* Title */}
      <motion.h1
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 300,
          color: '#FFFFFF',
          textAlign: 'center',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          letterSpacing: '-0.01em',
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        Inteligência Artificial
      </motion.h1>

      <NextArrow nextId="slide-07" />
    </section>
  );
}
