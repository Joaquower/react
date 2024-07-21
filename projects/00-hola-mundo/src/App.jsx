import './App.css'
import { TwitterFollowCard } from './Twitter-FollowCard'
export function App(){
    return(
        <>
            <TwitterFollowCard   userName={"Gerlock"}  name={"Joaquín Casillas"}/>
            <TwitterFollowCard   userName={"Destroyer123"}  name={"Ana Luisa Camacho"}/>
            <TwitterFollowCard   userName={"Morphy"}  name={"Morti"}/>
        </>
    )
}