import { useState } from "react"

export default function Pesquisa() {
    const [pesquisando, setPesquisando] = useState(false)
    return (
        <div className="flex gap-2 items-center relative">
            {
                pesquisando && <input type="text" onBlur={() => setPesquisando(false)} 
                    className="w-[400px] absolute h-[50px] right-12 shadow-pre border-b-2 border-pink rounded-md" />
            }
            <button className="bg-white rounded-full  h-[38px] shadow-pre w-[38px] relative flex items-center justify-center"
                onClick={() => setPesquisando(true)}>
                <p className=" text-pink font-alata text-[24px] absolute top-0 right-0 left-0 bottom-0">P</p>
            </button>
        </div>
    )
}