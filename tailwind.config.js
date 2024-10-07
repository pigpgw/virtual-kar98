/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                ],
                "black-italy": ["Inter", "sans-serif"],
                regular: ["Inter", "sans-serif"],
                italy: ["Inter", "sans-serif"],
                "extra-bold": ["Inter", "sans-serif"],
            },
            fontSize: {
                "logo-main": ["170px", { lineHeight: "100%", fontWeight: "900" }],
                "logo-login": ["70px", { lineHeight: "150%", fontWeight: "900" }],
                "logo-header": ["30px", { lineHeight: "150%", fontWeight: "900" }],
                "logo-modal": ["40px", { lineHeight: "150%", fontWeight: "900" }],
                title: ["30px", { lineHeight: "150%", fontWeight: "900" }],
                subtitle: ["20px", { lineHeight: "150%", fontWeight: "700" }],
                body: ["14px", { lineHeight: "150%", fontWeight: "400" }],
                "button-regular": ["18px", { lineHeight: "150%", fontWeight: "500" }],
                "button-large": ["20px", { lineHeight: "150%", fontWeight: "700" }],
            },
        },
    },
    plugins: [],
};
