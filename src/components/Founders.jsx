import { Foundersname } from "./Foundersname"
import {useState} from "react"

export function Founders(){
    const [status, setStatus] = useState(1)

    function setToFounder(id){
        setStatus(id)
    }
   
    return (
        <div>
            <h1>Fundadores</h1>

            {(status === 1)?  <Foundersname name = "Tokin" text = "Gosta de animes, de basquete e de jogar League of Legends "/> : '' }
            {(status === 2)?  <Foundersname name = "Sling" text = "Gosta de assistir séries e joga qualquer tipo de jogo "/> : '' }
            {(status === 3)?   <Foundersname name = "Kinho" text = "Programa coisas e joga nas horas vagas "/> : '' }
            {(status === 4)?  <Foundersname name = "Pew" text = "Progama coisas e assiste One Piece "/> : '' }
            {(status === 5)?   <Foundersname name = "Sharp888" text = "Gosta de animes e desaparece as vezes "/> : '' }


            <button onClick = {() => setToFounder(1)}>Founder</button>
            <button onClick = {() => setToFounder(2)}>Founder</button>
            <button onClick = {() => setToFounder(3)}>Founder</button>
            <button onClick = {() => setToFounder(4)}>Founder</button>
            <button onClick = {() => setToFounder(5)}>Founder</button>
           
                  
           
        </div>
    )
}