import Enemy from "../../interfaces/Enemy";

export const getHP = (enemy: Enemy, level: number) => {
  const HP_SCALING_DICE = 0;
  const HP_SCALING_VALUE = 1;
  let hitPoints = Number(enemy.hitPoints);
  let hpScaling = enemy.hpScaling
    .split("d")
    .map((elem: string) => Number(elem));
  let addedHp = 0;
  const numberOfDice = hpScaling[HP_SCALING_DICE] || 1;
  for (let i = 1; i < level; i++) {
    for (let dice = 0; dice < numberOfDice; dice++) {
      addedHp += Math.floor(Math.random() * hpScaling[HP_SCALING_VALUE]);
    }
  }
  return (hitPoints += addedHp);
};
