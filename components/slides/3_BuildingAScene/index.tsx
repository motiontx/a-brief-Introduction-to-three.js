import { Code } from "../../common/code";
import { Link } from "../../common/link";
import { Example } from "../../common/example";
import { Double } from "../../common/double";

const sceneCode = `
const scene = new THREE.Scene();
`;

const cameraCode = `
const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 100);
camera.position.set(3, 3, 1);
camera.lookAt(0, 0, 0);

scene.add(camera);
`;

const geometryCode = `
const sphereGeometry = new THREE.SphereGeometry(0.5, 384, 384);
`;

const materialCode = `
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x00caaf,
});
`;

const meshCode = `
// Geometry
const sphereGeometry = new THREE.SphereGeometry(0.5, 384, 384);

// Material
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x00caaf,
});

// Mesh = Geometry + Material
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, 1.5, 0);

scene.add(sphereMesh);
`;

const renderCode = `
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
`;

const renderLoopCode = `
const tick = () => {
  // render the scene
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();
`;

const fullCode = `
import * as THREE from "three";
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 100);
camera.position.set(3, 3, 1);
camera.lookAt(0, 0, 0);

scene.add(camera);

// Geometry
const sphereGeometry = new THREE.SphereGeometry(0.5, 384, 384);

// Material
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x00caaf,
});

// Mesh = Geometry + Material
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.set(0, 1.5, 0);

scene.add(sphereMesh);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

// Loop Function
const tick = () => {
  // render the scene
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();
`;

export const BuildingAScene = () => {
  return (
    <section>
      <section>
        <h2>🚧 Building a Scene 🚧</h2>
      </section>
      <section>
        <h3>What is a Scene?</h3>
        <Double imageUrl="assets/images/scene.png" imageWidth={600}>
          <p>
            Scenes allow you to set up what and where is to be rendered by
            three.js. This is where you place <span>objects</span>,{" "}
            <span>lights</span> and <span>cameras</span>.
          </p>
        </Double>
        <Code code={sceneCode} />
      </section>
      <section>
        <h3>🎥 Adding a camera</h3>
        <Double imageUrl="assets/images/camera.jpeg" imageWidth={1700}>
          <h5>Perspective camera</h5>
          <p>
            <small>
              The perspective camera is designed to simulate what the human eye
              sees. The camera perceives all objects in a perspective
              projection:{" "}
              <span>the further the object is, the smaller it seems</span>.
            </small>
          </p>
          <h5>Orthographic camera</h5>
          <p>
            <small>
              In this projection mode,{" "}
              <span>
                the size of the object remains constant, regardless of its
                distance from the camera
              </span>
              . If we move the camera, the lines and objects will not be
              distorted.
            </small>
          </p>
        </Double>
        <Code code={cameraCode} />
      </section>
      <section>
        <Example experience="Camera" />
      </section>
      <section>
        <h3>Adding an Object (mesh)</h3>
        <Double imageUrl="assets/images/mesh.png" imageWidth={600}>
          <h5>Mesh</h5>
          <p>
            It is a class representing triangular{" "}
            <Link href="https://en.wikipedia.org/wiki/Polygon_mesh">
              polygon mesh
            </Link>{" "}
            based objects.
          </p>
          <p>
            Iss the combination of a <span>geometry</span> (the shape) and a{" "}
            <span>material</span> (how it looks).
          </p>
        </Double>
      </section>
      <section>
        <h5>📐 Geometry</h5>
        <p>
          A geometry is the <span>mathematical formula of an object</span>. It
          gives us the <span>vertices</span> of the object we want to add to the
          scene.
        </p>
        <Double imageUrl="assets/images/geometry.png" imageWidth={600}>
          <h6>Some built-in geometries:</h6>
          <ul>
            <small>
              <li>BoxGeometry</li>
              <li>ConeGeometry</li>
              <li>CylinderGeometry</li>
              <li>DodecahedronGeometry</li>
              <li>OctahedronGeometry</li>
              <li>PlaneGeometry</li>
              <li>SphereGeometry</li>
              <li>TetrahedronGeometry</li>
              <li>TorusGeometry</li>
            </small>
          </ul>
        </Double>
        <Code code={geometryCode} />
      </section>
      <section>
        <h5>👩‍🎨 🎨 Material</h5>
        <p>
          A material can be defined as{" "}
          <span>
            the properties of an object and its behavior with the light sources
            of the scene
          </span>
          . Simply put, materials describe the{" "}
          <span>appearance of objects.</span>
        </p>
        <Double imageUrl="assets/images/material.png" imageWidth={600}>
          <h6>Some built-in materials:</h6>
          <ul>
            <small>
              <li>MeshBasicMaterial</li>
              <li>MeshLambertMaterial</li>
              <li>MeshMatcapMaterial</li>
              <li>MeshNormalMaterial</li>
              <li>MeshPhongMaterial</li>
              <li>MeshPhysicalMaterial</li>
              <li>MeshStandardMaterial</li>
              <li>MeshToonMaterial</li>
            </small>
          </ul>
        </Double>
        <Code code={materialCode} />
      </section>
      <section>
        <h5>Putting all together</h5>
        <Code code={meshCode} />
      </section>
      <section>
        <h3>🖼 Render the scene</h3>
        <Double imageUrl="assets/images/render.png" imageWidth={1800}>
          <p>The renderer&apos;s job is to do the render. 😉</p>
          <p>
            <small>
              We will simply ask the renderer to render our <span>scene</span>{" "}
              from the <span>camera</span> point of view, and the result will be
              drawn into a <span>canvas</span>.
            </small>
          </p>
        </Double>
        <Code code={renderCode} />
        <Code code={renderLoopCode} />
      </section>
      <section>
        <h3>Full code</h3>
        <Code code={fullCode} />
      </section>
      <section>
        <Example experience="BasicScene" />
      </section>
    </section>
  );
};
