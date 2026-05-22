import { memo } from 'react';

import MissionInput from './MissionInput';
import MissionItem from './MissionItem';

import styles from './DailyMissions.module.css';

function DailyMissions({
  missions,
  toggleMission,
  newMission,
  setNewMission,
  addMission,
  deleteMission,
}) {
  return (
    <section className={styles.card}>
      <h2>Daily Missions 💖</h2>

      <MissionInput
        newMission={newMission}
        setNewMission={setNewMission}
        addMission={addMission}
      />

      <div className={styles.list}>
        {missions.map((mission) => (
          <MissionItem
            key={mission.id}
            mission={mission}
            toggleMission={toggleMission}
            deleteMission={deleteMission}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(DailyMissions);
