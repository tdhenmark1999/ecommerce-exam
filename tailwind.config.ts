import withMT from '@material-tailwind/react/utils/withMT'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)', 'sans-serif'],
    },
    backgroundImage: {
      'home-hero-image-1': 'url("/images/home-hero-image-1.webp")',
      'home-hero-image-2': 'url("/images/home-hero-image-2.webp")',
      'home-hero-image-3': 'url("/images/home-hero-image-3.webp")',
      'home-hero-image-4': 'url("/images/home-hero-image-4.webp")',
      'home-bottom-hero': 'url("/images/home-bottom-hero.webp")',
    },
    extend: {
      screens: {
        '1.5xl': '1050px',
        '3xl': '1440px',
      },
      colors: {
        main: '#252B42',
        primary: '#23A6F0',
        secondary: {
          green: '#23856D',
          yellow: '#F3CD03',
          gray: '#737373',
        },
        danger: '#E74040',
        alert: '#E77C40',
        success: '#2DC071',
        muted: '#BDBDBD',
        disabled: '#8EC2F2',
        'light-gray': '#FAFAFA',
        'light-gray-2': '#ECECEC',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '&>*')
    }),
  ],
}
export default withMT(config)
