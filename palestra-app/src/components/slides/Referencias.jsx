import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

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

export default function Referencias() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-17c" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-2xl px-6">
        <motion.h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#F0E6D6',
            marginBottom: '0.5rem',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Pra ir além
        </motion.h2>

        <motion.div
          style={{ width: '60px', height: '2px', background: '#D4845A', marginBottom: '2rem' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
        />

        {/* Relatórios & Pesquisas */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#D4845A',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            Relatórios &amp; Pesquisas
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {reports.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans"
                  style={{
                    color: '#C4A882',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4845A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C4A882')}
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quem acompanhar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#D4845A',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            Quem acompanhar
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {influencers.map((i) => (
              <li key={i.url}>
                <a
                  href={i.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'monospace',
                    color: '#C4A882',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4845A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C4A882')}
                >
                  {i.handle}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <NextArrow nextId="slide-18" />
    </section>
  );
}
