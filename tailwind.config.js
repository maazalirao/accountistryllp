/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Titillium Web"', '"Inter"', 'sans-serif'],
        heading: ['"Titillium Web"', '"Playfair Display"', 'serif'],
      },
      colors: {
        // New professional color scheme with grey and green
        primary: {
          50: '#f8fdf9',
          100: '#f0faf2',
          200: '#dbede1',
          300: '#c6e0cc',
          400: '#a8d0b0',
          500: '#8bc094',
          600: '#6ea878',
          700: '#5a8a63',
          800: '#4a7252',
          900: '#3d5e44',
          950: '#1f2f22',
        },
        grey: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e7e7e7',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#3f3f3f',
          950: '#262626',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Modern semantic colors with new scheme
        background: '#ffffff',
        foreground: '#3f3f3f',
        card: '#ffffff',
        'card-foreground': '#3f3f3f',
        popover: '#ffffff',
        'popover-foreground': '#3f3f3f',
        muted: '#f3f3f3',
        'muted-foreground': '#6a6a6a',
        accent: '#dbede1',
        'accent-foreground': '#3f3f3f',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: '#e7e7e7',
        input: '#e7e7e7',
        ring: '#8bc094',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scroll': 'scroll 10s linear infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
      },
    },
  },
  plugins: [],
}


