import { Instagram, MessageCircle } from 'lucide-react';
import { SALON, waLink, WA_MESSAGES, NAV_LINKS } from '@/constants';

export function Footer({ onNavigate }: { onNavigate: (target: string) => void }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <div className="lg">DAK<span>Cabeleireiros</span></div>
            <p className="fdz">
              Salão de transformação capilar no Centro de Belo Horizonte.
              Cor, alinhamento e tratamento pensados para o seu fio.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.7rem', marginTop: '1.4rem' }}>
              <a className="btn b-line b-sm" style={{ borderColor: 'rgba(250,244,238,.22)', color: 'var(--cream)' }}
                 href={SALON.instagram} target="_blank" rel="noopener noreferrer">
                <s><Instagram size={15} /> Instagram</s>
              </a>
              <a className="btn b-line b-sm" style={{ borderColor: 'rgba(250,244,238,.22)', color: 'var(--cream)' }}
                 href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer">
                <s><MessageCircle size={15} /> WhatsApp</s>
              </a>
            </div>
          </div>
          <div className="fc">
            <h4>Navegação</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.target}><a onClick={() => onNavigate(l.target)}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="fc">
            <h4>Contato</h4>
            <ul>
              <li><a href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer">{SALON.phoneDisplay}</a></li>
              <li>{SALON.address.street}</li>
              <li>{SALON.address.district}, {SALON.address.city}-{SALON.address.state}</li>
              <li>CEP {SALON.address.cep}</li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© {year} DAK Cabeleireiros · CNPJ 21.559.908/0001-00</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="fwa" href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer"
       data-cursor="Falar" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.317zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
  );
}

export function SmartBar({ onCta }: { onCta: () => void }) {
  return (
    <div className="sbar" id="smartbar">
      <div className="t">
        <b>Agende pelo WhatsApp</b>
        {SALON.phoneDisplay} · {SALON.address.district}
      </div>
      <button className="btn b-mel b-sm" onClick={onCta}><s>Agendar</s></button>
    </div>
  );
}
