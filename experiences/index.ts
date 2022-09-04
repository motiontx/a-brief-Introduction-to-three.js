import { experience as BasicScene } from "./2_BasicScene/script";
import { experience as StandardMaterial } from "./3_StandardMaterial/script";
import { experience as AmbientLight } from "./4_AmbientLight/script";
import { experience as PointLight } from "./5_PointLight/script";
import { experience as Shadows } from "./6_Shadows/script";
import { experience as EnvironmentMap } from "./7_EnvironmentMap/script";
import { experience as Textures } from "./8_Textures/script";
import { experience as LoadingModel } from "./9_LoadingModel/script";
import { experience as Flag } from "./10_Flag/script";
import { experience as WiredFlag } from "./11_WiredFlag/script";
import { experience as VertexShader } from "./12_VertexShader/script";
import { experience as FragmentShader } from "./13_FragmentShader/script";
import { experience as Postprocessing } from "./14_Postprocessing/script";
import { experience as NoBaking } from "./15_NoBaking/script";
import { experience as Baking } from "./16_Baking/script";

const experiences = {
  BasicScene,
  StandardMaterial,
  AmbientLight,
  PointLight,
  Shadows,
  EnvironmentMap,
  Textures,
  LoadingModel,
  Flag,
  WiredFlag,
  VertexShader,
  FragmentShader,
  Postprocessing,
  NoBaking,
  Baking,
};

export const runExperience = (experience: string) => {
  if (experience in experiences) {
    experiences[experience]();
  }
};
