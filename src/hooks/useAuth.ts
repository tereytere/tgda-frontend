import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	if (!authContext) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	const { isAuthenticated, login, logout } = authContext;

	// Function to handle logout and redirection
	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return { isAuthenticated, login, handleLogout };
};
