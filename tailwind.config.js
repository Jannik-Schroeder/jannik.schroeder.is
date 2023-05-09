/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { },
    backgroundColor: theme => ({
    'secondary': '#2f363d',
      'accent': '#f9826c',
    }),
    textColor: theme => ({
    'primary': '#959da5',
      'accent': '#e1e4e8',
    }),
    },
  plugins: [require('@tailwindcss/typography')],
}