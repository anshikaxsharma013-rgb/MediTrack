import { Link, Routes, Route } from "react-router-dom";
import styles from "./styles/App.module.css";
import headerStyles from "./styles/Header.module.css";

import DarkModeToggle from "./components/DarkModeToggle";

import Dashboard from "./pages/Dashboard";
import MedicineInfo from "./pages/MedicineInfo";
import SymptomHelp from "./pages/SymptomHelp";
import Documentation from "./pages/Documentation";
import Sources from "./pages/Sources";

export default function App() {
  return (
    <div className={styles.app}>
      
      <header className={headerStyles.header}>
        <h1 className={headerStyles.logo}>MediTrack</h1>

        <nav className={headerStyles.nav}>
          <Link to="/">Dashboard</Link>
          <Link to="/lookup">Medicine Info</Link>
          <Link to="/symptoms">Symptom Help</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/sources" className={styles.link}>Sources</Link>
        </nav>

        <DarkModeToggle />
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lookup" element={<MedicineInfo />} />
          <Route path="/symptoms" element={<SymptomHelp />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>

    </div>
  );
}
