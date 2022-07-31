import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import "./sessaofilme.css"
import axios from 'axios';
import Form from "./Forms";
import Footer from "../horariofilme/Footer";
import Assentos from "./Assentos";

export default function Sessaofilme({setInfotelasucesso}){

    const {idsessao} = useParams()
    const [idsAssento, setIdsAssento] =useState([])
    const [assentos, setAssentos] = useState([])
    const [infofilme, setInfofilme] = useState({})
    const [dataFilme, setDatafilme] = useState([])
    const [numacentos, setNumacentos] = useState([])
    const [dataescolhida, setDataescolhida] = useState()

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idsessao}/seats`);

		requisicao.then((resposta) => {
            setAssentos(resposta.data.seats)
            setInfofilme(resposta.data.movie)
            setDatafilme([resposta.data.day.weekday, resposta.data.name])
            console.log(resposta.data.day)            
            setDataescolhida(resposta.data.day.date)
		})
	}, [])
    //console.log(numacentos)
    return(
        <div className="sessao">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="asentos">
                {assentos.map((assento)=>{
                    return(
                        <Assentos setNumacentos={setNumacentos} numacentos={numacentos} idsAssento={idsAssento} setIdsAssento={setIdsAssento} assento={assento}/>
                    )
                })}
            </div>
            <div className="indicacoes">
                <div className="selecionado">
                    <div className="bolinha-verde"></div>
                    <p>selecionado</p>
                </div>
                    <div className="disponivel">
                <div className="bolinha-cinza"></div>
                    <p>disponivel</p>
                </div>
                <div className="indisponivel">
                    <div className="bolinha-amarela"></div>
                    <p>indisponivel</p>
                </div>
            </div>
            <Form dataescolhida={dataescolhida} numacentos={numacentos} setInfotelasucesso={setInfotelasucesso} idsAssento={idsAssento} dataFilme={dataFilme} infofilme={infofilme} />
        </div>
    )
}