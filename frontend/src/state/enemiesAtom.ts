import { atom } from "jotai";
import { Enemy } from "../interfaces";

const enemyAtom = atom<[Enemy] | []>([]);

export { enemyAtom };
