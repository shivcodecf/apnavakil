import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DataList from "./components/DataList";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            {/* <h1 className="text-center mt-10">React Theme Switcher</h1> */}
            <DataList />
        </div>
    );
};

export default App;
