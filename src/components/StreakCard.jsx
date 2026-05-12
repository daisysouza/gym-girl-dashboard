export default function StreakCard({
  streak,
  increaseStreak,
}) {
  return (
    <section className="streak-card">
      <h2>🔥 Daily Streak</h2>

      <div className="streak-number">
        {streak}
      </div>

      <p>
        cozy days completed ✨
      </p>

      <button
        onClick={increaseStreak}
      >
        Claim Day 💖
      </button>
    </section>
  );
}