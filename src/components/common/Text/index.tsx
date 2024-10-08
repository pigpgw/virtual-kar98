import React from "react";

const sizeStyles = {
    h1: "font-black-italy text-logo-main",
    h2: "font-black-italy text-logo-login",
    h3: "font-black-italy text-logo-header",
    h4: "font-black-italy text-logo-modal",
    h5: "font-black-italy text-title",
    h6: "font-black-italy text-subtitle",
    body: "font-regular text-body",
    "body-bold": "font-black-italy text-body font-bold",
    button: "font-italy text-button-regular",
    "button-large": "font-extra-bold text-button-large",
    caption: "font-regular text-caption",
};

type TextType = keyof typeof sizeStyles;

interface TextProps {
    size: TextType;
    children: React.ReactNode;
    className?: string;
}

const Text = ({ size, children, className = "" }: TextProps) => {
    const textStyle = `${sizeStyles[size]} ${className}`;

    return <span className={textStyle}>{children}</span>;
};

export default Text;
