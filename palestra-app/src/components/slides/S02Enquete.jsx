import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';
import NextArrow from '../NextArrow';

const TOTAL = 28;

const DATA = [
  { respostas: 12, label: 'Do hype à prática: como a IA entra (de verdade) na rotina de trabalho', cor: '#4A90D9' },
  { respostas: 11, label: 'Carreira em tempos de mudança: como adaptar sua trajetória quando o mapa muda o tempo todo', cor: '#D4845A' },
  { respostas:  4, label: 'Bastidores de 20+ reorganizações, 2 empresas: como as empresas mudam (e sobrevivem) por dentro', cor: '#E8A838' },
  { respostas:  1, label: 'Planejar no caos: como times de tech lidam com planejamento no desenvolvimento de produto', cor: '#4A9D6F' },
].map(d => ({ ...d, valor: (d.respostas / TOTAL) * 100 }));

const RADIAN = Math.PI / 180;

function CustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, index, valor, respostas, cor }) {
  const extra = index === 0 ? 8 : 0;
  const radius = outerRadius + extra + 40;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const anchor = x > cx ? 'start' : 'end';

  return (
    <text
      x={x}
      y={y}
      fill={cor}
      textAnchor={anchor}
      dominantBaseline="central"
      fontFamily="Inter"
      fontSize="12"
    >
      {valor.toFixed(1)}% ({respostas})
    </text>
  );
}

export default function S02Enquete() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startAngle, setStartAngle] = useState(0);

  useEffect(() => {
    if (inView) {
      const start = Date.now();
      const duration = 900;
      const raf = requestAnimationFrame(function tick() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setStartAngle(progress * 360);
        if (progress < 1) requestAnimationFrame(tick);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [inView]);

  return (
    <section id="slide-02" className="slide" style={{ background: '#FFFFFF' }} ref={ref}>
      <div className="w-full max-w-4xl px-6 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-1"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          o que vocês queriam ouvir
        </motion.h2>
        <motion.p
          className="font-sans text-center mb-8"
          style={{ color: '#1C1208', opacity: 0.6, fontSize: '0.95rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.2 }}
        >
          28 respostas · enquete prévia
        </motion.p>

        <motion.div
          style={{ width: '100%', height: 360 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DATA}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="valor"
                startAngle={90}
                endAngle={90 - startAngle}
                paddingAngle={2}
                labelLine={false}
                label={(props) => (
                  <CustomLabel
                    {...props}
                    valor={DATA[props.index].valor}
                    respostas={DATA[props.index].respostas}
                    cor={DATA[props.index].cor}
                  />
                )}
              >
                {DATA.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.cor}
                    stroke="none"
                    outerRadius={i === 0 ? 128 : 120}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => [
                  `${value.toFixed(1)}%`,
                  DATA[props.payload.index]?.label || name,
                ]}
                contentStyle={{ fontFamily: 'Inter', fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <NextArrow nextId="slide-03" />
    </section>
  );
}
