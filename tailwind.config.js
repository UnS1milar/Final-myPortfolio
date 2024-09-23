/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        headline: "#272343",
        paragraph: "#2d334a",
        button: "#ffd803",
        "button-text": "#272343",
        secondary: "#e3f6f5",
        tertiary: "#bae8e8",
        secondary2: "#f25f4c",
        tertiary2: "#e53170",
      },

      fontFamily: {
        padauk: "Padauk",
        josefin: "Josefin Sans",
        kaushan: "Kaushan Script",
      },
    },
  },
  plugins: [],
};
