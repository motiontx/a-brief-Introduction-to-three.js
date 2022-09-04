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

  const flagTexture = loader.load("/assets/textures/flags/argentina.png");
  flagTexture.encoding = THREE.sRGBEncoding;

  // ------------------------------------------------------------
  // -- Objects --------------------------------------------
  // ------------------------------------------------------------

  const flagGeometry = new THREE.PlaneGeometry(1.5, 1, 96, 64);

  const flagMaterial = new THREE.MeshBasicMaterial({
    map: flagTexture,
    side: THREE.DoubleSide,
  });

  // Mesh
  const flag = new THREE.Mesh(flagGeometry, flagMaterial);
  scene.add(flag);

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

  camera.position.set(0.25, -0.25, 1);
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

  // ------------------------------------------------------------
  // -- Animation -----------------------------------------------
  // ------------------------------------------------------------

  const tick = () => {
    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  };

  tick();
};
