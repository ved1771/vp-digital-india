/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_cc: "#ffffffcc" },
        gray: {
          100: "#ebfaf4",
          400: "#bdbebd",
          600: "#737373",
          900: "#171717",
          "900_01": "#212121",
          "600_01": "#757575",
        },
        deep_orange: { 200: "#ffb999", 400: "#ff7f42" },
        blue_gray: { 100: "#cbd5e1" },
        teal: { A700_01: "#14b8a6", A700_02: "#15c0b6" },
      },
      boxShadow: { bs: "inset 0px 0px  4px 0px #ffffff" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #59df74,#15c0b6)",
        gradient1: "linear-gradient(180deg, #3783d81e,#31c0b21e,#31c0b200)",
        gradient2: "linear-gradient(180deg, #ffffff66,#ffffff00)",
        gradient3: "linear-gradient(90deg, #15c0b619,#15c0b600)",
        gradient4: "linear-gradient(180deg, #ffffff00,#ffffff)",
      },
      fontFamily: { inter: "Inter", menlo: "Menlo" },
    },
  },
  plugins: [],
}

