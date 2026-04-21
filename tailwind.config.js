/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFAF6',
        peach: '#C4956A',
        sage: '#7A9A5A',
        mocha: '#7A6248',
        brown: '#2C1A0E',
        'peach-light': '#E8C9A8',
        'sage-light': '#B5CFA0',
        'cream-dark': '#F5EFE7',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        pill: '24px',
      },
    },
  },
  plugins: [],
};
