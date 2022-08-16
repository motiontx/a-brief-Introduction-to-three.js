import { Link } from "../../common/link";
import { HDLogo, ThreeLogo } from "../../common/svg";
import styles from "./styles.module.css";

export const Intro = () => {
  return (
    <section>
      <ThreeLogo className={styles.threeLogo} />
      <div className={styles.intro}>
        <HDLogo className={styles.hdLogo} />
        <h5>Weekly Round Table</h5>
      </div>
      <h2 className={styles.title}>
        A Brief Introduction to{" "}
        <Link href="https://threejs.org/">Three.js</Link>
      </h2>
      <h6>
        By{" "}
        <Link href="https://vittoretrivi.dev/">
          <span>Vittorio Retrivi</span>
        </Link>
      </h6>
    </section>
  );
};
