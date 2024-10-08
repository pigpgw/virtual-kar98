import React, { useState } from "react";
import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    onSignUpModal(): void;
}

const Login = ({ onSignUpModal }: LoginProps) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        navigate("/home");
    };

    const handleSignUp = () => {
        onSignUpModal();
    };

    return (
        <div className="min-w-[383px] w-full max-w-[383px] h-[832px] flex flex-col items-center justify-center">
            <Text size="h2" className="">
                Login
            </Text>
            <div className="flex flex-col">
                <Text size="h3">ID</Text>
                <Input
                    type="default"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="Enter your ID"
                />
            </div>
            <div className="flex flex-col">
                <Text size="h3">PASSWORD</Text>
                <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
            </div>
            <div className="w-2/3 flex justify-between items-center mt-6">
                <Button type="signin" onClick={handleLogin}>
                    Signin
                </Button>
                <Button type="signup" onClick={handleSignUp}>
                    Signup
                </Button>
            </div>
        </div>
    );
};

export default Login;
