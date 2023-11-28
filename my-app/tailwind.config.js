/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: '#242424',
                geral: '#4DC8CB',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
}
