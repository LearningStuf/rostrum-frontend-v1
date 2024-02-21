/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize:{
      '100%': '100% 100%',
    },
    colors: {
      'white':'white',
      'black':'black',
      'bg-dark':'#001D51',
      'primary-dark': '#17234F',
      'primary-light': '#2F4EA1',
      'primary': '#294BAA',
      'secondary': '#EF375C',
      'stone': '#E7E8E9',
      'stone-light':'#f9f9f9'
    },
    extend: {},
  },
  plugins: [
  ],
}

