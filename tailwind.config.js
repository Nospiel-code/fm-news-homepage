/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaryO: "hsl(35, 77%, 62%)",
        primaryR: "hsl(5, 85%, 63%)",
        secondary900: "hsl(240, 100%, 5%)",
        secondary700: "hsl(236, 13%, 42%)",
        secondary400: "hsl(233, 8%, 79%)",
        secondary100: "hsl(36, 100%, 99%)",
      }
    },
  },
  plugins: [],
}

