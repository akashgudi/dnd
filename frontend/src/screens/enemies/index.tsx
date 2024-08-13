import { useEffect } from 'react'
import './index.scss'
import { getEndpoint } from '../../utils/getEndpoint'
import { getHeaders } from '../../utils/getHeaders'
import { Enemy } from '../../interfaces'
import { EnemyCard } from '../../components/enemies/enemy-card'
import { useAtom } from 'jotai'
import { enemyAtom } from '../../state/enemiesAtom'

export const EnemiesScreen = () => {
    const [enemies, setEnemies] = useAtom(enemyAtom)
    useEffect(() => {
        fetch(getEndpoint("/enemies"), {
            headers: getHeaders(),
        }).then(res => res.json())
            .then(resJson => setEnemies(resJson.enemies))
    }, [])
    return <div className='enemies-screen'>
        {enemies.map((enemy: Enemy) => <EnemyCard {...enemy} />)}
    </div>
}