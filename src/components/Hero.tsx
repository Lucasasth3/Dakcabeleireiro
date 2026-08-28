import { MessageCircle, Sparkles } from 'lucide-react';
import { waLink, WA_MESSAGES } from '@/constants';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="g">
          <div>
            <span className="eyebrow">Belo Horizonte · Centro</span>
            <h1 className="d">
              <span className="w"><b>O seu cabelo,</b></span><br />
              <span className="w"><b>do tom que está ao que <em>você sonha</em></b></span>
            </h1>
            <p className="sub">
              Salão especializado em transformação capilar na Rua da Bahia.
              Morena iluminada, progressiva, selagem e tratamento — sempre começando pela avaliação do fio.
            </p>
            <div className="hact">
              <a className="btn b-mel" href={waLink(WA_MESSAGES.avaliacao)} target="_blank" rel="noopener noreferrer" data-cursor="Agendar">
                <s><MessageCircle size={16} /> Agendar avaliação</s>
              </a>
              <a className="btn b-line" href="#tom" data-cursor="Testar">
                <s><Sparkles size={16} /> Simular meu tom</s>
              </a>
            </div>
            <div className="hchips">
              <span>Morena iluminada</span>
              <span>Progressiva</span>
              <span>Tratamento</span>
              <span>Centro de BH</span>
            </div>
          </div>
          <div className="hviz">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/images/hero/Gemini_Generated_Image_hv0hxdhv0hxdhv0h.jpeg"
                alt="Profissional da DAK Cabeleireiros em um salão com fundo desfocado"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scue wrap"><i /><span>role para descobrir</span></div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="r">
          <div className="i">
            <div className="v">+<em>29</em> anos</div>
            <div className="l">No Centro de BH</div>
          </div>
          <div className="i">
            <div className="v"><em>4,9</em> <span style={{ fontSize: '.4em', color: 'var(--muted2)' }}>★</span></div>
            <div className="l">Avaliação média</div>
            
          </div>
          <div className="i">
            <div className="v"><em>278</em></div>
            <div className="l">Avaliações no Google</div>
            
          </div>
          <div className="i">
            <div className="v">14 <em>serviços</em></div>
            <div className="l">Cor, alinhamento e tratamento</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MANI_WORDS = [
  'cabelo', 'não', 'é', 'sorte.', 'é', 'técnica,', 'cuidado', 'e', 'um', 'plano', 'feito', 'para', 'o', 'seu', 'fio.'
];

export function Manifesto() {
  return (
    <section className="mani" id="manifesto">
      <div className="wrap">
        <p>
          {MANI_WORDS.map((w, i) => (
            <span key={i} className={`wd ${i === 6 ? 'cl' : ''}`}>{w} </span>
          ))}
        </p>
        <p className="sig">— a forma como a DAK trabalha, desde a primeira conversa até o espelho.</p>
      </div>
    </section>
  );
}
