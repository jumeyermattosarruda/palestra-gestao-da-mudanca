import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Slide00Capa from './components/slides/Slide00Capa';
import Slide01Abertura from './components/slides/Slide01Abertura';
import Slide02MeuTime from './components/slides/Slide02MeuTime';
import Slide02bAgentes from './components/slides/Slide02bAgentes';
import Slide03IATime from './components/slides/Slide03IATime';
import Slide04RedeNeural from './components/slides/Slide04RedeNeural';
import Slide05Contexto from './components/slides/Slide05Contexto';
import Slide06RaioX from './components/slides/Slide06RaioX';
import Slide07Prompts from './components/slides/Slide07Prompts';
import Slide08Dados from './components/slides/Slide08Dados';
import Slide08bRadar from './components/slides/Slide08bRadar';
import Slide09Limitacoes from './components/slides/Slide09Limitacoes';
import Slide09bCoracao from './components/slides/Slide09bCoracao';

const SLIDE_IDS = [
  'slide-00', 'slide-01', 'slide-02', 'slide-02b',
  'slide-03', 'slide-04', 'slide-05', 'slide-06',
  'slide-07', 'slide-08', 'slide-08b', 'slide-09', 'slide-09b',
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState('slide-00');

  // Track which slide is visible via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SLIDE_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSlide(id);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ESC key — scroll to top
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        const el = document.getElementById('slide-00');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div style={{ background: '#1C1208' }}>
      <Navigation activeSlide={activeSlide} />
      <Slide00Capa />
      <Slide01Abertura />
      <Slide02MeuTime />
      <Slide02bAgentes />
      <Slide03IATime />
      <Slide04RedeNeural />
      <Slide05Contexto />
      <Slide06RaioX />
      <Slide07Prompts />
      <Slide08Dados />
      <Slide08bRadar />
      <Slide09Limitacoes />
      <Slide09bCoracao />
    </div>
  );
}
