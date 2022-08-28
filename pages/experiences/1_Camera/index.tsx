import styles from "./styles.module.css";
import { experience } from "./script.js";

if (typeof document !== "undefined") {
  experience();
}

const Experience = () => (
  <>
    <div className={styles.container}>
      <canvas className="webgl-perspective" />
      <canvas className="webgl-orthographic" />
    </div>
    <p className={styles.perspective}>Perspective camera</p>
    <p className={styles.orthographic}>Orthographic camera</p>
  </>
);

export default Experience;
