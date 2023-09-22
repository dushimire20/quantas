/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#000000",
        "primary-200": "#1E1E1E",
        "primary-300": "#010102",     
        "secondary-100": "#FFFFFF",
        "secondary-300": "#D9D9D9",
        "secondary-200": "#F4F4F4",
        "gray-100": "#5F9956",
        "gray-200": "#C5EABF ",
        
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },

      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
  
      },
    },

  },
  plugins: [],
}