const stats = [
  {
    label: "Energy ❤️",
    value: 80,
  },

  {
    label: "Hydration 🧪",
    value: 65,
  },

  {
    label: "Motivation ✨",
    value: 92,
  },

  {
    label: "Recovery 🔮",
    value: 55,
  },
];

export default function StatusBars() {
  return (
    <section className="status-card">
      <h2>Daily Status ✨</h2>

      {stats.map((stat) => (
        <div className="status-item" key={stat.label}>
          <div className="status-header">
            <span>{stat.label}</span>

            <span>{stat.value}%</span>
          </div>

          <div className="status-bar">
            <div
              className="status-fill"
              style={{
                width: `${stat.value}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}