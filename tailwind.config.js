/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rain': "url('./assets/rain.gif')",
        'clouds': "url('./assets/nubes.gif')"
      }
    },
  },
  plugins: [],
}

