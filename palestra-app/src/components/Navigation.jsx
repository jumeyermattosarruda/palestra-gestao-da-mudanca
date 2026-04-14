import { motion } from 'framer-motion';

const SLIDES = [
  { id: 'slide-00', label: 'Capa' },
  { id: 'slide-01', label: 'Abertura' },
  { id: 'slide-02', label: 'Meu Time' },
  { id: 'slide-02b', label: 'Agentes' },
  { id: 'slide-03', label: 'IA = Time' },
  { id: 'slide-04', label: 'Como Funciona' },
  { id: 'slide-05', label: 'Contexto' },
  { id: 'slide-06', label: 'Raio-X' },
  { id: 'slide-07', label: 'Prompts' },
  { id: 'slide-08', label: 'Dados' },
  { id: 'slide-08b', label: 'Gap' },
  { id: 'slide-09', label: 'Limitações' },
  { id: 'slide-09b', label: 'Coração' },
];

export default function Navigation({ activeSlide }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Sidebar dots — desktop */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {SLIDES.map((slide, i) => (
          <motion.button
            key={slide.id}
            onClick={() => scrollTo(slide.id)}
            title={slide.label}
            className="group relative flex items-center justify-end"
            whileHover={{ scale: 1.2 }}
          >
            {/* Tooltip */}
            <span className="absolute right-6 bg-dark text-beige text-xs font-sans px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {slide.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeSlide === slide.id ? '10px' : '6px',
                height: activeSlide === slide.id ? '10px' : '6px',
                background: activeSlide === slide.id ? '#D4845A' : 'rgba(196,168,130,0.5)',
              }}
            />
          </motion.button>
        ))}
      </nav>

      {/* Bottom bar — mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark/90 backdrop-blur-sm border-t border-beige/10 flex justify-center gap-2 px-4 py-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(slide.id)}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeSlide === slide.id ? '8px' : '5px',
                height: activeSlide === slide.id ? '8px' : '5px',
                background: activeSlide === slide.id ? '#D4845A' : 'rgba(196,168,130,0.4)',
              }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
