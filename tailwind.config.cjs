/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/login-bg.jpg')",
        
      }
    },
  },
  plugins: [],
};
