import './index.scss'
import { Enemy } from '../../../interfaces'
import { LevelInput } from '../../level/LevelInput'
import { ChangeEventHandler } from 'react'

export const EnemyCard = (enemy: Enemy) => {
    const handleLevelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
    }
    const { enemyType, hitPoints } = enemy
    return <div className='enemy-cards'>
        {enemyType}
        <LevelInput max={10} onChange={handleLevelChange} />
        {hitPoints}
    </div>
}