import React, { useState } from "react";
import styles from "./Calendar.module.css";

export default function Calendar({ medicines }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Get number of days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create array [1…31]
  const daysArray = [...Array(daysInMonth).keys()].map((d) => d + 1);

  // Helper to get YYYY-MM-DD
  const formatDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  // Determine color/status for a day
  const getStatusForDay = (day) => {
    const date = formatDate(day);
    const medsForDay = medicines.filter((m) => m.date === date);

    if (medsForDay.length === 0) return "empty";

    const taken = medsForDay.every((m) => m.status === "taken");
    const missed = medsForDay.some((m) => m.status === "missed");
    const pending = medsForDay.some((m) => m.status === "pending");

    if (taken) return "taken";
    if (missed) return "missed";
    if (pending) return "upcoming";
  };

  const handleDayClick = (day) => {
    setSelectedDate(formatDate(day));
  };

  const medsForSelectedDay = selectedDate
    ? medicines.filter((m) => m.date === selectedDate)
    : [];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Medicine Calendar — {today.toLocaleString("default", { month: "long" })}{" "}
        {year}
      </h2>

      <div className={styles.grid}>
        {daysArray.map((day) => {
          const status = getStatusForDay(day);

          return (
            <div
              key={day}
              className={`${styles.dayCard} ${styles[status]}`}
              onClick={() => handleDayClick(day)}
            >
              <span className={styles.dayNumber}>{day}</span>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className={styles.details}>
          <h3>Medicines for {selectedDate}</h3>

          {medsForSelectedDay.length === 0 ? (
            <p>No medicines on this date.</p>
          ) : (
            <ul className={styles.list}>
              {medsForSelectedDay.map((m) => (
                <li key={m._id}>
                  <strong>{m.name}</strong> — {m.dosage} at {m.time} (
                  {m.status})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
