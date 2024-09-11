/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Eurostile"],
        roboto: ["Roboto"]
      },
      colors: {
        "rickBlack": "#0F172A",
        "lBlue": "#bbf0fd"
      }
    },
    keyframes: {
      typing: {
        ' 0%': { width: '0ch' },
        '100%': { width: '12.1ch' }, // Adjust the number to match the length of your text
      },
      blink: {
        '0%, 100%': { borderColor: 'transparent' },
        '50%': { borderColor: '#d5f4fc' }, // Cursor color
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      typing: 'typing 0.5s steps(16) 1s 1 normal both, blink 1s step-end infinite',
      fadeIn: 'fadeIn 0.5s ease-in-out',
    },
  },
  plugins: [],
}

