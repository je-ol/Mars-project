/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {},
    screens: {
      'lg': {'raw': '(min-height: 1002px)'},
    },
  },
  plugins: [],
}

