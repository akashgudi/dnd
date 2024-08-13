import "./index.scss";
import { Enemy } from "../../../interfaces";
import { LevelInput } from "../../level/LevelInput";
import { ChangeEventHandler, DragEventHandler, useState } from "react";
import { getHP } from "../../../utils/enemies/getHP";

export const EnemyCard = (enemy: Enemy) => {
  const [level, setLevel] = useState(1);
  const handleLevelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setLevel(Number(e.target.value));
  };
  const handleDrag: DragEventHandler<HTMLDivElement>  = (e) => {
    console.log(e)
  }

  const handleDragEnd: DragEventHandler<HTMLDivElement>  = (e) => {
    alert("drag")
        
  }
  const { enemyType, damageDice } = enemy;
  return (
    <div className="enemy-card" draggable onDragStart={handleDrag} onDrop={handleDragEnd}>
      <div className="enemy-line">
        <div className="enemy-property">
          <div className="label">Class</div>
          <div>{enemyType}</div>
        </div>
        <div className="enemy-property">
          <div className="label">Level</div>
          <LevelInput max={10} onChange={handleLevelChange} />
        </div>
      </div>
      <div className="enemy-line">
        <div className="enemy-property">
          <div className="label">Hit Points</div>
          {getHP(enemy, level)}
        </div>
        <div className="enemy-property">
          <div className="label">Damage Dice</div>
          {damageDice}
        </div>
      </div>
    </div>
  );
};
