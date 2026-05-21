import { useEffect, useState } from 'react';

import { STORAGE_KEYS } from '../../../shared/constants/storageKeys';

import {
  load,
  save,
} from '../../../shared/services/localStorage.service';

export function usePlayer() {
  const [playerName, setPlayerName] =
    useState(() =>
      load(
        STORAGE_KEYS.PLAYER_NAME,
        'Moon Princess 🌙'
      )
    );

  const [avatar, setAvatar] = useState(() =>
    load(STORAGE_KEYS.AVATAR, '💖')
  );

  const [xp] = useState(() =>
    load(STORAGE_KEYS.XP, 320)
  );

  useEffect(() => {
    save(
      STORAGE_KEYS.PLAYER_NAME,
      playerName
    );
  }, [playerName]);

  useEffect(() => {
    save(STORAGE_KEYS.AVATAR, avatar);
  }, [avatar]);

  return {
    playerName,
    setPlayerName,
    avatar,
    setAvatar,
    xp,
  };
}