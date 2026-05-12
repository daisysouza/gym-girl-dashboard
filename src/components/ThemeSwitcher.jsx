export default function ThemeSwitcher({
  setTheme,
}) {
  return (
    <section className="theme-card">
      <h2>✨ Themes</h2>

      <div className="theme-buttons">
        <button
          onClick={() =>
            setTheme("pink")
          }
        >
          💖
        </button>

        <button
          onClick={() =>
            setTheme("moon")
          }
        >
          🌙
        </button>

        <button
          onClick={() =>
            setTheme("crystal")
          }
        >
          🔮
        </button>
      </div>
    </section>
  );
}