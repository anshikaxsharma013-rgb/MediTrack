import { useState } from "react";
import styles from "./SymptomSelector.module.css";

export default function SymptomSelector() {
  const [symptom, setSymptom] = useState("headache");
  const [age, setAge] = useState("adult");

  const medicines = {
    headache: ["Tylenol", "Advil"],
    cold: ["DayQuil", "NyQuil"],
    allergies: ["Claritin", "Reactine"]
  };

  return (
    <div className={styles.card}>
      <select value={symptom} onChange={(e) => setSymptom(e.target.value)}>
        <option value="headache">Headache</option>
        <option value="cold">Cold</option>
        <option value="allergies">Allergies</option>
      </select>

      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="child">Child</option>
        <option value="teen">Teen</option>
        <option value="adult">Adult</option>
      </select>

      <ul>
        {medicines[symptom].map((m) => (
          <li key={m}>{m} (age: {age})</li>
        ))}
      </ul>
    </div>
  );
}
