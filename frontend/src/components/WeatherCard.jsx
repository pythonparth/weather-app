import { motion } from "framer-motion";
import React from "react";
import "./WeatherEffects.css";

const weatherAnimations = {
  Sunny: { bg: "from-yellow-300 to-orange-400", icon: "☀️", effect: "sun-wink" },
  "Mostly Sunny": { bg: "from-yellow-200 to-blue-300", icon: "🌤️", effect: "sun-wink" },
  Rain: { bg: "from-gray-400 to-blue-600", icon: "🌧️", effect: "rain" },
  "Partly Cloudy": { bg: "from-blue-200 to-gray-300", icon: "⛅", effect: "cloud-drift" },
  "Mostly Cloudy": { bg: "from-gray-300 to-gray-500", icon: "☁️", effect: "cloud-drift" },
  "Mostly Clear": { bg: "from-indigo-200 to-blue-400", icon: "🌙", effect: "stars-twinkle" },
  Default: { bg: "from-slate-200 to-slate-400", icon: "❓", effect: null }
};

export default function WeatherCard({ selected }) {
  if (!selected) return null;

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center p-6"
      key={selected.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Weather Effects Layer */}
      <div className="absolute inset-0 z-0">{/* keep your rain/cloud/star effects here */}</div>

      {/* Forecast Card */}
      <motion.div
        className="relative z-10 max-w-md w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="text-7xl mb-4">{/* icon here */}</div>
        <h2 className="text-2xl font-bold tracking-wide uppercase mb-2">{selected.name}</h2>
        <p className="text-5xl font-extrabold mb-1">
          {selected.temperature}°{selected.temperatureUnit}
        </p>
        <p className="text-lg italic text-gray-800">{selected.shortForecast}</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">{selected.detailedForecast}</p>
      </motion.div>
    </motion.div>
  );
}
