import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const LEFT = [
  { icon: '🎯', label: 'Delegar', desc: 'Atribuir tarefas com clareza' },
  { icon: '🔍', label: 'Avaliar', desc: 'Checar qualidade e resultado' },
  { icon: '🔄', label: 'Iterar', desc: 'Dar feedback e melhorar' },
];

const RIGHT = [
  { icon: '✍️', label: 'Prompting', desc: 'Instruir com contexto e precisão' },
  { icon: '👁', label: 'Revisar', desc: 'Conferir o output criticamente' },
  { icon: '💬', label: 'Refinar', desc: 'Ajustar e re-promtar até acertar' },
];

export default function Slide03IATime() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-03" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-5xl px-6">
        {/* Title */}
        <motion.h2
          className="font-serif text-center mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          IA = Gerenciar um Time
        </motion.h2>

        {/* Split layout */}
        <div className="flex items-stretch gap-0 relative">
          {/* Left column */}
          <motion.div
            className="flex-1 flex flex-col gap-5 pr-8"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="font-sans font-semibold text-sm tracking-widest uppercase mb-2"
              style={{ color: '#D4845A' }}
            >
              Gestão de Pessoas
            </p>
            {LEFT.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-sans font-semibold" style={{ color: '#F0E6D6', fontSize: '1rem' }}>
                    {item.label}
                  </p>
                  <p className="font-sans text-sm" style={{ color: '#C4A882' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Center divider */}
          <div className="flex flex-col items-center">
            <motion.div
              style={{ width: '2px', background: '#D4845A', borderRadius: '2px' }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            />
          </div>

          {/* Right column */}
          <motion.div
            className="flex-1 flex flex-col gap-5 pl-8"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="font-sans font-semibold text-sm tracking-widest uppercase mb-2"
              style={{ color: '#D4845A' }}
            >
              Gestão de IA
            </p>
            {RIGHT.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-sans font-semibold" style={{ color: '#F0E6D6', fontSize: '1rem' }}>
                    {item.label}
                  </p>
                  <p className="font-sans text-sm" style={{ color: '#C4A882' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Impact phrase */}
        <motion.p
          className="font-serif italic text-center mt-10"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#C4A882' }}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          "A diferença está em saber pedir, avaliar e iterar — não em saber programar."
        </motion.p>
      </div>

      <NextArrow nextId="slide-04" />
    </section>
  );
}
