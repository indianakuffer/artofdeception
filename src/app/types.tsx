import { CSSProperties } from "react";

export type Location = {
  position: number;
  orientation: number;
};

export type Codename = "cobra" | "mongoose";

export type MoveMap = { [position: number]: (number[] | null)[] };

export type ToRoom = { [code: number]: Location };

export type GameProps = {
  codename: Codename;
  win: Codename | "";
  setWin: Function;
};

export type ActionProps = {
  location: Location;
  setLocation: Function;
  enemyLocation: Location;
  setEnemyLocation: Function;
  codename: Codename;
  enemyVisible: number;
  setEnemyVisible: Function;
  wounds: number;
  setWounds: Function;
  enemyWounds: number;
  setEnemyWounds: Function;
  setShowAnimation: Function;
  setWin: Function;
};

export type ViewProps = {
  location: Location;
  enemyLocation: Location;
  enemyVisible: number;
  codename: Codename;
};

export type HealthProps = {
  wounds: number;
  codename: Codename;
};

export type AnimationProps = {
  showAnimation: string;
  setShowAnimation: Function;
};

export interface CustomCss extends CSSProperties {
  "--playerColor": string;
}
