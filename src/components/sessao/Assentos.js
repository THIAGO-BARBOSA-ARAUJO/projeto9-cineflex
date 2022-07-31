import { useState } from "react"
import "./sessaofilme.css"

export default function Assentos({numacentos, setNumacentos, idsAssento, setIdsAssento, assento}) {
    
    const [corbolinha, setCorbolinha] = useState(false)
    //console.log(assento.name)
    

    function pegaAssento(){
       let omesmo = idsAssento.includes(assento.id)
       let jatem = numacentos.includes(assento.name)
       
       if(jatem) {
        setNumacentos(numacentos.filter((aass)=>{
            return aass !== assento.name
        }))
       }else{
        setNumacentos((data)=>([...data, assento.name]))
       }

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
