uniform float uTime;
uniform float uSpeed;
uniform vec2 uFreq;
uniform float uAmp;
uniform float uXMovement;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position.xyz;

  pos.z += sin(uv.x * uFreq.x - (uSpeed * uTime)) * uAmp * uv.x * uXMovement;
  pos.z += sin(uv.y * uFreq.y - (uSpeed * uTime)) * uAmp * uv.x;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1);
}