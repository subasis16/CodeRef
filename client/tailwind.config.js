/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ossium: {
          dark: '#0a0a0a',
          darker: '#050505',
          card: '#121212',
          text: '#f5f5f5',
          muted: '#a1a1aa',
          accent: '#caff33', // Green/Yellow accent
          'accent-hover': '#b2e62d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
