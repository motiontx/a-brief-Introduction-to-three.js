import { experience } from "../../../experiences/7_EnvironmentMap/script";

if (typeof document !== "undefined") {
  experience();
}

const Experience = () => <canvas className="webgl" />;

export default Experience;
