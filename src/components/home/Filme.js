import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Filme({setinfofilmes}){
    
    const [filmes, setFilmes] = useState([]);
    

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then((resposta) => {
            setFilmes(resposta.data);
		});
	}, []);
    return(
        <>
            {filmes.map((filme) =>(
                <Link key={filme.id} to={`/sessoes/${filme.id}`}>
                    <div className="filme">
                        <img onClick={()=> (setinfofilmes(filme))} src={filme.posterURL} alt={filme.title}/>
                    </div>
                </Link>
            ) )}
            
        </>
    )
}
