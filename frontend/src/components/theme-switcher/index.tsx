import { FiMoon } from "react-icons/fi";
import { CiCloudSun } from "react-icons/ci";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        if (theme == "light") {
            document.documentElement.classList.remove("dark");
        }

    }, [theme])

    const handleChangeTheme = () => {
        if (theme == "light") {
            setTheme("dark");
        }
        if (theme == "dark") {
            setTheme("light")
        }
    }

    return (
        <button onClick={handleChangeTheme} className="border hover:dark:bg-stone-800 hover:bg-gray-50 dark:border-stone-700 rounded-lg p-2 text-xs">
            {theme == "light" ? <FiMoon /> : <CiCloudSun />}
        </button>
    )
}