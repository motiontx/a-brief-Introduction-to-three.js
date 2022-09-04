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
          WebGL is a low-level <span>JavaScript API</span> that renders
          triangles in a canvas at a remarkable speed. It&apos;s compatible with
          most modern browsers, and it&apos;s fast because{" "}
          <span>it uses the Graphic Processing Unit (GPU)</span> of the visitor.
        </p>
        <p>
          The Instructions that WebGL sends to the GPU are called{" "}
          <span>shaders</span>.
        </p>
        <p>
          This shaders are written in <span>GLSL</span> (OpenGL Shading
          Language). A language that is very similar to C.
        </p>
      </section>
      <section>
        <h3>How it works?</h3>
        <p>
          Any object in a 3D virtual world is composed of <span>triangles</span>{" "}
          which in turn are composed of <span>3 vertices</span>.
        </p>
        <img src="assets/images/webgl.jpg" width={600} />
      </section>
      <section>
        <p>
          <i>
            {" "}
            Imagine that you want to render a 3D object and this object is
            constituted of 1000 triangles. Each triangle includes 3 points.
          </i>
        </p>
        <ul>
          <li>
            <h5>1. Vertex Shader</h5>
            <p>
              When we want to render our object,{" "}
              <span>
                the GPU will have to calculate the position of these 3000 points
              </span>
              . Because the GPU can do parallel calculations, it will handle all
              the points points in one raw.
            </p>
          </li>
          <li>
            <h5>2. Fragment Shader</h5>
            <p>
              Once the object&apos;s points are well placed, the{" "}
              <span>
                GPU needs to draw each visible pixel of those triangles
              </span>
              . Yet again, the GPU will handle the thousands and thousands of
              pixels calculations in one go.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};
