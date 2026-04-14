import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NextArrow from '../NextArrow';

const TITLE = 'Do Hype à Prática';

// Decorative asterisks positions
const STARS = [
  { top: '8%', left: '4%', size: 32, rotate: 12 },
  { top: '15%', right: '6%', size: 20, rotate: -25 },
  { top: '35%', left: '2%', size: 16, rotate: 40 },
  { top: '65%', right: '3%', size: 24, rotate: -10 },
  { top: '78%', left: '8%', size: 18, rotate: 55 },
  { top: '88%', right: '12%', size: 14, rotate: 30 },
  { top: '50%', left: '92%', size: 12, rotate: -45 },
  { top: '25%', left: '85%', size: 20, rotate: 20 },
];

function Asterisk({ size = 24, rotate = 0, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <line x1="12" y1="2" x2="12" y2="22" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="#D4845A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function Slide00Capa() {
  const [displayText, setDisplayText] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(TITLE.slice(0, i + 1));
      i++;
      if (i >= TITLE.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="slide-00" className="slide slide-dark">
      {/* Decorative asterisks */}
      {STARS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left, right: s.right }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
        >
          <Asterisk size={s.size} rotate={s.rotate} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="flex flex-col items-center justify-center px-6 text-center z-10 w-full max-w-4xl">
        {/* Pre-label */}
        <motion.p
          className="font-sans text-sm tracking-widest uppercase mb-8"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          palestra de IA aplicada
        </motion.p>

        {/* Typewriter title */}
        <h1
          className="font-serif font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            color: '#F0E6D6',
            letterSpacing: '-0.02em',
          }}
        >
          {displayText}
          {!doneTyping && (
            <span
              className="inline-block ml-1 align-middle"
              style={{
                width: '3px',
                height: '0.85em',
                background: '#D4845A',
                animation: 'blink 1s step-end infinite',
              }}
            />
          )}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-sans text-lg md:text-xl"
          style={{ color: '#F0E6D6', opacity: 0.6, maxWidth: '500px' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          como a IA entra (de verdade) na rotina de trabalho
        </motion.p>

        {/* Divider */}
        <motion.div
          className="mt-10 mb-6"
          style={{ width: '48px', height: '2px', background: '#D4845A' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <p className="font-sans text-sm" style={{ color: '#C4A882' }}>
          Jumeyermatt Arruda — Gestão da Mudança · UnB
        </p>
      </motion.footer>

      <NextArrow nextId="slide-01" />
    </section>
  );
}
