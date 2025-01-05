/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {}, // Use this to customize your theme (colors, fonts, spacing, etc.)
  },
  plugins: [], // Add Tailwind plugins here, like forms or typography, if needed
};
