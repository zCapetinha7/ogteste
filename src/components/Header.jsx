import "../styles/header.scss"
import serverLogo from "../assets/images/4anologo.png"

export function Header(){
    return (
        <div>
            <header className = "siteHeader">
                <img className = "serverName" src = {serverLogo} alt = "4ano ícone"/>
                <div className = "headerButtons">
                    <button className = "discordButton">Servidor no Discord</button>
                </div>
            </header>
        </div>
    )
}