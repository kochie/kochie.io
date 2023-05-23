module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./mdx-components.tsx"],
  darkMode: "class", // or 'media' or 'class'
  plugins: [],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        xlWhite: [
          "0 20px 13px rgb(0 0 0 / 0.03)",
          "0 8px 5px rgb(0 0 0 / 0.08)",
        ],
      },
    },
  },
};
