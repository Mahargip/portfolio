import { skills } from '@/data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className={styles.grid}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.group}>
              <p className={styles.groupLabel}>{group}</p>
              <div className={styles.items}>
                {items.map(skill => (
                  <span key={skill} className={styles.item}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
