import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Slide09bCoracao() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="slide-09b" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center">
        <motion.h2 className="font-serif mb-8"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          Abrindo Meu Coracao
        </motion.h2>
        <motion.div className="rounded-2xl overflow-hidden"
          style={{ maxWidth: 480, width: '100%', border: '2px solid #D4845A' }}
          initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}>
          <img src="brown-gif.gif" alt="Reflexao pessoal" style={{ width: '100%', display: 'block' }} />
        </motion.div>
        <motion.p className="font-serif italic mt-8"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#C4A882', maxWidth: '480px' }}
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}>
          "a IA nao substitui a pessoa que sabe fazer as perguntas certas."
        </motion.p>
        <motion.div className="mt-10" style={{ width: '40px', height: '2px', background: '#D4845A' }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 1 }} />
        <motion.p className="font-sans text-sm mt-4" style={{ color: '#C4A882', opacity: 0.7 }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.7 } : {}} transition={{ delay: 1.2 }}>
          Obrigado - Jumeyermatt Arruda - Gestao da Mudanca - UnB 2025
        </motion.p>
      </div>
    </section>
  );
}
