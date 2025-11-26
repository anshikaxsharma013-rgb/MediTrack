import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Calendar from "../components/Calendar";

import AddMedicineForm from "../components/AddMedicineForm";
import ReminderList from "../components/ReminderList";
import api from "../api/axios";

export default function Dashboard() {
  const [medicines, setMedicines] = useState([]);

  const loadData = async () => {
    const res = await api.get("/medicines");
    setMedicines(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addMedicine = (newMed) => {
    setMedicines((prev) => [newMed, ...prev]);
  };

  const updateMedicine = async (id, updates) => {
    const res = await api.put(`/medicines/${id}`, updates);
    setMedicines((prev) =>
      prev.map((med) => (med._id === id ? res.data : med))
    );
  };

  const deleteMedicine = async (id) => {
    await api.delete(`/medicines/${id}`);
    setMedicines((prev) => prev.filter((med) => med._id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Daily Medication Dashboard</h2>

      {/* Add Medicine Form */}
      <AddMedicineForm onAdd={addMedicine} />

      {/* Reminder List */}
      <ReminderList
        medicines={medicines}
        onUpdate={updateMedicine}
        onDelete={deleteMedicine}
      />

      {/* Calendar */}
      <Calendar medicines={medicines} />
    </div>
  );
}
