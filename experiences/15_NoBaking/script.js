import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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
  // -- Custom Model --------------------------------------------
  // ------------------------------------------------------------

  const gltfLoader = new GLTFLoader();

  gltfLoader.load("/assets/models/scene/model.glb", (glb) => {
    glb.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.needsUpdate = true;
        child.castShadow = true;
        child.receiveShadow = true;
      } else if (child instanceof THREE.Light) {
        child.intensity = child.intensity * 0.2;
        child.castShadow = true;
        child.shadow.mapSize.width = 2048;
        child.shadow.mapSize.height = 2048;
        child.shadow.camera.far = 20;
        child.shadow.camera.near = 0.1;
        child.shadow.bias = -0.001;
        child.shadow.normalBias = 0.1;
      }
    });

    scene.add(glb.scene);
  });

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

  camera.position.set(2.6, 2.6, 2.6);
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
