/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'sub-typo': ['11px', '16.5px'],
      'small-writing': ['13px', '19.5px'],
      'small-body': ['17px', '25.5px'],
      'small-title': ['20px', '29px'],
      'regular-title': ['22px', '31px'],
      'large-title': ['26px', '35px'],
      'extra-large-title': ['30px', '40px'],
    },
  },
  plugins: [],
};
