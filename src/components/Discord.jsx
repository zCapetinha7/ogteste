import "../styles/discord.scss"
import discordImg from "../assets/images/discordImg.jpg"

export function Discord(){
    return (
        <div className = "discord-content">
            <h2>Servidor no Discord</h2>
            <img className = "discord-img"src = {discordImg}alt = "logo do servidor"/>
            <div className = "discord-message">Junte-se aos ... membros do servidor</div>
            <a className = "discord-link" href = "https://discord.gg/apJTJQmQ2D">Entrar no servidor</a>
            
        </div>
    )
}