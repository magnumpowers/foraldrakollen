import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primär - Trygg blågrön
        primary: {
          50: '#f0f9f9',
          100: '#d9f0f0',
          200: '#b5e1e1',
          300: '#88cbcb',
          400: '#4a9b9b',
          500: '#3d8585',
          600: '#336d6d',
          700: '#2d5959',
          800: '#284949',
          900: '#243d3d',
        },
        // Sekundär - Varm sand/beige
        sand: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f5f0e8',
          300: '#ebe3d5',
          400: '#d9cdb8',
          500: '#c4b496',
          600: '#a89574',
          700: '#8a7759',
          800: '#6d5d46',
          900: '#524537',
        },
        // Accent - Dämpad korall
        coral: {
          50: '#fef6f4',
          100: '#fdeae5',
          200: '#fbd5cc',
          300: '#f4b5a6',
          400: '#e8836b',
          500: '#d96a50',
          600: '#c4533a',
          700: '#a3432e',
          800: '#863928',
          900: '#6e3125',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
