import { createContext, useContext, useEffect, useState } from "react";
import { addClassInAll, removeClassInAll } from "../utils/themeFunc";

export const ThemeContext = createContext();

export const setDefaultTheme = () => {
    const body = document.querySelectorAll("body");
    const containers = document.querySelectorAll(".container");
    const card = document.querySelectorAll(".card");
    const icon = document.querySelectorAll(".icon");
    const navBar = document.querySelectorAll(".nav");
    const theme = localStorage.getItem('theme');
    const savedTheme = Boolean(theme) ? theme : 'light';
    addClassInAll(body, savedTheme);
    addClassInAll(containers, savedTheme);
    addClassInAll(card, savedTheme);
    addClassInAll(icon, savedTheme);
    addClassInAll(navBar, savedTheme);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const changeThemeMode = () => {
        const body = document.querySelectorAll("body");
        const containers = document.querySelectorAll(".container");
        const card = document.querySelectorAll(".card");
        const icon = document.querySelectorAll(".icon");
        const navBar = document.querySelectorAll(".nav");

        const toggledTheme = theme === 'light' ? 'dark' : 'light';
        console.log('changeThemeMode ===> ', theme, containers, toggledTheme)

        removeClassInAll(body, theme);
        addClassInAll(body, toggledTheme);

        removeClassInAll(containers, theme);
        addClassInAll(containers, toggledTheme);

        removeClassInAll(card, theme);
        addClassInAll(card, toggledTheme);

        removeClassInAll(navBar, theme);
        addClassInAll(navBar, toggledTheme);

        removeClassInAll(icon, theme);
        addClassInAll(icon, toggledTheme);
        setTheme(toggledTheme);

        localStorage.setItem('theme', toggledTheme);
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const savedTheme = Boolean(theme) ? theme : 'light';
        setTheme(savedTheme);
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}