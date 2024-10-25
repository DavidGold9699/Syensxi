import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'card-body': '#2A2A36',
        'card-item': '#1C1E22',
        'custom-pink': '#8B59A9',
        'custom-gray': '#9E9E9E',
      },
      backgroundImage: {
        'custom-background': 'linear-gradient(95.43deg, #1F1F24 0.45%, #1B1B24 99.61%)',
        'custom-gradient': 'linear-gradient(90deg, #3F97FF 0%, #F402F9 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
