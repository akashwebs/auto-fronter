/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ['var(--custom)'],
      },
      colors: {
        // primary: "#2B3690",
        primary: "#6EC1E4",
        // secondary: "#11743B",
        secondary:'#54595F',
        accent: "#61CE70",
        text:"#7A7A7A",
        neutral: "#555555",
        info: "#EEFFF8",
        success: "#4CAF50",
        warning: "#FFC107",
        // error: "#F44336",
        error: "#E51717",
        blue: "#f9faff",
      },
      screens: {
        sm: "320px",
        md: "768px",
        md2: "900px",
        lg: "974px",
        lg2: "1220px",
        xl: "1440px",
        xl2:"2000px"
      },
    },
  },
  plugins: [],
}
