import styles from "./page.module.scss";
import { ViewProps } from "./types";
// import rightTurn1d from "../../public/backgrounds/right_turn_1d.png";
// import rightTurn2d from "../../public/backgrounds/right_turn_2d.png";
// import leftTurn1d from "../../public/backgrounds/left_turn_1d.png";
// import leftTurn2d from "../../public/backgrounds/left_turn_2d.png";
// import bothTurn1d from "../../public/backgrounds/both_turn_1d.png";
// import bothTurn1dx from "../../public/backgrounds/both_turn_1dx.png";
// import bothTurn2d from "../../public/backgrounds/both_turn_2d.png";
// import bothTurn2dx from "../../public/backgrounds/both_turn_2dx.png";
// import center1d from "../../public/backgrounds/center_1d.png";
// import center2d from "../../public/backgrounds/center_2d.png";
// import center2dx from "../../public/backgrounds/center_2dx.png";
// import center3d from "../../public/backgrounds/center_3d.png";
// import center3dx from "../../public/backgrounds/center_3dx.png";
// import center3dx2 from "../../public/backgrounds/center_3dx2.png";
// import cobraFront1d from "../../public/operatives/cobra_front_1d.png";
// import cobraFront2d from "../../public/operatives/cobra_front_2d.png";
// import cobraFront3d from "../../public/operatives/cobra_front_3d.png";
// import cobraBack1d from "../../public/operatives/cobra_back_1d.png";
// import cobraBack2d from "../../public/operatives/cobra_back_2d.png";
// import cobraLeft1d from "../../public/operatives/cobra_left_1d.png";
// import cobraLeft2d from "../../public/operatives/cobra_left_2d.png";
// import cobraRight1d from "../../public/operatives/cobra_right_1d.png";
// import cobraRight2d from "../../public/operatives/cobra_right_2d.png";
// import cobraRight3d from "../../public/operatives/cobra_right_3d.png";
// import mongooseFront1d from "../../public/operatives/mongoose_front_1d.png";
// import mongooseFront2d from "../../public/operatives/mongoose_front_2d.png";
// import mongooseFront3d from "../../public/operatives/mongoose_front_3d.png";
// import mongooseBack1d from "../../public/operatives/mongoose_back_1d.png";
// import mongooseBack2d from "../../public/operatives/mongoose_back_2d.png";
// import mongooseLeft1d from "../../public/operatives/mongoose_left_1d.png";
// import mongooseLeft2d from "../../public/operatives/mongoose_left_2d.png";
// import mongooseRight1d from "../../public/operatives/mongoose_right_1d.png";
// import mongooseRight2d from "../../public/operatives/mongoose_right_2d.png";
// import mongooseRight3d from "../../public/operatives/mongoose_right_3d.png";
const rightTurn1d = "https://i.imgur.com/kKnLGU7.png";
const rightTurn2d = "https://i.imgur.com/xdVc9MK.png";
const leftTurn1d = "https://i.imgur.com/e3p24E6.png";
const leftTurn2d = "https://i.imgur.com/G5yqTJb.png";
const bothTurn1d = "https://i.imgur.com/cTFsL7K.png";
const bothTurn1dx = "https://i.imgur.com/6XVrc65.png";
const bothTurn2d = "https://i.imgur.com/tXDYmuJ.png";
const bothTurn2dx = "https://i.imgur.com/PaAYn3D.png";
const center1d = "https://i.imgur.com/d78yJHr.png";
const center2d = "https://i.imgur.com/7Wu4k4k.png";
const center2dx = "https://i.imgur.com/wJ01yRC.png";
const center3d = "https://i.imgur.com/R8jAOx0.png";
const center3dx = "https://i.imgur.com/Z1h4ydM.png";
const center3dx2 = "https://i.imgur.com/xQrzjc0.png";
const cobraFront1d = "https://i.imgur.com/pJ7yDy4.png";
const cobraFront2d = "https://i.imgur.com/yvQeZDG.png";
const cobraFront3d = "https://i.imgur.com/m9zwn0m.png";
const cobraBack1d = "https://i.imgur.com/tRNRcWg.png";
const cobraBack2d = "https://i.imgur.com/UeGK6Y4.png";
const cobraLeft1d = "https://i.imgur.com/nHmgiCZ.png";
const cobraLeft2d = "https://i.imgur.com/jkW5E2o.png";
const cobraRight1d = "https://i.imgur.com/ysrZ4hY.png";
const cobraRight2d = "https://i.imgur.com/2mx26On.png";
const cobraRight3d = "https://i.imgur.com/60FkYSv.png";
const mongooseFront1d = "https://i.imgur.com/jBNb3rT.png";
const mongooseFront2d = "https://i.imgur.com/9b85xrA.png";
const mongooseFront3d = "https://i.imgur.com/5sEx55D.png";
const mongooseBack1d = "https://i.imgur.com/kw1r8er.png";
const mongooseBack2d = "https://i.imgur.com/P13KBO9.png";
const mongooseLeft1d = "https://i.imgur.com/kw1r8er.png";
const mongooseLeft2d = "https://i.imgur.com/P13KBO9.png";
const mongooseRight1d = "https://i.imgur.com/jnJqBJ3.png";
const mongooseRight2d = "https://i.imgur.com/UVXoCJJ.png";
const mongooseRight3d = "https://i.imgur.com/K5G2ROU.png";

export function View(props: ViewProps) {
  const { location, enemyLocation, enemyVisible, codename } = props;
  const relativeOrientations = [
    ["back", "right", "front", "left"],
    ["left", "back", "right", "front"],
    ["front", "left", "back", "right"],
    ["right", "front", "left", "back"],
  ];
  const faces: {
    [distance: string]: { [direction: string]: string };
  } = {
    "1d": {
      front: codename == "mongoose" ? cobraFront1d : mongooseFront1d,
      back: codename == "mongoose" ? cobraBack1d : mongooseBack1d,
      left: codename == "mongoose" ? cobraLeft1d : mongooseLeft1d,
      right: codename == "mongoose" ? cobraRight1d : mongooseRight1d,
    },
    "2d": {
      front: codename == "mongoose" ? cobraFront2d : mongooseFront2d,
      back: codename == "mongoose" ? cobraBack2d : mongooseBack2d,
      left: codename == "mongoose" ? cobraLeft2d : mongooseLeft2d,
      right: codename == "mongoose" ? cobraRight2d : mongooseRight2d,
    },
    "3d": {
      front: codename == "mongoose" ? cobraFront3d : mongooseFront3d,
      right: codename == "mongoose" ? cobraRight3d : mongooseRight3d,
    },
  };

  function getOperativeSource() {
    let source: string;
    const { orientation } = location;
    const { orientation: eOrientation } = enemyLocation;
    const eFacing: string = relativeOrientations[orientation][eOrientation];

    switch (true) {
      case enemyVisible == 1:
        source = faces["1d"][eFacing];
        break;
      case enemyVisible == 2:
        source = faces["2d"][eFacing];
        break;
      case enemyVisible == 3:
        source = faces["3d"][eFacing];
        break;
      default:
        source = faces["3d"]["back"];
        break;
    }

    return source;
  }

  function getBackgroundSource() {
    let source: string;
    const { position, orientation } = location;

    switch (true) {
      case position === 1 && orientation === 1:
      case position === 3 && orientation === 0:
      case position === 10 && orientation === 2:
      case position === 12 && orientation === 3:
        source = rightTurn1d;
        break;
      case position === 0 && orientation === 1:
      case position === 5 && orientation === 0:
      case position === 8 && orientation === 2:
      case position === 13 && orientation === 3:
        source = rightTurn2d;
        break;
      case position === 1 && orientation === 3:
      case position === 3 && orientation === 2:
      case position === 4 && orientation === 0:
      case position === 9 && orientation === 2:
      case position === 10 && orientation === 0:
      case position === 12 && orientation === 1:
        source = leftTurn1d;
        break;
      case position === 0 && orientation === 2:
      case position === 2 && orientation === 3:
      case position === 6 && orientation === 2:
      case position === 7 && orientation === 0:
      case position === 11 && orientation === 1:
      case position === 13 && orientation === 0:
        source = leftTurn2d;
        break;
      case position === 4 && orientation === 2:
        source = bothTurn1dx;
        break;
      case position === 9 && orientation === 0:
        source = bothTurn1d;
        break;
      case position === 2 && orientation === 2:
        source = bothTurn2dx;
        break;
      case position === 11 && orientation === 0:
        source = bothTurn2d;
        break;
      case position === 6 && orientation === 3:
      case position === 7 && orientation === 1:
        source = center1d;
        break;
      case position === 6 && orientation === 1:
        source = center2dx;
        break;
      case position === 7 && orientation === 3:
        source = center2d;
        break;
      case position === 5 && orientation === 1:
        source = center3dx2;
        break;
      case position === 8 && orientation === 3:
        source = center3dx;
        break;

      default:
        source = center3d;
        break;
    }

    return source;
  }

  return (
    <div className={styles.view}>
      <img
        alt="A hallway with opening and turns to the left and right"
        src={getBackgroundSource()}
      />
      {enemyVisible !== -1 && (
        <img
          className={styles.enemy}
          alt="A sillhouette of the enemy operative"
          src={getOperativeSource()}
        />
      )}
    </div>
  );
}
