import styles from "./Documentation.module.css";

export default function Documentation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>MediTrack — Documentation</h2>

      <p className={styles.text}>
        MediTrack is a full-stack MERN application developed for 
        <strong> CPSC 2600: Full-Stack Web Development I</strong>. 
        The app helps users track their daily medicines, look up real FDA-approved
        drug details, and get basic OTC suggestions based on symptoms.
      </p>

      <p className={styles.text}>
        This project demonstrates concepts learned throughout the course:
        React components, hooks, state management, props, Express REST API, 
        MongoDB Atlas integration, API validation, client-side routing, and deployment.
      </p>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>How the App Works</h3>
      <ul className={styles.list}>
        <li>
          <strong>Dashboard:</strong> Add, update, delete, and track medicines.
          Entries are stored in MongoDB Atlas.
        </li>
        <li>
          <strong>Calendar:</strong> A simple visual calendar showing the medicines for each day.
        </li>
        <li>
          <strong>Medicine Info:</strong> Searches real pharmaceutical data using the
          <strong> OpenFDA Drug API</strong>. Includes danger alerts for prohibited drugs.
        </li>
        <li>
          <strong>Symptom Help:</strong> Suggests OTC medicines with an age-group filter.
        </li>
        <li>
          <strong>Danger Mode:</strong> If a prohibited drug (e.g., “cocaine”) is detected,
          the page switches to an alert theme using state + localStorage.
        </li>
        <li>
          <strong>Documentation & Sources:</strong> Required by the assignment.
        </li>
      </ul>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Project Architecture</h3>
      <p className={styles.text}>
        MediTrack uses a classic MERN architecture:
      </p>

      <ul className={styles.list}>
        <li><strong>Frontend (React + Vite):</strong> UI, routing, state, API calls.</li>
        <li><strong>Backend (Express):</strong> REST API that exposes CRUD routes.</li>
        <li><strong>Database (MongoDB Atlas):</strong> Two collections: <em>medicines</em> and <em>users</em>.</li>
        <li><strong>Axios:</strong> Used for client → server communication.</li>
      </ul>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Backend API Routes</h3>
      <ul className={styles.list}>
        <li>GET <code>/api/medicines</code> — returns all medicines</li>
        <li>GET <code>/api/medicines/:id</code> — returns one medicine</li>
        <li>POST <code>/api/medicines</code> — create with validation middleware</li>
        <li>PUT <code>/api/medicines/:id</code> — update a medicine</li>
        <li>DELETE <code>/api/medicines/:id</code> — delete a medicine</li>
        <li>GET <code>/api/users</code> — returns all users</li>
        <li>POST <code>/api/users</code> — adds a user</li>
      </ul>

      <p className={styles.text}>
        All POST requests are validated using a custom Express middleware 
        (<code>validateMedicine.js</code>).
      </p>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Deployment Details</h3>
      <ul className={styles.list}>
        <li>
          <strong>Frontend (React) hosted on Netlify:</strong><br />
          <a href="https://meditrack-project.netlify.app" target="_blank">
            https://meditrack-project.netlify.app
          </a>
        </li>
        <li>
          <strong>Backend (Express) hosted on Render:</strong><br />
          <a href="https://meditrack-backend-yyqm.onrender.com" target="_blank">
            https://meditrack-backend-yyqm.onrender.com
          </a>
        </li>
        <li>
          RPC communication uses the deployed API URL via Axios.
        </li>
        <li>
          MongoDB Atlas stores all real user and medicine data.
        </li>
      </ul>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Local Development Instructions</h3>
      <p className={styles.text}>To run MediTrack locally:</p>

      <h4 className={styles.smallheading}>Frontend:</h4>
      <pre className={styles.code}>
        npm install
        npm run dev
      </pre>

      <h4 className={styles.smallheading}>Backend:</h4>
      <pre className={styles.code}>
        cd server
        npm install
        npm run dev
      </pre>

      <p className={styles.text}>
        Make sure your <strong>.env</strong> file contains your MongoDB Atlas connection string:
      </p>
      <pre className={styles.code}>MONGO_URI="your connection string here"</pre>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Project Requirements Checklist</h3>
      <ul className={styles.list}>
        <li>✔ React components + state + props</li>
        <li>✔ Add / Edit / Delete + Filtering</li>
        <li>✔ Client-side routing</li>
        <li>✔ Express REST API</li>
        <li>✔ MongoDB Atlas (2 collections)</li>
        <li>✔ Validation middleware</li>
        <li>✔ API consumption (OpenFDA)</li>
        <li>✔ Deployment on Netlify + Render</li>
      </ul>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>Future Enhancements</h3>
      <ul className={styles.list}>
        <li>Push notifications for reminders</li>
        <li>Pharmacy availability via live API</li>
        <li>Better appointment scheduling</li>
        <li>User authentication (JWT)</li>
      </ul>

      {/* ------------------------------------------------------- */}
      <h3 className={styles.subheading}>References</h3>
      <p className={styles.text}>
        A complete list of references, tutorials, and resources is available on the
        <strong> Sources </strong> page.
      </p>
    </div>
  );
}
