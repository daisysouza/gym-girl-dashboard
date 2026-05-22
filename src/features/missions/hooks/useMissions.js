import { useCallback, useEffect, useState } from 'react';

import { load, save } from '../../../shared/services/localStorage.service';

import { STORAGE_KEYS } from '../../../shared/constants/storageKeys';

const initialMissions = [
  {
    id: 1,
    title: 'Drink 2L water 🧪',
    done: false,
  },

  {
    id: 2,
    title: 'Stretch for 10 min 🌙',
    done: false,
  },

  {
    id: 3,
    title: 'Healthy meal 🍓',
    done: false,
  },
];

export function useMissions() {
  const [missions, setMissions] = useState(() =>
    load(STORAGE_KEYS.MISSIONS, initialMissions)
  );

  const [newMission, setNewMission] = useState('');

  useEffect(() => {
    save(STORAGE_KEYS.MISSIONS, missions);
  }, [missions]);

  const addMission = useCallback(() => {
    if (!newMission.trim()) return;

    const mission = {
      id: Date.now(),
      title: newMission,
      done: false,
    };

    setMissions((prev) => [...prev, mission]);

    setNewMission('');
  }, [newMission]);

  const toggleMission = useCallback((id) => {
    setMissions((prev) =>
      prev.map((mission) =>
        mission.id === id
          ? {
              ...mission,
              done: !mission.done,
            }
          : mission
      )
    );
  }, []);

  const deleteMission = useCallback((id) => {
    setMissions((prev) => prev.filter((mission) => mission.id !== id));
  }, []);

  return {
    missions,
    newMission,
    setNewMission,
    addMission,
    toggleMission,
    deleteMission,
  };
}
