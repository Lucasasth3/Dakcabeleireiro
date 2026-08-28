import { useCallback, useEffect, useState } from 'react';
import { Preloader, Cursor, ProgressBar } from '@/components/Chrome';
import { Header } from '@/components/Header';
import { Hero, Stats, Manifesto } from '@/components/Hero';
import { ToneSimulator } from '@/components/ToneSimulator';
import { ResultsGallery } from '@/components/ResultsGallery';
import { BeforeAfter } from '@/components/BeforeAfter';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Services, HowItWorks, Booking } from '@/components/Services';
import { FAQ, Location, CTA } from '@/components/FAQ';
import { ServiceBanner } from '@/components/ServiceBanner';
import { Footer, WhatsAppFloat, SmartBar } from '@/components/Footer';
import { useScrollProgress, useScrollReveal, useActiveSection, useCursor, usePreloader } from '@/hooks';
import { NAV_LINKS } from '@/constants';

function App() {
  const progress = useScrollProgress();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const active = useActiveSection(NAV_LINKS.map((l) => l.target.slice(1)));
  const [started, setStarted] = useState(false);
  useCursor();
  usePreloader(() => setStarted(true));

  useEffect(() => {
    document.body.classList.toggle('go', started);
  }, [started]);

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 620;
      document.getElementById('smartbar')?.classList.toggle('on', show && window.innerWidth < 760);
      document.querySelector('.fwa')?.classList.toggle('on', show);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useCallback((target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <Preloader />
      <Cursor />
      <ProgressBar value={progress} />
      <div className="aur"><i /><i /><i /></div>

      <Header onNavigate={navigate} active={active} />

      <main ref={revealRef}>
        <Hero />
        <Stats />
        <Manifesto />
        <FeaturedWork />
        <ToneSimulator />
        <ResultsGallery />
        <BeforeAfter />
        <Services />
        <HowItWorks />
        <Booking />
        <ServiceBanner />
        <FAQ />
        <Location />
        <CTA />
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
      <SmartBar onCta={() => navigate('#agendar')} />
    </>
  );
}

export default App;
