import { useState } from 'react';
import { Plus, Instagram, MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { FAQS, SALON, waLink, WA_MESSAGES } from '@/constants';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas">
      <div className="wrap">
        <div className="head rv" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Dúvidas</span>
          <h2 className="d">Antes de vir, <em>você sabia?</em></h2>
        </div>
        <div className="faq rv">
          {FAQS.map((f, i) => (
            <div key={i} className={`fi ${open === i ? 'open' : ''}`}>
              <button className="fq" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span><Plus /></span>
              </button>
              <div className="fa">
                <p>{f.a}</p>
                {f.link && (
                  <a className="btn b-line b-sm" style={{ marginTop: '.9rem' }} href={f.link.href} target="_blank" rel="noopener noreferrer" data-cursor="Ver">
                    <s>{f.link.label}</s>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const { lat, lng } = SALON.geo;
  const mapsDir = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="dark" id="local">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Onde encontrar</span>
          <h2 className="d">No coração do <em>Centro</em></h2>
          <p className="lead">Rua da Bahia, 561 — em plena zona comercial de Belo Horizonte, fácil de chegar de transporte público ou carro.</p>
        </div>
        <div className="cg rv">
          <div className="ccard" style={{ background: 'rgba(250,244,238,.04)', borderColor: 'rgba(250,244,238,.13)' }}>
            <div className="cr">
              <div className="ic" style={{ background: 'linear-gradient(135deg,rgba(201,146,78,.22),rgba(184,124,124,.22))', color: 'var(--mel2)' }}><MapPin size={18} /></div>
              <div>
                <div className="lb">Endereço</div>
                <div className="vl">{SALON.address.street}<br />{SALON.address.district}, {SALON.address.city}-{SALON.address.state}<br />CEP {SALON.address.cep}</div>
              </div>
            </div>
            <div className="cr">
              <div className="ic" style={{ background: 'linear-gradient(135deg,rgba(201,146,78,.22),rgba(184,124,124,.22))', color: 'var(--mel2)' }}><Phone size={18} /></div>
              <div>
                <div className="lb">WhatsApp</div>
                <div className="vl"><a href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cream)' }}>{SALON.phoneDisplay}</a></div>
              </div>
            </div>
            <div className="cr">
              <div className="ic" style={{ background: 'linear-gradient(135deg,rgba(201,146,78,.22),rgba(184,124,124,.22))', color: 'var(--mel2)' }}><Instagram size={18} /></div>
              <div>
                <div className="lb">Instagram</div>
                <div className="vl"><a href={SALON.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cream)' }}>{SALON.instagramHandle}</a></div>
              </div>
            </div>
            <a className="btn b-mel b-sm" href={mapsDir} target="_blank" rel="noopener noreferrer" style={{ marginTop: '.4rem' }}>
              <s><Navigation size={15} /> Traçar rota</s>
            </a>
          </div>
          <div className="map map-fallback">
            <div className="map-grid" />
            <div className="map-route map-route-one" />
            <div className="map-route map-route-two" />
            <div className="map-pin"><MapPin size={28} /></div>
            <div className="map-label">
              <strong>DAK Cabeleireiros</strong>
              <span>{SALON.address.street} · {SALON.address.district}</span>
            </div>
            <a className="btn b-cream b-sm" href={mapsDir} target="_blank" rel="noopener noreferrer">
              <s><Navigation size={15} /> Abrir rota no mapa</s>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section style={{ padding: '4rem 0 6rem' }}>
      <div className="wrap">
        <div className="cta rv">
          <div className="gl" /><div className="gl2" />
          <div className="in">
            <h2 className="d">Pronta para se ver <em>de outro jeito?</em></h2>
            <p>Agende uma avaliação. A conversa começa com a informação certa e termina com um plano para o seu fio.</p>
            <a className="btn b-cream" href={waLink(WA_MESSAGES.avaliacao)} target="_blank" rel="noopener noreferrer" data-cursor="Vamos">
              <s><MessageCircle size={16} /> Falar no WhatsApp</s>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
