
export default function Grafico({ porcentagem }) {
    let transform = {
        transform: "rotate(-"+ (180-((porcentagem/100)*180))+"deg)"
    }
    return (
        <div className="relative flex justify-center h-[150px] w-full">
            <div className="flex justify-center w-full">
                <div className="w-min h-[77px] flex overflow-clip absolute">
                    <div className="w-[155px] h-[155px] border-[15px] rounded-full border-zinc-200 flex items-start p-6 justify-center ">{porcentagem}%</div>
                </div>
                <div className="h-[77px] overflow-x-clip overflow-y-clip absolute flex justify-center">
                    <div className="h-[155px] flex items-start justify-center" style={transform}>
                        <div className="h-[77px] overflow-x-clip overflow-y-clip flex justify-center ">
                            <div className="min-w-[155px] h-[155px] border-[15px] rounded-full border-pink-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}