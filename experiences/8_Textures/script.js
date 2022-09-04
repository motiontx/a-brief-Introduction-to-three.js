import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const experience = () => {
  // ------------------------------------------------------------
  // -- Canvas --------------------------------------------------
  // ------------------------------------------------------------

  const canvas = document.querySelector(".webgl");

  // ------------------------------------------------------------
  // -- Scene ---------------------------------------------------
  // ------------------------------------------------------------

  const scene = new THREE.Scene();

  // ------------------------------------------------------------
  // -- Environment Map -----------------------------------------
  // ------------------------------------------------------------

  const environmentMap = new THREE.CubeTextureLoader().load([
    "/assets/textures/environmentMap/px.jpg",
    "/assets/textures/environmentMap/nx.jpg",
    "/assets/textures/environmentMap/py.jpg",
    "/assets/textures/environmentMap/ny.jpg",
    "/assets/textures/environmentMap/pz.jpg",
    "/assets/textures/environmentMap/nz.jpg",
  ]);

  environmentMap.encoding = THREE.sRGBEncoding;

  scene.background = environmentMap;
  scene.environment = environmentMap;

  // ------------------------------------------------------------
  // -- Textures ------------------------------------------------
  // ------------------------------------------------------------

  const loader = new THREE.TextureLoader();

  const colorST = loader.load("/assets/textures/bricks/color.jpg");
  const normalST = loader.load("/assets/textures/bricks/normal.jpg");
  const roughnessST = loader.load("/assets/textures/bricks/roughness.jpg");
  const displacementST = loader.load(
    "/assets/textures/bricks/displacement.jpg"
  );
  const aoST = loader.load("/assets/textures/bricks/ao.jpg");

  colorST.encoding = THREE.sRGBEncoding;

  const colorFT = loader.load("/assets/textures/rocks/color.jpg");
  const normalFT = loader.load("/assets/textures/rocks/normal.jpg");
  const roughnessFT = loader.load("/assets/textures/rocks/roughness.jpg");
  const displacementFT = loader.load("/assets/textures/rocks/displacement.jpg");
  const aoFT = loader.load("/assets/textures/rocks/ao.jpg");

  colorFT.encoding = THREE.sRGBEncoding;

  // ------------------------------------------------------------
  // -- Objects -------------------------------------------------
  // ------------------------------------------------------------

  // Sphere
  const sphereGeometry = new THREE.SphereGeometry(0.5, 384, 384);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    //color: 0x00caaf,
    //roughness: 0,
    //metalness: 0.75,

    map: colorST,
    normalMap: normalST,
    roughnessMap: roughnessST,
    displacementMap: displacementST,
    aoMap: aoST,

    displacementScale: 0.1,
    envMapIntensity: 2.5,
    aoMapIntensity: 5,
    side: THREE.DoubleSide,
  });

  const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphereMesh.position.set(0, 1.5, 0);
  sphereMesh.castShadow = true;

  scene.add(sphereMesh);

  // Floor
  const floorGeometry = new THREE.PlaneGeometry(6, 6, 1024, 1024);
  const floorMaterial = new THREE.MeshStandardMaterial({
    map: colorFT,
    normalMap: normalFT,
    roughnessMap: roughnessFT,
    displacementMap: displacementFT,
    aoMap: aoFT,

    displacementScale: 0.2,
    envMapIntensity: 2.5,
    aoMapIntensity: 5,
    side: THREE.DoubleSide,
  });

  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  floorMesh.position.set(0, 0, 0);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;

  scene.add(floorMesh);

  // ------------------------------------------------------------
  // -- Lights --------------------------------------------------
  // ------------------------------------------------------------

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffc83f, 32);
  pointLight.position.set(0, 3, 0);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 10;
  pointLight.shadow.normalBias = 0.005;

  scene.add(pointLight);

  // ------------------------------------------------------------
  // -- Sizes ---------------------------------------------------
  // ------------------------------------------------------------

  const getContainerSize = () => {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  };

  let containerSize = {
    ...getContainerSize(),
  };

  const onResize = () => {
    containerSize = { ...getContainerSize() };

    camera.aspect = containerSize.width / containerSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(containerSize.width, containerSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  };

  window.addEventListener("resize", onResize);

  // ------------------------------------------------------------
  //  -- Camera -------------------------------------------------
  // ------------------------------------------------------------

  const camera = new THREE.PerspectiveCamera(
    75,
    containerSize.width / containerSize.height,
    0.1,
    100
  );

  camera.position.set(3, 3, 1);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  // ------------------------------------------------------------
  // -- Controls ------------------------------------------------
  // ------------------------------------------------------------

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // ------------------------------------------------------------
  // -- Renderer ------------------------------------------------
  // ------------------------------------------------------------

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });

  renderer.setSize(containerSize.width, containerSize.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.CineonToneMapping;
  renderer.toneMappingExposure = 1.4;

  // ------------------------------------------------------------
  // -- Animation -----------------------------------------------
  // ------------------------------------------------------------

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    pointLight.position.x = Math.sin(elapsedTime) * 2;
    pointLight.position.z = Math.cos(elapsedTime) * 2;

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  };

  tick();
};
