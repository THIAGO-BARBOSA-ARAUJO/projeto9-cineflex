import { useState } from "react"
import "./sessaofilme.css"

export default function Assentos({assento}) {
    
    const [corbolinha, setCorbolinha] = useState(false)

    console.log(corbolinha)
    return(
        (assento.isAvailable) ? (
            <div className="assentoindisponivel">
                <p>{assento.name}</p>
            </div>
        ) : (
            <div onClick={()=>(setCorbolinha(!corbolinha))} className={(corbolinha) ? ("assentoclicado") : ("assento")}>
                <p>{assento.name}</p>
            </div>
        )
    )
}

//assento => class padrão