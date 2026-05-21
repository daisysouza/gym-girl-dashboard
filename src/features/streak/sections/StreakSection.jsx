import { StreakCard } from '../index';

import { useStreak } from '../hooks/useStreak';

export default function StreakSection() {
  const { streak, increaseStreak } = useStreak();

  return <StreakCard streak={streak} increaseStreak={increaseStreak} />;
}
