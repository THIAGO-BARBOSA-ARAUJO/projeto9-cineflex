import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import "./sessaofilme.css"
import axios from 'axios';

export default function Sessaofilme(){

    const {idsessao} = useParams()
    const [assentos, setAssentos] = useState([])

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idsessao}/seats`);

		requisicao.then((resposta) => {
            setAssentos(resposta.data.seats)
            console.log(resposta.data.seats)
		})
	}, [])

    return(
        <div className="sessao">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="asentos">
                {assentos.map((assento)=>{
                    return(
                        <div className="assento">
                            <p>{assento.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="indicacoes">
                
            </div>
        </div>
    )
}