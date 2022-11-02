import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Horariofilme from "./horariofilme/Horariofilme";
import Sessaofilme from "./sessao/Sessaofilme";
import Telasucesso from "./telasucesso/telasucesso";

export default function App(){ 
    const [infofilme, setinfofilmes] = useState() 
    const [infotelasucesso, setInfotelasucesso] = useState()
    
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                console.log(infofilme)
                <Route path="/" element={<Home infofilme={infofilme} setinfofilmes={setinfofilmes}/>} />

                <Route path={`/sessoes/:id`} element={<Horariofilme idfilme={infofilme?.id} nomefilme={infofilme?.title}/>}/>
                
                <Route path={`/assentos/:idsessao`} element={<Sessaofilme setInfotelasucesso={setInfotelasucesso} />}/>

                <Route path={`/sucesso`} element={<Telasucesso infotelasucesso={infotelasucesso} />}/>
            </Routes>
        </BrowserRouter>
    )
}