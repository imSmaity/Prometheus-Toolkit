/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#475569",
        secondary: "#94A3B8",
        "modal-secondary": "#64748B",
        gray: "#E2E8F0",
        highlight: "#F1F5F9",
        "highlight-2": "#F8FAFC",
        active: "#22863A",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "20px",
      },
      lineHeight: {
        1: "16px",
        2: "20px",
        3: "28px",
      },
    },
  },
  plugins: [],
};
