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

            <h3 className={styles.subheading}>How the Frontend & Backend Work Together</h3>
            <p className={styles.text}>
                MediTrack is a full MERN-stack application. The frontend is built with React 
                and deployed on <strong>Netlify</strong>, while the backend API is built with 
                Express + Node.js and deployed on <strong>Render</strong>.
            </p>

            <ul className={styles.list}>
                <li>
                    The React frontend sends requests using <strong>Axios</strong> to the backend API.
                </li>
                <li>
                    Backend routes (GET, POST, PUT, DELETE) live on the Render server and 
                    communicate with <strong>MongoDB Atlas</strong>.
                </li>
                <li>
                    When the app needs to load, add, edit, or delete medicines, 
                    it contacts the backend through the <strong>/api/medicines</strong> routes.
                </li>
                <li>
                    The backend validates data, interacts with the MongoDB database, 
                    then sends JSON responses back to the React frontend.
                </li>
            </ul>

            <p className={styles.text}>
                This ensures full persistence of data, even after page refreshes or when the app 
                is closed and opened again.
            </p>

            <h3 className={styles.subheading}>Deployed Application Links</h3>
            <ul className={styles.list}>
                <li>
                    <strong>Frontend (React on Netlify):</strong><br />
                    <a href="https://meditrack-project.netlify.app/" target="_blank">
                        https://meditrack-project.netlify.app/
                    </a>
                </li>
                <li>
                    <strong>Backend (Express API on Render):</strong><br />
                    <a href="https://meditrack-backend-yyqm.onrender.com/api/medicines" target="_blank">
                        https://meditrack-backend-yyqm.onrender.com/api/medicines
                    </a>
                </li>
                <li>
                    <strong>MongoDB Atlas:</strong> Used to store medicines and user data.
                </li>
            </ul>
            
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
                    Prohibited medicines trigger a special <strong>alert mode</strong>.
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

            <h3 className={styles.subheading}>References</h3>
            <p className={styles.text}>
                A full list of project sources and external references is available on the
                <strong> Sources </strong> page in the navigation menu.
            </p>
        </div>
    );
}
