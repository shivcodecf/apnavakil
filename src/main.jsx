import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <ThemeProvider>  {/* ✅ Correct usage */}
    <DataProvider>  {/* ✅ Correct usage */}
      <App />
    </DataProvider>
  </ThemeProvider>
);
