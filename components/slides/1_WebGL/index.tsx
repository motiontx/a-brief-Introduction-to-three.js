import { WebGLLogo } from "../../common/svg";
import styles from "./styles.module.css";

export const WebGL = () => {
  return (
    <section>
      <section>
        <WebGLLogo className={styles.webGLLogo} />
      </section>
      <section>
        <h3>What is WebGL?</h3>
        <p>
          WebGL is a <span>JavaScript API</span> that renders triangles in a canvas at a
          remarkable speed. It&apos;s compatible with most modern browsers, and
          it&apos;s fast because <span>it uses the Graphic Processing Unit (GPU)</span> of
          the visitor.
        </p>
      </section>
      <section>
        <h3>How it works?</h3>
      </section>
    </section>
  );
};
