import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          // Define shades as needed
          light: '#4f46e5', // Example: Light shade of primary color
          DEFAULT: '#4338ca', // Example: Default primary color
          dark: '#3730a3', // Example: Dark shade of primary color
        },
        secondary: {
          light: '#fca5a5', // Example secondary color
          DEFAULT: '#f87171',
          dark: '#ef4444',
        },
        warning: {
          light: '#fde047', // Example warning color
          DEFAULT: '#facc15',
          dark: '#eab308',
        },
        danger: {
          light: '#f87171', // Example danger color
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
