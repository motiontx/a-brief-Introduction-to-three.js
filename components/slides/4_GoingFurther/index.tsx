import { Code } from "../../common/code";
import { Link } from "../../common/link";
import { Example } from "../../common/example";
import { Double } from "../../common/double";

const standardMaterialCode = `
// Geometry
const sphereGeometry = new THREE.SphereGeometry(0.5, 384, 384);

// Material
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x00caaf,
  roughness: 0,
  metalness: 0.75,
});
// const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00caaf });

// Mesh = Geometry + Material
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
`;

const ambientLightCode = `
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(ambientLight);
`;

const pointLightCode = `
const pointLight = new THREE.PointLight(0xffc83f, 32);

scene.add(pointLight);
`;

const pointLightLoopCode = `
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  pointLight.position.x = Math.sin(elapsedTime) * 2;
  pointLight.position.z = Math.cos(elapsedTime) * 2;

  // ...
};

tick();
`;

const shadow1Code = `
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphereMesh.castShadow = true;
`;

const shadow2Code = `
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

floorMesh.receiveShadow = true;
`;

const shadowLightCode = `
const pointLight = new THREE.PointLight(0xffc83f, 32);

pointLight.castShadow = true;
`;

const shadowRenderCode = `
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.shadowMap.enabled = true;
`;

const environmentCode = `
const cubeTextureLoader = new THREE.CubeTextureLoader();

const environmentMap = cubeTextureLoader.load([
  "/assets/textures/environmentMap/px.jpg",
  "/assets/textures/environmentMap/nx.jpg",
  "/assets/textures/environmentMap/py.jpg",
  "/assets/textures/environmentMap/ny.jpg",
  "/assets/textures/environmentMap/pz.jpg",
  "/assets/textures/environmentMap/nz.jpg",
]);
`;

const environmentSet1Code = `
// Sets the background used when rendering the scene
scene.background = environmentMap;
`;

const environmentSet2Code = `
// Sets the texture as the env map for all physical materials in the scene
scene.environment = environmentMap;
`;

const textureCode = `
const textureLoader = new THREE.TextureLoader();

const color = textureLoader.load("/assets/textures/bricks/color.jpg");
const normal = textureLoader.load("/assets/textures/bricks/normal.jpg");
const roughness = textureLoader.load("/assets/textures/bricks/roughness.jpg");
const displacement = textureLoader.load("/assets/textures/bricks/displacement.jpg");
const ao = textureLoader.load("/assets/textures/bricks/ao.jpg");
`;

const textureMaterialCode = `
const sphereMaterial = new THREE.MeshStandardMaterial({
  //color: 0x00caaf,
  //roughness: 0,
  //metalness: 0.75,

  map: color,
  normalMap: normal,
  roughnessMap: roughness,
  displacementMap: displacement,
  aoMap: ao,
});
`;

export const GoingFurther = () => {
  return (
    <section>
      <section>
        <h2>🏃 Going Further 🏃</h2>
      </section>
      <section>
        <h3>Let&apos;s Update Some Things</h3>
        <p>
          <Link href="https://en.wikipedia.org/wiki/Physically_based_rendering">
            Physically based rendering (PBR)
          </Link>{" "}
          is a computer graphics approach that seeks to render images{" "}
          <span>in a way that models the flow of light in the real world</span>.
          Many PBR pipelines aim to achieve <span>photorealism</span>.{" "}
          <Link href="https://marmoset.co/posts/basic-theory-of-physically-based-rendering/">
            🔗
          </Link>
        </p>
        <p>
          <Link href="https://threejs.org/docs/?q=standard#api/en/materials/MeshStandardMaterial">
            MeshStandardMaterial
          </Link>{" "}
          is a standard physically based material, using{" "}
          <span>Metallic-Roughness workflow</span>.
        </p>
        <Code code={standardMaterialCode} />
      </section>
      <section>
        <Example experience="StandardMaterial" />
      </section>
      <section>
        <h3>Hmm, it&apos;s a bit dark here...</h3>
      </section>
      <section>
        <h3>Let&apos;s add some lights</h3>
      </section>
      <section>
        <h3>💡 Adding a Source of Light</h3>
        <Double imageUrl="assets/images/light.jpeg" imageWidth={550}>
          <h5>Some built-in lights:</h5>
          <ul>
            <li>AmbientLight</li>
            <li>DirectionalLight</li>
            <li>HemisphereLight</li>
            <li>PointLight</li>
            <li>RectAreaLight</li>
            <li>SpotLight</li>
          </ul>
        </Double>
        <h5>🌞 Ambient Light</h5>
        <Code code={ambientLightCode} />
      </section>
      <section>
        <Example experience="AmbientLight" />
      </section>
      <section>
        <h5>💡 Point Light</h5>
        <Code code={pointLightCode} />
        <Code code={pointLightLoopCode} />
      </section>
      <section>
        <Example experience="PointLight" />
      </section>
      <section>
        <h3>Shadows</h3>
        <Double imageUrl="assets/images/shadow.jpeg" imageWidth={2000}>
          <h5>Core shadows vs cast shadows</h5>
          <p>
            <small>
              The <span>core shadow</span> is the dark band visible where light
              and shadow meet. It is the point at which light can no longer
              reach the form to illuminate it.{" "}
              <span>It is the darkest area of the object</span>.
            </small>
          </p>
          <p>
            <small>
              The <span>cast shadow</span> is the shadow on the surface that the
              object rests on. It is created by{" "}
              <span>
                the object itself blocking the light from the light source
              </span>
              .
            </small>
          </p>
        </Double>
      </section>
      <section>
        <h3>Activating Cast Shadows</h3>
        <h5>1. We activate the shadow maps on the renderer</h5>
        <Code code={shadowRenderCode} />
        <h5>2. Then we decide wich lights will cast shadows.</h5>
        <Code code={shadowLightCode} />
        <h5>
          3. Finally we decide which objects will cast shadows and which will
          receive them.
        </h5>
        <Code code={shadow1Code} />
        <Code code={shadow2Code} />
      </section>
      <section>
        <Example experience="Shadows" />
      </section>
      <section>
        <h3>Adding an Environment Map</h3>
        <img src="assets/images/environment.png" width={700} />
      </section>
      <section>
        <h5>1. Loading the environment map texture</h5>
        <Code code={environmentCode} />
        <h5>2. Setting the environment map on the scene</h5>
        <Code code={environmentSet1Code} />
        <Code code={environmentSet2Code} />
      </section>
      <section>
        <Example experience="EnvironmentMap" />
      </section>
      <section>
        <h3>Loading Textures</h3>
        <img src="assets/images/texture.png" width={800} />
      </section>
      <section>
        <h5>1. Loading the textures</h5>
        <Code code={textureCode} />
        <h5>2. Updating the material with the textures</h5>
        <Code code={textureMaterialCode} />
      </section>
      <section>
        <Example experience="Textures" initialyDisabled />
      </section>
      <section>
        <Example experience="LoadingModel" initialyDisabled />
      </section>
    </section>
  );
};
