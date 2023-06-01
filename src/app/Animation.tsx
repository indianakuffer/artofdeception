import styles from "./page.module.scss";
import gunAim from "../../public/attacks/gun_aim.png";
import gunFire from "../../public/attacks/gun_fire.png";
import fist from "../../public/attacks/fist.png";
import chop from "../../public/attacks/chop.png";
import bullet from "../../public/attacks/bullet.png";
import holes from "../../public/attacks/holes.png";
import Image from "next/image";
import { useState } from "react";
import { AnimationProps } from "./types";

export function Animation(props: AnimationProps) {
  const { showAnimation, setShowAnimation } = props;
  const [gunFiring, setGunFiring] = useState(false);
  const [handChopping, setHandChopping] = useState(false);
  const [bulletHit, setBulletHit] = useState(false);
  const [bgColor, setBgColor] = useState("#bb2121");
  const [showBang, setShowBang] = useState(false);
  const [showChop, setShowChop] = useState(false);
  const [showMiss, setShowMiss] = useState(false);

  function gunAnimationEnd() {
    setGunFiring(true);
    setBgColor("#ffef15");
    setShowBang(true);
  }

  function chopAnimationEnd() {
    setHandChopping(true);
    setBgColor("#ffef15");
    setShowChop(true);
  }

  function missAnimationEnd() {
    setBulletHit(true);
    setBgColor("#ffef15");
    setShowMiss(true);
  }

  function finalAnimationEnd() {
    setShowAnimation("");
  }

  return (
    <div className={styles.animation}>
      {showAnimation == "bang" && (
        <div
          className={`${styles.animationContents} ${styles.bangAnimation}`}
          style={{ backgroundColor: bgColor }}
        >
          {showBang && (
            <div className={styles.bang} onAnimationEnd={finalAnimationEnd}>
              BANG!
            </div>
          )}
          <Image
            className={styles.gun}
            src={gunFiring ? gunFire : gunAim}
            alt="gun"
            onAnimationEnd={gunAnimationEnd}
          ></Image>
        </div>
      )}
      {showAnimation == "chop" && (
        <div
          className={`${styles.animationContents} ${styles.chopAnimation}`}
          style={{ backgroundColor: bgColor }}
        >
          {showChop && (
            <div className={styles.chop} onAnimationEnd={finalAnimationEnd}>
              CHOP!
            </div>
          )}
          <Image
            className={styles.fist}
            src={handChopping ? chop : fist}
            alt="chop"
            onAnimationEnd={chopAnimationEnd}
          ></Image>
        </div>
      )}
      {showAnimation == "miss" && (
        <div
          className={`${styles.animationContents} ${styles.missAnimation}`}
          style={{ backgroundColor: bgColor }}
        >
          {showMiss && (
            <div className={styles.miss} onAnimationEnd={finalAnimationEnd}>
              MISS!
            </div>
          )}
          <Image
            className={styles.bullet}
            src={bulletHit ? holes : bullet}
            alt="bullet"
            onAnimationEnd={missAnimationEnd}
          ></Image>
        </div>
      )}
    </div>
  );
}
