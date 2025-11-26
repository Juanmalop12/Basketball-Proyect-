/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            primary: "#ffc400",
            darkbg: "#0F1121",
            darkpanel: "#1a1d2e",
            darktable: "#161822",
        },
        boxShadow: {
            card: "0 4px 15px rgba(0,0,0,0.4)",
            inner: "inset 0 0 10px rgba(255,255,255,0.05)",
        },
        borderRadius: {
            xl: "1rem",
        },
    },
};
export const plugins = [];
