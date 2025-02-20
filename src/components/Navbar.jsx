import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md"; 
import { CiLight } from "react-icons/ci";

const Navbar = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="p-4 bg-[var(--item-bg)] text-[var(--text-primary)] flex justify-between">

            <h1 className="text-lg font-bold">Data Management System</h1>

            <button

                onClick={toggleTheme}

                className="p-2 rounded-md bg-gray-300 dark:bg-gray-600 text-black dark:text-white cursor-pointer"
            >
                {theme === "light" ? <MdDarkMode /> : <CiLight />}

            </button>

        </nav>
    );
};

export default Navbar;
