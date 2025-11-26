import styles from "./Documentation.module.css";

export default function Documentation() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>MediTrack Documentation</h2>

            <p className={styles.text}>
                MediTrack is a MERN-based project built for
                <strong> CPSC 2600: Full-Stack Web Development I</strong>.
                It helps users track their daily medicines, look up real drug
                information through the OpenFDA API, and receive basic
                symptom-based OTC suggestions.
            </p>

            <p className={styles.text}>
                This application is intended <strong>only for educational purposes </strong>
                and should not be treated as a medical tool.
            </p>

            <h3 className={styles.subheading}>How to Use the App</h3>
            <ul className={styles.list}>
                <li>
                    Use <strong>Dashboard</strong> to add, update, or delete medications.
                </li>
                <li>
                    Track your schedule in the <strong>Calendar</strong> right below the medicine form.
                </li>
                <li>
                    Use <strong>Medicine Info</strong> to fetch real FDA-approved data.
                </li>
                <li>
                    Use <strong>Symptom Help </strong> to get OTC medicine suggestions.
                </li>
                <li>
                    A full list of project sources and external references is available on the
                   <strong> Sources </strong> page in the navigation menu.
                </li>
                <li>
                    Prohibited medicines are alerted for, using “alert mode”.
                </li>
            </ul>

            <h3 className={styles.subheading}>Project Requirements Checklist</h3>
            <ul className={styles.list}>
                <li>Multiple React Components + Pages</li>
                <li>State + Props used throughout</li>
                <li>CRUD operations (Add, Update, Delete)</li>
                <li>Client-side routing with React Router</li>
                <li>Express API: GET, POST, PUT, DELETE</li>
                <li>MongoDB Atlas with 2 collections (medicines + users)</li>
                <li>Validation middleware for POST requests</li>
                <li>Deployed on Render (backend) + Netlify (frontend)</li>
            </ul>

            <h3 className={styles.subheading}>Technologies Used</h3>
            <ul className={styles.list}>
                <li>React (Vite)</li>
                <li>Node + Express</li>
                <li>MongoDB Atlas</li>
                <li>CSS Modules</li>
            </ul>

            <h3 className={styles.subheading}>Future Improvements</h3>
            <ul className={styles.list}>
                <li>Push notifications / reminders</li>
                <li>Full appointment calendar</li>
                <li>Better pharmacy lookup with live API</li>
            </ul>
        </div>
    );
}
