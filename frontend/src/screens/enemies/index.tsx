import { useEffect } from 'react'
import './index.scss'
import { getEndpoint } from '../../utils/getEndpoint'
import { getHeaders } from '../../utils/getHeaders'
export const EnemiesScreen = () => {
    useEffect(() => {
        fetch(getEndpoint("/enemies/create"), {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ "test": "test" })
        })
    }, [])
    return <div className='enemies-screen'>

    </div>
}