import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

function LogoBadge({ bg, text, textColor = 'white' }) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '0.85rem',
        color: textColor,
        flexShrink: 0,
        margin: '0 auto 6px',
      }}
    >
      {text}
    </div>
  );
}

const BANNED = [
  { logo: { bg: '#555555', text: 'Ap' }, name: 'Apple' },
  { logo: { bg: '#1428A0', text: 'Sa' }, name: 'Samsung' },
  { logo: { bg: '#2C2C2C', text: 'GS' }, name: 'Goldman Sachs' },
];

const LIMITED = [
  { logo: { bg: '#003087', text: 'JP' }, name: 'JPMorgan' },
];

const ALLIN = [
  { logo: { bg: '#58CC02', text: 'D'  }, name: 'Duolingo' },
  { logo: { bg: '#FFB3C7', text: 'K', textColor: '#1C1208' }, name: 'Klarna' },
  { logo: { bg: '#96BF48', text: 'S'  }, name: 'Shopify' },
  { logo: { bg: '#0A2540', text: 'iC' }, name: 'iConnections' },
  { logo: { bg: '#F54E00', text: 'PH' }, name: 'PostHog' },
  { logo: { bg: '#6B46C1', text: 'A'  }, name: 'Alice' },
];

function Column({ title, icon, items, delay, inView }) {
  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <p className="font-sans font-semibold text-sm" style={{ color: '#F0E6D6' }}>
          {icon} {title}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <LogoBadge
              bg={item.logo.bg}
              text={item.logo.text}
              textColor={item.logo.textColor}
            />
            <p className="font-sans text-sm" style={{ color: '#C4A882' }}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
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
            items={BANNED}
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
            items={LIMITED}
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
            items={ALLIN}
            delay={0.4}
            inView={inView}
          />
        </div>
      </div>

      <NextArrow nextId="slide-18" />
    </section>
  );
}
