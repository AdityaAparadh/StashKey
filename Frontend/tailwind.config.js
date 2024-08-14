/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'logo-font': ['New Amsterdam', 'sans-serif']
    }
  },
  plugins: [require("@catppuccin/tailwindcss")],
}

