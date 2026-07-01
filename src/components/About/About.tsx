import { FiMapPin, FiMail, FiUser } from 'react-icons/fi';
import { personal } from '@/data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Avatar */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatarFrame}>
              {/* Replace with <Image> when you have your photo */}
              <div className={styles.avatarPlaceholder}>
                <FiUser className={styles.icon} style={{ fontSize: '4rem', color: 'var(--accent-light)', opacity: 0.4 }} />
                <p>add profile photo</p>
              </div>
            </div>
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
          </div>

          {/* Bio */}
          <div className={styles.bio}>
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Who I Am</h2>

            <p>{personal.about}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3<span>+</span></span>
                <span className={styles.statLabel}>Years Coding</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>4<span>+</span></span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>Publication</span>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoRow}>
                <FiMapPin size={14} />
                <span>{personal.location}</span>
              </div>
              <div className={styles.infoRow}>
                <FiMail size={14} />
                <a href={`mailto:${personal.email}`} style={{ color: 'inherit' }}>{personal.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
