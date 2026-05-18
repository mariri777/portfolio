/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6F2',
        blush: '#F9D9D4',
        rose: '#E8A3A3',
        primary: '#B85A7D',
        plum: '#6B1F3D',
        ink: '#1A0E14',
        // Beauty LP — Korean minimal × luxe
        ivory: '#FAF6F1',
        linen: '#F2E9E0',
        nude: '#E6D3C4',
        sand: '#D8C0AC',
        mocha: '#B0917A',
        mochaDeep: '#7B5E4B',
        champagne: '#C8A878',
        rosegold: '#D9B6A2',
        inkSoft: '#241A14',
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Shippori Mincho B1"', 'serif'],
        mincho: ['"Shippori Mincho B1"', 'serif'],
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', '"Shippori Mincho B1"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
};
