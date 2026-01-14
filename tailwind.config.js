/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          50: '#3b82f610',
          100: '#3b82f620',
          500: '#3b82f6',
          600: '#3b82f6',
          700: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#64748b',
          500: '#64748b',
        },
      },
    },
  },
  plugins: [],
};