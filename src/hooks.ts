import { useEffect, useRef, useState } from 'react';

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    el.querySelectorAll('.rv').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');
  const idsKey = ids.join(',');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);
  return active;
}

export function useCursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const cur = document.querySelector<HTMLElement>('.cur');
    if (!cur) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    let raf = 0;
    document.body.classList.add('hascur');
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      const t = (e.target as HTMLElement).closest('[data-cursor]');
      if (t) {
        cur.classList.add('big');
        cur.setAttribute('data-l', t.getAttribute('data-cursor') || '');
      } else {
        cur.classList.remove('big');
      }
    };
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove('hascur');
    };
  }, []);
}

export function usePreloader(onDone?: () => void) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      document.body.classList.remove('lock');
      document.querySelector('.pre')?.classList.add('done');
      onDone?.();
    }, 2300);
    return () => clearTimeout(timer);
  }, [onDone]);
  return done;
}
