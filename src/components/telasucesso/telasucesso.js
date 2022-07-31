import "./telasucesso.css"
import { useNavigate } from "react-router-dom";

export default function Telasucesso ({infotelasucesso}) {

    let navigate = useNavigate();

    return(
        <div className="telasucesso">
            <div className="tituloprincipal">
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className="conteudo">
                <div className="filmeesessoes">
                    <h2>Filme e Sessão</h2>
                    <p>{infotelasucesso.titulo}</p>
                    <p>{infotelasucesso.data} - {infotelasucesso.hora}</p>
                </div>
                <div className="ingressos">
                    <h2>Ingressos</h2>
                    <div className="assentos">
                        {infotelasucesso.acentos.map((acento)=>{
                            return(
                                <p>Assento {acento}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="comprador">
                    <h2>Comprador</h2>
                    <p>Nome: {infotelasucesso.nome}</p>
                    <p>CPF: {infotelasucesso.cpf}</p>
                </div>
                <div onClick={()=>{navigate("/")}} className="btn">Voltar pra Home</div>
            </div>
        </div>
    )
}