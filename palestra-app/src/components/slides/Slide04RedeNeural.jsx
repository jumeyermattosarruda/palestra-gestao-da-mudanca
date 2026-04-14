import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const LAYERS = [
  [{ x: 80, y: 130 }, { x: 80, y: 210 }, { x: 80, y: 290 }, { x: 80, y: 370 }],
  [{ x: 220, y: 100 }, { x: 220, y: 180 }, { x: 220, y: 260 }, { x: 220, y: 340 }, { x: 220, y: 420 }],
  [{ x: 360, y: 100 }, { x: 360, y: 180 }, { x: 360, y: 260 }, { x: 360, y: 340 }, { x: 360, y: 420 }],
  [{ x: 500, y: 170 }, { x: 500, y: 260 }, { x: 500, y: 350 }],
];

const LAYER_LABELS = ['Input', 'Camada Oculta', '', 'Output'];

const CONNECTIONS = [];
for (let l = 0; l < LAYERS.length - 1; l++) {
  for (const src of LAYERS[l]) {
    for (const dst of LAYERS[l + 1]) {
      CONNECTIONS.push({ x1: src.x, y1: src.y, x2: dst.x, y2: dst.y });
    }
  }
}

export default function Slide04RedeNeural() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="slide-04" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Como a IA Funciona
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-4"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          uma rede neural simplificada
        </motion.p>

        <div style={{ width: '100%', maxWidth: 580 }}>
          <svg viewBox="0 0 580 520" width="100%" height="auto">
            {CONNECTIONS.map((c, i) => (
              <motion.line key={i}
                x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                stroke="#1C1208" strokeWidth="0.8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.12 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            ))}

            {LAYERS.map((layer, li) =>
              layer.map((node, ni) => {
                const totalPrev = LAYERS.slice(0, li).reduce((s, l) => s + l.length, 0);
                const idx = totalPrev + ni;
                const delay = 0.4 + idx * 0.08;
                return (
                  <motion.circle key={`${li}-${ni}`}
                    cx={node.x} cy={node.y} r={14}
                    fill="white" stroke="#1C1208" strokeWidth="2"
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1, fill: ['#FFFFFF', '#D4845A', '#FFFFFF'] } : {}}
                    transition={{ delay, duration: 0.5, fill: { delay: delay + 0.1, duration: 0.6, times: [0, 0.5, 1] } }}
                  />
                );
              })
            )}

            {LAYER_LABELS.map((label, li) => (
              label ? (
                <motion.text key={li}
                  x={LAYERS[li][0].x} y={470}
                  textAnchor="middle" fill="#888" fontSize="11" fontFamily="Inter"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  {label}
                </motion.text>
              ) : null
            ))}
          </svg>
        </div>

        <motion.div
          className="flex gap-8 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="text-center">
            <p className="font-sans font-semibold text-sm" style={{ color: '#1C1208' }}>Busca</p>
            <p className="font-sans text-xs" style={{ color: '#888' }}>encontra o que existe</p>
          </div>
          <div style={{ width: '2px', background: '#D4845A' }} />
          <div className="text-center">
            <p className="font-sans font-semibold text-sm" style={{ color: '#1C1208' }}>Geração</p>
            <p className="font-sans text-xs" style={{ color: '#888' }}>cria algo novo</p>
          </div>
        </motion.div>
      </div>
      <NextArrow nextId="slide-05" />
    </section>
  );
}
