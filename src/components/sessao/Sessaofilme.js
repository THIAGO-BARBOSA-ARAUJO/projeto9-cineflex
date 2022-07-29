import { useParams } from "react-router-dom"

export default function(){

    const {idsessao} = useParams()

    return(
        <div className="sessao">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="asentos">
                <div className="assento">
                    <p></p>
                </div>
            </div>
        </div>
    )
}