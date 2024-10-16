import "./App.css";
import "./styles/custom.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import useUserStore from "./store/userStore/users";
import { ReactNode } from "react";
interface AuthWrapperProps {
    children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
    const { userId } = useUserStore();
    const location = useLocation();

    if (!userId) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/home"
                element={
                    <AuthWrapper>
                        <HomePage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/ex"
                element={
                    <AuthWrapper>
                        <ComponentsPage />
                    </AuthWrapper>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default App;
