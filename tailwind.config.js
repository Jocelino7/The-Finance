/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./App/src/**/*.{js,jsx,ts,tsx}", "./App/src/screens/**/*.{js,jsx,ts,tsx}",
    "./App/src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#EE964F",
        secondary: "#51CFCF",
        tertiary: "#ffffff",
        text: "#000000",
        redColor:"#FF0000",
        bg:"#fff"
      }
    }
  }
  ,
  plugins: [],
}

