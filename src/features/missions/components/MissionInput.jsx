export default function MissionInput({
  newMission,
  setNewMission,
  addMission,
}) {
  return (
    <div>
      <input
        value={newMission}
        onChange={(event) => setNewMission(event.target.value)}
      />

      <button onClick={addMission}>Add</button>
    </div>
  );
}
