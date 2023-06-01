import styles from "./page.module.scss";
import {
  availableMovesCobra,
  availableMovesMongoose,
  enemyVisibleDistance,
  missedShot,
  moveResult,
  hitTakedown,
  hitShot,
} from "./map";
import { ActionProps } from "./types";
import { useEffect, useRef, useState } from "react";
// import arrow from "../../public/icons/arrow.png";
// import reticule from "../../public/icons/reticule.png";
// import ricochet from "../../public/icons/ricochet.png";
const arrow = "https://i.imgur.com/Cnr23Cy.png";
const reticule = "https://i.imgur.com/llOpv79.png";
const ricochet = "https://i.imgur.com/AuZ05hj.png";

export function Actions(props: ActionProps) {
  const {
    codename,
    location,
    setLocation,
    enemyLocation,
    setEnemyLocation,
    enemyVisible,
    setEnemyVisible,
    wounds,
    setWounds,
    setShowAnimation,
    enemyWounds,
    setEnemyWounds,
    setWin,
  } = props;

  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [queuedAction, setQueuedAction] = useState<number>(-1);
  const [queuedDamage, setQueuedDamage] = useState<number>(0);
  const [promptValue, setPromptValue] = useState<string>("");
  const inputRef = useRef();

  const availableMoves =
    codename === "cobra" ? availableMovesCobra : availableMovesMongoose;
  const compass = [
    ["Forward", "Right", "Back", "Left"],
    ["Left", "Forward", "Right", "Back"],
    ["Back", "Left", "Forward", "Right"],
    ["Right", "Back", "Left", "Forward"],
  ];

  function handleMoveClick(code: number) {
    setQueuedAction(code);
    setShowPrompt(true);
  }

  function handlePromptSubmit() {
    const enemyAction = parseInt(promptValue);

    if (!moveResult[enemyAction]) {
      setPromptValue("");
      alert("Please enter a valid enemy move");
    } else {
      const newLocation = moveResult[queuedAction];
      newLocation && setLocation(newLocation);

      const newEnemyLocation = moveResult[enemyAction];
      setEnemyLocation(newEnemyLocation);
      setEnemyWounds(enemyWounds + queuedDamage);

      if (hitTakedown[enemyAction]) {
        setWounds(wounds + 1);
        setShowAnimation("chop");
      } else if (hitShot[enemyAction]) {
        setWounds(wounds + 1);
        setShowAnimation("bang");
      } else if (missedShot[enemyAction]) {
        setShowAnimation("miss");
      }

      setEnemyVisible(enemyVisibleDistance(newLocation, newEnemyLocation));
      setPromptValue("");
      setQueuedAction(-1);
      setQueuedDamage(0);
      setShowPrompt(false);
    }
  }

  useEffect(() => {
    if (wounds >= 3) {
      setWin(codename == "cobra" ? "mongoose" : codename);
    } else if (enemyWounds >= 3) {
      setWin(codename);
    }
  }, [wounds, enemyWounds]);

  function handleAttackClick() {
    const rangedAttack = enemyVisible > 1;
    const roll = Math.random() * 100;
    const attackSuccess = rangedAttack ? roll <= 70 : true;

    const attackCode = rangedAttack
      ? availableMoves[location.position][location.orientation]![3]
      : availableMoves[location.position][location.orientation]![2];

    setQueuedAction(
      attackSuccess
        ? attackCode
        : availableMoves[location.position][location.orientation]![4]
    );
    setQueuedDamage(attackSuccess ? 1 : 0);
    setShowPrompt(true);
  }

  function renderActions() {
    return (
      <div className={styles.actionWrapper}>
        <div className={styles.turnActions}>
          <span className={styles.actionName}>Look</span>
          {availableMoves[location.position].map((code, idx) => {
            const direction = compass[location.orientation][idx];
            const arrowStyle =
              direction == "Left"
                ? styles.left
                : direction == "Forward"
                ? styles.forward
                : direction == "Right"
                ? styles.right
                : styles.back;
            return (
              <div
                className={`${styles.set} ${code ? styles.clickable : ""}`}
                key={`turn-${idx}`}
                onClick={() => code && handleMoveClick(code[0])}
              >
                <img
                  alt="arrow"
                  src={arrow}
                  width="20"
                  height="20"
                  className={arrowStyle}
                />
                <div className={styles.number}>{code ? code[0] : "\u00A0"}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.moveActions}>
          <span className={styles.actionName}>Move</span>
          {availableMoves[location.position].map((code, idx) => {
            const direction = compass[location.orientation][idx];
            const arrowStyle =
              direction == "Left"
                ? styles.left
                : direction == "Forward"
                ? styles.forward
                : direction == "Right"
                ? styles.right
                : styles.back;
            return (
              <div
                className={`${styles.set} ${code ? styles.clickable : ""}`}
                key={`move-${idx}`}
                onClick={() => code && handleMoveClick(code[1])}
              >
                <img alt="arrow" src={arrow} className={arrowStyle} />
                <div className={styles.number}>{code ? code[1] : "\u00A0"}</div>
              </div>
            );
          })}
        </div>
        {enemyVisible !== -1 && (
          <button className={styles.attack} onClick={() => handleAttackClick()}>
            Attack!
          </button>
        )}
      </div>
    );
  }

  function renderPrompt() {
    return (
      <div
        className={`${styles.prompt} ${
          showPrompt ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.attackResult}>
          {(hitShot[queuedAction] || hitTakedown[queuedAction]) && (
            <div className={styles.hitSuccess}>
              <img alt="hit icon" src={reticule} />
              <span className={styles.hitDescription}>
                Hit! Enemy is injured.
              </span>
            </div>
          )}
          {missedShot[queuedAction] && (
            <div className={styles.hitMissed}>
              <img alt="hit icon" src={ricochet} />
              <span className={styles.hitDescription}>
                Miss! Enemy is alerted.
              </span>
            </div>
          )}
        </div>
        <div className={styles.moveReminder}>Your move: {queuedAction}</div>
        <input
          ref={(input) => input && input.focus()}
          placeholder="Enemy's move"
          value={promptValue}
          onChange={(ev) => setPromptValue(ev.target.value)}
          onKeyDown={(ev) => ev.key == "Enter" && handlePromptSubmit()}
          type="text"
          pattern="\d*"
        ></input>
        <button
          className={styles.goButton}
          onClick={() => handlePromptSubmit()}
        >
          Go
        </button>
      </div>
    );
  }

  return (
    <div className={styles.actions}>
      {renderActions()}
      {renderPrompt()}
    </div>
  );
}
