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
        brown: {
          950: '#1A1210',
          900: '#2A1F18',
          800: '#3D2E22',
          700: '#524132',
          600: '#6B5744',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF7F3',
          200: '#F3EDE5',
          300: '#E8DFD3',
          400: '#D9CBB8',
        },
        navy: {
          900: '#0F1D33',
          800: '#1B2D4F',
          700: '#243B63',
          600: '#2E4A78',
          500: '#3A5D94',
          400: '#4A7FB5',
          300: '#7BA3CC',
          200: '#A8C5E0',
          100: '#D4E5F7',
          50: '#EDF4FB',
        },
        coral: {
          50: '#FFF7F5',
          100: '#FEF0EC',
          200: '#FBDDD5',
          300: '#F0B5A6',
          400: '#E8917B',
          500: '#E07055',
          600: '#C4533A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
