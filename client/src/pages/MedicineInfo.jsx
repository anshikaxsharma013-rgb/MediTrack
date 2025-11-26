import { useEffect } from "react";
import styles from "./MedicineInfo.module.css";
import DrugLookup from "../components/DrugLookup";
import { detectDangerWords } from "../utils/detectDanger";

export default function MedicineInfo() {

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery && detectDangerWords(lastQuery)) {
      document.documentElement.classList.add("danger");
    } else {
      document.documentElement.classList.remove("danger");
    }

    return () => {
      document.documentElement.classList.remove("danger");
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Medicine Information Lookup</h2>

      <p className={styles.desc}>
        Search any common brand or generic name. Data is pulled from the
        <strong> OpenFDA Drug API</strong>.
      </p>

      <DrugLookup />
    </div>
  );
}
