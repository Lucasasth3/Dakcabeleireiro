import { ArrowRight } from 'lucide-react';
import { SERVICES, waLink, SALON } from '@/constants';

export function Services() {
  return (
    <section id="servicos">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="d">Serviços que <em>transformam</em></h2>
          <p>Da cor ao tratamento, tudo começa pela avaliação do fio. Toque em um serviço para falar com a gente pelo WhatsApp.</p>
        </div>
        <div className="trt">
          {SERVICES.map((s, i) => (
            <a key={i} className="trc rv" style={{ '--c1': s.c1, '--c2': s.c2 } as React.CSSProperties}
               href={waLink(s.wa)} target="_blank" rel="noopener noreferrer" data-cursor="Saber">
              <div className="sw" />
              <div className="no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="go">Saber e agendar <ArrowRight size={14} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: '01', t: 'Você toca no WhatsApp', d: 'Conta o que quer mudar e, se quiser, já usa o simulador de tom para mostrar a cor de hoje e a desejada.' },
  { n: '02', t: 'Avaliação presencial', d: 'A profissional avalia o fio, o histórico de química e define o plano adequado para o seu cabelo.' },
  { n: '03', t: 'Execução com técnica', d: 'O procedimento é feito com produto adequado ao seu fio, no tempo e na técnica certa.' },
  { n: '04', t: 'Manutenção guiada', d: 'Você sai sabendo o que fazer em casa e quando voltar para o resultado durar.' },
];

export function HowItWorks() {
  return (
    <section className="dark" id="como">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Como funciona</span>
          <h2 className="d">Da conversa ao <em>espelho</em></h2>
          <p className="lead">Um caminho simples e transparente, sem prometer o que o fio não entrega.</p>
        </div>
        <div className="stp">
          {STEPS.map((s, i) => (
            <div key={i} className="stpc rv">
              <div className="n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section id="agendar">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Agendar</span>
          <h2 className="d">Comece pela <em>avaliação</em></h2>
          <p>Preencha o que quiser abaixo. Ao tocar em enviar, abrimos o WhatsApp com a sua mensagem já pronta.</p>
        </div>
        <div className="bk rv">
          <form className="bform" onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const nome = fd.get('nome') || '';
            const servico = fd.get('servico') || '';
            const quando = fd.get('quando') || '';
            const msg = `Olá! Sou ${nome}${servico ? ` e quero ${servico}` : ''}${quando ? `. Poderia ser ${quando}?` : ''}. Vim pelo site.`;
            window.open(waLink(String(msg)), '_blank');
          }}>
            <div className="frow">
              <label htmlFor="nome">Seu nome</label>
              <input id="nome" name="nome" type="text" placeholder="Como podemos te chamar?" required />
            </div>
            <div className="fg2">
              <div className="frow">
                <label htmlFor="servico">Serviço de interesse</label>
                <select id="servico" name="servico" defaultValue="">
                  <option value="" disabled>Escolha...</option>
                  {SERVICES.map((s) => <option key={s.title} value={s.title.toLowerCase()}>{s.title}</option>)}
                  <option value="avaliação">Só avaliação</option>
                </select>
              </div>
              <div className="frow">
                <label htmlFor="quando">Quando prefere</label>
                <select id="quando" name="quando" defaultValue="">
                  <option value="" disabled>Escolha...</option>
                  <option value="o quanto antes">O quanto antes</option>
                  <option value="esta semana">Esta semana</option>
                  <option value="próxima semana">Próxima semana</option>
                  <option value="sábado">Sábado</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn b-mel" style={{ width: '100%', marginTop: '.4rem' }} data-cursor="Enviar">
              <s>Enviar pelo WhatsApp</s>
            </button>
            <p className="note" style={{ marginTop: '.9rem' }}>
              Os campos são só para montar a mensagem — o horário real é confirmado na conversa.
            </p>
          </form>

          <div className="bside">
            <div className="bs">
              <div className="ic"><PinIcon /></div>
              <div>
                <h4>Onde estamos</h4>
                <p>{SALON.address.street} · {SALON.address.district}, {SALON.address.city}-{SALON.address.state}</p>
              </div>
            </div>
            <div className="bs">
              <div className="ic"><ClockIcon /></div>
              <div>
                <h4>Horários</h4>
                <p>Segunda a sábado · 8h30 às 19h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
