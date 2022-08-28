import styles from "./styles.module.css";

interface exampleProps {
  experience: string;
}

export const Example = ({ experience }: exampleProps) => {
  return (
    <iframe
      className={`${styles.example}`}
      title="fullscreen"
      src={`experiences/${experience}`}
      frameBorder="0"
    />
  );
};
