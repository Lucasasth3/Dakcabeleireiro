import { useState } from 'react';
import { MessageCircle, AlertTriangle } from 'lucide-react';
import { BASES, GOALS, waLink } from '@/constants';

export function ToneSimulator() {
  const [base, setBase] = useState(BASES[1]);
  const [goal, setGoal] = useState(GOALS[0]);

  const message = `Olá! Meu cabelo hoje está ${base.n.toLowerCase()} e eu queria chegar em ${goal.n.toLowerCase()}, dá para fazer?`;
  const rampStyle = {
    '--t-base': base.c,
    '--t-mid': mix(base.c, goal.c),
    '--t-goal': goal.c,
  } as React.CSSProperties;

  return (
    <section className="tint" id="tom">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">A peça central</span>
          <h2 className="d">Simulador de <em>tom</em></h2>
          <p>
            Escolha como o seu cabelo está hoje e onde você quer chegar.
            A transição acontece na hora — e a mensagem para o WhatsApp já sai pronta com a informação que a profissional precisa.
          </p>
        </div>

        <div className="sim rv" style={rampStyle}>
          <div className="view">
            <span className="st">Resultado da transição</span>
            <div className="ramp" />
            <div className="ramplab">
              <span>Hoje<b>{base.n}</b></span>
              <span style={{ textAlign: 'right' }}>Objetivo<b>{goal.n}</b></span>
            </div>
          </div>

          <div className="pnl">
            <span className="st">Monte a sua</span>
            <h3>De onde estou para onde quero ir</h3>
            <p className="hint">Toque nas bolinhas para escolher. A barra acima mostra o caminho de cor.</p>

            <span className="lbl">Meu cabelo hoje</span>
            <div className="tones">
              {BASES.map((t) => (
                <button key={t.n} className={`tone ${base.n === t.n ? 'on' : ''}`}
                        style={{ background: t.c }} onClick={() => setBase(t)}
                        aria-label={t.n} title={t.n} />
              ))}
            </div>

            <span className="lbl">Quero chegar em</span>
            <div className="tones">
              {GOALS.map((t) => (
                <button key={t.n} className={`tone ${goal.n === t.n ? 'on' : ''}`}
                        style={{ background: t.c }} onClick={() => setGoal(t)}
                        aria-label={t.n} title={t.n} />
              ))}
            </div>

            <div className="prev">
              A mensagem sai assim:<br />
              <b>"{message}"</b>
            </div>

            <a className="btn b-mel" href={waLink(message)} target="_blank" rel="noopener noreferrer" data-cursor="Enviar">
              <s><MessageCircle size={16} /> Enviar pelo WhatsApp</s>
            </a>

            <p className="dis">
              <AlertTriangle size={12} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4 }} />
              Simulação de referência, não promessa de resultado. O tom alcançável depende da avaliação presencial e do histórico de química do fio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(h: string) {
  const n = h.replace('#', '');
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}
function mix(a: string, b: string) {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const r = Math.round((r1 + r2) / 2);
  const g = Math.round((g1 + g2) / 2);
  const b3 = Math.round((b1 + b2) / 2);
  return `#${[r, g, b3].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}
