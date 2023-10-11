import Pesquisa from "./Pesquisa";

export default function BarraSuperior(props) {
    return (
        <div className="w-[1100px] flex justify-between my-12 h-min items-end">
            <div className=" flex items-end text-start gap-6">
                <h1 className=" text-pink-600 leading-none ">{props.titulo}</h1>
                {props.adicionar && <button className="bg-white rounded-full h-[38px] shadow-pre w-[38px] relative flex items-center justify-center" >
                    <p className=" text-pink-600 font-alata text-[24px] absolute top-0 right-0 left-0 bottom-0">+</p>
                </button>}
            </div>
            <div>
                {props.pesquisar && <Pesquisa></Pesquisa>}
            </div>
        </div>
    )
}