import React, { InputHTMLAttributes } from "react";

const typeStyles = {
    default: "h-11 w-full bg-white  rounded-3xl border-2 border-black",
    password: "h-11 w-full bg-white rounded-3xl border-2 border-black",
    large: "h-[42px] w-[454px] bg-black text-white rounded-md",
    extraLarge: "h-[112px] w-[454px] py-2 bg-black text-white rounded-md",
    doubleextraLarge: "h-[203px] w-[490px] py-2 bg-black text-white rounded-md",
    xlong: "h-[33px] w-[616px] bg-black text-white rounded-md",
    ylong: "h-[368px] w-[225px] bg-black text-white rounded-md",
} as const;

type InputType = keyof typeof typeStyles;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    type: InputType;
}

const Input: React.FC<InputProps> = ({ type, className, ...rest }) => {
    const baseStyles = "focus:outline-none pl-2 border border-white";
    const inputStyle = `${baseStyles} ${typeStyles[type]} ${className || ""}`;

    return (
        <input {...rest} type={type === "password" ? "password" : "text"} className={inputStyle} />
    );
};

export default Input;
