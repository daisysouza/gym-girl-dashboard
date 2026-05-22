import { memo } from 'react';

export default function MissionItem({ mission, toggleMission, deleteMission }) {
  return (
    <div onClick={() => toggleMission(mission.id)}>
      <span>{mission.title}</span>

      <button
        onClick={(event) => {
          event.stopPropagation();

          deleteMission(mission.id);
        }}
      >
        ✖
      </button>
    </div>
  );

  export default memo(MissionItem);
}
