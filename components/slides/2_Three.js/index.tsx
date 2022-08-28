import { ThreeLogo } from "../../common/svg";
import { Code } from "../../common/code";
import { Link } from "../../common/link";
import styles from "./styles.module.css";

const installCode = `
npm install three
`;

const htmlCode = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A Brief Introduction to Three.js</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="script.js"></script>
  </body>
</html>
`;

const importCode = `
import * as THREE from "three";
const canvas = document.querySelector(".webgl");

/* Setup code goes here */

const tick = () => {
  /* Loop code goes here */
  requestAnimationFrame(tick);
};

tick();
`;

export const Three = () => {
  return (
    <section>
      <section>
        <ThreeLogo className={styles.threeLogo} />
        <h2>Three.js</h2>
      </section>
      <section>
        <h3>What is Three.js?</h3>
        <ul>
          <li>
            Three.js is a JavaScript library under MIT license that{" "}
            <span>works right above WebGL</span>.
          </li>
          <li>
            The library&apos;s goal is to drastically simplify the process of
            creating a 3d web experience.
          </li>
          <li>
            Because Three.js is right above WebGL, we can still interact with it
            in some ways.
          </li>
        </ul>
        <h5 className={styles.heading}>Showcase</h5>
        <ul className={styles.showcase}>
          <li>
            <Link href="https://bruno-simon.com">bruno-simon.com</Link>
          </li>
          <li>
            <Link href="https://chartogne-taillet.com">
              chartogne-taillet.com
            </Link>
          </li>
          <li>
            <Link href="http://letsplay.ouigo.com">letsplay.ouigo.com</Link>
          </li>
          <li>
            <Link href="https://midwam.com">midwam.com</Link>
          </li>
        </ul>
        <h5 className={styles.heading}>Installation</h5>
        <Code code={installCode} />
      </section>
      <section>
        <h3>Basic Setup</h3>
        <h5>HTML</h5>
        <Code code={htmlCode} />
        <h5>JavaScript</h5>
        <Code code={importCode} />
      </section>
    </section>
  );
};
