import { useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "../svg";
import styles from "./styles.module.css";

interface exampleProps {
  experience: string;
  initialyDisabled?: boolean;
}

export const Example = ({
  experience,
  initialyDisabled = false,
}: exampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(!initialyDisabled);
  }, [initialyDisabled]);

  return (
    <div className={styles.container}>
      {isPlaying ? (
        <>
          <button
            className={styles.pauseButton}
            onClick={() => setIsPlaying(false)}
          >
            <PauseIcon />
          </button>{" "}
          <iframe
            className={`${styles.example}`}
            title="fullscreen"
            src={`/experiences/${experience}`}
            frameBorder="0"
          />
        </>
      ) : (
        <>
          <button
            className={styles.playButton}
            onClick={() => setIsPlaying(true)}
          >
            <PlayIcon />
          </button>
          <div className={styles.placeholder} />
        </>
      )}
    </div>
  );
};
