import styles from './XPBar.module.css';

export default function XPBar({ value }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.fill}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}
