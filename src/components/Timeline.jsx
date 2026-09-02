import { useEffect, useRef } from 'react';

function TimelineNode() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      el && el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div className="timeline-node" ref={ref}></div>;
}

export default function Timeline({ items, compact = false }) {
  return (
    <ol className={`timeline${compact ? ' timeline-compact' : ''}`}>
      {items.map((item) => (
        <li className="timeline-item" key={item.title + item.date}>
          <TimelineNode />
          <div className="timeline-content">
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p className="timeline-org">{item.org}</p>
            {item.bullets && (
              <ul>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
