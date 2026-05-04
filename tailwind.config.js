/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      colors: {

        primary: {
          50: "#EAF7F2",
          100: "#D2EEE3",
          200: "#A6DDC8",
          300: "#79CCAC",
          400: "#41AA80",
          500: "#1F8F63",
          600: "#187553",
          700: "#125C42",
          800: "#0D4331",
          900: "#082A20",
          DEFAULT: "#1F8F63",
        },

        secondary: {
          50: "#FFFFFF",
          100: "#FAFAF8",
          200: "#F2F2EE",
          300: "#E7E7E1",
          400: "#DADAD2",
          500: "#C9C9BF",
          DEFAULT: "#FAFAF8",
        },

        accent: {
          50: "#FDEDEE",
          100: "#F8CDD1",
          200: "#F19AA2",
          300: "#E96673",
          400: "#D93F4C",
          500: "#C92534",
          600: "#A61D2A",
          700: "#821720",
          800: "#5F1117",
          900: "#3A0A0E",
          DEFAULT: "#C92534",
        },

        dark: {
          50: "#F4F4F4",
          100: "#E4E4E4",
          200: "#CFCFCF",
          300: "#B1B1B1",
          400: "#888888",
          500: "#5C5C5C",
          600: "#3A3A3A",
          700: "#2A2A2A",
          800: "#1F1F1F",
          900: "#1A1A1A",
          DEFAULT: "#1A1A1A",
        },

      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
        card: "0 6px 20px rgba(0,0,0,.06)",
      },

      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },

    },
  },

  plugins: [],
}