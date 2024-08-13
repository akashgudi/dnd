import { useEffect } from 'react'
import './index.scss'
import { getEndpoint } from '../../utils/getEndpoint'

export const EnemiesScreen = () => {
    useEffect(() => {
        fetch(getEndpoint("/enemies/create"), {
            method : "POST",
            body: JSON.stringify({ "test": "test" })
        })
    })
    return <div className='enemies-screen'>

    </div>
}