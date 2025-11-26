import { useState, useEffect } from "react";
import styles from "./DrugLookup.module.css";
import axios from "axios";
import { detectDangerWords } from "../utils/detectDanger";

export default function DrugLookup() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    const lastResult = localStorage.getItem("lastResult");

    if (lastQuery) {
      setQuery(lastQuery);

      if (detectDangerWords(lastQuery)) {
        document.documentElement.classList.add("danger");
      }

      if (lastResult) {
        setResult(JSON.parse(lastResult));
      }
    }

    return () => {
      document.documentElement.classList.remove("danger");
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    localStorage.setItem("lastQuery", query);

    const isDanger = detectDangerWords(query);

    if (isDanger) {
      document.documentElement.classList.add("danger");
    } else {
      document.documentElement.classList.remove("danger");
    }

    try {
      const res = await axios.get("https://api.fda.gov/drug/label.json", {
        params: {
          search: `openfda.brand_name:"${query}"`,
          limit: 1
        }
      });

      const item = res.data.results[0];

      const finalResult = {
        brand: item.openfda?.brand_name?.[0],
        generic: item.openfda?.generic_name?.[0],
        manufacturer: item.openfda?.manufacturer_name?.[0],
        usage: item.indications_and_usage?.[0],
        warnings: item.warnings?.[0] || "No warnings listed."
      };

      setResult(finalResult);

      localStorage.setItem("lastResult", JSON.stringify(finalResult));

    } catch {
      setError("No data found.");
      localStorage.removeItem("lastResult");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search brand name (e.g., Advil)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button}>Search</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {result && (
        <div className={styles.result}>
          <h3>{result.brand}</h3>
          <p><strong>Generic:</strong> {result.generic}</p>
          <p><strong>Manufacturer:</strong> {result.manufacturer}</p>
          <p><strong>Usage:</strong> {result.usage}</p>
          <p><strong>Warnings:</strong> {result.warnings}</p>
        </div>
      )}
    </div>
  );
}
