import { FiMail, FiLinkedin, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import { personal } from '@/data/portfolio';
import styles from './Contact.module.css';

const infoCards = [
  {
    icon: <FiMail />,
    title: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <FiLinkedin />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/mahargi',
    href: personal.linkedin,
  },
  {
    icon: <FiMapPin />,
    title: 'Based in',
    value: personal.location,
    href: null,
  },
  {
    icon: <FiMessageSquare />,
    title: 'Response Time',
    value: 'Usually within 24h',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.inner}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className={styles.title}>
            Let&apos;s <span>Work Together</span>
          </h2>
          <p className={styles.sub}>
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            my inbox is always open. I&apos;ll do my best to get back to you!
          </p>

          <div className={styles.cards}>
            {infoCards.map(card => (
              <div key={card.title} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardText}>
                  <h4>{card.title}</h4>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <p style={{ color: 'var(--accent-light)' }}>{card.value}</p>
                    </a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a href={`mailto:${personal.email}`} className={styles.btnPrimary}>
              <FiMail /> Send Me an Email
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              <FiLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
