/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dd9933",
        secondary: "#2a2a2a",
        light: "#f5f5f5",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'about-pattern': "url('/src/assets/about-bg.jpg')",
      }
    },
  },
  plugins: [],
}