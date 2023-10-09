export default function Grupos(props){
    return(
        <div className="flex relative h-24 w-full justify-center pt-8">

                {
                    props.grupos.length >4 ?
                        props.grupos.map(grupo => {
                            if(props.grupos.indexOf(grupo) == props.grupos.length - 1){
                                return <div key={props.grupos.length - 1} className=" ml-[-10px] rounded-full w-8 h-8 bg-pink-500 text-white flex shadow-sm shadow-zinc-600 items-center justify-center" > + </div>
                            }
                            if(props.grupos.indexOf(grupo) > 4){
                            } else{
                                return <div key={props.grupos.indexOf(grupo)} className=" ml-[-10px] rounded-full w-8 h-8 bg-pink-500  shadow-sm shadow-zinc-600 " title={grupo}></div>
                            }
                        }) :
                        props.grupos.map(grupo => {
                            return <div key={props.grupos.indexOf(grupo)} className=" ml-[-10px]  rounded-full w-8 h-8 bg-pink-500 shadow-sm shadow-zinc-600" title={grupo}></div>
                        })
                
                }
                </div>
    )
}