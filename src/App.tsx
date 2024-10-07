import "./App.css";
import "./styles/custom.css";
import { Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/ex" element={<ComponentsPage />} />
        </Routes>
    );
}

export default App;
