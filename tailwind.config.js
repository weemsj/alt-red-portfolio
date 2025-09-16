/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        altred: {
          primary: '#D7263D',
          crimson: '#B3122E',
          charcoal: '#0F1115',
          ink: '#171A1F',
          off: '#F6F7F9',
          gray: '#A3A8B3',
          neon: '#FF3B3B',
        },
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { card: '0 8px 24px rgba(0,0,0,.24)' },
    },
  },
  plugins: [],
}
