import Text from "@/components/common/Text";
import Login from "@/components/Login";

const LoginPage = () => {
    return (
        <div className="w-full h-screen flex">
            <LeftLoginFrame />
            <Login />
        </div>
    );
};

export default LoginPage;

const LeftLoginFrame = () => {
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
