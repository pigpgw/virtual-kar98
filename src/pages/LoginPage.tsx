import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "@/components/common/Text";
import Login from "@/components/Login";
import SignUpModal from "@/components/Modal/SignUPModal";

const LoginPage: React.FC = () => {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleNavigateToHome = (): void => {
        navigate("/home");
    };

    const handleCloseSignUpModal = (): void => {
        setIsSignUpModalOpen(false);
    };

    const handleOpenSignUpModal = (): void => {
        setIsSignUpModalOpen(true);
    };

    return (
        <div className="w-full h-screen flex">
            <LoginSidebar />
            <Login onSignUpModal={handleOpenSignUpModal} />
            {isSignUpModalOpen && (
                <SignUpModal onAgree={handleNavigateToHome} onCancle={handleCloseSignUpModal} />
            )}
        </div>
    );
};

const LoginSidebar: React.FC = () => {
    return (
        <div className="w-full h-full bg-black flex flex-col items-center justify-center">
            <Text size="h1" className="text-white relative right-40 bottom-10">
                Jungle
            </Text>
            <Text size="h1" className="text-white relative left-40 top-10">
                Board
            </Text>
        </div>
    );
};

export default LoginPage;
