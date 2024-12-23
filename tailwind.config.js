/** @type {import('tailwindcss').Config} */
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontSize: {
      'sub-typo': ['11px', '16.5px'],
      'small-writing': ['13px', '19.5px'],
      'small-body': ['17px', '25.5px'],
      'regular-body': ['17px', '25.5px'],
      'small-title': ['20px', '29px'],
      'regular-title': ['22px', '31px'],
      'large-title': ['26px', '35px'],
      'extra-large-title': ['30px', '40px'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        SementicDimBackground: 'rgba(0, 0, 0, 0.20)',
        SementicDimBackground2: 'rgba(0, 0, 0, 0.1)',
        LabelNormal: '#171719',
        PointColor: '#363737',
        Gray50: '#F9FAFB',
        Gray100: '#F2F4F6',
        Gray200: '#E5E8EB',
        Gray300: '#D1D6DB',
        Gray400: '#B0B8C1',
        Gray500: '#8B95A1',
        Gray600: '#6B7684',
        Gray700: '#4E5968',
        Gray800: '#333D48',
        Gray900: '#191F28',
        GrayOpacity100: 'rgba(2, 32, 71, 0.05)',
        GreyOpacity300: 'rgba(0, 29, 58, 0.18)',
        GrayOpacity500: 'rgba(3, 24, 50, 0.46)',
        GrayOpacity600: 'rgba(0, 19, 43, 0.58)',
        'Green2-weak': 'rgba(237, 249, 243, 1)',
        BloomingGreen500: '#34C184',
        Blue50: 'rgba(232, 243, 255, 1)',
        Blue500: '#3182F6',
        Red50: '#FEE',
        Red500: 'rgba(240, 68, 82, 1)',
        DimBackground: 'rgba(0, 0, 0, 0.2)',
        LoginBackground: 'rgba(242, 241, 229, 1)',
        KakaoBackground: 'rgba(254, 229, 0, 1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'Weak-Filter': '0px 2px 30px 0px rgba(0, 29, 58, 0.18)',
      },
    },
  },
  plugins: [
    tailwindAnimate,
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
