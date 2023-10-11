
import projetos from "@/data/projetos";
import Header from "../components/Header";
import Projeto from "@/components/Projeto";
import tarefas from "@/data/tarefas-do-dia";
import Tarefa from "@/components/Tarefa";
import SVGPaginaProjetos from "@/components/SVGPaginaProjetos";
import Pesquisa from "@/components/Pesquisa";
import BarraSuperior from "@/components/BarraSuperior";


export default function Home() {

  return (
    <div className="bg-white w-screen h-screen">
      <SVGPaginaProjetos></SVGPaginaProjetos>
      <div className='fundo h-screen w-screen fixed z-[999] justify-center'>
        <Header setPrimary={(v => { setPrimary(v) })} setSecondary={(v => { setSecondary(v) })}></Header>
        <div className="w-screen flex justify-center">
          <BarraSuperior adicionar pesquisar titulo={"Meus Projetos"}></BarraSuperior>
          </div>
        <div className='flex items-center justify-center'>
          <div className="flex flex-col items-start justify-start gap-6 h-[680px]">
            <div className="overflow-y-scroll w-[1140px] flex-wrap flex max-h-[660px]">
              {projetos.map(projeto => {
                return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                  porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
