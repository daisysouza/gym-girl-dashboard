import { memo } from 'react';

import styles from './XPChart.module.css';

function XPChart() {
  return (
    <section className={styles.card}>
      <h2>XP Progress 📈</h2>

      <div className={styles.chart}>
        <div className={styles.column}>
          <div className={styles.bar} style={{ height: '40%' }} />

          <span>Mon</span>
        </div>

        <div className={styles.column}>
          <div className={styles.bar} style={{ height: '65%' }} />

          <span>Tue</span>
        </div>

        <div className={styles.column}>
          <div className={styles.bar} style={{ height: '80%' }} />

          <span>Wed</span>
        </div>
      </div>
    </section>
  );
}

export default memo(XPChart);
