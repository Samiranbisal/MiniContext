import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Card from "./components/Card";
import Thememore from "./components/Thememore";

function App() {
  const [ThemeMode, setThemeMore] = useState("light");

  const lightTheme = () => {
    setThemeMore("light")
  }
  const darkTheme = () => {
    setThemeMore('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])

  return (
    <>
      <h1 className="p-4 text-7xl text-blue-700 bg-pink-600 font-bold" >
        Project 2
      </h1>
      <ThemeProvider value={{ThemeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Thememore/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
