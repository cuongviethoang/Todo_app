import { useState, createContext } from "react";

const ThemeContent = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("black");
    const toggleTheme = () => {
        setTheme(theme === "black" ? "white" : "black");
    };

    const value = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContent.Provider value={value}>{children}</ThemeContent.Provider>
    );
}

export { ThemeContent, ThemeProvider };
