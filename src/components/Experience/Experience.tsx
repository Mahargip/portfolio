import { experiences } from '@/data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.company} className={styles.item}>
              <div className={styles.dot} />
              <p className={styles.period}>{exp.period}</p>

              <div className={styles.header}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.location}>· {exp.location}</span>
              </div>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.desc}>{exp.description}</p>

              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
