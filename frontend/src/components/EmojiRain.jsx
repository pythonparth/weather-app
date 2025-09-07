import React from "react";
import "./EmojiRain.css";

export default function EmojiRain({ emoji = "🌧️", count = 30 }) {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="emoji-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}