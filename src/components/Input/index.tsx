import React from "react";

type InputType =
    | "default"
    | "password"
    | "large"
    | "extraLarge"
    | "doubleextraLarge"
    | "xlong"
    | "ylong";

interface InputProps {
    type: InputType;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    const baseStyles = "border focus:outline-none focus:ring-2 focus:ring-blue-500";

    const typeStyles: Record<InputType, string> = {
        default: "h-11 w-[296px] bg-white text-white rounded-md",
        password: "h-11 w-[296px] bg-white rounded-md",
        large: "h-[42px] w-[454px] bg-black text-white rounded-md",
        extraLarge: "h-[112px] w-[454px] py-2 bg-black text-white rounded-md",
        doubleextraLarge: "h-[203px] w-[490px] py-2 bg-black text-white rounded-md",
        xlong: "h-[33px] w-[616px] bg-black text-white rounded-md",
        ylong: "h-[368px] w-[225px] bg-black text-white rounded-md",
    };

    const inputStyle = `${baseStyles} ${typeStyles[type]}`;

    return (
        <input
            type={type === "password" ? "password" : "text"}
            className={inputStyle}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
