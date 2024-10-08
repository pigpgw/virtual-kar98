import React from "react";

const typeStyles = {
    default: "h-11 w-full bg-white  rounded-3xl border-2 border-black",
    password: "h-11 w-full bg-white rounded-3xl border-2 border-black",
    large: "h-[42px] w-[454px] bg-black text-white rounded-md",
    extraLarge: "h-[112px] w-[454px] py-2 bg-black text-white rounded-md",
    doubleextraLarge: "h-[203px] w-[490px] py-2 bg-black text-white rounded-md",
    xlong: "h-[33px] w-[616px] bg-black text-white rounded-md",
    ylong: "h-[368px] w-[225px] bg-black text-white rounded-md",
};

type InputType = keyof typeof typeStyles;

interface InputProps {
    type: InputType;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
    const baseStyles = "focus:outline-none pl-2";

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
