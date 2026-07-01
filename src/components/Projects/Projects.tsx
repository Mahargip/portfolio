import { FiGithub, FiExternalLink, FiMonitor } from 'react-icons/fi';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
              {/* Image */}
              <div className={styles.imageWrap}>
                <div className={styles.placeholder}>
                  <FiMonitor />
                  <span>screenshot coming soon</span>
                </div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>

                <div className={styles.tech}>
                  {p.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className={styles.footer}>
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FiGithub size={14} /> Code
                    </a>
                  ) : (
                    <span className={styles.private}>private repo</span>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
