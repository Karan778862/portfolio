import { FaSignature } from 'react-icons/fa';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      FaSignature: ["Great Vibes"],
    }
  },
  plugins: [],
}

