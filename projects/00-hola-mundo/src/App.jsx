import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'> 
            <TwitterFollowCard userName='srgorigori' name='Sr Gorigori' isFollowing/>
            <TwitterFollowCard userName='pheralb' name='Goncy' isFollowing/>
        </section>
    )
}