import Usuarios from "./Fotos";

export default function Tarefa(props) {
    return (
        <div className=" shadow-pre bg-white rounded-[8px] overflow-clip flex relative h-[130px] w-[300px]">
            <div className="bg-pink-600 h-full w-3"></div>
            <div className="w-full flex  flex-col px-6 justify-center items-center]">
                <div className="flex w-full  justify-end items-center">
                    <h6 className="text-[18px] text-zinc-900 w-full font-alata ">{props.nome}</h6>
                    <Usuarios fotos={props.usuarios} max={2}></Usuarios>
                </div>
                <p className="mt-2 text-[12px] text-zinc-400">{props.descricao}</p>
            </div>
        </div>
    )
}