import styles from "./page.module.scss";
import { HealthProps } from "./types";
// import heart from "../../public/icons/heart.png";
// import brokenHeart from "../../public/icons/broken_heart.png";
// import cobraPortrait from "../../public/operatives/cobra_portrait.png";
// import mongoosePortrait from "../../public/operatives/mongoose_portrait.png";
const heart = "https://i.imgur.com/aFjqpf8.png";
const brokenHeart = "https://i.imgur.com/IfFn7Ei.png";
const cobraPortrait = "https://i.imgur.com/eln5u8H.png";
const mongoosePortrait = "https://i.imgur.com/EzO49h6.png";

export function Health(props: HealthProps) {
  const { codename, wounds } = props;
  const health = [1, 2, 3];

  return (
    <div className={styles.healthWrapper}>
      <img
        className={styles.portrait}
        alt="portrait"
        src={codename == "cobra" ? cobraPortrait : mongoosePortrait}
      />
      <div className={styles.health}>
        {health.map((_, idx) => {
          const isHeart = wounds < health.length - idx;
          return (
            <img
              key={`heart-${idx}`}
              alt="heart"
              src={isHeart ? heart : brokenHeart}
              className={styles.heart}
            />
          );
        })}
      </div>
    </div>
  );
}
