import MedicineCard from "./MedicineCard";
import styles from "./ReminderList.module.css";

export default function ReminderList({ medicines, onUpdate, onDelete }) {
  return (
    <div className={styles.list}>
      {medicines.length === 0 && (
        <p className={styles.empty}>No medicines added yet.</p>
      )}

      {medicines.map((med) => (
        <MedicineCard
          key={med._id}
          medicine={med}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
