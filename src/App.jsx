import "./scss/App.scss";
import ThemeSwitcher from "./components/themeSwitcher";
import Calculator from "./components/Calculator";
import { useState, useRef } from "react";
import buttons from "./buttons";

function App() {
  const [theme, setTheme] = useState("theme-1");
  const switcherRef = useRef(null);

  const switchTheme = () => {
    const switcher = switcherRef.current;
    if (switcher.classList.contains("theme-1")) {
      switcher.classList.add("theme-2");
      switcher.classList.remove("theme-1");
      setTheme("theme-2");
    } else if (switcher.classList.contains("theme-2")) {
      switcher.classList.add("theme-3");
      switcher.classList.remove("theme-2");
      setTheme("theme-3");
    } else if (switcher.classList.contains("theme-3")) {
      switcher.classList.add("theme-1");
      switcher.classList.remove("theme-3");
      setTheme("theme-1");
    }
  };

  return (
    <div
      className={`App ${
        theme === "theme-1"
          ? "original"
          : theme === "theme-2"
          ? "second"
          : "third"
      }`}
    >
      <ThemeSwitcher
        switcherRef={switcherRef}
        switchTheme={switchTheme}
        theme={theme}
      />
      <Calculator buttons={buttons} />
    </div>
  );
}

export default App;
