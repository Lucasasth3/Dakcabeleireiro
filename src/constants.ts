export const SALON = {
  name: 'DAK Cabeleireiros',
  phoneDisplay: '(31) 98893-5003',
  phoneIntl: '5531988935003',
  address: {
    street: 'Rua da Bahia, 561',
    district: 'Centro',
    city: 'Belo Horizonte',
    state: 'MG',
    cep: '30160-010',
  },
  geo: { lat: -19.9199415, lng: -43.9359827 },
  instagram: 'https://www.instagram.com/dakcabeleireiros',
  instagramHandle: '@dakcabeleireiros',
};

export const waLink = (message: string) =>
  `https://wa.me/${SALON.phoneIntl}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  default: 'Olá! Vim pelo site e gostaria de agendar um horário.',
  avaliacao: 'Olá! Vim pelo site e quero agendar uma avaliação.',
  mudar: 'Olá! Quero mudar o cabelo e gostaria de uma avaliação.',
};

export const NAV_LINKS = [
  { label: 'Resultados', target: '#resultados' },
  { label: 'Simulador de tom', target: '#tom' },
  { label: 'Serviços', target: '#servicos' },
  { label: 'Como funciona', target: '#como' },
  { label: 'Agendar', target: '#agendar' },
  { label: 'Dúvidas', target: '#duvidas' },
  { label: 'Local', target: '#local' },
] as const;

export type Tone = { n: string; c: string };

export const BASES: Tone[] = [
  { n: 'Preto', c: '#14100E' },
  { n: 'Castanho escuro', c: '#2E1D16' },
  { n: 'Castanho médio', c: '#4A2E1E' },
  { n: 'Castanho claro', c: '#6B4429' },
  { n: 'Loiro escuro', c: '#8E6435' },
];

export const GOALS: Tone[] = [
  { n: 'Morena iluminada', c: '#A9773F' },
  { n: 'Mel', c: '#C08B45' },
  { n: 'Caramelo', c: '#CC9A5C' },
  { n: 'Loiro dourado', c: '#D9B074' },
  { n: 'Loiro claro', c: '#E9D2A6' },
];

export type Service = {
  no: string;
  title: string;
  desc: string;
  c1: string;
  c2: string;
  wa: string;
};

export const SERVICES: Service[] = [
  { no: '01 · COR', title: 'Morena iluminada', desc: 'Iluminação em tons quentes que respeita a base escura, com raiz suave e manutenção espaçada.', c1: '#2E1D16', c2: '#C9924E', wa: 'Olá! Quero saber sobre morena iluminada.' },
  { no: '02 · ALINHAMENTO', title: 'Progressiva', desc: 'Redução de volume e alinhamento do fio, com avaliação prévia para definir a formulação adequada.', c1: '#4A2E1E', c2: '#E8C38C', wa: 'Olá! Quero saber sobre progressiva.' },
  { no: '03 · ALINHAMENTO', title: 'Selagem', desc: 'Selamento das cutículas para reduzir frizz e devolver brilho, sem mudar a estrutura do cabelo.', c1: '#221913', c2: '#B87C7C', wa: 'Olá! Quero saber sobre selagem.' },
  { no: '04 · TRATAMENTO', title: 'Botox capilar', desc: 'Reposição de massa para fios porosos e sem corpo, deixando o cabelo mais denso e alinhado.', c1: '#2E231A', c2: '#D9A6A6', wa: 'Olá! Quero saber sobre botox capilar.' },
  { no: '05 · TRATAMENTO', title: 'Nutrição profunda', desc: 'Reposição de lipídios para cabelo ressecado, opaco ou castigado por sol, chapinha e química.', c1: '#16110E', c2: '#C9924E', wa: 'Olá! Quero saber sobre nutrição profunda.' },
  { no: '06 · UNHAS', title: 'Pé e mão', desc: 'Manicure e pedicure para resolver tudo na mesma visita, sem precisar de outro deslocamento.', c1: '#B87C7C', c2: '#E8C38C', wa: 'Olá! Quero agendar pé e mão.' },
  { no: '07 · FINALIZAÇÃO', title: 'Escova', desc: 'Escova modeladora com produto adequado ao seu fio, para um acabamento liso ou com movimento, sem agredir a fibra capilar.', c1: '#241A14', c2: '#C9924E', wa: 'Olá! Quero agendar uma escova.' },
  { no: '08 · CORTE', title: 'Corte feminino', desc: 'Corte pensado para o formato do rosto e o tipo de fio, do curtinho ao longo com movimento.', c1: '#2E1D16', c2: '#D9A6A6', wa: 'Olá! Quero agendar corte feminino.' },
  { no: '09 · CORTE', title: 'Corte masculino', desc: 'Corte executado com técnica de máquina e tesoura, com acabamento na régua ou navalha conforme o estilo escolhido.', c1: '#16110E', c2: '#B87C7C', wa: 'Olá! Quero agendar corte masculino.' },
  { no: '10 · SOBRANCELHA', title: 'Sobrancelha feminina', desc: 'Design com henna ou tintura para definir o formato, alinhar os fios e realçar o olhar.', c1: '#2A1B12', c2: '#C9924E', wa: 'Olá! Quero agendar sobrancelha feminina.' },
  { no: '11 · SOBRANCELHA', title: 'Sobrancelha masculina', desc: 'Design que respeita o formato natural do fio, com acabamento limpo e alinhado.', c1: '#1A130E', c2: '#B87C7C', wa: 'Olá! Quero agendar sobrancelha masculina.' },
  { no: '12 · COR', title: 'Mechas', desc: 'Mechas com técnica de papel-alumínio ou touca, para iluminar o fio em pontos estratégicos sem tingir a base inteira.', c1: '#2E1D16', c2: '#E8C38C', wa: 'Olá! Quero saber sobre mechas.' },
  { no: '13 · COR', title: 'Coloração', desc: 'Coloração global para cobrir brancos, escurecer ou mudar completamente o tom do fio.', c1: '#241A14', c2: '#C9924E', wa: 'Olá! Quero saber sobre coloração.' },
  { no: '14 · COR', title: 'Luzes', desc: 'Iluminação em mechas finas e bem espalhadas, para um efeito mais suave e natural que as mechas tradicionais.', c1: '#16110E', c2: '#D9A6A6', wa: 'Olá! Quero saber sobre luzes.' },
];

export type FaqItem = { q: string; a: string; link?: { label: string; href: string } };

export const FAQS: FaqItem[] = [
  { q: 'Meu cabelo já tem química. Posso fazer morena iluminada?', a: 'Depende do que foi feito e de quanto tempo faz. Química sobre química exige avaliação presencial do fio antes de qualquer decisão, e às vezes o caminho é dividir em mais de uma sessão. Chama no WhatsApp contando seu histórico.' },
  { q: 'Quanto tempo demora?', a: 'Depende do estado do fio e do procedimento escolhido. Em média, tratamentos levam de 1h a 2h, e transformações de cor costumam levar de 2h30 a 4h. A gente informa o tempo estimado antes de fechar o horário.' },
  { q: 'Quanto custa?', a: 'O valor varia conforme o comprimento, a densidade do cabelo e o procedimento. Fale com a gente pelo WhatsApp e te passamos os valores certinho antes de fechar.', link: { label: 'Falar no WhatsApp sobre preços', href: waLink(WA_MESSAGES.default) } },
  { q: 'Quais os horários de atendimento?', a: 'Atendemos de segunda a sábado, das 8h30 às 19h. Como estamos no Centro, é comum atender antes do expediente, no almoço e no fim da tarde.' },
  { q: 'Tem estacionamento por perto?', a: 'Não temos estacionamento próprio, mas a região é servida por transporte público e fica em trecho comercial da Rua da Bahia, com opções de estacionamento pago nas proximidades.' },
];
