import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, waLink, WA_MESSAGES, SALON } from '@/constants';

export function Header({ onNavigate, active }: { onNavigate: (target: string) => void; active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > 420 && y > lastY && !open);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const go = (target: string) => {
    setOpen(false);
    onNavigate(target);
  };

  return (
    <header className={`${scrolled ? 'sc' : ''}${hidden ? ' hd' : ''}`}>
      <div className="wrap nav">
        <div className="lg" onClick={() => go('#top')} data-cursor="Início">
          DAK<span>Cabeleireiros</span>
        </div>
        <nav className="nlinks">
          {NAV_LINKS.map((l) => (
            <a key={l.target} className={active === l.target.slice(1) ? 'on' : ''} onClick={() => go(l.target)}>{l.label}</a>
          ))}
        </nav>
        <a className="btn b-mel b-sm" href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer">
          <s>Agendar</s>
        </a>
        <button className="burg" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`wrap mob ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.target} onClick={() => go(l.target)}>{l.label}</a>
        ))}
        <a className="btn b-mel" href={waLink(WA_MESSAGES.default)} target="_blank" rel="noopener noreferrer">
          <s>Agendar pelo WhatsApp</s>
        </a>
        <div className="note" style={{ padding: '.8rem 0' }}>
          {SALON.address.street} · {SALON.address.district}, {SALON.address.city}-{SALON.address.state}
        </div>
      </div>
    </header>
  );
}
