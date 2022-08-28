import styles from "./styles.module.css";

interface doubleProps {
  children: React.ReactNode;
  imageUrl: string;
  imageWidth: number;
}

export const Double = ({ children, imageUrl, imageWidth }: doubleProps) => {
  return (
    <div className={styles.double}>
      <div>{children}</div>
      <div style={{ width: imageWidth, marginLeft: "1rem" }}>
        <img src={imageUrl} />
      </div>
    </div>
  );
};
