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
  // -- Objects -------------------------------------------------
  // ------------------------------------------------------------

  // Sphere
  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x00caaf,
  });

  const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphereMesh.position.set(0, 1.5, 0);

  scene.add(sphereMesh);

  // Floor
  const floorGeometry = new THREE.PlaneGeometry(6, 6);
  const floorMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaaaff,
  });

  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  floorMesh.position.set(0, 0, 0);
  floorMesh.rotation.x = -Math.PI / 2;

  scene.add(floorMesh);

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
