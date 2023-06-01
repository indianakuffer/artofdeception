"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import Selection from "./Selection";
import { Game } from "./Game";
import { Codename } from "./types";
import cover from "../../public/backgrounds/cover.png";
import Image from "next/image";
import cobraWin from "../../public/backgrounds/cobra_win.png";
import mongooseWin from "../../public/backgrounds/mongoose_win.png";
import loseArt from "../../public/backgrounds/lose_art.png";

export default function Home() {
  const [codename, setCodename] = useState<Codename | "">("");
  const [showTitle, setShowTitle] = useState(true);
  const [showSelection, setShowSelection] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [win, setWin] = useState<Codename | "">("");
  const blurb = `Greetings, agent. As you are well aware, the secrets of two powerful spy agencies clash within the confines of the captivating Lumina Modern Art Museum.
  
  Your mission, should you choose to accept it, is to outwit your opponent, navigate these treacherous halls, and neutralize the opposing spy before they you. The fate of our agency -- the world, hangs by a thread.
  
  Prepare yourself to enter a world of beauty and intrigue, where the shimmering artworks become both your refuge and your playground. But beware, for every step you take could be your last. Use every resource and cunning strategy at your disposal to outmaneuver your rival and strike when the time is right.
  
  Good luck, the game is about to begin.`;
  const instructions = ` This game requires two to play. Every turn, you must take one action: Look, Move, or Attack if possible. Reveal to your enemy your action, and enter theirs.`;

  return (
    <main className={styles.main}>
      {showTitle && !codename && (
        <div className={styles.title}>
          <Image
            className={`${!showSelection && styles.blurred}`}
            alt="cover image"
            src={cover}
          />
          {!showSelection && (
            <div className={styles.gameName}>The Art of Deception</div>
          )}
          {showMission && (
            <div className={styles.missionDetails}>
              <div className={`${styles.details} ${styles.blurb}`}>{blurb}</div>
              <div className={`${styles.details} ${styles.instructions}`}>
                {instructions}
              </div>
            </div>
          )}
          {!showSelection && (
            <button
              className={styles.enterButton}
              onClick={() => {
                setShowSelection(true);
                setShowMission(false);
              }}
            >
              Enter
            </button>
          )}
          {!showSelection && !showMission && (
            <button
              className={styles.enterButton}
              onClick={() => setShowMission(true)}
            >
              Mission Details
            </button>
          )}
          {showSelection && <Selection setCodename={setCodename}></Selection>}
        </div>
      )}
      {codename && !win && (
        <Game win={win} setWin={setWin} codename={codename}></Game>
      )}
      {win && (
        <div className={styles.winScreen}>
          <Image
            alt="game end art"
            src={
              win == codename
                ? codename == "cobra"
                  ? cobraWin
                  : mongooseWin
                : loseArt
            }
          />
          {win == codename && (
            <div className={styles.gameoverText}>You win!</div>
          )}
          {win !== codename && (
            <div className={styles.gameoverText}>You lose</div>
          )}
        </div>
      )}
    </main>
  );
}
