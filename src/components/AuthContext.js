import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};
	return [storedValue, setValue];
}

export default function AuthProvider(props) {
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

	const value = {
		isLoggedIn,
		setIsLoggedIn,
	};

	return (
		<AuthContext.Provider value={value}>
			{props.children}
		</AuthContext.Provider>
	);
}
