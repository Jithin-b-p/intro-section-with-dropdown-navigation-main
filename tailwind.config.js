/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customNeutral: {
          100: "hsl(var(--color-neutral-100))",
          200: "hsl(var(--color-neutral-200))",
          300: "hsl(var(--color-neutral-300))",
        },
      },
      boxShadow: {
        "3xl": "0px 2px 45px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
