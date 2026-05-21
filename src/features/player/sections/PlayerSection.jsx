import PlayerCard from '../components/PlayerCard';

import { usePlayer } from '../hooks/usePlayer';

export default function PlayerSection() {
  const { playerName, setPlayerName, avatar, setAvatar, xp } = usePlayer();

  return (
    <PlayerCard
      playerName={playerName}
      setPlayerName={setPlayerName}
      avatar={avatar}
      setAvatar={setAvatar}
      xp={xp}
    />
  );
}
