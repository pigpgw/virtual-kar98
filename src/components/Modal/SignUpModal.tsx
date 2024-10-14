import { useState } from "react";
import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { postSignIn, postSignUp } from "@/api/user";
import { MESSAGE } from "@/constants/description";

interface Props {
    onCancle(): void;
}

const SignUpModal = ({ onCancle }: Props) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert(MESSAGE.INPUT_PASSWORD_MISMATCH);
            return;
        }
        const userExist = await postSignIn(id, password);
        if (userExist.length > 0) {
            alert(MESSAGE.INPUT_USERNAME_TAKEN);
            setId("");
            setPassword("");
            setConfirmPassword("");
            return;
        }
        try {
            await postSignUp({ username: id, password });
            alert(MESSAGE.SIGNUP_SUCCESS);
            onCancle();
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="w-[436px] h-[536px] flex items-center justify-center flex-col bg-black rounded-e-2xl  bg-opacity-50 z-50 border border-white rounded-3xl">
            <Text size="h4" className="text-white">
                sign up
            </Text>
            <form onSubmit={handleSubmit} className="w-[400px] flex flex-col items-center p-5">
                <div className="mb-4 w-full flex flex-col items-start">
                    <Text size="h6" className="self-start mb-2 text-white">
                        ID
                    </Text>
                    <Input
                        type="default"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder={MESSAGE.INPUT_ID_EMPTY_CONTENT}
                    />
                </div>
                <div className="mb-4 w-full flex flex-col items-start">
                    <Text size="h6" className="self-start mb-2 text-white">
                        PASSWORD
                    </Text>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={MESSAGE.INPUT_PASSWORD_EMPTY_CONTENT}
                    />
                </div>
                <div className="mb-4 w-full flex flex-col items-start">
                    <Text size="h6" className="self-start mb-2 text-white">
                        PASSWORD CONFIRM
                    </Text>
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder={MESSAGE.INPUT_CONFIRM_PASSWORD_EMPTY_CONTENT}
                    />
                </div>
                <div className="flex pt-5">
                    <Button type="yes">
                        <Text size="button">YES</Text>
                    </Button>
                    <Button type="no" onClick={onCancle}>
                        <Text size="button">NO</Text>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpModal;
