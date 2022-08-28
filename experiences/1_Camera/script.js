import * as THREE from "three";

export const experience = () => {
  // ------------------------------------------------------------
  // Canvas
  // ------------------------------------------------------------

  const canvasPerspective = document.querySelector(".webgl-perspective");
  const canvasOrthographic = document.querySelector(".webgl-orthographic");

  // ------------------------------------------------------------
  // Scene
  // ------------------------------------------------------------

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#ffffff");

  // ------------------------------------------------------------
  // Sizes
  // ------------------------------------------------------------

  const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight,
  };

  let mouseX = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX - sizes.width / 2;
  });

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth / 2;
    sizes.height = window.innerHeight;

    // Update camera
    perspectiveCamera.aspect = sizes.width / sizes.height;
    perspectiveCamera.updateProjectionMatrix();

    orthographicCamera.left = (-20 * sizes.width) / sizes.height;
    orthographicCamera.right = (20 * sizes.width) / sizes.height;
    orthographicCamera.top = 20;
    orthographicCamera.bottom = -20;
    orthographicCamera.updateProjectionMatrix();

    // Update renderer
    rendererPerspective.setSize(sizes.width, sizes.height);
    rendererPerspective.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    rendererOrthographic.setSize(sizes.width, sizes.height);
    rendererOrthographic.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // ------------------------------------------------------------
  // Grid Helper
  // ------------------------------------------------------------

  const gridHelper = new THREE.GridHelper(1000, 500, 0x222222, 0xeeeeee);
  gridHelper.position.y = -0.1;
  scene.add(gridHelper);

  // ------------------------------------------------------------
  // Camera
  // ------------------------------------------------------------

  const perspectiveCamera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    1,
    1000
  );
  perspectiveCamera.position.fromArray([25, 25, 25]);
  perspectiveCamera.up.fromArray([0, 1, 0]);

  const orthographicCamera = new THREE.OrthographicCamera(
    (-20 * sizes.width) / sizes.height,
    (20 * sizes.width) / sizes.height,
    20,
    -20,
    1,
    1000
  );
  orthographicCamera.position.fromArray([25, 25, 25]);
  orthographicCamera.up.fromArray([0, 1, 0]);

  // ------------------------------------------------------------
  // Lights
  // ------------------------------------------------------------

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 12);
  pointLight.position.set(0, 10, 0);
  scene.add(pointLight);

  // ------------------------------------------------------------
  // Objects
  // ------------------------------------------------------------

  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      const square = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.MeshStandardMaterial({
          color: 0x007799,
        })
      );
      square.position.x = i * 7 - 7 * 25;
      square.position.z = j * 7 - 7 * 25;
      square.position.y = 1;
      scene.add(square);
    }
  }

  // ------------------------------------------------------------
  // Renderer
  // ------------------------------------------------------------

  const rendererPerspective = new THREE.WebGLRenderer({
    canvas: canvasPerspective,
  });
  rendererPerspective.setSize(sizes.width, sizes.height);
  rendererPerspective.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  rendererPerspective.outputEncoding = THREE.sRGBEncoding;
  rendererPerspective.physicallyCorrectLights = true;
  rendererPerspective.outputEncoding = THREE.sRGBEncoding;
  rendererPerspective.toneMapping = THREE.CineonToneMapping;
  rendererPerspective.toneMappingExposure = 1.4;

  const rendererOrthographic = new THREE.WebGLRenderer({
    canvas: canvasOrthographic,
  });
  rendererOrthographic.setSize(sizes.width, sizes.height);
  rendererOrthographic.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  rendererOrthographic.outputEncoding = THREE.sRGBEncoding;
  rendererOrthographic.physicallyCorrectLights = true;
  rendererOrthographic.outputEncoding = THREE.sRGBEncoding;
  rendererOrthographic.toneMapping = THREE.CineonToneMapping;
  rendererOrthographic.toneMappingExposure = 1.4;

  // ------------------------------------------------------------
  // Animation
  // ------------------------------------------------------------

  const tick = () => {
    orthographicCamera.position.x += mouseX * 0.001;
    orthographicCamera.position.x = Math.max(
      Math.min(orthographicCamera.position.x, 35),
      -35
    );
    orthographicCamera.lookAt(scene.position);

    perspectiveCamera.position.x += mouseX * 0.001;
    perspectiveCamera.position.x = Math.max(
      Math.min(perspectiveCamera.position.x, 35),
      -35
    );
    perspectiveCamera.lookAt(scene.position);

    // Render
    rendererPerspective.render(scene, perspectiveCamera);
    rendererOrthographic.render(scene, orthographicCamera);

    window.requestAnimationFrame(tick);
  };

  tick();
};
