import "./home.css"
import "./Filme"
import Filme from "./Filme"

export default function Home({infofilme, setinfofilmes}){
    return(
        <div className="home">
            <h1>Selecione o filme</h1>
            <div className="filmes">
                <Filme infofilme={infofilme} setinfofilmes={setinfofilmes}/>
            </div>
        </div>
    )
}