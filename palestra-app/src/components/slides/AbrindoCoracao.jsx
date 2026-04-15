import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

export default function AbrindoCoracao() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-17b" className="slide slide-dark" ref={ref}>
      {/* GIF background */}
      <img
        src={`${import.meta.env.BASE_URL}assets/brown gif.gif`}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.40)',
          zIndex: 1,
        }}
      />

      {/* Title */}
      <motion.h2
        className="font-serif"
        style={{
          position: 'relative',
          zIndex: 2,
          fontWeight: 300,
          color: '#FFFFFF',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          textAlign: 'center',
          padding: '0 2rem',
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Abrindo meu Coração
      </motion.h2>

      <NextArrow nextId="slide-17c" />
    </section>
  );
}
