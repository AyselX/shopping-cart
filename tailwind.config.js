/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      platinum: "#E6E6E6",
      cultured: "#F8F8F8",
      "bright-gray": "#EBEBEB",
      black: "black",
      transparent: "transparent",
      red: "#FF0000",
      white: "white",
      green: "#0BC15C",
      gray: "#BBBBBB",
      blue: "blue",
      "light-red": "#F8CDCD",
      "dark-gray": "#A9A9A9",
      "granite-gray": "#606060",
      "border-gray": "rgba(196, 196, 196, 0.7)",
      charleston: "#26282B",
      snow: "#FAF9F9",
      "light-silver": "#D7D7D7",
      "smoke-white": "#FEFEFE",
      "black-olive": "#3E3E3E",
      "queen-blue": "#477294",
      indigo: "#1C3D57",
      "quick-silver": "#A5A5A5",
      violet: "violet",
      yellow: "yellow",
      "raisin-black": "#221F23",
    },

    fontFamily: {
      comfortaa: ["'Comfortaa', cursive"],
      "sans-pro": ["'Source Sans Pro', sans-serif"],
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "24px",
    },

    screens: {
      xxs: { min: "200px", max: "320px" },
      // => @media (max-width: 320px) { ... }
      xs: { min: "322px", max: "539px" },
      // => @media (min-width: 322px) { ... }
      sm: { min: "540px", max: "711px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "712px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      xxs: ".6875rem",
      xs: ".75rem", //12px
      sm: ".813rem",
      tiny: ".875rem", //14px
      base: "1rem", //16px
      md: "0.9375rem",
      lg: "1.125rem", //18px
      xl: "1.375rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      headsize: "2.625rem",
    },

    container: {
      padding: {
        DEFAULT: "0.5rem",
        xs: ".01rem",
        sm: "0.1rem",
        md: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "1rem",
      },
    },
    extend: {
      boxShadow: {
        DEFAULT: "0px 2px 5px #BBBBBB",
        vector: "-4px -6px 8px -6px black",
        "custom-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
