import styles from "./MedicineCard.module.css";

export default function MedicineCard({ medicine, onUpdate, onDelete }) {

  // Simple helper to build Google Calendar link
  function buildGoogleCalendarLink(med) {
    
  // Format: YYYYMMDDTHHMMSS
    const start = med.date.replace(/-/g, "") + "T" + med.time.replace(":", "") + "00";
    const end = start; // simple same start/end time

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Take+${med.name}&dates=${start}/${end}&details=${med.dosage}`;
  }

  return (
    <div className={`${styles.card} ${styles[medicine.status]}`}>
      <h4 className={styles.name}>{medicine.name}</h4>
      <p><strong>Dosage:</strong> {medicine.dosage}</p>
      <p><strong>Time:</strong> {medicine.time}</p>
      <p><strong>Date:</strong> {medicine.date}</p>
      {medicine.notes && <p className={styles.notes}>{medicine.notes}</p>}

      <div className={styles.buttons}>
        <button
          className={styles.success}
          onClick={() => onUpdate(medicine._id, { status: "taken" })}
        >
          Taken
        </button>

        <button
          className={styles.warning}
          onClick={() => onUpdate(medicine._id, { status: "missed" })}
        >
          Missed
        </button>

        <button
          className={styles.delete}
          onClick={() => onDelete(medicine._id)}
        >
          Delete
        </button>

        {/* Add to Google Calendar button */}
        <button
          className={styles.calendar}
          onClick={() => window.open(buildGoogleCalendarLink(medicine), "_blank")}
        >
          Add Reminder
        </button>
      </div>
    </div>
  );
}
