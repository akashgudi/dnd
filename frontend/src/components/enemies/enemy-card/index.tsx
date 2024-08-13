import './index.scss'
import { Enemy } from '../../../interfaces'

export const EnemyCard = (enemy: Enemy) => {
    const { enemyType, hitPoints } = enemy
    return <div className='enemy-cards'>
        {enemyType}
        {hitPoints}
    </div>
}