import { useState } from "react"

export function TwitterFollowCard ({formatUserName, userName, name}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir' //texto que va a salir en el boton

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' //estado del boton según la acción que se tome

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="foto de perfil" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>

        </article>
    )
}