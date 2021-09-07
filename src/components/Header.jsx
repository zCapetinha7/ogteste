import "../styles/header.scss"

export function Header(){
    return (
        <div>
            <header className = "siteHeader">
                <h1 className = "serverName">4ANO</h1>
                <div className = "headerButtons">
                    <button className = "discordButton">Servidor no Discord</button>
                </div>
            </header>
        </div>
    )
}