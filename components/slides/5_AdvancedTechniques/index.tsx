import { Code } from "../../common/code";
import { Example } from "../../common/example";

const vertexShaderCode = `
uniform float uTime;
uniform float uTimeVelocity;
uniform vec2 uFrequency;
uniform float uAmplitude;
uniform float uXMovement;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position.xyz;

  pos.z += sin(uv.x * uFreq.x - (uSpeed * uTime)) * uAmp * uv.x * uXMovement;
  pos.z += sin(uv.y * uFreq.y - (uSpeed * uTime)) * uAmp * uv.x;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1);
}
`;

const fragmentShaderCode = `
varying vec2 vUv;
uniform float uTime;

#define PI 3.14159265358979

float cnoise(vec3 P) {
  // Classic Perlin 3D function
}

void main() {
  vec2 displacedUv = vUv + cnoise(vec3(vUv * 10.0, uTime * 0.5));
  float strength = cnoise(vec3(displacedUv * 10.0, uTime * 0.5));

  float red = strength * 0.75 + 0.2;
  float green = 0.0;
  float blue = strength * 0.2 + 0.2;

  gl_FragColor = vec4(red, green, blue, 1.0);
}
`;

export const AdvancedTechniques = () => {
  return (
    <section>
      <section>
        <h2>👩🏻‍🔬 Advanced Techniques 🧪</h2>
      </section>
      <section>
        <h3>Shaders</h3>
      </section>
      <section>
        <h5>Vertex Shader</h5>
        <p>
          The vertex shader&apos;s purpose is to{" "}
          <span>position the vertices of the geometry</span>. The idea is to
          send the vertices positions, the mesh transformations (like its
          position, rotation, and scale), the camera information (like its
          position, rotation, and field of view) and then{" "}
        </p>
        <p>
          <i>
            The GPU will follow the instructions in the vertex shader to process
            all of this information in order to project the vertices on a 2D
            space that will become our render (our canvas).
          </i>
        </p>
        <p>
          When using a vertex shader,{" "}
          <span>its code will be applied on every vertex of the geometry</span>.
          The vertex shader happens first. Once the vertices are placed, the GPU
          knows what pixels of the geometry are visible and can proceed to the
          fragment shader.
        </p>
      </section>
      <section>
        <Example experience="Flag" />
      </section>
      <section>
        <Example experience="WiredFlag" />
      </section>
      <section>
        <h6>Example of a Custom Vertex Shader</h6>
        <Code code={vertexShaderCode} />
      </section>
      <section>
        <Example experience="VertexShader" />
      </section>
      <section>
        <h5>Fragment Shader</h5>
        <p>
          The fragment shader purpose is to{" "}
          <span>color each visible pixel (fragment) of the geometry</span>. The
          same fragment shader will be used for every visible pixel (fragment)
          of the geometry.
        </p>
      </section>
      <section>
        <h6>Example of a Custom Fragment Shader</h6>
        <Code code={fragmentShaderCode} />
      </section>
      <section>
        <Example experience="FragmentShader" />
      </section>
      <section>
        <h3>Post-processing</h3>
      </section>
      <section>
        <Example experience="Postprocessing" initialyDisabled />
      </section>
      <section>
        <h3>Baking</h3>
        <img src="assets/images/blender.png" width={600} />
      </section>
      <section>
        <Example experience="NoBaking" initialyDisabled />
      </section>
      <section>
        <p>
          Baking to texture{" "}
          <span>
            is the process of approximating complex surface effects as simple 2D
            bitmaps and then assigning them to objects
          </span>
          . By creating a library of &apos;baked&apos; texture maps, 3D visual
          effects on objects can be rendered in real time without having to
          recalculate elements such as materials, lighting, and shadows.
        </p>
      </section>
      <section>
        <Example experience="Baking" initialyDisabled />
      </section>
    </section>
  );
};
