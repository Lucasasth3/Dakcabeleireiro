const PAIRS = [
  { before: '/images/clients/ba-1-antes.png', after: '/images/clients/ba-1-depois.png', title: 'Mechas antes e depois' },
  { before: '/images/clients/ba-2-antes.png', after: '/images/clients/ba-2-depois.png', title: 'Hidratação e alinhamento com mechas na cor mel' },
  { before: '/images/clients/ba-3-antes.png', after: '/images/clients/ba-3-depois.png', title: 'Escova dos fios, plástica capilar liso' },
] as const;

export function BeforeAfter() {
  return (
    <section className="ba" id="antes-depois">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Antes e depois</span>
          <h2 className="d">A diferença <em>fala por si</em></h2>
          <p>Comparações reais, sem filtro, do estado do fio na chegada até o resultado final.</p>
        </div>

        <div className="ba-grid">
          {PAIRS.map((pair, i) => (
            <div className="ba-card rv" key={i}>
              <div className="ba-photos">
                <div className="ba-half">
                  <img src={pair.before} alt={`Antes — ${pair.title}`} draggable={false} />
                  <span className="ba-tag ba-tag-before">Antes</span>
                </div>
                <div className="ba-half">
                  <img src={pair.after} alt={`Depois — ${pair.title}`} draggable={false} />
                  <span className="ba-tag ba-tag-after">Depois</span>
                </div>
              </div>
              <h3 className="ba-title">{pair.title}</h3>
            </div>
          ))}
        </div>

        <p className="gallery-note rv">Fotos publicadas com autorização das clientes.</p>
      </div>
    </section>
  );
}
