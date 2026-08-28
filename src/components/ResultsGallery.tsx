import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { waLink } from '@/constants';

const SLIDES = [
  { image: '/images/clients/novo-carrossel-1.png', category: 'Coloração', title: 'Moreno iluminado' },
  { image: '/images/clients/novo-carrossel-2.png', category: 'Tratamento', title: 'Botox 2 em 1 espelhado' },
  { image: '/images/clients/novo-carrossel-3.png', category: 'Corte', title: 'Corte feminino cabelo crespo' },
  { image: '/images/clients/novo-carrossel-4.png', category: 'Coloração', title: 'Mechas' },
  { image: '/images/clients/novo-carrossel-5.png', category: 'Coloração', title: 'Coloração' },
  { image: '/images/clients/novo-carrossel-6.png', category: 'Tratamento', title: 'Escova dos fios, plástica capilar liso' },
  { image: '/images/clients/novo-carrossel-7.png', category: 'Coloração', title: 'Mechas' },
  { image: '/images/clients/novo-carrossel-8.png', category: 'Coloração', title: 'Mechas' },
  { image: '/images/clients/sobrancelha-01.png', category: 'Sobrancelha', title: 'Sobrancelha feminina' },
  { image: '/images/clients/sobrancelha-02.png', category: 'Sobrancelha', title: 'Sobrancelha feminina' },
  { image: '/images/clients/sobrancelha-03.png', category: 'Sobrancelha', title: 'Sobrancelha masculina' },
  { image: '/images/clients/sobrancelha-04.png', category: 'Sobrancelha', title: 'Sobrancelha masculina' },
] as const;

export function ResultsGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go, paused]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    const section = document.getElementById('resultados');
    if (!section) return;
    section.addEventListener('keydown', onKeyDown);
    return () => section.removeEventListener('keydown', onKeyDown);
  }, [go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) go(delta > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  return (
    <section className="results" id="resultados" tabIndex={-1}>
      <div className="wrap">
        <div className="results-head rv">
          <div className="head">
            <span className="eyebrow">Resultados DAK</span>
            <h2 className="d">Trabalho que você <em>pode ver</em></h2>
            <p>Resultados reais enviados pelas clientes. Cada fio tem uma história — por isso o diagnóstico vem antes da transformação.</p>
          </div>
          <a className="btn b-line b-sm" href={waLink('Olá! Vim pelo site e quero mostrar uma referência para avaliação.')} target="_blank" rel="noopener noreferrer">
            <s>Quero uma avaliação <ArrowUpRight size={15} /></s>
          </a>
        </div>

        <div
          className="carousel rv"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="carousel-arrow carousel-prev" onClick={() => go(-1)} aria-label="Foto anterior">
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              ref={trackRef}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={slide.image} alt={`${slide.title} — resultado no salão`} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-next" onClick={() => go(1)} aria-label="Próxima foto">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="carousel-caption rv">
          <span className="carousel-category">{SLIDES[index].category}</span>
          <h3>{SLIDES[index].title}</h3>
          <div className="carousel-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="gallery-note rv">Galeria em atualização · fotos publicadas com autorização das clientes.</p>
      </div>
    </section>
  );
}
