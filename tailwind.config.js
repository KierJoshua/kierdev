/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, rgba(39,68,93,1) 0%, rgba(71,123,179,1) 39%, rgba(73,163,193,1) 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}