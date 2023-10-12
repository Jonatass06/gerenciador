export default function Fotos(props) {
    const estilo = " ml-[-15px] rounded-full w-8 h-8 bg-pink text-white overflow-clip flex shadow-sm shadow-zinc-600 items-center justify-center"

    return (
        <div className="flex relativ justify-end ml-[15px]">
            {

                props.fotos.map(foto => {
                    if (props.fotos.indexOf(foto) < props.max) {
                        if (foto.foto == "") {
                            return <div key={props.fotos.indexOf(foto)} className={estilo} title={foto.nome}></div>
                        }
                        return <div key={props.fotos.indexOf(foto)} className={estilo} title={foto.nome}><img src={foto.foto} className="w-max h-max" /></div>
                    }
                    if (props.fotos.indexOf(foto) == props.max) {
                        if (foto.foto == "") {
                            return <div key={props.fotos.length - 1} className={estilo} title="Mais"> + </div>
                        }
                        return <div key={props.fotos.length - 1} className={estilo} title="Mais"> + </div>
                    }
                })
            }
        </div>
    )
}