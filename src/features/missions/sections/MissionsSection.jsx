import { useState } from 'react';

import { DailyMissions } from '../index';

import { useMissions } from '../hooks/useMissions';

export default function MissionsSection() {
  const { missions, addMission, toggleMission, deleteMission } = useMissions();

  const [newMission, setNewMission] = useState('');

  return (
    <DailyMissions
      missions={missions}
      toggleMission={toggleMission}
      deleteMission={deleteMission}
      newMission={newMission}
      setNewMission={setNewMission}
      addMission={() => {
        addMission(newMission);

        setNewMission('');
      }}
    />
  );
}
