import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { MESSAGE } from "@/constants/description";
import { useState } from "react";
import useUserStore from "@/store/userStore/users";
import { useNavigate } from "react-router-dom";
import { useUserSigninMutate } from "@/hooks/react-query/useUserSignin";

interface LoginProps {
    onSignUpModal(): void;
}

const Login = ({ onSignUpModal }: LoginProps) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const { setUserId, setUserName } = useUserStore();
    const navigate = useNavigate();

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const { mutate } = useUserSigninMutate();

    const handleLogin = () => {
        // 로그인 요청
        mutate(
            { username: id, password },
            {
                onSuccess: (response) => {
                    if (response.length > 0) {
                        const userId = response[0].id;
                        const username = response[0].username;
                        setUserId(userId);
                        setUserName(username);
                        alert(MESSAGE.LOGIN_SUCCESS);
                        navigate("/home");
                    } else {
                        alert(MESSAGE.LOGIN_FAIL);
                    }
                },
                onError: () => {
                    alert(MESSAGE.LOGIN_FAIL);
                },
            }
        );
    };

    const handleSignUp = () => {
        onSignUpModal();
    };

    return (
        <div className="min-w-[383px] w-full max-w-[400px] h-[832px] flex flex-col items-center justify-center">
            <Text size="h2" className="">
                Login
            </Text>
            <div className="flex flex-col w-2/3">
                <Text size="h3">ID</Text>
                <Input
                    type="default"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="Enter your ID"
                />
            </div>
            <div className="flex flex-col w-2/3">
                <Text size="h3">PASSWORD</Text>
                <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    className="border2 border-black"
                />
            </div>
            <div className="w-2/3 flex justify-between items-center mt-6">
                <Button type="signin" onClick={handleLogin} disabled>
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
