import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { personal } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>map.dev</span>
          <span className={styles.copy}>
            © {year} Mahargi Anugerahwan Pamungkas. All rights reserved.
          </span>
        </div>

        <div className={styles.socials}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>

        <a href="#hero" className={styles.backTop}>
          <FiArrowUp size={14} /> Back to top
        </a>
      </div>
    </footer>
  );
}
