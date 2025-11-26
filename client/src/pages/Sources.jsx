import styles from "./Sources.module.css";

export default function Sources() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sources & References</h2>

      <p className={styles.text}>
        Below is a complete list of all external resources used during the 
        development of MediTrack, including APIs, tutorials, documentation, 
        and troubleshooting references.
      </p>

      <h3 className={styles.subheading}>APIs Used</h3>
      <ul className={styles.list}>
        <li>
          <a href="https://open.fda.gov/apis/drug/" target="_blank">
            OpenFDA Drug API — Used for fetching real drug data
          </a>
        </li>
        <li>
          <a href="https://developers.google.com/maps" target="_blank">
            Google Maps — Used for pharmacy redirection (Find Nearby Pharmacies)
          </a>
        </li>
        <li>
          <a href="https://www.mongodb.com/docs/atlas/" target="_blank">
            MongoDB Atlas — Cloud database for medicines/users collection
          </a>
        </li>
      </ul>

      <h3 className={styles.subheading}>React & Express Documentation</h3>
      <ul className={styles.list}>
        <li>
          <a href="https://react.dev/" target="_blank">React Official Docs</a>
        </li>
        <li>
          <a href="https://reactrouter.com/en/main" target="_blank">
            React Router — Routing and navigation
          </a>
        </li>
        <li>
          <a href="https://expressjs.com/" target="_blank">Express Official Docs</a>
        </li>
        <li>
          <a href="https://axios-http.com/docs/intro" target="_blank">Axios Docs</a>
        </li>
      </ul>

      <h3 className={styles.subheading}>Deployment Help</h3>
      <ul className={styles.list}>
        <li>
          <a href="https://docs.netlify.com/" target="_blank">
            Netlify Docs — Deploying React (including /_redirects)
          </a>
        </li>
        <li>
          <a href="https://render.com/docs" target="_blank">
            Render Docs — Hosting Express backend
          </a>
        </li>
      </ul>

      <h3 className={styles.subheading}>Troubleshooting & Tutorials</h3>
      <ul className={styles.list}>
        <li>
          <a href="https://stackoverflow.com/" target="_blank">
            StackOverflow — Debugging React Router & Netlify routing issues
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/news/" target="_blank">
            FreeCodeCamp Guides — General MERN help
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@NetNinja" target="_blank">
            Net Ninja MERN Tutorials — Patterns for CRUD + Routing
          </a>
        </li>
      </ul>


      <h3 className={styles.subheading}>Special Notes</h3>
      <p className={styles.text}>
        All external code was used only for reference and learning.  
        All final implementation for MediTrack (frontend, backend, middleware, 
        styling, and logic) was written by me.
      </p>
    </div>
  );
}
