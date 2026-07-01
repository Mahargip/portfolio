import { FiExternalLink } from 'react-icons/fi';
import { research } from '@/data/portfolio';
import styles from './Research.module.css';

export default function Research() {
  return (
    <section id="research" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <p className="section-label">Academic</p>
        <h2 className="section-title">Research & Publication</h2>

        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.left}>
              <p className={styles.journal}>{research.journal}</p>
              <h3 className={styles.title}>{research.title}</h3>
            </div>
            <span className={styles.yearBadge}>{research.year}</span>
          </div>

          <p className={styles.desc}>{research.description}</p>

          <div className={styles.body}>
            <div className={styles.col}>
              <h4>Key Results</h4>
              <ul className={styles.highlights}>
                {research.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>{h}</li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Datasets</h4>
              <div className={styles.datasets}>
                {research.datasets.map((d, i) => (
                  <div key={i} className={styles.dataset}>{d}</div>
                ))}
              </div>

              <h4 style={{ marginTop: 24 }}>Technologies</h4>
              <div className={styles.tech}>
                {research.tech.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {research.doi ? (
            <a
              href={`https://doi.org/${research.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.doi}
            >
              <FiExternalLink size={13} /> Read Paper (DOI: {research.doi})
            </a>
          ) : (
            <span className={styles.doi} style={{ opacity: 0.45, cursor: 'default' }}>
              DOI / link coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
