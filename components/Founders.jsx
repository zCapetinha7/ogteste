import { Foundersname } from "./Foundersname"
import { Button } from "./Button"
import "../styles/founders.scss"
import sling from '../assets/images/sling.jpg'
import tokin from '../assets/images/tokin.png'
import pew from '../assets/images/pew.jpg'
import sharp from '../assets/images/sharp.png'
import kinho from '../assets/images/kinho.png'

import { useState } from "react"

export function Founders() {
    const [status, setStatus] = useState(1)

    function setToFounder(id) {
        setStatus(id)
    }

    return (
        <div className="fundadores-content">
            <h1 className = "founders-title">Fundadores</h1>

            <div className="founders-name">
                {(status === 1) ? <Foundersname name="Tokin" text="Gosta de animes, de basquete e de jogar League of Legends " image = {tokin}/> : ''}
                {(status === 2) ? <Foundersname name="Sling" text="Gosta de assistir séries e joga qualquer tipo de jogo " image = {sling}/> : ''}
                {(status === 3) ? <Foundersname name="Kinho" text="Programa coisas e joga nas horas vagas " image = {kinho} /> : ''}
                {(status === 4) ? <Foundersname name="Pew" text="Progama coisas e assiste One Piece " image = {pew}/> : ''}
                {(status === 5) ? <Foundersname name="Sharp888" text="Gosta de animes e desaparece as vezes " image = {sharp}/> : ''}

            </div>


            <div className="buttons">
                <Button className = {(status === 1)? "buttonwhite" : "button"} onClick={() => setToFounder(1)}></Button>
                <Button className = {(status === 2)? "buttonwhite" : "button"} onClick={() => setToFounder(2)}></Button>
                <Button className = {(status === 3)? "buttonwhite" : "button"} onClick={() => setToFounder(3)}></Button>
                <Button className = {(status === 4)? "buttonwhite" : "button"} onClick={() => setToFounder(4)}></Button>
                <Button className = {(status === 5)? "buttonwhite" : "button"} onClick={() => setToFounder(5)}></Button>
            </div>

        </div>
    )
}