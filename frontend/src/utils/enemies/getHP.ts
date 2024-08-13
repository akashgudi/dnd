import Enemy from "../../interfaces/Enemy"

export const getHP = (enemy: Enemy, level: number) => {
    const HP_SCALING_DICE = 0
    const HP_SCALING_VALUE = 1
    console.log(enemy)
    let hitPoints = Number(enemy.hitPoints)
    let hpScaling = enemy.hpScaling.split("d").map((elem: string) => Number(elem))
    let addedHp = 0
    for (let i = 1; i < level; i++) {
        addedHp += Math.floor(Math.random() * hpScaling[HP_SCALING_VALUE])
    }
    return hitPoints += addedHp
}