export default function PlayerCard({
  xp,
  playerName,
  setPlayerName,
  avatar,
  setAvatar,
}) {
  let level = 1;

  let rank = "Cozy Beginner";

  if (xp >= 100) {
    level = 2;
    rank = "Pink Trainee";
  }

  if (xp >= 200) {
    level = 3;
    rank = "Moon Walker";
  }

  if (xp >= 350) {
    level = 4;
    rank = "Crystal Guardian";
  }

  if (xp >= 500) {
    level = 5;
    rank = "Magical Gym Girl";
  }

  const xpPercentage =
    Math.min((xp / 500) * 100, 100);

  return (
    <section className="player-card">
      <div className="avatar">
        <input
          value={avatar}
          onChange={(event) =>
            setAvatar(
              event.target.value
            )
          }
          maxLength={2}
          className="avatar-input"
        />
      </div>

      <div className="player-info">
        <input
          value={playerName}
          onChange={(event) =>
            setPlayerName(
              event.target.value
            )
          }
          className="name-input"
        />

        <p className="level">
          Level {level}
        </p>

        <p className="rank">
          {rank}
        </p>

        <div className="xp-container">
          <div
            className="xp-fill"
            style={{
              width: `${xpPercentage}%`,
            }}
          ></div>
        </div>

        <span className="xp-text">
          {xp} / 500 XP
        </span>
      </div>
    </section>
  );
}