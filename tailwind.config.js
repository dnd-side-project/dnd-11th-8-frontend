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
    screens: {
      mobile: { min: '344px', max: '768px' },
    },
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
        GrayOpacity600: 'rgba(0, 19, 43, 0.58)',
        BloomingGreen500: '#34C184',
        Blue500: '#3182F6',
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
