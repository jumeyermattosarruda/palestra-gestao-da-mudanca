import { motion } from 'framer-motion';

export default function NextArrow({ nextId }) {
  const scrollToNext = () => {
    if (!nextId) return;
    const el = document.getElementById(nextId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!nextId) return null;

  return (
    <motion.button
      onClick={scrollToNext}
      className="absolute bottom-8 right-8 text-beige-secondary/60 hover:text-accent transition-colors z-20"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      aria-label="Próximo slide"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6v16M7 16l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>
  );
}
