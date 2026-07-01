'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>map.dev</a>

        <div className={styles.links}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
          <a href="#contact" className={styles.cta}>Contact</a>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobile} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={handleLinkClick}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles.cta} onClick={handleLinkClick}>Contact</a>
      </div>
    </>
  );
}
