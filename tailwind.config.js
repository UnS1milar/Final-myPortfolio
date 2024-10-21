/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        background2: "#0f0e17",
        headline: "#272343",
        headline2: "#fffffe",
        paragraph: "#2d334a",
        paragraph2: "#a7a9be",
        button: "#ffd803",
        button2: "#ff8906",
        "button-text": "#272343",
        secondary: "#001858",
        tertiary: "#59dbec",
        secondary2: "#f25f4c",
        tertiary2: "#e53170",
      },
      boxShadow: {
        "custom-light": "0 2px 10px rgba(255, 255, 255, 0.3)",
        "custom-dark": "0 2px 10px rgba(0, 0, 0, 0.3)",
        "custom-darker": "0 4px 20px rgba(0, 0, 0, 0.4)",
        "custom-lighter": "0 3px 15px rgba(255, 255, 255, 0.4)",
      },

      fontFamily: {
        padauk: "Padauk",
        josefin: "Josefin Sans",
        kaushan: "Kaushan Script",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, 400px)",
      },
    },
  },
  plugins: [],
};
