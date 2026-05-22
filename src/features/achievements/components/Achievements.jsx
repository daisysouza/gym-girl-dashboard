import { memo } from 'react';

import styles from './Achievements.module.css';

function Achievements() {
  const achievements = [
    '🏆 First Steps',
    '⚡ XP Hunter',
    '🕯️ Consistency Queen',
    '🌙 Moon Warrior',
  ];

  return (
    <section className={styles.card}>
      <h2>Achievements</h2>

      <div className={styles.grid}>
        {achievements.map((achievement) => (
          <div key={achievement} className={styles.item}>
            {achievement}
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Achievements);
