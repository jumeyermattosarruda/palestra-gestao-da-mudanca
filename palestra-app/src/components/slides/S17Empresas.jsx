import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

function Column({ title, icon, desc, delay, inView }) {
  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <p
          className="font-sans font-semibold text-sm"
          style={{ color: '#F0E6D6', fontSize: '1.1rem' }}
        >
          {icon} {title}
        </p>
      </div>
      <p className="font-sans text-sm text-center" style={{ color: '#C4A882', lineHeight: 1.6 }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function S17Empresas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-17" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-4xl px-6">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Empresas e IA
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-10"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          três posturas diferentes no mercado
        </motion.p>

        <div className="flex gap-8 md:gap-12">
          <Column
            title="Proibiram"
            icon="🚫"
            desc="Bloquearam o uso de ferramentas de IA generativa pelos funcionários, preocupadas com segurança de dados e confidencialidade."
            delay={0.2}
            inView={inView}
          />
          {/* Divider */}
          <motion.div
            style={{ width: '1px', background: '#333', flexShrink: 0 }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <Column
            title="Limitaram"
            icon="⚠️"
            desc="Permitiram uso restrito em contextos controlados, com políticas claras de aprovação e auditoria de uso."
            delay={0.3}
            inView={inView}
          />
          {/* Divider */}
          <motion.div
            style={{ width: '1px', background: '#333', flexShrink: 0 }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <Column
            title="All-in"
            icon="✅"
            desc="Adotaram IA como estratégia central, integrando modelos na operação, reduzindo headcount e reposicionando times."
            delay={0.4}
            inView={inView}
          />
        </div>
      </div>

      <NextArrow nextId="slide-17b" />
    </section>
  );
}
