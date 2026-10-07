/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Change brand to BMIT's real colour — the whole site follows.
        brand: { DEFAULT: '#9b1c2e', dark: '#6e1220', light: '#f0a4ae' },
        ink: { DEFAULT: '#0d1b2a', 2: '#14263b' },
        soft: '#f5f6f8',
        line: '#e4e8ec',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        kb: { from: { scale: '1' }, to: { scale: '1.1' } },
        cue: { to: { top: '100%' } },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        'marquee-slow': 'marquee 52s linear infinite',
        kb: 'kb 28s ease-in-out infinite alternate',
        cue: 'cue 2s cubic-bezier(.22,.8,.24,1) infinite',
      },
    },
  },
  plugins: [],
}
