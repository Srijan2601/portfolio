module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'min-h-768': {'raw': '(min-height: 768px)'},
        'min-h-640': {'raw': '(min-height: 640px)'},
        'min-h-1365': {'raw': '(min-height: 1365px)'},
      },
    },
  },
  plugins: [],
};
