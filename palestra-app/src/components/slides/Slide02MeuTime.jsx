import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const CENTER = { x: 320, y: 280 };

const MAIN_AGENTS = [
  { label: 'ChatGPT', angle: -80, r: 140 },
  { label: 'Claude', angle: -30, r: 150 },
  { label: 'Claude Code', angle: 20, r: 155 },
  { label: 'Ivy', angle: 65, r: 140 },
  { label: 'Nick', angle: 110, r: 145 },
];

const DAY_AGENTS = [
  { label: 'Meta AI', angle: 160, r: 200 },
  { label: 'Lovable', angle: -145, r: 195 },
  { label: 'GitHub Copilot', angle: -115, r: 205 },
  { label: 'MS Copilot', angle: 200, r: 195 },
];

function toCart(cx, cy, angle, r) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function Slide02MeuTime() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const nodeVariant = (delay) => ({
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay, duration: 0.4, ease: 'easeOut' } },
  });

  const lineVariant = (delay) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { delay, duration: 0.4 } },
  });

  return (
    <section id="slide-02" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Meu Time de IA
        </motion.h2>
        <motion.p
          className="font-sans text-sm mb-4 text-center"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          ferramentas que uso no dia a dia
        </motion.p>

        {/* SVG Diagram */}
        <div className="w-full overflow-visible" style={{ maxWidth: 640 }}>
          <svg viewBox="0 0 640 560" width="100%" height="auto">
            {/* Lines to main agents */}
            {MAIN_AGENTS.map((agent, i) => {
              const pos = toCart(CENTER.x, CENTER.y, agent.angle, agent.r);
              return (
                <motion.line
                  key={`main-line-${i}`}
                  x1={CENTER.x} y1={CENTER.y}
                  x2={pos.x} y2={pos.y}
                  stroke="#1C1208" strokeWidth="1.5" opacity="0.3"
                  variants={lineVariant(0.3 + i * 0.12)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                />
              );
            })}

            {/* Dashed lines to day agents */}
            {DAY_AGENTS.map((agent, i) => {
              const pos = toCart(CENTER.x, CENTER.y, agent.angle, agent.r);
              return (
                <motion.line
                  key={`day-line-${i}`}
                  x1={CENTER.x} y1={CENTER.y}
                  x2={pos.x} y2={pos.y}
                  stroke="#888" strokeWidth="1" strokeDasharray="5,4" opacity="0.5"
                  variants={lineVariant(0.6 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                />
              );
            })}

            {/* Center node */}
            <motion.circle
              cx={CENTER.x} cy={CENTER.y} r={36}
              fill="#D4845A"
              variants={nodeVariant(0)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            />
            <motion.text
              x={CENTER.x} y={CENTER.y + 6}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontFamily="Inter"
              fontWeight="600"
              variants={nodeVariant(0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Eu
            </motion.text>

            {/* Main agent nodes */}
            {MAIN_AGENTS.map((agent, i) => {
              const pos = toCart(CENTER.x, CENTER.y, agent.angle, agent.r);
              return (
                <motion.g
                  key={`main-${i}`}
                  variants={nodeVariant(0.5 + i * 0.12)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <circle cx={pos.x} cy={pos.y} r={22} fill="#1C1208" />
                  <text
                    x={pos.x}
                    y={pos.y + (agent.angle > 80 || agent.angle < -80 ? 36 : -28)}
                    textAnchor="middle"
                    fill="#1C1208"
                    fontSize="10"
                    fontFamily="Inter"
                  >
                    {agent.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Day agent nodes */}
            {DAY_AGENTS.map((agent, i) => {
              const pos = toCart(CENTER.x, CENTER.y, agent.angle, agent.r);
              return (
                <motion.g
                  key={`day-${i}`}
                  variants={nodeVariant(0.9 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <circle cx={pos.x} cy={pos.y} r={16} fill="#888" />
                  <text
                    x={pos.x}
                    y={pos.y + (pos.y > CENTER.y ? 32 : -22)}
                    textAnchor="middle"
                    fill="#555"
                    fontSize="9"
                    fontFamily="Inter"
                  >
                    {agent.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Legend */}
            <circle cx={30} cy={510} r={8} fill="#1C1208" />
            <text x={45} y={514} fill="#888" fontSize="10" fontFamily="Inter">Agentes principais</text>
            <circle cx={160} cy={510} r={6} fill="#888" />
            <text x={173} y={514} fill="#888" fontSize="10" fontFamily="Inter">Dia a dia</text>
          </svg>
        </div>
      </div>

      <NextArrow nextId="slide-02b" />
    </section>
  );
}
