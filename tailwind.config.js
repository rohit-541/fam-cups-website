/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors extracted from the FAM CUPS logo
        logoDarkGreen: '#3b5c3b',   // The dark green text and outer ring
        logoLightGreen: '#6b8e4e',  // The lighter green in the globe
        logoWhite: '#fdfdfd',       // Clean white for backgrounds
        logoOffWhite: '#f4f7f4',    // Very subtle green-tinted white for sections
        cupBrown: '#b57b49',        // Earthy brown for the cup accent
      }
    },
  },
  plugins: [],
}