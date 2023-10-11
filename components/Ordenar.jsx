import { useState } from "react"

export default function Ordenar(){
    const [ordenando, setOrdenando] = useState(false)
    return(
        <div className="flex gap-2 items-center relative">
            {
                ordenando && 
                <div
                className="absolute right-6 z-[900] flex flex-col items-start top-6 p-4 gap-2 bg-white shadow-pre rounded-sm">
                    <button  onClick={() => setOrdenando(false)} className="p-1 text-[12px]  text-pink-500 w-36">Por Nome</button>
                    <button  onClick={() => setOrdenando(false)} className="p-1 text-[12px]  text-pink-500 w-36">Por Conclusão</button>
                    <button  onClick={() => setOrdenando(false)} className="p-1 text-[12px] text-pink-500 w-36">Por Data das Tarefas</button>
                </div>
            }
            <button className="bg-white rounded-full  h-[38px] shadow-pre w-[38px] relative flex items-center justify-center"
                onClick={() => setOrdenando(true)}>
                <p className=" text-pink-600 font-alata text-[24px] absolute top-0 right-0 left-0 bottom-0">O</p>
            </button>
        </div>
    )
}