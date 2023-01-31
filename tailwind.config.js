module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem" /* 12px */,
        sm: "0.875rem" /* 14px */,
        base: "1rem" /* 16px */,
        md: "1.125rem" /* 18px */,
        lg: "1.25rem" /* 20px */,
        xl: "1.5rem" /* 24px */,
        xxl: "2rem" /* 32px */,
      },
      spacing: {
        spacing_xs: "0.5rem" /* 8px */,
        spacing_sm: "0.75rem" /* 12px */,
        spacing_base: "1rem" /* 16px */,
        spacing_md: "1.25rem" /* 20px */,
        spacing_lg: "1.5rem" /* 24px */,
        spacing_xl: "2rem" /* 32px */,
      },
      colors: {
        mpl_black: "#2f2f2f",
        mpl_white: "#fff",
        mpl_lightgray: "#DCDCDC",
        mpl_darkgray: "#666666",
        mpl_pink: "#FF6767",
      },
    },
  },
  plugins: [],
};
