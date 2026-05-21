import { Card } from '../../../shared/components/Card';

import styles from './XPChart.module.css';

export default function XPChart() {
  const data = [40, 60, 80, 55, 90];

  return (
    <Card variant="pink">
      <div className={styles.header}>
        <h2>XP Progress 📈</h2>
      </div>

      <div className={styles.chart}>
        {data.map((value, index) => (
          <div key={index} className={styles.column}>
            <div
              className={styles.fill}
              style={{
                height: `${value}%`,
              }}
            />

            <span>Day {index + 1}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
