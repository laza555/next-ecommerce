import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './fragments/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 1px 1px -1px rgba(0, 0, 0, 0.9)'
      },
      colors: {
        custom: {
          orange: '#FDB714',
          gray: '#ededed'
        }
      },
    },
  },
  plugins: [],
}
export default config