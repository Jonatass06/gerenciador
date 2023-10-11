
import projetos from "@/data/projetos";
import Header from "../components/Header";
import Projeto from "@/components/Projeto";
import SVGPaginaProjetos from "@/components/SVGPaginaProjetos";
import BarraSuperior from "@/components/BarraSuperior";


export default function Home() {

  return (
    <div className="bg-white w-screen h-screen">
      <SVGPaginaProjetos></SVGPaginaProjetos>
      <div className='fundo h-screen w-screen fixed z-[999] justify-center'>
        <Header setPrimary={(v => { setPrimary(v) })} setSecondary={(v => { setSecondary(v) })}></Header>
        <div className="w-screen flex justify-center">
          <BarraSuperior largura={1100} adicionar ordenar pesquisar titulo={"Meus Projetos"}></BarraSuperior>
          </div>
        <div className='flex items-center justify-center'>
          <div className="flex items-start justify-start h-[680px] overflow-y-scroll">
            <div >
              {projetos.map(projeto => {
                if(projetos.indexOf(projeto)%3==0){
                  return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                    porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
                }
              })}
            </div>
            <div>
              {projetos.map(projeto => {
                if((projetos.indexOf(projeto)-1)%3==0 ){
                  return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                  porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
                }
              })}
            </div>
            <div>
              {projetos.map(projeto => {
                if((projetos.indexOf(projeto)-2)%3 == 0){
                  return <Projeto nome={projeto.nome} descricao={projeto.descricao} grupos={projeto.grupos}
                  porcentagem={projeto.porcentagem} key={projetos.indexOf(projeto)}></Projeto>
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
