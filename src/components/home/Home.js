import "./home.css"
import "./Filme"
import Filme from "./Filme"

export default function Home(){
    return(
        <div className="home">
            <h1>Selecione o filme</h1>
            <div className="filmes">
                <Filme/>
            </div>
        </div>
    )
}