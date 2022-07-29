import { useState } from "react"
import "./sessaofilme.css"

export default function Assentos({idsAssento, setIdsAssento, assento}) {
    
    const [corbolinha, setCorbolinha] = useState(false)
    

    function pegaAssento(){
       let omesmo = idsAssento.includes(assento.id)
       if(omesmo) {
        setIdsAssento(idsAssento.filter((item)=>{
           return item !== assento.id
        }))
       }else{
        setIdsAssento((data)=>([...data, assento.id]))
        }
    }

    return(
        (!assento.isAvailable) ? (
            <div className="assentoindisponivel">
                <p>{assento.name}</p>
            </div>
        ) : (
            <div onClick={()=>(setCorbolinha(!corbolinha), pegaAssento())} className={(corbolinha) ? ("assentoclicado") : ("assento")}>
                <p>{assento.name}</p>
            </div>
        )
    )
}

//assento => class padrão