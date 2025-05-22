/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Recursively include all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

