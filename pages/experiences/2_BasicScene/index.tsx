import { experience } from "../../../experiences/2_BasicScene/script";

if (typeof document !== "undefined") {
  experience();
}

const Experience = () => <canvas className="webgl" />;

export default Experience;
