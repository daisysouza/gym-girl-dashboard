import { useState } from 'react';

import { load, save } from '../../../shared/services/localStorage.service';

import { STORAGE_KEYS } from '../../../shared/constants/storageKeys';

export function useXP() {
  const [xp, setXp] = useState(() =>
    load(STORAGE_KEYS.XP, [40, 70, 90, 55, 100])
  );

  function updateXP(newXP) {
    setXp(newXP);

    save(STORAGE_KEYS.XP, newXP);
  }

  return {
    xp,
    updateXP,
  };

  const totalXP = useMemo(() => {
    return missions.filter((m) => m.done).length * 100;
  }, [missions]);
}
