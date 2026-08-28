import { ArrowUpRight, Eye, Scissors, Sparkles } from 'lucide-react';
import { waLink } from '@/constants';

const FEATURED_WORK = [
  {
    image: '/images/clients/WhatsApp_Image_2026-08-21_at_12.49.56 copy.jpeg',
    label: 'Transformação',
    title: 'Moreno iluminado',
  },
  {
    image: '/images/clients/WhatsApp_Image_2026-08-21_at_14.58.57.jpeg',
    label: 'Corte',
    title: 'Mechas',
  },
  {
    image: '/images/clients/WhatsApp_Image_2026-08-21_at_13.03.01 copy.jpeg',
    label: 'Olhar',
    title: 'Mechas',
  },
  {
    image: '/images/clients/WhatsApp_Image_2026-08-27_at_07_19_25.jpeg',
    label: 'Cor',
    title: 'Coloração',
  },
];

const SPECIALTIES = [
  { icon: Scissors, label: 'Cortes', text: 'Do bob ao longo com movimento' },
  { icon: Sparkles, label: 'Cor & brilho', text: 'Tons pensados para você' },
  { icon: Eye, label: 'Olhar', text: 'Sobrancelhas e cílios' },
];

export function FeaturedWork() {
  return (
    <section className="featured-work">
      <div className="wrap">
        <div className="featured-head rv">
          <div className="head">
            <span className="eyebrow">Feito na DAK</span>
            <h2 className="d">Seu próximo visual começa <em>aqui</em></h2>
            <p>Cor, corte, tratamento e olhar em um só lugar — com atenção aos detalhes que fazem você se reconhecer no espelho.</p>
          </div>
          <a className="text-link" href="#resultados">Ver todos os resultados <ArrowUpRight size={15} /></a>
        </div>

        <div className="featured-grid">
          {FEATURED_WORK.map((item, index) => (
            <a className={`featured-card featured-card-${index + 1} rv`} href="#resultados" key={item.title}>
              <img src={item.image} alt={`${item.title} realizado na DAK`} />
              <span className="featured-shade" />
              <span className="featured-copy"><small>{item.label}</small><strong>{item.title}</strong></span>
              <span className="featured-arrow"><ArrowUpRight size={18} /></span>
            </a>
          ))}
        </div>

        <div className="specialties rv">
          {SPECIALTIES.map(({ icon: Icon, label, text }) => (
            <div className="specialty" key={label}>
              <span className="specialty-icon"><Icon size={17} /></span>
              <span><strong>{label}</strong><small>{text}</small></span>
            </div>
          ))}
        </div>

        <a className="btn b-mel featured-cta" href={waLink('Olá! Vi os resultados da DAK e quero conversar sobre meu próximo visual.')} target="_blank" rel="noopener noreferrer">
          <s>Conversar sobre meu visual <ArrowUpRight size={16} /></s>
        </a>
      </div>
    </section>
  );
}
