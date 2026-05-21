import { DashboardLayout } from '../features/dashboard';

import { PlayerSection } from '../features/player';
import { MissionsSection } from '../features/missions';
import { XPSection } from '../features/xp';
import { AchievementsSection } from '../features/achievements';
import { StreakSection } from '../features/streak';

import ThemeSection from '../features/theme/sections/ThemeSection';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PlayerSection />

      <StreakSection />

      <ThemeSection />

      <MissionsSection />

      <XPSection />

      <AchievementsSection />
    </DashboardLayout>
  );
}
