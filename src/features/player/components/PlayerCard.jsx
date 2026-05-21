import { XPBar } from '../../../shared/components/XPBar';
import styles from './PlayerCard.module.css';

export default function PlayerCard({
  playerName,
  setPlayerName,
  avatar,
  setAvatar,
  xp,
}) {
  return (
    <section className={styles.card}>
      <div className={styles.avatarContainer}>
        <input
          className={styles.avatarInput}
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
        />
      </div>

      <div className={styles.info}>
        <input
          className={styles.nameInput}
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
        />

        <p className={styles.level}>Level 3</p>

        <div className={styles.xpContainer}>
          <div
            className={styles.xpFill}
            style={{
              width: `${xp / 10}%`,
            }}
          />
        </div>

        <span className={styles.xpText}>{xp} XP</span>
      </div>
    </section>
  );
}
