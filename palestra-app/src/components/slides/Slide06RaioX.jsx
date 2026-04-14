import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

const COMPONENTS = [
  { label: 'Persona', color: '#7B5EA7', angle: -90, r: 140, desc: 'Define quem a IA deve ser: especialista, tom de voz, nível técnico.', example: 'ex: “Aja como um gerente sênior de produto com experiência em startups”' },
  { label: 'Contexto', color: '#4A90D9', angle: -30, r: 140, desc: 'Fornece o cenário e o histórico necessário para a IA entender a situação.', example: 'ex: “Estou preparando uma apresentação para investidores Série A”' },
  { label: 'Tarefa', color: '#4A9D6F', angle: 30, r: 140, desc: 'O que exatamente você quer que a IA faça — seja específico e acionável.', example: 'ex: “Crie 3 versões do slide de abertura com ângulos diferentes”' },
  { label: 'Restrições', color: '#D4845A', angle: 90, r: 140, desc: 'Limites e regras que a IA deve respeitar ao gerar a resposta.', example: 'ex: “Máximo 150 palavras, sem jargões técnicos, tom informal”' },
  { label: 'Formato', color: '#C4607A', angle: 150, r: 140, desc: 'Como você quer receber o resultado: lista, tabela, markdown, JSON…', example: 'ex: “Responda em tópicos com bullet points, com título em negrito”' },
  { label: 'Exemplos', color: '#4A9D9D', angle: -150, r: 140, desc: 'Amostras do que você quer (ou não quer) — guiam o estilo e conteúdo.', example: 'ex: “Parecido com este email que escrevi: [cola o texto]”' },
];

const CX = 200, CY = 200;

function toCart(angle, r) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export default function Slide06RaioX() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [active, setActive] = useState(null);

  return (
    <section id="slide-06" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 flex flex-col items-center">
          <motion.h2
            className="font-serif text-center mb-1"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1C1208' }}
            initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Raio-X do Prompt
          </motion.h2>
          <p className="font-sans text-xs text-center mb-2" style={{ color: '#C4A882' }}>clique em cada componente</p>

          <svg viewBox="0 0 400 400" width="100%" height="auto" style={{ maxWidth: 380 }}>
            {COMPONENTS.map((c, i) => {
              const pos = toCart(c.angle, c.r);
              return (
                <motion.line key={`line-${i}`}
                  x1={CX} y1={CY} x2={pos.x} y2={pos.y}
                  stroke={c.color} strokeWidth="1.5" opacity="0.4"
                  initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                />
              );
            })}

            <motion.circle cx={CX} cy={CY} r={38} fill="#1C1208"
              initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.4 }} />
            <motion.text x={CX} y={CY + 6} textAnchor="middle" fill="white" fontSize="14" fontFamily="Inter" fontWeight="600"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
              Prompt
            </motion.text>

            {COMPONENTS.map((c, i) => {
              const pos = toCart(c.angle, c.r);
              const labelPos = toCart(c.angle, c.r + 30);
              return (
                <motion.g key={i} style={{ cursor: 'pointer' }}
                  onClick={() => setActive(active === i ? null : i)}
                  initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                  whileHover={{ scale: 1.15 }}>
                  <circle cx={pos.x} cy={pos.y} r={20} fill={c.color}
                    opacity={active === i ? 1 : 0.85}
                    stroke={active === i ? '#1C1208' : 'none'} strokeWidth="2" />
                  <text x={labelPos.x} y={labelPos.y + 4} textAnchor="middle"
                    fill={c.color} fontSize="10" fontFamily="Inter" fontWeight="600">
                    {c.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {COMPONENTS.map((c, i) => (
            <motion.div key={i}
              className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition-all"
              style={{ background: active === i ? `${c.color}18` : 'transparent' }}
              onClick={() => setActive(active === i ? null : i)}
              initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ x: 4 }}>
              <div style={{ width: '4px', height: '40px', background: c.color, borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans font-semibold text-sm" style={{ color: '#1C1208' }}>{c.label}</p>
                <p className="font-sans text-xs" style={{ color: '#888', lineHeight: 1.4 }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {active !== null && (
              <motion.div
                className="mt-2 rounded-xl p-4 border"
                style={{ background: `${COMPONENTS[active].color}12`, borderColor: COMPONENTS[active].color }}
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-sans text-xs italic" style={{ color: '#555' }}>{COMPONENTS[active].example}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <NextArrow nextId="slide-07" />
    </section>
  );
}
