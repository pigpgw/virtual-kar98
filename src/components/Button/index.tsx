import React from "react";

type ButtonType =
    | "default"
    | "signin"
    | "signup"
    | "write1"
    | "write2"
    | "yes"
    | "no"
    | "logout"
    | "delete"
    | "my";

interface ButtonProps {
    type?: ButtonType;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ type = "default", children, onClick }: ButtonProps) => {
    const baseStyles = "focus:outline-none font-semibold";

    const typeStyles: Record<ButtonType, string> = {
        default: "w-24 h-9 bg-white text-black",
        signin: "w-24 h-9 border border-black rounded-full text-black",
        signup: "w-24 h-9 bg-black text-white rounded-full",
        write1: "w-[90px] h-7 bg-white text-black rounded-md",
        write2: "w-[140px] h-7 bg-white text-black rounded-md",
        yes: "w-[140px] h-7 bg-white text-black rounded-md",
        no: "w-[140px] h-7 bg-black text-white rounded-md",
        logout: "w-[206px] h-11 bg-black text-white rounded-lg",
        delete: "w-[206px] h-11 bg-black text-white rounded-lg",
        my: "w-13 h-13 bg-white text-black",
    };

    const buttonStyle = `${baseStyles} ${typeStyles[type]}`;

    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
