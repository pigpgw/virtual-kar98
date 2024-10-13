import { ButtonHTMLAttributes } from "react";

const typeStyles = {
    default: "w-24 h-9 bg-white text-black border border-gray-300",
    signin: "w-24 h-9 border border-black rounded-full text-black",
    signup: "w-24 h-9 bg-black text-white rounded-full",
    write1: "w-[90px] h-7 bg-white text-black rounded-md border border-gray-300",
    write2: "w-[140px] h-7 bg-white text-black rounded-md border border-gray-300",
    yes: "w-[140px] h-7 bg-white text-black rounded-md border border-gray-300",
    no: "w-[140px] h-7 bg-black text-white rounded-md border border",
    logout: "w-[206px] h-11 bg-black text-white rounded-2xl border border-white",
    delete: "w-[206px] h-11 bg-black text-white rounded-2xl border border-white",
    my: "w-15 h-15 text-black",
};

type ButtonType = keyof typeof typeStyles;

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    type?: ButtonType;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({ type = "default", children, onClick, className, ...props }: ButtonProps) => {
    const baseStyles = "focus:outline-none font-semibold";

    const buttonStyle = `${baseStyles} ${typeStyles[type]} ${className}`;

    return (
        <button className={buttonStyle} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
