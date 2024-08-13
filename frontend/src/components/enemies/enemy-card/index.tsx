import './index.scss'
import { Enemy } from '../../../interfaces'

export const EnemyCard = (enemy: Enemy) => {
    return <div>
        {JSON.stringify(enemy)}
    </div>
}