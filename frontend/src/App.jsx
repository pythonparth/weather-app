import { useState, useEffect } from "react";
import EmojiRain from "./components/EmojiRain";

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/api/weather")
      .then(res => res.json())
      .then(data => {
        setForecast(data.forecast);
        setSelected(data.forecast[0]);
      });
  }, []);

  // Map shortForecast keywords to emoji
  const emojiMap = {
    Rain: "🌧️",
    Sunny: "☀️",
    Cloudy: "☁️",
    Clear: "🌙",
    Default: "❓"
  };

  const bgEmoji =
    emojiMap[
      Object.keys(emojiMap).find(key =>
        selected?.shortForecast?.includes(key)
      )
    ] || emojiMap.Default;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-300">
      {/* Full-screen emoji rain */}
      <EmojiRain emoji={bgEmoji} count={40} />

      {/* Tabs for filtered forecast */}
      <div className="absolute top-4 flex gap-3 bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-lg z-10">
        {forecast.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(day)}
            className={`px-4 py-2 rounded-full transition-all ${
              selected?.name === day.name
                ? "bg-black text-white"
                : "bg-white/70 text-black hover:bg-white"
            }`}
          >
            {day.name}
          </button>
        ))}
      </div>

      {/* Selected forecast card */}
      {selected && (
        <div className="relative z-10 mt-20 bg-white/80 p-6 rounded-lg shadow-lg max-w-lg text-center">
          <div className="text-6xl mb-4">{bgEmoji}</div>
          <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
          <p className="text-lg">
            {selected.temperature}°{selected.temperatureUnit}
          </p>
          <p className="italic">{selected.shortForecast}</p>
          <p className="mt-4">{selected.detailedForecast}</p>
        </div>
      )}
    </div>
  );
}