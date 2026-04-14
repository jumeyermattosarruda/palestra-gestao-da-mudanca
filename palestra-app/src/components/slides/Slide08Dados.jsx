import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const STATS = [
  { value: 77, suffix: '%', label: 'dos trabalhadores usam IA por conta própria', size: '5rem' },
  { value: 3, suffix: 'x', label: 'mais rápido em tarefas com assistência de IA', size: '5.5rem' },
  { value: 92, suffix: '%', label: 'líderes acreditam que IA é importante para o futuro', size: '4.8rem' },
  { value: 40, suffix: '%', label: 'das habilidades serão transformadas nos próximos 3 anos', size: '5rem' },
  { value: 28, suffix: '%', label: 'de aumento de produtividade reportado em estudos iniciais', size: '4.5rem' },
];

function Counter({ target, suffix, inView, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increments = duration / step;
    const increment = target / increments;
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Slide08Dados() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-08" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-5xl px-6">
        <motion.h2
          className="font-serif text-center mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Dados do Mercado
        </motion.h2>

        {/* Grid layout — intentionally asymmetric */}
        <div className="grid grid-cols-12 gap-6">
          {/* Stat 1 — large, left */}
          <motion.div
            className="col-span-12 md:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <p
              className="font-serif font-bold leading-none"
              style={{ fontSize: STATS[0].size, color: '#D4845A' }}
            >
              <Counter target={STATS[0].value} suffix={STATS[0].suffix} inView={inView} delay={200} />
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>
              {STATS[0].label}
            </p>
          </motion.div>

          {/* Stat 2 — top right */}
          <motion.div
            className="col-span-6 md:col-span-4 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
          >
            <p
              className="font-serif font-bold leading-none"
              style={{ fontSize: STATS[1].size, color: '#F0E6D6' }}
            >
              <Counter target={STATS[1].value} suffix={STATS[1].suffix} inView={inView} delay={400} />
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>
              {STATS[1].label}
            </p>
          </motion.div>

          {/* Stat 3 — top right corner */}
          <motion.div
            className="col-span-6 md:col-span-3 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <p
              className="font-serif font-bold leading-none"
              style={{ fontSize: STATS[2].size, color: '#D4845A' }}
            >
              <Counter target={STATS[2].value} suffix={STATS[2].suffix} inView={inView} delay={600} />
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>
              {STATS[2].label}
            </p>
          </motion.div>

          {/* Stat 4 — bottom left */}
          <motion.div
            className="col-span-6 md:col-span-4 md:col-start-3 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            <p
              className="font-serif font-bold leading-none"
              style={{ fontSize: STATS[3].size, color: '#F0E6D6' }}
            >
              <Counter target={STATS[3].value} suffix={STATS[3].suffix} inView={inView} delay={800} />
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>
              {STATS[3].label}
            </p>
          </motion.div>

          {/* Stat 5 — bottom right */}
          <motion.div
            className="col-span-6 md:col-span-4 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <p
              className="font-serif font-bold leading-none"
              style={{ fontSize: STATS[4].size, color: '#D4845A' }}
            >
              <Counter target={STATS[4].value} suffix={STATS[4].suffix} inView={inView} delay={1000} />
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>
              {STATS[4].label}
            </p>
          </motion.div>
        </div>

        <motion.p
          className="font-sans text-xs text-center mt-8"
          style={{ color: '#C4A882', opacity: 0.6 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.2 }}
        >
          Fontes: Microsoft Work Trend Index 2024, Anthropic Economic Report 2024, WEF Future of Jobs 2025
        </motion.p>
      </div>

      <NextArrow nextId="slide-08b" />
    </section>
  );
}
