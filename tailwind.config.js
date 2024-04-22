/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navBg': "url('./src/assets/navbar-bg.svg')",
        'hero': "url('./src/assets/banner.svg')",
        'footer-texture': "url('./src/assets/footerbg.svg')",
        'copyright': "url('./src/assets/copyrightbg.svg')",
      }
    },
    fontFamily: {
      'rancho' : '"Rancho", cursive',
      'raleway' : '"Raleway", sans-serif'
    }
  },
  plugins: [require("daisyui")],
}

