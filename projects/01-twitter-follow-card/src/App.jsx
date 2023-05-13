import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
            <section className='App'>
                <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="miriamgonp" name="Míriam" />
                <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="Tania_Tagle" name="Tania" />
                <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="goncy" name="gon" />
            </section>

        </>

    )

}