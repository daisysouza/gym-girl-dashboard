import { XPChart } from '../index';

import { useXP } from '../hooks/useXP';

export default function XPSection() {
  const { xp } = useXP();

  return <XPChart xpData={xp} />;
}
