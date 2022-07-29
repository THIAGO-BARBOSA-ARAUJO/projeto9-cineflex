import { useState, useEffect } from 'react';
import "./horariofilme.css"
import axios from 'axios';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function Horariofilme({setIdsessao, idfilme}){

    const [datas, setDatas] = useState([])
    const [infofilme, setInfofilmes] = useState([])

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilme}/showtimes`);

		requisicao.then((resposta) => {
            setDatas(resposta.data.days)
            setInfofilmes(resposta.data)
		});
	}, []);
    return(
        <>
            <div className="horariofilmes"> 
            <h1>Selecione o horário</h1>
            {datas.map((data) =>{
                return (
                <div key={data.id} className="horariofilme">
                    <p>{`${data.weekday} - ${data.date}`}</p>
                    <div className='horarios'>
                        {data.showtimes.map((horario)=>{
                            return (
                                <Link key={horario.id} to={`/assentos/${horario.id}`}>
                                    <div className='horario'>{horario.name}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )})}
            </div>
            <Footer infofilme={infofilme}/>
        </>
    )
}