import styles from './DashboardLayout.module.css';

export default function DashboardLayout({ children }) {
  return (
    <main className={styles.dashboard}>
      <header className={styles.hero}>
        <h1 className={styles.title}>💖 Gym Girl Advance</h1>

        <p className={styles.subtitle}>
          Your cozy fitness with focus & consistency
        </p>
      </header>

      <section className={styles.grid}>{children}</section>
    </main>
  );
}
