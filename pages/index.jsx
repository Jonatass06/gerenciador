
import projetos from "@/data/projetos";
import Header from "../components/Header";
import Projeto from "@/components/Projeto";
import tarefas from "@/data/tarefas-do-dia";
import Tarefa from "@/components/Tarefa";
import SVGPaginaInicial from "@/components/SVGPaginaInicial";
import Link from "next/link";
import BarraSuperior from "@/components/BarraSuperior";


export default function Home() {

  return (
    <div className="bg-white w-screen h-screen">
      <SVGPaginaInicial></SVGPaginaInicial>
      <div className='fundo h-screen w-screen relative z-[999] justify-center'>
        <Header setPrimary={(v => { setPrimary(v) })} setSecondary={(v => { setSecondary(v) })}></Header>
        <div className="w-screen flex justify-center">
          <BarraSuperior titulo="Pagina Inicial" largura={1185}></BarraSuperior>
        </div>
        <div className='flex items-center gap-3 justify-center'>
          <div className="flex flex-col items-center justify-center gap-6 h-[680px]">
            <Link href="/projetos" >
            <div className=" bg-pink w-[343px] h-[94px] rounded-[8px] flex 
            justify-center items-center text-[24px] text-white font-alata">
              PROJETOS
            </div>
            </Link>
            <div className="overflow-y-scroll w-max h-[570px]">
              {projetos.map(projeto => {
                return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                  porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
              })}
            </div>
          </div>
          <div className="bg-white h-[684px] w-[836px] flex flex-col items-center rounded-[1px] shadow-pre">
            <h5 className=" text-pink my-8">Tarefas de Hoje</h5>
            <div className="overflow-y-auto overflow-clip w-[655px] 
            h-[525px] flex flex-wrap gap-3 gap-x-5 p-1 justify-center">
              {tarefas.map(tarefa => {
                return <Tarefa nome={tarefa.nome} descricao={tarefa.descricao} 
                usuarios={tarefa.usuarios} key={tarefas.indexOf(tarefa)}></Tarefa>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
