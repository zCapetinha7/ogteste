import { Header } from "../components/Header"
import {Founders} from "../components/Founders"
import {Discord} from "../components/Discord"
import {Games} from "../components/Games"
import {Opinions} from "../components/Opinions"
import {Qualities} from "../components/Qualities"
import "../styles/home.scss"
import desenhoImage from "../assets/images/desenho.png"
import jordanImage from "../assets/images/jordan.jpg"
import corujaImage from "../assets/images/coruja.jpg"
import botsImg from "../assets/images/bots.png"
import diversaoImg from "../assets/images/diversao.png"
import comunidadeImg from "../assets/images/comunidade.png"
import legolasImg from "../assets/images/legolas.jpg"


export function Home() {
    return (
        <div>
            <Header />
            <main className="main-content">
                <div className="aboutUs">
                    <h1 className="title-aboutUs">Um pouco sobre nós</h1>
                    <h2 className="about-content">O <strong>4ano</strong> é um servidor criado em 2018 por 5 players que buscavam<br />
                        um espaço legal para jogarem e se comunicarem, desde então o 4ano cresceu<br />
                        e se tornou mais que um servidor, se tornou um ecossistema!
                    </h2>            
                </div>
            </main>
            <div className = "qualities-list">
                <Qualities image = {comunidadeImg} title = "Faça Amigos" text = "O 4ano é o lugar ideal para fazer amizade com outros players!"/>
                <Qualities image = {botsImg} title = "Bots de música" text = "O servidor possui diversos bots para você jogar ouvindo músicas!"/>
                <Qualities image = {diversaoImg} title = "Diversão" text = "Espere muita diversão no 4ano, nós buscamos a sua felicidade!"/>
            </div>
            <Founders/>
            <Games/>
            <div className = "opinions-list">
            <h1 className ="title-op">Veja o que dizem os nossos membros</h1>
                <Opinions image = {desenhoImage} text = "O servidor é muito bom, me divirto muito!" name = "João"/>
                <Opinions image = {jordanImage} text = "O 4ano é bom demais, é um estilo de vida!" name = "Carlos"/>
                <Opinions image = {corujaImage} text = "Não existe servidor igual a esse!" name = "Sergio"/>
                <Opinions image = {legolasImg} text = "Esse servidor é realmente espetacular!" name = "Fábio"/>
            </div>   
            <Discord/>
        </div>
    )
}