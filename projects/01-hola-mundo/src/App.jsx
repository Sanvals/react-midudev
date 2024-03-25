import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'> 
            <TwitterFollowCard name='Sr Gorigori' isFollowing>
                Sr Gorigori Gorl
            </TwitterFollowCard>
            <TwitterFollowCard name='Goncy' isFollowing={false}>
                Goncy de la Orilla
            </TwitterFollowCard>
        </section>
    )
}