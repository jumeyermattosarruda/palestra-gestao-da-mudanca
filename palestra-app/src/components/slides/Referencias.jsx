import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reports = [
  {
    label: 'AI Index 2026 — Stanford HAI',
    url: 'https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report',
  },
  {
    label: 'Impactos no mercado de trabalho — Anthropic',
    url: 'https://www.anthropic.com/research/labor-market-impacts',
  },
  {
    label: 'Four Futures for Jobs — WEF 2025 (PDF)',
    url: 'https://reports.weforum.org/docs/WEF_Four_Futures_for_Jobs_in_the_New_Economy_AI_and_Talent_in_2030_2025.pdf',
  },
  {
    label: 'AI in Action: Beyond Experimentation — WEF 2025 (PDF)',
    url: 'https://reports.weforum.org/docs/WEF_AI_in_Action_Beyond_Experimentation_to_Transform_Industry_2025.pdf',
  },
];

const influencers = [
  { handle: '@anacron.ia', url: 'https://www.instagram.com/anacron.ia/' },
  { handle: '@cahdoria', url: 'https://www.instagram.com/cahdoria/' },
  { handle: '@theaipanicclub', url: 'https://www.instagram.com/theaipanicclub/' },
];

const linkClass =
  'text-slate-200 hover:text-rose-300 underline underline-offset-4 transition-colors duration-200';

export default function Referencias() {
  const [titleRef, titleInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [sec1Ref, sec1InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [sec2Ref, sec2InView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="slide-17c"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-16"
    >
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: -30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Para ir além 📚
      </motion.h2>

      <div className="w-full max-w-2xl flex flex-col gap-10">
        <motion.div
          ref={sec1Ref}
          initial={{ opacity: 0, x: -40 }}
          animate={sec1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Relatórios &amp; Pesquisas
          </p>
          <ul className="flex flex-col gap-2">
            {reports.map((r) => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noreferrer" className={linkClass}>
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={sec2Ref}
          initial={{ opacity: 0, x: -40 }}
          animate={sec2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Quem acompanhar
          </p>
          <ul className="flex flex-col gap-2">
            {influencers.map((i) => (
              <li key={i.url}>
                <a
                  href={i.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkClass} font-mono`}
                >
                  {i.handle}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
