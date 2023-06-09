/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "10xl": "4.5rem",
      },
      backgroundImage: {
        heroBG: "url('/background_image.jpeg')",
      },
      colors: {
        primary: "#20c997",
        textSecondary: "rgb(150,150,150)",
        secondary: "#212529",
      },
    },
  },
  plugins: [],
};
