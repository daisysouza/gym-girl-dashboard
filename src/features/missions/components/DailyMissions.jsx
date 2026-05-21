import styles from './DailyMissions.module.css';

import MissionItem from './MissionItem';

import MissionInput from './MissionInput';

export default function DailyMissions({
  missions,
  toggleMission,
  deleteMission,
  newMission,
  setNewMission,
  addMission,
}) {
  return (
    <section>
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
