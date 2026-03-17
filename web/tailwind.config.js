/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)', 'sans-serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#d3e5ed',
        'sage-green': '#9EC97F',
      },
    },
  },
  plugins: [],
};