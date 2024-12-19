module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#800080", // Deep purple
        accent: "#FF69B4", // Pink
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #800080, #FF69B4)",
      },
    },
  },
  plugins: [],
};
