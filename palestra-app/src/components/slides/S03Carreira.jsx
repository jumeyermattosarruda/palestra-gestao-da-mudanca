import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const NODES = [
  { id: 'A', label: 'Graduação UnB',               cx: 280, cy: 260, r: 28, cor: '#D4845A' },
  { id: 'B', label: 'Estágios de experimentação',  cx: 420, cy: 160, r: 18, cor: '#888' },
  { id: 'C', label: 'Intercâmbios',                  cx: 600, cy: 120, r: 20, cor: '#D4845A' },
  { id: 'D', label: 'Estágio em Tech Writing',      cx: 660, cy: 270, r: 18, cor: '#888' },
  { id: 'E', label: 'Tech Writing Manager',         cx: 580, cy: 380, r: 22, cor: '#D4845A' },
  { id: 'F', label: 'Comunidade Tech Writing BR',   cx: 380, cy: 420, r: 18, cor: '#888' },
  { id: 'G', label: 'The Manuscript',               cx: 200, cy: 400, r: 18, cor: '#888' },
  { id: 'H', label: 'Product Marketing',            cx: 150, cy: 240, r: 20, cor: '#D4845A' },
  { id: 'I', label: 'Senior PMM — iConnections',   cx: 120, cy: 120, r: 28, cor: '#D4845A' },
];

const CONNECTIONS = [
  ['A', 'B'], ['A', 'H'], ['B', 'C'], ['B', 'D'],
  ['D', 'E'], ['E', 'F'], ['F', 'G'], ['G', 'H'], ['H', 'I'],
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function S03Carreira() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-03" className="slide slide-dark" ref={ref}>
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-1"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#F0E6D6' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          minha trajetória
        </motion.h2>
        <motion.p
          className="font-sans text-xs text-center mb-4"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          uma constelação de experiências
        </motion.p>

        <div style={{ width: '100%', maxWidth: 900 }}>
          <svg viewBox="0 0 900 520" width="100%" height="auto">
            {/* Connections */}
            {CONNECTIONS.map(([a, b], i) => {
              const na = nodeMap[a];
              const nb = nodeMap[b];
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={na.cx} y1={na.cy}
                  x2={nb.cx} y2={nb.cy}
                  stroke="#555"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.18, duration: 0.5 }}
                />
              );
            })}

            {/* Nodes */}
            {NODES.map((node, i) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.4, ease: 'easeOut' }}
                style={{ originX: `${node.cx}px`, originY: `${node.cy}px` }}
              >
                <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.cor} />
              </motion.g>
            ))}

            {/* Labels */}
            {NODES.map((node, i) => (
              <motion.text
                key={`label-${node.id}`}
                x={node.cx}
                y={node.cy + node.r + 16}
                textAnchor="middle"
                fill="#C4A882"
                fontSize="11"
                fontFamily="Inter"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.12 }}
              >
                {node.label}
              </motion.text>
            ))}
          </svg>
        </div>
      </div>

      <NextArrow nextId="slide-04" />
    </section>
  );
}
