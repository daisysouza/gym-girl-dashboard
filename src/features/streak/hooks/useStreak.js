import { useEffect, useState } from "react";

import { load, save } from "../../../shared/services/localStorage.service";
import { STORAGE_KEYS } from "../../../shared/constants/storageKeys";

export function useStreak() {
  const [streak, setStreak] = useState(() =>
    load(STORAGE_KEYS.STREAK, 0)
  );

  useEffect(() => {
    save(STORAGE_KEYS.STREAK, streak);
  }, [streak]);

  function increaseStreak() {
    setStreak((prev) => prev + 1);
  }

  return {
    streak,
    increaseStreak,
  };
}