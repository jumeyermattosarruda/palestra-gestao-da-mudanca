import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

function Counter({ target, suffix, prefix, inView, delay = 0 }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

const CARDS = [
  {
    stat: null,
    statText: '97%',
    target: 97,
    suffix: '%',
    prefix: '',
    label: 'do uso real de IA cobre tarefas que LLMs já poderiam fazer teoricamente',
    fonte: 'Anthropic — Labor market impacts of AI, Mar 2026',
    href: 'https://www.anthropic.com/research/labor-market-impacts',
    col: 'col-span-12 md:col-span-5',
    statSize: '5rem',
    statColor: '#D4845A',
    counter: true,
  },
  {
    statText: '88%',
    target: 88,
    suffix: '%',
    prefix: '',
    label: 'das organizações já usam IA em pelo menos uma função — ante 55% em 2022',
    fonte: 'WEF — Four Futures for Jobs, Jan 2026',
    href: 'https://reports.weforum.org/docs/WEF_Four_Futures_for_Jobs_in_the_New_Economy_AI_and_Talent_in_2030_2025.pdf',
    col: 'col-span-6 md:col-span-4',
    statSize: '4rem',
    statColor: '#F0E6D6',
    counter: true,
  },
  {
    statText: '54%',
    target: 54,
    suffix: '%',
    prefix: '',
    label: 'dos executivos globais esperam que a IA substitua empregos existentes',
    fonte: 'WEF — Four Futures for Jobs, Jan 2026',
    href: 'https://reports.weforum.org/docs/WEF_Four_Futures_for_Jobs_in_the_New_Economy_AI_and_Talent_in_2030_2025.pdf',
    col: 'col-span-6 md:col-span-3',
    statSize: '3.5rem',
    statColor: '#D4845A',
    counter: true,
    tooltip: '54.3%',
  },
  {
    statText: '$581.7bi',
    target: 581,
    suffix: 'bi',
    prefix: '$',
    label: 'em investimentos corporativos globais em IA em 2025 — alta de 130% vs. ano anterior',
    fonte: 'Stanford HAI — AI Index 2026',
    href: 'https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report',
    col: 'col-span-6 md:col-span-4 md:col-start-3',
    statSize: '3.8rem',
    statColor: '#F0E6D6',
    counter: true,
  },
  {
    statText: '53%',
    target: 53,
    suffix: '%',
    prefix: '',
    label: 'de adoção global em 3 anos — mais rápido que o PC ou a internet',
    fonte: 'Stanford HAI — AI Index 2026',
    href: 'https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report',
    col: 'col-span-6 md:col-span-4',
    statSize: '4rem',
    statColor: '#D4845A',
    counter: true,
  },
  {
    qualitative: true,
    label: 'Profissionais mais expostos à IA têm maior probabilidade de ser mulheres, mais escolarizados e mais bem pagos',
    fonte: 'Anthropic — Labor market impacts of AI, Mar 2026',
    href: 'https://www.anthropic.com/research/labor-market-impacts',
    col: 'col-span-12 md:col-span-5',
  },
];

function FemaleIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 8 }}>
      <circle cx="12" cy="8" r="5" stroke="#D4845A" strokeWidth="1.5"/>
      <path d="M12 13v8M9 18h6" stroke="#D4845A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Slide08Dados() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-07" className="slide" style={{ background: '#1C1208' }} ref={ref}>
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

        <div className="grid grid-cols-12 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              className={card.col + ' flex flex-col justify-center'}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              {card.qualitative ? (
                <motion.div
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.85 }}
                >
                  <FemaleIcon />
                  <p className="font-sans" style={{ fontSize: '13px', color: '#C4A882', lineHeight: 1.5 }}>
                    {card.label}
                  </p>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans"
                    style={{ fontSize: '11px', color: '#888', marginTop: 4 }}
                  >
                    {card.fonte}
                  </a>
                </motion.div>
              ) : (
                <>
                  <p
                    className="font-serif font-bold leading-none"
                    style={{ fontSize: card.statSize, color: card.statColor }}
                    title={card.tooltip}
                  >
                    {card.counter ? (
                      <Counter
                        target={card.target}
                        suffix={card.suffix}
                        prefix={card.prefix}
                        inView={inView}
                        delay={200 + i * 200}
                      />
                    ) : (
                      card.statText
                    )}
                  </p>
                  <p className="font-sans text-sm mt-2" style={{ color: '#C4A882', wordWrap: 'break-word' }}>
                    {card.label}
                  </p>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans"
                    style={{ fontSize: '11px', color: '#888', marginTop: 4 }}
                  >
                    {card.fonte}
                  </a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <NextArrow nextId="slide-08" />
    </section>
  );
}
