import styles from './StreakCard.module.css';

export default function StreakCard({ streak, increaseStreak }) {
  return (
    <section>
      <h2>🔥 Streak</h2>

      <div className={styles.number}>{streak}</div>

      <p className={styles.text}>days focused</p>

      <button className={styles.button} onClick={increaseStreak}>
        +1 day
      </button>
    </section>
  );
  export default memo(StreakCard);
}
