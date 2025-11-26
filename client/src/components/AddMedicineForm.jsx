import { useState } from "react";
import styles from "./AddMedicineForm.module.css";
import api from "../api/axios";

import { detectDangerWords } from "../utils/detectDanger";

export default function AddMedicineForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        dosage: "",
        time: "",
        notes: "",
        date: new Date().toISOString().slice(0, 10)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Danger mode detection
        if (name === "name") {
            const lower = value.toLowerCase();
            const isDanger = detectDangerWords(value);
            document.documentElement.classList.toggle("danger", isDanger);
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.dosage || !form.time) return;

        const res = await api.post("/medicines", form);
        onAdd(res.data);

        setForm({
            name: "",
            dosage: "",
            time: "",
            notes: "",
            date: new Date().toISOString().slice(0, 10)
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.title}>Add Medicine</h3>

            <input
                name="name"
                placeholder="Medicine name"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
            />

            <input
                name="dosage"
                placeholder="Dosage (e.g., 500 mg)"
                className={styles.input}
                value={form.dosage}
                onChange={handleChange}
            />

            <input
                type="time"
                name="time"
                className={styles.input}
                value={form.time}
                onChange={handleChange}
            />

            <input
                type="date"
                name="date"
                className={styles.input}
                value={form.date}
                onChange={handleChange}
            />

            <textarea
                name="notes"
                placeholder="Notes"
                className={styles.textarea}
                value={form.notes}
                onChange={handleChange}
            />

            <button className={styles.button}>Save</button>
        </form>
    );
}
