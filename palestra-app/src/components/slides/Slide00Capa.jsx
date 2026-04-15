import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NextArrow from '../NextArrow';

const TITLE = 'Do Hype à Prática';

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

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function Slide00Capa() {
  const [displayText, setDisplayText] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);
  const [photoError, setPhotoError] = useState(false);

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

      {/* Photo — top left */}
      <motion.div
        className="absolute"
        style={{ top: '2.5rem', left: '2.5rem' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {!photoError ? (
          <img
            src="./assets/foto-juliana.jpg"
            alt="Juliana Meyer"
            onError={() => setPhotoError(true)}
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              border: '2px solid #D4845A',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: '#D4845A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              color: '#1C1208',
            }}
          >
            JM
          </div>
        )}
      </motion.div>

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

      {/* Footer — only on slide 00 */}
      <motion.footer
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex items-center gap-3">
          <p className="font-sans" style={{ fontSize: '13px', color: '#F0E6D6' }}>
            Juliana Meyer
          </p>
          <a
            href="https://www.linkedin.com/in/oijulianameyer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'transparent',
              border: '0.5px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/jumeyermattosarruda"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'transparent',
              border: '0.5px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GitHubIcon />
          </a>
        </div>
      </motion.footer>

      <NextArrow nextId="slide-01" />
    </section>
  );
}
