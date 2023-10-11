import { useState } from "react"
import Grafico from "./Grafico"
import Grupos from "./Fotos"

export default function Projeto(props){
    const [emCima, setEmCima] = useState(false);

    return (
        <div className="flex flex-col p-6 shadow-pre m-5 mt-1 bg-white rounded-[5px] w-[340px] "  
        onMouseEnter={() =>{setEmCima(true)}} onMouseLeave={() =>{setEmCima(false)}} >
            <div className="flex gap-2 flex-1 items-center">
                <div className="bg-zinc-200 h-14 w-14 rounded-[5px]"></div>
                <div className="h-14 flex flex-col justify-center gap-3">
                    <h6 className="text-[16px] text-zinc-900 h-min leading-[0px] font-alata">{props.nome}</h6>
                    <p className="text-[10px] text-zinc-900">{props.descricao}</p>
                </div>
            </div>
            {
                emCima &&            
                <div className="flex flex-col justify-center items-center w-full gap-6 pt-12">
                <Grupos fotos={props.grupos} max={4}></Grupos>
                <Grafico porcentagem={props.porcentagem}></Grafico>
            </div>
            }
        </div>
    )
}