import { useState } from "react";
import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    // If danger mode is on, ignore
    if (document.documentElement.classList.contains("danger")) return;

    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <button className={styles.button} onClick={toggleMode}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
