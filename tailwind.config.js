/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#FF0000',
        'youtube-dark': '#0F0F0F',
        'youtube-gray': '#272727',
      },
    },
  },
  plugins: [],
}
