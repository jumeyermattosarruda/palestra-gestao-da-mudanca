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
    const step = 16;
    const increments = 1200 / step;
    const increment = target / increments;
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else { setCount(Math.floor(start)); }
      }, step);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, target, delay]);
  return <span>{count}{suffix}</span>;
}

export default function Slide08Dados() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="slide-08" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-5xl px-6">
        <motion.h2 className="font-serif text-center mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          Dados do Mercado
        </motion.h2>
        <div className="grid grid-cols-12 gap-6">
          {[
            { span: 'col-span-12 md:col-span-5', delay: 0.1, idx: 0, color: '#D4845A', cd: 200 },
            { span: 'col-span-6 md:col-span-4', delay: 0.25, idx: 1, color: '#F0E6D6', cd: 400 },
            { span: 'col-span-6 md:col-span-3', delay: 0.4, idx: 2, color: '#D4845A', cd: 600 },
            { span: 'col-span-6 md:col-span-4 md:col-start-3', delay: 0.55, idx: 3, color: '#F0E6D6', cd: 800 },
            { span: 'col-span-6 md:col-span-4', delay: 0.7, idx: 4, color: '#D4845A', cd: 1000 },
          ].map(({ span, delay, idx, color, cd }) => (
            <motion.div key={idx} className={`${span} flex flex-col justify-center`}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay }}>
              <p className="font-serif font-bold leading-none" style={{ fontSize: STATS[idx].size, color }}>
                <Counter target={STATS[idx].value} suffix={STATS[idx].suffix} inView={inView} delay={cd} />
              </p>
              <p className="font-sans text-sm mt-2" style={{ color: '#C4A882' }}>{STATS[idx].label}</p>
            </motion.div>
          ))}
        </div>
        <motion.p className="font-sans text-xs text-center mt-8"
          style={{ color: '#C4A882', opacity: 0.6 }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.2 }}>
          Fontes: Microsoft Work Trend Index 2024, Anthropic Economic Report 2024, WEF Future of Jobs 2025
        </motion.p>
      </div>
      <NextArrow nextId="slide-08b" />
    </section>
  );
}
