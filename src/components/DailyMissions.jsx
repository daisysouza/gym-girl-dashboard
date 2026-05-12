export default function DailyMissions({
  missions,
  toggleMission,
  newMission,
  setNewMission,
  addMission,
}) {
  return (
    <section className="missions-card">
      <h2>Daily Missions 💖</h2>

      <div className="mission-form">
        <input
          type="text"
          placeholder="new cozy mission..."
          value={newMission}
          onChange={(event) =>
            setNewMission(
              event.target.value
            )
          }
        />

        <button onClick={addMission}>
          Add ✨
        </button>
      </div>

      <div className="missions-list">
        {missions.map((mission) => (
          <div
            className={`mission-item ${
              mission.done ? "completed" : ""
            }`}
            key={mission.id}
            onClick={() =>
              toggleMission(mission.id)
            }
          >
            <div className="checkbox">
              {mission.done ? "✓" : ""}
            </div>

            <span>{mission.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}