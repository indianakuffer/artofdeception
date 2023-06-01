import styles from "./page.module.scss";

export default function Selection(props: any) {
  const { setCodename } = props;

  return (
    <div className={styles.selection}>
      <button className={styles.cobra} onClick={() => setCodename("cobra")}>
        Cobra
      </button>
      <button
        className={styles.mongoose}
        onClick={() => setCodename("mongoose")}
      >
        Mongoose
      </button>
    </div>
  );
}
