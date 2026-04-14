import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

export default function Slide05Contexto() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-05" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-4xl px-6 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contexto Melhora o Resultado
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-8"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          quanto mais específico o cone, mais preciso o resultado
        </motion.p>

        <div style={{ width: '100%', maxWidth: 560 }}>
          <svg viewBox="0 0 560 400" width="100%" height="auto">
            <motion.g initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}>
              <motion.polygon points="50,200 160,60 160,340" fill="#D4845A"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 0.15 } : {}} transition={{ delay: 0.5 }} />
              <line x1="50" y1="200" x2="160" y2="60" stroke="#D4845A" strokeWidth="2" opacity="0.7" />
              <line x1="50" y1="200" x2="160" y2="340" stroke="#D4845A" strokeWidth="2" opacity="0.7" />
              {[[120,120],[140,170],[110,210],[145,250],[130,290],[100,150],[155,130],[105,270],[150,300]].map(([x,y],i) => (
                <motion.circle key={i} cx={x} cy={y} r={4} fill="#4A90D9"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 0.7, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }} />
              ))}
              <text x="50" y="380" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter">Prompt vago</text>
              <text x="155" y="380" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter">resultado genérico</text>
            </motion.g>

            <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
              <text x="280" y="200" textAnchor="middle" fill="#D4845A" fontSize="28" fontFamily="Inter">→</text>
            </motion.g>

            <motion.g initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }}>
              <motion.polygon points="400,200 510,155 510,245" fill="#D4845A"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 0.2 } : {}} transition={{ delay: 0.8 }} />
              <line x1="400" y1="200" x2="510" y2="155" stroke="#D4845A" strokeWidth="2" opacity="0.9" />
              <line x1="400" y1="200" x2="510" y2="245" stroke="#D4845A" strokeWidth="2" opacity="0.9" />
              <motion.circle cx={500} cy={200} r={8} fill="#D4845A"
                initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.2 }} />
              <text x="400" y="380" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter">Prompt estruturado</text>
              <text x="510" y="380" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter">resultado preciso</text>
            </motion.g>

            <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}>
              <text x="18" y="196" textAnchor="middle" fill="#7B5EA7" fontSize="11" fontFamily="Inter" fontWeight="600">Persona</text>
              <text x="210" y="75" textAnchor="middle" fill="#4A90D9" fontSize="11" fontFamily="Inter" fontWeight="600">Contexto</text>
              <text x="210" y="340" textAnchor="middle" fill="#4A9D6F" fontSize="11" fontFamily="Inter" fontWeight="600">Estrutura</text>
            </motion.g>
          </svg>
        </div>
      </div>
      <NextArrow nextId="slide-06" />
    </section>
  );
}
