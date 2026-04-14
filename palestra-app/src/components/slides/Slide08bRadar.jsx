import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import NextArrow from '../NextArrow';

// Based on Anthropic Economic Index research
// Theoretical = AI capability for the occupation
// Observed = actual AI usage observed in practice
const DATA = [
  { subject: 'Contabilidade', Theoretical: 92, Observed: 45 },
  { subject: 'Direito', Theoretical: 78, Observed: 35 },
  { subject: 'Financeiro', Theoretical: 88, Observed: 55 },
  { subject: 'TI & Dev', Theoretical: 95, Observed: 72 },
  { subject: 'Marketing', Theoretical: 85, Observed: 60 },
  { subject: 'Vendas', Theoretical: 70, Observed: 42 },
  { subject: 'RH', Theoretical: 75, Observed: 38 },
  { subject: 'Saúde', Theoretical: 65, Observed: 28 },
  { subject: 'Educação', Theoretical: 80, Observed: 40 },
  { subject: 'Pesquisa', Theoretical: 90, Observed: 48 },
  { subject: 'Engenharia', Theoretical: 82, Observed: 52 },
  { subject: 'Design', Theoretical: 88, Observed: 62 },
  { subject: 'Gestão', Theoretical: 72, Observed: 35 },
  { subject: 'Logística', Theoretical: 68, Observed: 30 },
  { subject: 'Atendimento', Theoretical: 78, Observed: 50 },
  { subject: 'Jornalismo', Theoretical: 85, Observed: 55 },
  { subject: 'Arquitetura', Theoretical: 76, Observed: 33 },
  { subject: 'Finanças Pub.', Theoretical: 80, Observed: 40 },
  { subject: 'Consultoria', Theoretical: 88, Observed: 58 },
  { subject: 'Varejo', Theoretical: 65, Observed: 32 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg text-xs">
        <p className="font-semibold mb-1" style={{ color: '#1C1208' }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Slide08bRadar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-08b" className="slide slide-light" ref={ref}>
      <div className="w-full max-w-5xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          O Gap Entre Potencial e Uso
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-center mb-4"
          style={{ color: '#C4A882' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          capacidade teórica vs. uso real por ocupação
        </motion.p>

        <motion.div
          style={{ width: '100%', height: '380px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={DATA} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
              <PolarGrid stroke="#E8DDD0" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 9, fontFamily: 'Inter', fill: '#888' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Potencial Teórico"
                dataKey="Theoretical"
                stroke="#4A90D9"
                fill="#4A90D9"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                name="Uso Observado"
                dataKey="Observed"
                stroke="#D85A4A"
                fill="#D85A4A"
                fillOpacity={0.4}
                strokeWidth={2}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontFamily: 'Inter', fontSize: '12px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="mt-2 rounded-xl p-4 max-w-xl"
          style={{ background: '#FFF5F0', border: '1px solid #FFD4BA' }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="font-sans text-sm text-center" style={{ color: '#1C1208' }}>
            <strong style={{ color: '#D4845A' }}>Financeiro, Direito e Gestão</strong> têm alto potencial, mas
            baixo uso — o maior gap está nas áreas que mais se beneficiariam da IA.
          </p>
        </motion.div>
      </div>

      <NextArrow nextId="slide-09" />
    </section>
  );
}
