import styles from './Achievements.module.css';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: '🏆',
      title: 'First Steps',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'XP Hunter',
    },
    {
      id: 3,
      icon: '🕯️',
      title: 'Consistency Queen',
    },
    {
      id: 4,
      icon: '🌙',
      title: 'Moon Warrior',
    },
  ];

  return (
    <section>
      <h2>Achievements</h2>

      <div className={styles.grid}>
        {achievements.map((item) => (
          <div key={item.id} className={styles.item}>
            <div>{item.icon}</div>

            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
