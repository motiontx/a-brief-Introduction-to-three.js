import { experience } from "../../../experiences/4_AmbientLight/script";

if (typeof document !== "undefined") {
  experience();
}

const Experience = () => <canvas className="webgl" />;

export default Experience;
