module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    styled: true,
    themes: ["light"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
