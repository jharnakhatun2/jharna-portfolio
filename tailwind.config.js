/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        jharnatheme: {
        
            primary: "#06515c",
                    
            secondary: "#30e1fb",
                    
            accent: "#576574",
                    
            neutral: "#222f3e",
                    
            "base-100": "#FFFFFF"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
