import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AbrindoCoracao() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imgRef, imgInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="slide-17b"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300 px-6 py-16"
    >
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: -40 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Abrindo meu coração
      </motion.h2>

      <motion.img
        ref={imgRef}
        src={`${import.meta.env.BASE_URL}assets/brown gif.gif`}
        alt="Abrindo meu coração"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={imgInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        className="max-h-[55vh] w-auto object-contain rounded-2xl shadow-2xl"
      />
    </section>
  );
}
