import { useState } from 'react'

export function TwitterFollowCard ({ children = "Unknown", name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const formatted = `@${name.replace(' ', '').toLowerCase()}`
    const imageUrl = `https://unavatar.io/${formatted}`
    const followText = isFollowing ? 'Dejar de Seguir' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
           <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar'
                alt='profile picture' 
                src={imageUrl}/>

            <div className='tw-followCard-info'>
                <strong>
                    {children}
                </strong>
                <span className='tw-followCard-infoUserName'>
                    {formatted}
                </span>
            </div>
        </header> 

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {followText}
            </button>
        </aside>
    </article>
    )
}