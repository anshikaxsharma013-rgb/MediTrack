import { useState } from "react";
import styles from "./SymptomHelp.module.css";

export default function SymptomHelp() {
  const [symptom, setSymptom] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [results, setResults] = useState([]);

  const symptomData = {
    headache: ["Tylenol", "Advil", "Aspirin"],
    cold: ["NyQuil", "DayQuil", "Robitussin"],
    allergies: ["Claritin", "Reactine", "Benadryl"],
    fever: ["Tylenol", "Children's Tylenol (2+)", "Advil"],
    stomach: ["Pepto-Bismol", "Tums", "Imodium"],
    cough: ["Delsym", "Mucinex", "Robitussin DM"],
    sorethroat: ["Strepsils", "Chloraseptic Spray", "Cough Drops"],
    nausea: ["Gravol", "Dramamine", "Ginger Tablets"]
  };

  const handleSearch = () => {
    if (!symptom) return;
    setResults(symptomData[symptom] || []);
  };

  const openPharmacySearch = () => {
    window.open("https://www.google.com/maps/search/pharmacy+near+me", "_blank");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Symptom-Based Help</h2>

      <div className={styles.filters}>
        <div className={styles.field}>
          <label>Choose Symptom:</label>
          <select value={symptom} onChange={(e) => setSymptom(e.target.value)}>
            <option value="">-- Select Symptom --</option>
            <option value="headache">Headache</option>
            <option value="cold">Cold</option>
            <option value="allergies">Allergies</option>
            <option value="fever">Fever</option>
            <option value="stomach">Stomach ache</option>
            <option value="cough">Cough</option>
            <option value="sorethroat">Sore throat</option>
            <option value="nausea">Nausea</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Age Group:</label>
          <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
            <option value="">-- Select Age Range --</option>
            <option value="2">2+ years</option>
            <option value="10">10+ years</option>
            <option value="20">20+ years</option>
            <option value="50">50+ years</option>
          </select>
        </div>

        {/* Buttons below filters */}
        <div className={styles.buttonRow}>
          <button className={styles.suggestButton} onClick={handleSearch}>
            Suggest Medicines
          </button>

          <button className={styles.pharmacyButton} onClick={openPharmacySearch}>
            Find Nearest Pharmacy
          </button>
        </div>
      </div>

      <br /><br />

      <div className={styles.results}>
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index} className={styles.card}>
              {item}
            </div>
          ))
        ) : (
          <p className={styles.noData}>No medicines to show.</p>
        )}
      </div>
    </div>
  );
}
