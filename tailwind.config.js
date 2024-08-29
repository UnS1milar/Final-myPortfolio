/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 'background' : '#fffffe',
                'headline' : '#272343',
                'paragraph' : '#2d334a',
                'button' : '#ffd803',
                'button-text' : '#272343',
      },

      fontFamily: { 'padauk' : 'Padauk',
                    'josefin' : 'Josefin Sans',

      },

    },
  },
  plugins: [],
}