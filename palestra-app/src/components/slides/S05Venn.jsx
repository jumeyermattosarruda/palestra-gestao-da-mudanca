import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NextArrow from '../NextArrow';

export default function S05Venn() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="slide-05" className="slide" style={{ background: '#FFFFFF' }} ref={ref}>
      <div className="w-full max-w-3xl px-4 flex flex-col items-center">
        <motion.h2
          className="font-serif text-center mb-6"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1C1208' }}
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          onde quero estar
        </motion.h2>

        <div style={{ width: '100%', maxWidth: 680 }}>
          <svg viewBox="0 0 680 460" width="100%" height="auto">
            {/* Circle 1 — O que eu sei fazer */}
            <motion.circle
              cx={270} cy={220} r={0}
              fill="#D4845A" fillOpacity={0.15}
              stroke="#D4845A" strokeOpacity={0.6} strokeWidth={2}
              animate={inView ? { r: 150 } : { r: 0 }}
              transition={{ delay: 0, duration: 0.7, ease: 'easeOut' }}
            />

            {/* Circle 2 — O que quero desenvolver */}
            <motion.circle
              cx={410} cy={220} r={0}
              fill="#4A90D9" fillOpacity={0.15}
              stroke="#4A90D9" strokeOpacity={0.6} strokeWidth={2}
              animate={inView ? { r: 150 } : { r: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            />

            {/* Circle 3 — O que o mundo precisa */}
            <motion.circle
              cx={340} cy={340} r={0}
              fill="#4A9D6F" fillOpacity={0.15}
              stroke="#4A9D6F" strokeOpacity={0.6} strokeWidth={2}
              animate={inView ? { r: 150 } : { r: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
            />

            {/* Center highlight */}
            <motion.circle
              cx={340} cy={268} r={24}
              fill="#D4845A"
              animate={
                inView
                  ? { fillOpacity: [0.4, 0.7, 0.4] }
                  : { fillOpacity: 0 }
              }
              transition={{
                delay: 1.6,
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.text
              x={340} y={273}
              textAnchor="middle"
              fill="#1C1208"
              fontSize="13"
              fontFamily="Inter"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              aqui
            </motion.text>

            {/* Labels */}
            <motion.text
              x={180} y={155}
              textAnchor="middle"
              fill="#D4845A"
              fontSize="14"
              fontFamily="Inter"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              O que eu sei fazer
            </motion.text>

            <motion.text
              x={500} y={155}
              textAnchor="middle"
              fill="#4A90D9"
              fontSize="14"
              fontFamily="Inter"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              O que quero
            </motion.text>
            <motion.text
              x={500} y={173}
              textAnchor="middle"
              fill="#4A90D9"
              fontSize="14"
              fontFamily="Inter"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              desenvolver
            </motion.text>

            <motion.text
              x={340} y={435}
              textAnchor="middle"
              fill="#4A9D6F"
              fontSize="14"
              fontFamily="Inter"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
            >
              O que o mundo precisa
            </motion.text>
          </svg>
        </div>
      </div>

      <NextArrow nextId="slide-06" />
    </section>
  );
}
