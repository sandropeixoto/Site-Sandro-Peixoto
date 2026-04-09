/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutalist-yellow': '#F3F415',
        'brutalist-cyan': '#00F0FF',
        'brutalist-pink': '#FF00F5',
        'brutalist-black': '#000000',
        'brutalist-white': '#FFFFFF',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #000',
        'hard-hover': '2px 2px 0px 0px #000',
        'hard-lg': '8px 8px 0px 0px #000',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
