/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img_bg_hero': "url('https://www.fundacaoitauunibanco.com.br/wp-content/uploads/2023/05/Frame-173.png')",
    },
      colors: {
        'primary-blue': '#106EB0',
        'primary-orange': '#EC7000',
        'secondary-orange': '#FFA800',
        'primary-gray': '#33303E',
        'secondary-gray': '#4E4B59',
        'gray-phone': '#F4F4F4',
        'txt-gray': '#7A7786',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config;
