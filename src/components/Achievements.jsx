const achievements = [
  {
    icon: "✨",
    title: "Cozy Beginner",
    unlocked: (missions, xp) =>
      missions >= 1,
  },

  {
    icon: "💖",
    title: "Pink Warrior",
    unlocked: (missions, xp) =>
      missions >= 2,
  },

  {
    icon: "🌙",
    title: "Moon Routine",
    unlocked: (missions, xp) =>
      missions >= 3,
  },

  {
    icon: "👑",
    title: "Magical Girl",
    unlocked: (missions, xp) =>
      xp >= 500,
  },
];

export default function Achievements({
  xp,
  completedMissions,
}) {
  return (
    <section className="achievements-card">
      <h2>Achievements 🏆</h2>

      <div className="achievements-grid">
        {achievements.map((achievement) => {
          const isUnlocked =
            achievement.unlocked(
              completedMissions,
              xp
            );

          return (
            <div
              className={`achievement-item ${
                isUnlocked
                  ? "unlocked"
                  : "locked"
              }`}
              key={achievement.title}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <span>
                {achievement.title}
              </span>

              <p>
                {isUnlocked
                  ? "Unlocked ✨"
                  : "Locked 🔒"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}