import { useState } from "react";
import axios from "axios";
import "../horariofilme/Footer"
import Footer from "../horariofilme/Footer";

export default function Form ({idsAssento, dataFilme, infofilme}) {
	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");

	function fazerLogin(event) {
		event.preventDefault();

		try{
			const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
			ids: idsAssento,
	        name: nome,
	        cpf: cpf
		});
		console.log(requisicao)
		}catch {
			console.log("deu ruim")
		}
		
	}

	return (
		<div className="forms">
            <form onSubmit={fazerLogin}>
                <label htmlFor="campoEmail">Nome do comprador:</label><br/>
                <input required type="text" id="campoNome" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} /><br/>

                <label htmlFor="campoCpf">CPF do comprador:</label><br/>
                <input required type="text" id="campoCpf" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} /><br/>

                <div className="btn">
                    <button type="submit">Reservar assento(s)</button>
                </div>
		    </form>
            <Footer dataFilme={dataFilme} infofilme={infofilme} />
        </div>
	);
}