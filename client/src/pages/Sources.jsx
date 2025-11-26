import styles from "./Sources.module.css";

export default function Sources() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sources & References</h2>

      <ul className={styles.list}>
        <li>
          <a href="https://open.fda.gov/apis/drug/" target="_blank">
            OpenFDA Drug API
          </a>
        </li>
        <li>
          <a href="https://www.mongodb.com/atlas/database" target="_blank">
            MongoDB Atlas Documentation
          </a>
        </li>
        <li>
          <a href="https://react.dev" target="_blank">
            React Official Documentation
          </a>
        </li>
        <li>
          <a href="https://expressjs.com" target="_blank">
            Express.js Documentation
          </a>
        </li>
        <li>
          <a href="https://vitejs.dev" target="_blank">
            Vite Documentation
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org" target="_blank">
            MDN Web Docs
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com" target="_blank">
            StackOverflow Discussions
          </a>
        </li>
      </ul>
    </div>
  );
}
