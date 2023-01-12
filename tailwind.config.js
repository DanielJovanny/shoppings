/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'fredoka': ['"Fredoka"', 'sans-serif']
            },
            colors: {
                primary: '#009CDE',
                accent: '#60ccff',
            }
        },
    },
    plugins: [],
}