import './index.scss'
import { Enemy } from '../../../interfaces'
import { LevelInput } from '../../level/LevelInput'
import { ChangeEventHandler, useState } from 'react'
import { getHP } from '../../../utils/enemies/getHP'

export const EnemyCard = (enemy: Enemy) => {
    const [level,setLevel] = useState(1)
    const handleLevelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
        setLevel(Number(e.target.value))
    }
    const { enemyType } = enemy
    return <div className='enemy-card'>
        <div className='enemy-line'>
            <div>
                <div className='label'>
                    Class
                </div>
                <div>
                    {enemyType}
                </div>
            </div>
            <div>

                <div className='label'>
                    Level
                </div>
                <LevelInput max={10} onChange={handleLevelChange} />
            </div>
        </div>
        <div className='enemy-line'>
            <div>
                <div className='label'>
                    Hit Points
                </div>
                {getHP(enemy,level)}
            </div>
        </div>
    </div>
}