export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      animation: {
        'sun-wink': 'sunWink 2s ease-in-out infinite',
        'cloud-drift': 'cloudDrift 12s ease-in-out infinite',
        'rain-fall': 'rainFall 1s linear infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
      },
      keyframes: {
        sunWink: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.05)' },
        },
        cloudDrift: {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        rainFall: {
          '0%': { transform: 'translateY(-100%)', opacity: '0.5' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};