import { useEffect, useState } from "react";

import PlayerCard from "../components/PlayerCard";
import StatusBars from "../components/StatusBars";
import DailyMissions from "../components/DailyMissions";
import XPChart from "../components/XPChart";
import Achievements from "../components/Achievements";
import StreakCard from "../components/StreakCard";
import ThemeSwitcher from "../components/ThemeSwitcher";

const initialMissions = [
  {
    id: 1,
    title: "Complete workout ✨",
    done: false,
  },

  {
    id: 2,
    title: "Drink 2L water 🧪",
    done: false,
  },

  {
    id: 3,
    title: "Stretch for 10 min 🌙",
    done: false,
  },

  {
    id: 4,
    title: "Healthy meal 🍓",
    done: false,
  },
];

export default function Dashboard() {
  const [missions, setMissions] = useState(() => {
    const savedMissions = localStorage.getItem("missions");

    return savedMissions ? JSON.parse(savedMissions) : initialMissions;
  });

  const [xp, setXp] = useState(() => {
    const savedXp = localStorage.getItem("xp");

    return savedXp ? JSON.parse(savedXp) : 320;
  });

  const [newMission, setNewMission] = useState("");

  const [playerName, setPlayerName] = useState(() => {
    return localStorage.getItem("playerName") || "Moon Princess 🌙";
  });

  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem("avatar") || "💖";
  });

  const [streak, setStreak] = useState(() => {
    const savedStreak = localStorage.getItem("streak");

    return savedStreak ? JSON.parse(savedStreak) : 0;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "pink";
  });


  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(missions));
  }, [missions]);

  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("playerName", playerName);
  }, [playerName]);

  useEffect(() => {
    localStorage.setItem("avatar", avatar);
  }, [avatar]);

  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.className = theme;
  }, [theme]);

  function toggleMission(id) {
    const updatedMissions = missions.map((mission) => {
      if (mission.id === id) {
        const updatedDone = !mission.done;

        if (updatedDone) {
          setXp((prevXp) => prevXp + 50);
        } else {
          setXp((prevXp) => prevXp - 50);
        }

        return {
          ...mission,
          done: updatedDone,
        };
      }

      return mission;
    });

    setMissions(updatedMissions);
  }

  function addMission() {
    if (!newMission.trim()) return;

    const mission = {
      id: Date.now(),

      title: newMission,

      done: false,
    };

    setMissions([...missions, mission]);

    setNewMission("");
  }

  function deleteMission(id) {
    const updatedMissions = missions.filter((mission) => mission.id !== id);

    setMissions(updatedMissions);
  }

  function increaseStreak() {
  setStreak((prev) => prev + 1);

  setXp((prev) => prev + 25);
}

  const completedMissions = missions.filter((mission) => mission.done).length;

  return (
    <main className="dashboard">
      <header className="hero">
        <h1>💖 Gym Girl Advance 💖</h1>

        <p className="subtitle">your cozy fitness journey ✨</p>
      </header>

      <section className="dashboard-grid">
        <PlayerCard
          xp={xp}
          playerName={playerName}
          setPlayerName={setPlayerName}
          avatar={avatar}
          setAvatar={setAvatar}
        />

        <StatusBars />

        <StreakCard streak={streak} increaseStreak={increaseStreak} />

        <ThemeSwitcher setTheme={setTheme} />

        <DailyMissions
          missions={missions}
          toggleMission={toggleMission}
          newMission={newMission}
          setNewMission={setNewMission}
          addMission={addMission}
          deleteMission={deleteMission}
        />

        <XPChart />
      </section>

      <Achievements xp={xp} completedMissions={completedMissions} />
    </main>
  );
}
