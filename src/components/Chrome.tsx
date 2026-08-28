import { useEffect, useState } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / 2100);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pre">
      <div className="lg">
        <b>D</b><b>A</b><b>K</b>
      </div>
      <div className="sub">Cabeleireiros · Belo Horizonte</div>
      <div className="bar"><i style={{ width: `${progress}%` }} /></div>
    </div>
  );
}

export function Cursor() {
  return <div className="cur" />;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="pbar" style={{ width: `${value}%` }} />;
}
