/** @type {import('@ladle/react/lib/shared/types').Config} */
const config = {
  stories: '../packages/**/*.stories.{js,jsx,ts,tsx}',
  addons: {
    a11y: {
      enabled: true,
    },
  },
  build: {
    out: 'public/ladle',
    baseUrl: '/ladle',
  },
};

export default config;
