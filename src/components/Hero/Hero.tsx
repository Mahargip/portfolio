import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { personal } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* ── Left: text content ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Hi there, I&apos;m</p>

          <h1 className={styles.name}>
            <span>Mahargi</span> Anugerahwan<br />Pamungkas
          </h1>

          <p className={styles.tagline}>{personal.title}</p>

          <p className={styles.subtitle}>
            {personal.subtitle}
            <span className={styles.cursor} />
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </div>

          <div className={styles.socials}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <div className={styles.divider} />
            <a href={`mailto:${personal.email}`} className={styles.socialLink} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoRing}>
            <Image
              src={personal.photo}
              alt={personal.name}
              width={360}
              height={360}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollDot} />
        <span>scroll</span>
      </div>
    </section>
  );
}
