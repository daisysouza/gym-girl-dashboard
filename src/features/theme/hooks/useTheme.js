import { useEffect, useState } from 'react';

import { STORAGE_KEYS } from '../../../shared/constants/storageKeys';

import { load, save } from '../../../shared/services/localStorage.service';

export function useTheme() {
  const [theme, setTheme] = useState(() => load(STORAGE_KEYS.THEME, 'pink'));

  useEffect(() => {
    document.body.className = theme;

    save(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
