import styles from './ThemeSwitcher.module.css';

import { useTheme } from '../hooks/useTheme';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <section className={styles.card}>
      <h2>Theme ✨</h2>

      <div className={styles.buttons}>
        <button onClick={() => setTheme('pink')}>💖</button>

        <button onClick={() => setTheme('moon')}>🌙</button>

        <button onClick={() => setTheme('crystal')}>💎</button>
      </div>
    </section>
  );

  export default memo(ThemeSwitcher);
}
