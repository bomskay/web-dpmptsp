// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/profilKantor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F',
          light: '#FF6659',
          dark: '#9A0007',
        },
        secondary: {
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
          dark: '#757575',
        },
        base: '#FFFFFF',
        dark: '#212121',
        danger: '#B71C1C',
        success: '#388E3C',
      },
    },
  },
  plugins: [],
}
