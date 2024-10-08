import React, { useState } from "react";
import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";

const SignUpModal = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        // 여기에 회원가입 로직 추가
        console.log("회원가입:", { id, password });
    };

    return (
        <div className="w-[436px] h-[536px] flex items-center justify-center flex-col bg-black rounded-e-2xl">
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
                        placeholder="아이디를 입력하세요"
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
                        placeholder="비밀번호를 입력하세요"
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
                        placeholder="비밀번호를 다시 입력하세요"
                    />
                </div>
                <div className="flex pt-5">
                    <Button type="yes">
                        <Text size="button">YES</Text>
                    </Button>
                    <Button type="no">
                        <Text size="button">NO</Text>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpModal;
