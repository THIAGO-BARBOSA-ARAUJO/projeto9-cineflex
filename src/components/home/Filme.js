import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filme(){
    const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then((resposta) => {
            setFilmes(resposta.data);
		});
	}, []);
    return(
        <>
            {filmes.map((filme, key) =>(
                <div className="filme">
                    <img key={key} src={filme.posterURL} alt="img"/>
                </div>
            ) )}
            
        </>
    )
}
