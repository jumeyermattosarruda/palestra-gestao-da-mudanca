import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import FloaterMenu from './components/FloaterMenu';

// Slide 00 — Capa
import Slide00Capa from './components/slides/Slide00Capa';
// Slide 01 — Abertura
import Slide01Abertura from './components/slides/Slide01Abertura';
// Slide 02 — Enquete [NOVO]
import S02Enquete from './components/slides/S02Enquete';
// Slide 03 — Carreira [NOVO]
import S03Carreira from './components/slides/S03Carreira';
// Slide 04 — Perguntas [NOVO]
import S04Perguntas from './components/slides/S04Perguntas';
// Slide 05 — Venn [NOVO]
import S05Venn from './components/slides/S05Venn';
// Slide 06 — Ancora [NOVO]
import S06Ancora from './components/slides/S06Ancora';
// Slide 06b — Transição IA
import S06bTransicao from './components/slides/S06bTransicao';
// Slide 07 — Dados do Mercado (was Slide08Dados)
import Slide08Dados from './components/slides/Slide08Dados';
// Slide 08 — Como Funciona (was Slide04RedeNeural)
import Slide04RedeNeural from './components/slides/Slide04RedeNeural';
// Slide 09 — Contexto (was Slide05Contexto)
import Slide05Contexto from './components/slides/Slide05Contexto';
// Slide 10 — Meu Time (was Slide02MeuTime)
import Slide02MeuTime from './components/slides/Slide02MeuTime';
// Slide 11 — Agentes (was Slide02bAgentes)
import Slide02bAgentes from './components/slides/Slide02bAgentes';
// Slide 12 — Gerenciar Time (was Slide03IATime)
import Slide03IATime from './components/slides/Slide03IATime';
// Slide 13 — Raio-X (was Slide06RaioX)
import Slide06RaioX from './components/slides/Slide06RaioX';
// Slide 14 — Prompts (was Slide07Prompts)
import Slide07Prompts from './components/slides/Slide07Prompts';
// Slide 15 — Gap (was Slide08bRadar)
import Slide08bRadar from './components/slides/Slide08bRadar';
// Slide 16 — Limitações (was Slide09Limitacoes)
import Slide09Limitacoes from './components/slides/Slide09Limitacoes';
// Slide 17 — Empresas [NOVO]
import S17Empresas from './components/slides/S17Empresas';
// Slide 18 — Dinâmica Time [NOVO]
import S18DinamicaTime from './components/slides/S18DinamicaTime';
// Slide 19 — Dinâmica Prompt [NOVO]
import S19DinamicaPrompt from './components/slides/S19DinamicaPrompt';
import AbrindoCoracao from './components/slides/AbrindoCoracao';
import Referencias from './components/slides/Referencias';

const SLIDE_IDS = [
  'slide-00', 'slide-01', 'slide-02', 'slide-03', 'slide-04',
  'slide-05', 'slide-06', 'slide-06b', 'slide-07', 'slide-08', 'slide-09',
  'slide-10', 'slide-11', 'slide-12', 'slide-13', 'slide-14',
  'slide-15', 'slide-16', 'slide-17', 'slide-17b', 'slide-17c', 'slide-18', 'slide-19',
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState('slide-00');

  useEffect(() => {
    const observers = [];
    SLIDE_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSlide(id);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
      <FloaterMenu />
      <Slide00Capa />
      <Slide01Abertura />
      <S02Enquete />
      <S03Carreira />
      <S04Perguntas />
      <S05Venn />
      <S06Ancora />
      <S06bTransicao />
      <Slide08Dados />
      <Slide04RedeNeural />
      <Slide05Contexto />
      <Slide02MeuTime />
      <Slide02bAgentes />
      <Slide03IATime />
      <Slide06RaioX />
      <Slide07Prompts />
      <Slide08bRadar />
      <Slide09Limitacoes />
      <S17Empresas />
      <AbrindoCoracao />
      <Referencias />
      <S18DinamicaTime />
      <S19DinamicaPrompt />
    </div>
  );
}
