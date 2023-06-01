import { useState } from "react";
import { Actions } from "./Actions";
import { Location, GameProps } from "./types";
import styles from "./page.module.scss";
import { View } from "./View";
import { Health } from "./Health";
import { Animation } from "./Animation";
import { CustomCss } from "./types";

const initialLocations: { [codename: string]: Location } = {
  cobra: { position: 0, orientation: 1 },
  mongoose: { position: 13, orientation: 0 },
};

export function Game(props: GameProps) {
  const { codename, win, setWin } = props;
  const debug = false;
  const [wounds, setWounds] = useState(0);
  const [enemyWounds, setEnemyWounds] = useState(0);
  const [showAnimation, setShowAnimation] = useState("");
  const [enemyVisible, setEnemyVisible] = useState<number>(-1);
  const [location, setLocation] = useState<Location>(
    initialLocations[codename === "cobra" ? "cobra" : "mongoose"]
  );
  const [enemyLocation, setEnemyLocation] = useState<Location>(
    initialLocations[codename === "cobra" ? "mongoose" : "cobra"]
  );
  const [playerColor, setPlayerColor] = useState(
    codename == "cobra" ? "#3847a5" : "#ba1919"
  );

  return (
    <div
      className={styles.game}
      style={{ "--playerColor": playerColor } as CustomCss}
    >
      {debug && (
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            {location.position}-{location.orientation}
          </div>
          <div>
            {enemyLocation.position}-{enemyLocation.orientation}
          </div>
        </div>
      )}
      <Health wounds={wounds} codename={codename}></Health>
      <View
        location={location}
        enemyLocation={enemyLocation}
        enemyVisible={enemyVisible}
        codename={codename}
      ></View>
      <Actions
        codename={codename}
        location={location}
        setLocation={setLocation}
        enemyLocation={enemyLocation}
        setEnemyLocation={setEnemyLocation}
        enemyVisible={enemyVisible}
        setEnemyVisible={setEnemyVisible}
        wounds={wounds}
        setWounds={setWounds}
        enemyWounds={enemyWounds}
        setEnemyWounds={setEnemyWounds}
        setShowAnimation={setShowAnimation}
        setWin={setWin}
      ></Actions>
      {showAnimation && (
        <Animation
          showAnimation={showAnimation}
          setShowAnimation={setShowAnimation}
        ></Animation>
      )}
    </div>
  );
}
