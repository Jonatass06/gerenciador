
import projetos from "@/data/projetos";
import Header from "../components/Header";
import Projeto from "@/components/Projeto";
import tarefas from "@/data/tarefas-do-dia";
import Tarefa from "@/components/Tarefa";
import SVGPaginaInicial from "@/components/SVGPaginaInicial";


export default function Home() {

  return (
    <div className="bg-white w-screen h-screen">
      <SVGPaginaInicial></SVGPaginaInicial>
      <div className='fundo h-screen w-screen fixed z-[999] justify-center'>
        <Header setPrimary={(v => { setPrimary(v) })} setSecondary={(v => { setSecondary(v) })}></Header>
        <div className="w-screen flex justify-center mt-10 mb-4">
          <h1 className="ml-4 text-pink-600 w-[1200px] text-start">Pagina Inicial</h1>
        </div>
        <div className='flex items-center justify-center'>
          <div className="flex flex-col items-start justify-center gap-6 h-[680px]">
            <div className=" ml-[22px] bg-pink-500 w-[343px] h-[94px] rounded-[8px] flex 
            justify-center items-center text-[24px] text-white font-alata">
              PROJETOS
            </div>
            <div className="overflow-y-scroll w-max h-[570px]">
              {projetos.map(projeto => {
                return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                  porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
              })}
            </div>
          </div>
          <div className="bg-white h-[684px] w-[836px] flex flex-col items-center 
          justify-center gap-12 rounded-[5px] shadow-pre">
            <h5 className=" text-pink-600">Tarefas de Hoje</h5>
            <div className="hover:overflow-y-auto overflow-clip w-[655px] 
            h-[500px] flex flex-wrap gap-6 p-1">
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
