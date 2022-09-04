import { runExperience } from "../../../experiences";

interface experienceProps {
  experience: string;
}

const Experience = ({ experience }: experienceProps) => {
  if (typeof document !== "undefined") {
    runExperience(experience);
  }

  console.log("Experience", experience);

  return <canvas className="webgl" />;
};

export default Experience;

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      experience: params.experience,
    },
  };
}
