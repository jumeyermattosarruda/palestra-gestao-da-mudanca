import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const TABS = [
  {
    label: 'Exposição por área',
    src: './assets/radar-anthropic.png',
    caption: 'Potencial teórico vs. uso real por categoria ocupacional',
    fonte: 'Anthropic — Labor market impacts of AI, Mar 2026',
    href: 'https://www.anthropic.com/research/labor-market-impacts',
  },
  {
    label: 'Tempo de trabalho',
    src: './assets/work time exposure.png',
    caption: '',
    fonte: '',
    href: '',
  },
  {
    label: 'Adoção por função',
    src: './assets/adoption by function.png',
    caption: '',
    fonte: '',
    href: '',
  },
];

function ImageWithFallback({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          width: '100%',
          maxHeight: '70vh',
          background: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          minHeight: 200,
        }}
      >
        <p className="font-sans text-sm" style={{ color: '#888' }}>
          [imagem será adicionada]
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      style={{ objectFit: 'contain', maxHeight: '70vh', width: '100%', borderRadius: 8 }}
    />
  );
}

export default function Slide08bRadar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  const tab = TABS[activeTab];

  return (
    <section id="slide-15" className="slide" style={{ background: '#FFFFFF' }} ref={ref}>
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          O Gap Entre Potencial e Uso
        </motion.h2>

        {/* Tabs */}
        <div className="flex gap-0 mb-6 border-b w-full justify-center" style={{ borderColor: '#E8DDD0' }}>
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="font-sans text-sm px-5 py-3 transition-all"
              style={{
                color: activeTab === i ? '#1C1208' : '#888',
                borderBottom: activeTab === i ? '2px solid #D4845A' : '2px solid transparent',
                background: 'none',
                cursor: 'pointer',
                marginBottom: '-1px',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Image area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="w-full flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ImageWithFallback src={tab.src} alt={tab.label} />

            {tab.caption && (
              <p className="font-sans text-xs text-center" style={{ color: '#888' }}>
                {tab.caption}
                {tab.href && (
                  <>
                    {' · '}
                    <a
                      href={tab.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#888', textDecoration: 'underline' }}
                    >
                      {tab.fonte}
                    </a>
                  </>
                )}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <NextArrow nextId="slide-16" />
    </section>
  );
}
